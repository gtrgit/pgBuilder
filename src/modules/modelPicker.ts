//import { Manager, colors, Mode } from '../manager'
//import { BlockName, MODEL_SIZE, } from 'src/model'
import resources from 'src/resources_2'
//import { selectorUUID } from 'src/game'
//import { BuildingFoundation } from './buildingFoundation'
//import { uiActiveStatus } from './hud'
//import { SelectedBlockName } from './baseGrid' //selectorId
import { SelectedBlockUUID, selectorUUID } from './selector'
//import resources from 'src/resources'
//import { ModelEnt } from 'src/modelEntity'
//import { modelArray, ModelManager } from 'src/modelManager'
import {  AnchorComponent } from '../anchorPoint'
  import { LandUiComponent } from './landUI'
import {baseGrid, landUIID } from './baseGrid'

const MODEL_SIZE = 1


// Picker
export const picker = new Entity()
export let blockId : string
//need to swap plane for select model
picker.addComponent(new PlaneShape())
//picker.addComponent(resources.models.r1c4)
picker.addComponent(
  new Transform({
    position: new Vector3(0, 0, 0),
    scale: new Vector3(MODEL_SIZE*2, MODEL_SIZE*2, MODEL_SIZE*2),
  })
)

// const addMaterial = new BasicMaterial()
export const addMaterial = new Material()

let currentTexture = resources.images.addImage

// addMaterial.albedoTexture = addTexture 
addMaterial.alphaTexture = currentTexture
addMaterial.castShadows = false
addMaterial.emissiveIntensity = 5
addMaterial.transparencyMode = 4



export function changeMaterial(material:Texture, colour:Color3){
  addMaterial.emissiveColor = colour
  addMaterial.alphaTexture = material
}



picker.addComponent(addMaterial)

picker.getComponent(PlaneShape).withCollisions = false
picker.getComponent(Transform).scale.setAll(0)

picker.setParent(baseGrid)
engine.addEntity(picker)



// // Material
// export const pickerMaterial = new Material()
// pickerMaterial.albedoColor = colors[Manager.colorIndex]
// pickerMaterial.roughness = 1.0
// picker.addComponent(pickerMaterial)

export let pickedModelID: string

let menuSelected: string = ''

let childId: string 
let parentID: any
let marketId: string
let buildId: string
let rentId: string
let mapId: string
let rentSelectorId: string 
let landRentalId: string
let mapDCLBgId: string = ''
let mapAetheriaBgId: string = ''
let firstPickedID: string
let prevVoxelId: string
let parcel1x1Id: string = ''
let parcel2x1Id: string = ''
let parcel2x2Id: string = ''

// System that casts the rays to generate picker
export class ModelSystem implements ISystem {

