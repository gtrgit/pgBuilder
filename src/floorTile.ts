import resources from "./resources_2"
import { getParcel } from "@decentraland/ParcelIdentity"


/// --- Set up a system ---

//todo createa array of ModelData[] and filter on 1 element
// retun all != element


let parcelString:string[] = []
let parcelXInt:number = 0
let parcelYInt:number = 0
let baseXInt:number = 0
let baseYInt:number = 0

export const menuData:menuItemData[] = []

export type menuItemData = {
  srcName:string
  modelUUid:string
}


export const parcelData:parcelItemData[] = []


export type parcelItemData = {
    parcelXInt:number
    parcelYInt:number
    baseXInt:number
    baseYInt:number
  }

// TODO make array on resources_2
// itterate throught the lists of resources

export function loadFloorTiles() {

executeTask(async () => {
  const parcel = await getParcel()

  // parcels
  log("parcels: ", parcel.land.sceneJsonData.scene.parcels)
  log("base parcel: ", parcel.land.sceneJsonData.scene.base)

    //convert xy string to int
    parcelString = parcel.land.sceneJsonData.scene.parcels
    let commaIndex = parcel.land.sceneJsonData.scene.base.indexOf(',')
    let baseXStr = parcel.land.sceneJsonData.scene.base.slice(0,commaIndex)
    let baseYStr = parcel.land.sceneJsonData.scene.base.slice(commaIndex+1)
    baseXInt = parseInt(baseXStr)
    baseYInt = parseInt(baseYStr)
    

    parcelString.forEach(item => {
      
            let commaIndex = item.indexOf(',')
            let parcelXStr = item.slice(0,commaIndex)
            let parcelYStr = item.slice(commaIndex+1)
            parcelXInt = parseInt(parcelXStr)
            parcelYInt = parseInt(parcelYStr)
        
            let pd:parcelItemData = {parcelXInt,parcelYInt,baseXInt,baseYInt}
            parcelData.push(pd)
    })

    //Place down a blankFloor for each parcel
    parcelData.forEach(item => {
        

        let xDiff: number = item.parcelXInt - item.baseXInt
        let yDiff: number = item.parcelYInt - item.baseYInt
        
        let xOffset: number = xDiff * 16
        let yOffset: number = yDiff * 16
        let floorX: number = xOffset + 8
        let floorY: number = yOffset + 8

        let newFloor = new Entity()
        let floorModel = resources.models.blankFloor
        let newTrans = new Transform({
            position: new Vector3(floorX,0,floorY)
        })
        newFloor.addComponent(floorModel)
        newFloor.addComponent(newTrans)
        engine.addEntity(newFloor)
        //debugger
    })


 log('lastY '+parcelYInt)

  // spawn points
  log("spawnpoints: ", parcel.land.sceneJsonData.spawnPoints)

  // general scene data
  log("title: ", parcel.land.sceneJsonData.display?.title)
  log("author: ", parcel.land.sceneJsonData.contact?.name)
  log("email: ", parcel.land.sceneJsonData.contact?.email)

  // other info
  log("tags: ", parcel.land.sceneJsonData.tags)
})

}



// export function menuSelect() {


// //hide non selected menu items

// let modelArr:GLTFShape[] = [
//    //resources.models.blankFloor,
//    // resources.models.builderMenu,
//     resources.models.selected_market,
//     resources.models.marketBnt_collider,
//     resources.models.selected_build,
//     resources.models.selected_rent,
//     resources.models.selected_map,
//     //resources.models.landRentalOptions
// ]


// modelArr.forEach(newModel => {
//     let newEntity = new Entity()
//     //let newModel = element
//     newEntity.addComponent(newModel)
//     let modelTransform = new Transform(
//         {
//             position: new Vector3(8,0,8)
//         }
//     )
//     newEntity.addComponent(modelTransform)
//     newEntity.addComponent(
//         new OnPointerDown(
//             (e) => {

//                 menuData.forEach(element => {log(element.modelUUid+' '+element.srcName)})
//                 log(newEntity.getComponent(GLTFShape).src)
//                 const market = menuData.filter(item => item.srcName != newEntity.getComponent(GLTFShape).src)
                
//                 market.forEach(element => {
                
//                     engine.entities[element.modelUUid].getComponent(GLTFShape).visible = false
//                     //debugger
//                 })
                
//             }
//         )
//     )
//     //log(newEntity.getComponent(GLTFShape).src)
//     engine.addEntity(newEntity)

//     let srcName = newEntity.getComponent(GLTFShape).src
//     let modelUUid = newEntity.uuid
//     let md:menuItemData = {srcName,modelUUid}
//     menuData.push(md)
// })



// }