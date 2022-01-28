//import { Manager, colors, Mode } from '../manager'
//import { BlockName, MODEL_SIZE, } from 'src/model'
import resources from 'src/resources_2'
//import { selectorUUID } from 'src/game'
//import { BuildingFoundation } from './buildingFoundation'

//import { SelectedBlockName } from './baseGrid' //selectorId
import { SelectedBlockUUID, selectorUUID } from './selector'
//import resources from 'src/resources'
//import { ModelEnt } from 'src/modelEntity'
//import { modelArray, ModelManager } from 'src/modelManager'


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
const addMaterial = new BasicMaterial()
let addTexture = resources.images.addImage
addMaterial.texture = addTexture 
picker.addComponent(addMaterial)

picker.getComponent(PlaneShape).withCollisions = false
picker.getComponent(Transform).scale.setAll(0)
engine.addEntity(picker)



// // Material
// export const pickerMaterial = new Material()
// pickerMaterial.albedoColor = colors[Manager.colorIndex]
// pickerMaterial.roughness = 1.0
// picker.addComponent(pickerMaterial)

export let pickedModelID: string

let firstPickedID: string
let prevVoxelId: string
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
          
          //if not the base
          if (raycastHitEntity.entity.meshName != 'base_collider') {
            
            if (raycastHitEntity.entity.meshName != 'Cube_collider') {

            

            if (engine.entities[selectorUUID].uuid != raycastHitEntity.entity.entityId){
              
              pickedModelID = raycastHitEntity.entity.entityId
              log('pickedModelID ' + pickedModelID)
              if (engine.entities[pickedModelID]){
                  engine.entities[selectorUUID].getComponent(Transform).scale.setAll(1.05)
                  engine.entities[selectorUUID].getComponent(Transform).position = engine.entities[pickedModelID].getComponent(Transform).position
              }
            }

            //TODO Test if pickedModel has been deleted


            //   // //TODO add blockData to selector
            // if (engine.entities[pickedModelID].getComponent(Transform))
            // {
            //     if (engine.entities[pickedModelID].getComponent(Transform).scale){
            //       // engine.entities[selectorUUID].getComponent(Transform).scale.x = (engine.entities[pickedModelID].getComponent(Transform).scale.x * 1)
            //       // engine.entities[selectorUUID].getComponent(Transform).scale.y = (engine.entities[pickedModelID].getComponent(Transform).scale.y * 1)
            //       // engine.entities[selectorUUID].getComponent(Transform).scale.z = (engine.entities[pickedModelID].getComponent(Transform).scale.z * 1)
                  
            //       // TODO rotation need a modifier to account for incorrect rotation on new block
            //       // engine.entities[selectorUUID].getComponent(Transform).rotation.x = (engine.entities[pickedModelID].getComponent(Transform).rotation.x)
            //       // engine.entities[selectorUUID].getComponent(Transform).rotation.y = (engine.entities[pickedModelID].getComponent(Transform).rotation.y)
            //       // engine.entities[selectorUUID].getComponent(Transform).rotation.z = (engine.entities[pickedModelID].getComponent(Transform).rotation.z)
            //       // engine.entities[selectorUUID].getComponent(Transform).rotation.w = (engine.entities[pickedModelID].getComponent(Transform).rotation.w)
                
                
            //     }

            // }

            

          }

            // // let newBlockName = ('x' + engine.entities[selectorId].getComponent(Transform).position.x +
            // // 'y' + engine.entities[selectorId].getComponent(Transform).position.y +
            // // 'z' + engine.entities[selectorId].getComponent(Transform).position.z)

            if (engine.entities[pickedModelID]){
            engine.entities[selectorUUID].getComponent(SelectedBlockUUID).selectedBlockUUID = pickedModelID

            log('selector uuid updated to: '+engine.entities[selectorUUID].getComponent(SelectedBlockUUID).selectedBlockUUID)
            // log('selector UUID '+ selectorUUID+ ' pickedUUID '+ pickedModelID)
          
              pickerFace(engine.entities[pickedModelID], raycastHitEntity)  
          }
        
          } else {
            pickerBase(raycastHitEntity)
            //pickedModelID = "null"
          } 
        }
      } else {
        //Hide Picker
        picker.getComponent(Transform).scale.setAll(0)
        //pickedModelID = "null"

        //Hide Selector on start
      //  log('selector UUID '+ selectorUUID+ ' pickedUUID '+ pickedModelID)
      //  if (raycastHitEntity.entity.meshName = 'Cube_collider') {

      //         engine.entities[raycastHitEntity.entity.entityId].getComponent(Transform).scale.setAll(.5)
       
      //   }
      }

      if (prevVoxelId != pickedModelID){
        //log('preId'+prevVoxelId + ' --=--- '+ raycastHitEntity.entity.entityId )
             
      }
      //log(raycastHitEntity.entity.entityId)
    })

  }
 }

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
  let x: number = Math.round(raycastHitEntity.hitPoint.x * 8) / 8
  let z: number = Math.round(raycastHitEntity.hitPoint.z * 8) / 8
  picker.getComponent(Transform).position.set(x, 0.4, z)
  picker.getComponent(Transform).scale.setAll(MODEL_SIZE)
}

function pickerFace(entity: IEntity, raycastHitEntity: RaycastHitEntity) {
  let transform = entity.getComponent(Transform).position.clone() // Clone position of the voxel
  
  picker.getComponent(Transform).position = transform // Set picker transform to match the voxel
  picker.getComponent(Transform).scale.setAll(MODEL_SIZE)
  let pickerRotation = picker.getComponent(Transform).rotation
  if (raycastHitEntity.hitNormal.x != 0) {
    
    //log('side')
    pickerRotation = Quaternion.Euler(0, 90, 0)
    
    raycastHitEntity.hitNormal.x > 0  
      ? (picker.getComponent(Transform).position.x =
          transform.x + MODEL_SIZE + .1)//1.50) // Offset from voxel center with slight offset
      : (picker.getComponent(Transform).position.x =
          transform.x - MODEL_SIZE -.1)
  }
  if (raycastHitEntity.hitNormal.y != 0) {
    
    //log('top')
    pickerRotation = Quaternion.Euler(90, 0, 0)
    raycastHitEntity.hitNormal.y > 0
      ? (picker.getComponent(Transform).position.y =
          transform.y + MODEL_SIZE+ .1)
      : (picker.getComponent(Transform).position.y =
          transform.y - MODEL_SIZE- .1)
  }
  if (raycastHitEntity.hitNormal.z != 0) {
    //log('front')
    pickerRotation = Quaternion.Euler(0, 0, 90)
    raycastHitEntity.hitNormal.z > 0
      ? (picker.getComponent(Transform).position.z =
          transform.z + MODEL_SIZE+ .1)
      : (picker.getComponent(Transform).position.z =
          transform.z - MODEL_SIZE - .1)
  }
  picker.getComponent(Transform).rotation = pickerRotation
}