  update(dt: number) {

    // Ray from camera
    const rayFromCamera: Ray = PhysicsCast.instance.getRayFromCamera(1000)

    // For the camera ray, we cast a hit all
    PhysicsCast.instance.hitFirst(rayFromCamera, (raycastHitEntity) => {

      if (raycastHitEntity.didHit) {
    
        // Check entity exists i.e. not been deleted
        if (engine.entities[raycastHitEntity.entity.entityId]) {
        
          // log('meshname '+raycastHitEntity.entity.meshName)
    if (raycastHitEntity.entity.meshName != 'blankFloor_collider') { 
         
         if(raycastHitEntity.entity.meshName =='mapBtn_collider') {
         
          if(mapDCLBgId){

            if (raycastHitEntity.entity.entityId == mapDCLBgId) {
              let mapItemUid:string = engine.entities[mapDCLBgId].getParent()!.uuid
              let menuUid:string = engine.entities[mapItemUid].getParent()!.uuid
              let pUid:string = engine.entities[menuUid].getParent()!.uuid
              let parcelUid:string = engine.entities[pUid].getParent()!.uuid
              let parcelPos = engine.entities[parcelUid].getComponent(Transform).position
              let btnPos = engine.entities[raycastHitEntity.entity.entityId].getComponent(Transform).position

               let menuSelectorId = engine.entities[pUid].getComponent(LandUiComponent).menuSelectorID 
         
               engine.entities[menuSelectorId].getComponent(Transform).position = btnPos//aggPos
            }
          }
            
            if(mapAetheriaBgId){
              if (raycastHitEntity.entity.entityId == mapAetheriaBgId) {
              
                let mapItemUid:string = engine.entities[mapAetheriaBgId].getParent()!.uuid
                let menuUid:string = engine.entities[mapItemUid].getParent()!.uuid
                let pUid:string = engine.entities[menuUid].getParent()!.uuid
                let parcelUid:string = engine.entities[pUid].getParent()!.uuid
                let btnPos = engine.entities[raycastHitEntity.entity.entityId].getComponent(Transform).position

                 let menuSelectorId = engine.entities[pUid].getComponent(LandUiComponent).menuSelectorID 
             
                 engine.entities[menuSelectorId].getComponent(Transform).position = btnPos//aggPos
              }
          }
        }

         //MENU 
          if (raycastHitEntity.entity.meshName == 'marketBtn_collider') {
            menuSelected = ''
            let menuBackGroundUid:string =  engine.entities[raycastHitEntity.entity.entityId].getParent()!.uuid
            let uiUid:string = engine.entities[menuBackGroundUid].getParent()!.uuid
            let parcelPos = engine.entities[uiUid].getComponent(Transform).position
            let btnPos = engine.entities[raycastHitEntity.entity.entityId].getComponent(Transform).position
      
            let aggPos:Vector3 = Vector3.Add(parcelPos,btnPos)

            let menuSelectorId = engine.entities[uiUid].getComponent(LandUiComponent).menuSelectorID

            let rentContainerID = engine.entities[uiUid].getComponent(LandUiComponent).rentContainerID
            engine.entities[rentContainerID].getComponent(Transform).scale.setAll(0)
           
            let mapUiContainerId = engine.entities[uiUid].getComponent(LandUiComponent).mapUiContainerId
            engine.entities[mapUiContainerId].getComponent(Transform).scale.setAll(0)
           
           
            engine.entities[menuSelectorId].getComponent(Transform).position = aggPos
            
          } 

          
          if (raycastHitEntity.entity.meshName == 'buildBtn_collider') {
            menuSelected = ''
              
            let menuBackGroundUid:string =  engine.entities[raycastHitEntity.entity.entityId].getParent()!.uuid
            let uiUid:string = engine.entities[menuBackGroundUid].getParent()!.uuid
            let parcelPos = engine.entities[uiUid].getComponent(Transform).position
          
            let btnPos = engine.entities[raycastHitEntity.entity.entityId].getComponent(Transform).position
      
            let aggPos:Vector3 = Vector3.Add(parcelPos,btnPos)

            let rentContainerID = engine.entities[uiUid].getComponent(LandUiComponent).rentContainerID
            engine.entities[rentContainerID].getComponent(Transform).scale.setAll(0)
           
            let mapUiContainerId = engine.entities[uiUid].getComponent(LandUiComponent).mapUiContainerId
            engine.entities[mapUiContainerId].getComponent(Transform).scale.setAll(0)
           

            let menuSelectorId = engine.entities[uiUid].getComponent(LandUiComponent).menuSelectorID 
            
            engine.entities[menuSelectorId].getComponent(Transform).position = aggPos
          } 

          if (raycastHitEntity.entity.meshName == 'rentBtn_Collider') {
            menuSelected = 'rent'
           
            let menuBackGroundUid:string =  engine.entities[raycastHitEntity.entity.entityId].getParent()!.uuid
            let uiUid:string = engine.entities[menuBackGroundUid].getParent()!.uuid
            let parcelPos = engine.entities[uiUid].getComponent(Transform).position
            let btnPos = engine.entities[raycastHitEntity.entity.entityId].getComponent(Transform).position
      
            let aggPos:Vector3 = Vector3.Add(parcelPos,btnPos)

            let menuSelectorId = engine.entities[uiUid].getComponent(LandUiComponent).menuSelectorID 
          
            let rentContainerID = engine.entities[uiUid].getComponent(LandUiComponent).rentContainerID
            engine.entities[rentContainerID].getComponent(Transform).scale.setAll(1)
    
            let mapUiContainerId = engine.entities[uiUid].getComponent(LandUiComponent).mapUiContainerId
            engine.entities[mapUiContainerId].getComponent(Transform).scale.setAll(0)
           
             engine.entities[menuSelectorId].getComponent(Transform).position = aggPos
       
          } 

          if (raycastHitEntity.entity.meshName == 'mapBtn_collider') {
            menuSelected = ''
           
            let menuBackGroundUid:string =  engine.entities[raycastHitEntity.entity.entityId].getParent()!.uuid
            let uiUid:string = engine.entities[menuBackGroundUid].getParent()!.uuid
            let parcelPos = engine.entities[uiUid].getComponent(Transform).position
            let btnPos = engine.entities[raycastHitEntity.entity.entityId].getComponent(Transform).position
      
            let aggPos:Vector3 = Vector3.Add(parcelPos,btnPos)

            let menuSelectorId = engine.entities[uiUid].getComponent(LandUiComponent).menuSelectorID 
          
            let rentContainerID = engine.entities[uiUid].getComponent(LandUiComponent).rentContainerID
            engine.entities[rentContainerID].getComponent(Transform).scale.setAll(0)
           
            let mapUiContainerId = engine.entities[uiUid].getComponent(LandUiComponent).mapUiContainerId
            engine.entities[mapUiContainerId].getComponent(Transform).scale.setAll(1)

            mapDCLBgId = engine.entities[uiUid].getComponent(LandUiComponent).mapDCLbgID
            mapAetheriaBgId = engine.entities[uiUid].getComponent(LandUiComponent).mapUIAetheriaId

            engine.entities[menuSelectorId].getComponent(Transform).position = aggPos

          } 


      //Rental Options
      if (menuSelected == 'rent') {
        
                        if (raycastHitEntity.entity.meshName == '1x1_Collider') {
                        
                            // log('1x1')
                            
                            let menuBackGroundUid:string =  engine.entities[raycastHitEntity.entity.entityId].getParent()!.uuid
                            let uiUid:string = engine.entities[menuBackGroundUid].getParent()!.uuid
                            let uiParent:string = engine.entities[uiUid].getParent()!.uuid
                            // log('menu pos'+engine.entities[uiParent].getComponent(Transform).position)

                            let btnPos = engine.entities[raycastHitEntity.entity.entityId].getComponent(Transform).position
                            rentSelectorId = engine.entities[uiParent].getComponent(LandUiComponent).rentSelectorID 
                            
                            //set 1x1 = 1
                            parcel1x1Id = engine.entities[uiParent].getComponent(LandUiComponent).parcel1x1Id
                            engine.entities[parcel1x1Id].getComponent(Transform).scale.setAll(1)
                            //set 2x1 = 0
                            parcel2x1Id = engine.entities[uiParent].getComponent(LandUiComponent).parcel2x1Id
                            engine.entities[parcel2x1Id].getComponent(Transform).scale.setAll(0)
                            //set 2x2 = 0
                            parcel2x2Id = engine.entities[uiParent].getComponent(LandUiComponent).parcel2x2Id
                            engine.entities[parcel2x2Id].getComponent(Transform).scale.setAll(0)

                            engine.entities[rentSelectorId].getComponent(Transform).position = btnPos
                        // debugger

                          // let paId = engine.entities[uiParent].getComponent(LandUiComponent).parcelAnimationId
                          // engine.entities[paId].getComponent(Transform).position= engine.entities[uiParent].getComponent(Transform).position
                         
                          } 

                      //Rental Options
                      if (raycastHitEntity.entity.meshName == '2x1_west_Collider') {
                     
                        let menuBackGroundUid:string =  engine.entities[raycastHitEntity.entity.entityId].getParent()!.uuid
                        let uiUid:string = engine.entities[menuBackGroundUid].getParent()!.uuid
                        let uiParent:string = engine.entities[uiUid].getParent()!.uuid

                        let btnPos = engine.entities[raycastHitEntity.entity.entityId].getComponent(Transform).position
                        let rentSelectorId = engine.entities[uiParent].getComponent(LandUiComponent).rentSelectorID 

                        //set 1x1 = 1
                        parcel1x1Id = engine.entities[uiParent].getComponent(LandUiComponent).parcel1x1Id
                        engine.entities[parcel1x1Id].getComponent(Transform).scale.setAll(0)
                        //set 2x1 = 0
                        parcel2x1Id = engine.entities[uiParent].getComponent(LandUiComponent).parcel2x1Id
                        engine.entities[parcel2x1Id].getComponent(Transform).scale.setAll(1)
                        //set 2x2 = 0
                        parcel2x2Id = engine.entities[uiParent].getComponent(LandUiComponent).parcel2x2Id
                        engine.entities[parcel2x2Id].getComponent(Transform).scale.setAll(0)



                        engine.entities[rentSelectorId].getComponent(Transform).position = btnPos

                        // let paId = engine.entities[uiParent].getComponent(LandUiComponent).parcelAnimationId
                        // engine.entities[paId].getComponent(Transform).position= engine.entities[uiParent].getComponent(Transform).position
                       
                      } 
                    
                    //Rental Options
                    if (raycastHitEntity.entity.meshName == '2x1_north_Collider') {
                                    
                        let menuBackGroundUid:string =  engine.entities[raycastHitEntity.entity.entityId].getParent()!.uuid
                        let uiUid:string = engine.entities[menuBackGroundUid].getParent()!.uuid
                        let uiParent:string = engine.entities[uiUid].getParent()!.uuid
                        
                        let btnPos = engine.entities[raycastHitEntity.entity.entityId].getComponent(Transform).position
                        rentSelectorId = engine.entities[uiParent].getComponent(LandUiComponent).rentSelectorID 

                        //set 1x1 = 1
                        parcel1x1Id = engine.entities[uiParent].getComponent(LandUiComponent).parcel1x1Id
                        engine.entities[parcel1x1Id].getComponent(Transform).scale.setAll(0)
                        //set 2x1 = 0
                        parcel2x1Id = engine.entities[uiParent].getComponent(LandUiComponent).parcel2x1Id
                        engine.entities[parcel2x1Id].getComponent(Transform).scale.setAll(1)
                        //set 2x2 = 0
                        parcel2x2Id = engine.entities[uiParent].getComponent(LandUiComponent).parcel2x2Id
                        engine.entities[parcel2x2Id].getComponent(Transform).scale.setAll(0)

                        engine.entities[rentSelectorId].getComponent(Transform).position = btnPos

                        // let paId = engine.entities[uiParent].getComponent(LandUiComponent).parcelAnimationId
                        // engine.entities[paId].getComponent(Transform).position= engine.entities[uiParent].getComponent(Transform).position
                       
                      }

                      if (raycastHitEntity.entity.meshName == '2x1_east_Collider') {

                        let menuBackGroundUid:string =  engine.entities[raycastHitEntity.entity.entityId].getParent()!.uuid
                        let uiUid:string = engine.entities[menuBackGroundUid].getParent()!.uuid
                        let uiParent:string = engine.entities[uiUid].getParent()!.uuid

                        let btnPos = engine.entities[raycastHitEntity.entity.entityId].getComponent(Transform).position
                        rentSelectorId = engine.entities[uiParent].getComponent(LandUiComponent).rentSelectorID 

                         //set 1x1 = 1
                         parcel1x1Id = engine.entities[uiParent].getComponent(LandUiComponent).parcel1x1Id
                         engine.entities[parcel1x1Id].getComponent(Transform).scale.setAll(0)
                         //set 2x1 = 0
                         parcel2x1Id = engine.entities[uiParent].getComponent(LandUiComponent).parcel2x1Id
                         engine.entities[parcel2x1Id].getComponent(Transform).scale.setAll(1)
                         //set 2x2 = 0
                         parcel2x2Id = engine.entities[uiParent].getComponent(LandUiComponent).parcel2x2Id
                         engine.entities[parcel2x2Id].getComponent(Transform).scale.setAll(0)
 
                        engine.entities[rentSelectorId].getComponent(Transform).position = btnPos

                        // let paId = engine.entities[uiParent].getComponent(LandUiComponent).parcelAnimationId
                        // engine.entities[paId].getComponent(Transform).position= engine.entities[uiParent].getComponent(Transform).position
                        // log('2x1  pos'+engine.entities[uiParent].getComponent(Transform).position)
                    }

                  if (raycastHitEntity.entity.meshName == '2x1_south_Collider') { //south
                    let menuBackGroundUid:string =  engine.entities[raycastHitEntity.entity.entityId].getParent()!.uuid
                    let uiUid:string = engine.entities[menuBackGroundUid].getParent()!.uuid
                    let uiParent:string = engine.entities[uiUid].getParent()!.uuid

                    let btnPos = engine.entities[raycastHitEntity.entity.entityId].getComponent(Transform).position
                    rentSelectorId = engine.entities[uiParent].getComponent(LandUiComponent).rentSelectorID 

                     //set 1x1 = 1
                     parcel1x1Id = engine.entities[uiParent].getComponent(LandUiComponent).parcel1x1Id
                     engine.entities[parcel1x1Id].getComponent(Transform).scale.setAll(0)
                     //set 2x1 = 0
                     parcel2x1Id = engine.entities[uiParent].getComponent(LandUiComponent).parcel2x1Id
                     engine.entities[parcel2x1Id].getComponent(Transform).scale.setAll(1)
                     //set 2x2 = 0
                     parcel2x2Id = engine.entities[uiParent].getComponent(LandUiComponent).parcel2x2Id
                     engine.entities[parcel2x2Id].getComponent(Transform).scale.setAll(0)


                    engine.entities[rentSelectorId].getComponent(Transform).position = btnPos

                    // let paId = engine.entities[uiParent].getComponent(LandUiComponent).parcelAnimationId
                    // engine.entities[paId].getComponent(Transform).position= engine.entities[uiParent].getComponent(Transform).position
                   
                  }


                  if (raycastHitEntity.entity.meshName == '2x2_NW_Collider') { //south
                    let menuBackGroundUid:string =  engine.entities[raycastHitEntity.entity.entityId].getParent()!.uuid
                    let uiUid:string = engine.entities[menuBackGroundUid].getParent()!.uuid
                    let uiParent:string = engine.entities[uiUid].getParent()!.uuid

                    let btnPos = engine.entities[raycastHitEntity.entity.entityId].getComponent(Transform).position
                        rentSelectorId = engine.entities[uiParent].getComponent(LandUiComponent).rentSelectorID 

                        //set 1x1 = 1
                        parcel1x1Id = engine.entities[uiParent].getComponent(LandUiComponent).parcel1x1Id
                        engine.entities[parcel1x1Id].getComponent(Transform).scale.setAll(0)
                        //set 2x1 = 0
                        parcel2x1Id = engine.entities[uiParent].getComponent(LandUiComponent).parcel2x1Id
                        engine.entities[parcel2x1Id].getComponent(Transform).scale.setAll(0)
                        //set 2x2 = 0
                        parcel2x2Id = engine.entities[uiParent].getComponent(LandUiComponent).parcel2x2Id
                        engine.entities[parcel2x2Id].getComponent(Transform).scale.setAll(0)

                        engine.entities[parcel2x2Id].getComponent(Transform).rotation = Quaternion.Euler(0,90,0)
                        engine.entities[parcel2x2Id].getComponent(Transform).scale.setAll(1)

                        engine.entities[rentSelectorId].getComponent(Transform).position = btnPos

                        // let paId = engine.entities[uiParent].getComponent(LandUiComponent).parcelAnimationId
                        // engine.entities[paId].getComponent(Transform).position= engine.entities[uiParent].getComponent(Transform).position
                       
                }
                

                if (raycastHitEntity.entity.meshName == '2x2_NE_Collider') { //south
                  let menuBackGroundUid:string =  engine.entities[raycastHitEntity.entity.entityId].getParent()!.uuid
                  let uiUid:string = engine.entities[menuBackGroundUid].getParent()!.uuid
                  let uiParent:string = engine.entities[uiUid].getParent()!.uuid

                        let btnPos = engine.entities[raycastHitEntity.entity.entityId].getComponent(Transform).position
                        let rentSelectorId = engine.entities[uiParent].getComponent(LandUiComponent).rentSelectorID 

                        //set 1x1 = 1
                        parcel1x1Id = engine.entities[uiParent].getComponent(LandUiComponent).parcel1x1Id
                        engine.entities[parcel1x1Id].getComponent(Transform).scale.setAll(0)
                        //set 2x1 = 0
                        parcel2x1Id = engine.entities[uiParent].getComponent(LandUiComponent).parcel2x1Id
                        engine.entities[parcel2x1Id].getComponent(Transform).scale.setAll(0)
                        //set 2x2 = 0
                        parcel2x2Id = engine.entities[uiParent].getComponent(LandUiComponent).parcel2x2Id
                        engine.entities[parcel2x2Id].getComponent(Transform).scale.setAll(0)
                        engine.entities[parcel2x2Id].getComponent(Transform).rotation = Quaternion.Euler(0,0,0)
                        engine.entities[parcel2x2Id].getComponent(Transform).scale.setAll(1)

                        engine.entities[rentSelectorId].getComponent(Transform).position = btnPos

                        // let paId = engine.entities[uiParent].getComponent(LandUiComponent).parcelAnimationId
                        // engine.entities[paId].getComponent(Transform).position= engine.entities[uiParent].getComponent(Transform).position
                       
                }

                    
                    if (raycastHitEntity.entity.meshName == '2x2_SE_Collider') { //south
                      let menuBackGroundUid:string =  engine.entities[raycastHitEntity.entity.entityId].getParent()!.uuid
                      let uiUid:string = engine.entities[menuBackGroundUid].getParent()!.uuid
                      let uiParent:string = engine.entities[uiUid].getParent()!.uuid

                      let btnPos = engine.entities[raycastHitEntity.entity.entityId].getComponent(Transform).position
                        let rentSelectorId = engine.entities[uiParent].getComponent(LandUiComponent).rentSelectorID 

                        //set 1x1 = 1
                        parcel1x1Id = engine.entities[uiParent].getComponent(LandUiComponent).parcel1x1Id
                        engine.entities[parcel1x1Id].getComponent(Transform).scale.setAll(0)
                        //set 2x1 = 0
                        parcel2x1Id = engine.entities[uiParent].getComponent(LandUiComponent).parcel2x1Id
                        engine.entities[parcel2x1Id].getComponent(Transform).scale.setAll(0)
                        //set 2x2 = 0
                        parcel2x2Id = engine.entities[uiParent].getComponent(LandUiComponent).parcel2x2Id
                        engine.entities[parcel2x2Id].getComponent(Transform).scale.setAll(0)
                        engine.entities[parcel2x2Id].getComponent(Transform).rotation = Quaternion.Euler(0,180,0)
                        engine.entities[parcel2x2Id].getComponent(Transform).scale.setAll(1)

                        engine.entities[rentSelectorId].getComponent(Transform).position = btnPos

                        // let paId = engine.entities[uiParent].getComponent(LandUiComponent).parcelAnimationId
                        // engine.entities[paId].getComponent(Transform).position= engine.entities[uiParent].getComponent(Transform).position
                       
                  }

                  if (raycastHitEntity.entity.meshName == '2x2_SW_Collider') { //south
                    let menuBackGroundUid:string =  engine.entities[raycastHitEntity.entity.entityId].getParent()!.uuid
                    let uiUid:string = engine.entities[menuBackGroundUid].getParent()!.uuid
                    let uiParent:string = engine.entities[uiUid].getParent()!.uuid

                    let btnPos = engine.entities[raycastHitEntity.entity.entityId].getComponent(Transform).position
                        let rentSelectorId = engine.entities[uiParent].getComponent(LandUiComponent).rentSelectorID 

                        //set 1x1 = 1
                        parcel1x1Id = engine.entities[uiParent].getComponent(LandUiComponent).parcel1x1Id
                        engine.entities[parcel1x1Id].getComponent(Transform).scale.setAll(0)
                        //set 2x1 = 0
                        parcel2x1Id = engine.entities[uiParent].getComponent(LandUiComponent).parcel2x1Id
                        engine.entities[parcel2x1Id].getComponent(Transform).scale.setAll(0)
                        //set 2x2 = 0
                        parcel2x2Id = engine.entities[uiParent].getComponent(LandUiComponent).parcel2x2Id
                        engine.entities[parcel2x2Id].getComponent(Transform).scale.setAll(0)
                        engine.entities[parcel2x2Id].getComponent(Transform).rotation = Quaternion.Euler(0,270,0)
                        engine.entities[parcel2x2Id].getComponent(Transform).scale.setAll(1)

                        engine.entities[rentSelectorId].getComponent(Transform).position = btnPos

                        // let paId = engine.entities[uiParent].getComponent(LandUiComponent).parcelAnimationId
                        // engine.entities[paId].getComponent(Transform).position= engine.entities[uiParent].getComponent(Transform).position
                       
                }


        } //Rent
      }
      
          //TODO on ray hit 16mFloor_collider move the menu to that xy loc

          //if not the base
          if (raycastHitEntity.entity.meshName == 'blankFloor_collider') { 
            // log('land ui uuid '+landUIID)
            
            let floorEnt: string= raycastHitEntity.entity.entityId
            
            // landUi.getComponent(Transform).position = engine.entities[floorEnt].getComponent(Transform).position
            if (engine.entities[landUIID]) {
             //let landUiModelId = engine.entities[landUIID].getComponent(LandUiComponent).landMenuId
            engine.entities[landUIID].getComponent(Transform).position = engine.entities[floorEnt].getComponent(Transform).position
            
// log('land pos '+ engine.entities[landUIID].getComponent(Transform).position )
          }
          
          }
          


       

            if (raycastHitEntity.entity.meshName != 'base_collider') {

             
              //let parentPos = engine.entities[raycastHitEntity.entity.entityId].getParent()!.uuid
              // log('base_collider')
             
                     

                      if (raycastHitEntity.entity.meshName != 'Cube_collider') {
                        // log('Cube_collider')
                      if (raycastHitEntity.entity.meshName != 'anchor_collider') {
                            // log('anchor_collider')
                                if (engine.entities[selectorUUID].uuid != raycastHitEntity.entity.entityId){
                                  
                                 
                                  if (raycastHitEntity.entity.meshName != 'blankFloor_collider') {

                                  pickedModelID = raycastHitEntity.entity.entityId

                                  
                                            if (engine.entities[pickedModelID]){
                                              // log(engine.entities[pickedModelID].getComponent(Entity).name)
                                              engine.entities[selectorUUID].getComponent(Transform).scale.setAll(1.05)
                              
                                              engine.entities[selectorUUID].getComponent(Transform).position = engine.entities[pickedModelID].getComponent(Transform).position
                                            }
                                          }
                                  }
                                }
                              }

                                          if (engine.entities[pickedModelID]){
                    
                                            // log('pickedModelID '+ pickedModelID+'   '+raycastHitEntity.entity.meshName)
                                            engine.entities[selectorUUID].getComponent(SelectedBlockUUID).selectedBlockUUID = pickedModelID
                                
                                           pickerFace(engine.entities[pickedModelID], raycastHitEntity)  
                                          }

                          
                    
        
            } else {
              // log('pickerBase')
             pickerBase(raycastHitEntity)

             

            } 
         //16mFloor_collider

        
      }
      } else {
                  if (childId) {
                    //log('childPlane '+childId)
                    engine.entities[marketId].getComponent(GLTFShape).visible = false
                    engine.entities[buildId].getComponent(GLTFShape).visible = false
                    childId = ''
                  }
                  //Hide Picker
                  picker.getComponent(Transform).scale.setAll(0)
              }
      
    }) //phsyics cast

    
  } // update dt

  
  
 } //ModelSystem iSystems

// Adds systems to the engine
engine.addSystem(new ModelSystem())

let fixedRayEntity = new Entity()
fixedRayEntity.addComponent(
  new Transform({
    position: new Vector3(0, 0, 0),
  })
)
engine.addEntity(fixedRayEntity)

// Snaps the picker plane to discrete points on or halfway between the grid lines
function pickerBase(raycastHitEntity: RaycastHitEntity) {
  picker.getComponent(Transform).rotation = Quaternion.Euler(90, 0, 0)

  let basePos = engine.entities[raycastHitEntity.entity.entityId].getComponent(Transform).position

  let x: number = Math.round(raycastHitEntity.hitPoint.x * 8) / 8 - basePos.x
  let z: number = Math.round(raycastHitEntity.hitPoint.z * 8) / 8 - basePos.z
  
  // // let x: number = Math.round(raycastHitEntity.hitPoint.x * 300) / 300
  // // let z: number = Math.round(raycastHitEntity.hitPoint.z * 300) / 300

  
  // let x: number = raycastHitEntity.hitPoint.x
  // let z: number = raycastHitEntity.hitPoint.z

  picker.getComponent(Transform).position.set(x, 0.4, z)  ///.4
  picker.getComponent(Transform).scale.setAll(MODEL_SIZE) //.0466
}


// Snaps the picker plane to discrete points on or halfway between the grid lines
function pickerMenu(entity: IEntity,raycastHitEntity: RaycastHitEntity) {
  let transform = entity.getComponent(Transform).position.clone()

  picker.getComponent(Transform).rotation = Quaternion.Euler(0, 90, 0)
  let x: number = raycastHitEntity.hitPoint.x  
  let y: number = raycastHitEntity.hitPoint.y  

  picker.getComponent(Transform).position.set(x, 1, y)
  picker.getComponent(Transform).scale.setAll(MODEL_SIZE)
}


function pickerFace(entity: IEntity, raycastHitEntity: RaycastHitEntity) {
  let transform = entity.getComponent(Transform).position.clone() // Clone position of the voxel
  
  picker.getComponent(Transform).position = transform // Set picker transform to match the voxel
  picker.getComponent(Transform).scale.setAll(MODEL_SIZE)
  let pickerRotation = picker.getComponent(Transform).rotation
  // log(raycastHitEntity.hitNormal)
  if (raycastHitEntity.hitNormal.x != 0) {
    

    pickerRotation = Quaternion.Euler(0, 90, 0)
    
    raycastHitEntity.hitNormal.x > 0  
      ? (picker.getComponent(Transform).position.x =
          transform.x + MODEL_SIZE + .1)//1.50) // Offset from voxel center with slight offset
      : (picker.getComponent(Transform).position.x =
          transform.x - MODEL_SIZE -.1)
  }
  if (raycastHitEntity.hitNormal.y != 0) {
    

    pickerRotation = Quaternion.Euler(90, 0, 0)
    raycastHitEntity.hitNormal.y > 0
      ? (picker.getComponent(Transform).position.y =
          transform.y + MODEL_SIZE+ .1)
      : (picker.getComponent(Transform).position.y =
          transform.y - MODEL_SIZE- .1)
  }
  if (raycastHitEntity.hitNormal.z != 0) {
 
    pickerRotation = Quaternion.Euler(0, 0, 90)
    raycastHitEntity.hitNormal.z > 0
      ? (picker.getComponent(Transform).position.z =
          transform.z + MODEL_SIZE+ .1)
      : (picker.getComponent(Transform).position.z =
          transform.z - MODEL_SIZE - .1)
  }
  //debugger
  picker.getComponent(Transform).rotation = pickerRotation
}