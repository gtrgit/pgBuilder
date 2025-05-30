import { Manager, Mode } from '../manager'
import { picker } from './modelPicker'
import resources from '../resources_2'
//import { Model3D, models, MODEL_SIZE, currentModelId, colourModels} from 'src/model'
import { ModelManager, modelArray } from 'src/modelManager'
//import { ModelEnt } from 'src/modelEntity'
// import { bodyId, faceId, borderId } from './hud'
import { modelNumber, bodyId, faceId, borderId } from "./../builderUI/uiMenu"

//import { BlockData } from './oldblockData'
import { BuildingFoundation } from './buildingFoundation'
import { BuildingBlocks, modelData } from './buildingBlock'
import { LandUI } from './../modules/landUI'

//import { BlockSelector } from './selector'

// @Component("blockComponentData")
// export class BlockComponentData {
//     blockArrayPos: number = 0
//     body_colour_id: number = 0
//     face_colour_id: number = 0
//     border_colour_id: number = 0
//     block_type: number = 0

// }

 const landUi = new LandUI()
 export const landUIID:string = landUi.uuid
 



// //TODO Make baseGridUUID component
// @Component("baseGridData")
// export class BaseGridData {
//     baseGridUUID: string = ''
// }

const MODEL_SIZE = 1

export const selectorMessageBus = new MessageBus()

                

// // Base grid
export const baseGrid = new Entity()
baseGrid.addComponent(resources.models.baseGrid)
baseGrid.addComponent(
    new Transform({
    position: new Vector3(16, 0, 16),
    scale: new Vector3(1,1,1)
  })
)

log('new bg id '+baseGrid.uuid)


function addBaseModel(x: number, y: number, z: number, 
                      rx: number,ry:number,rz:number,rw:number,
                      sx:number,sy:number,sz:number,
                      block_id:number,body_colour_id:number,face_colour_id:number,border_colour_id:number,block_type: number,parentId:string) {
             
                      Manager.playAddModelSound()

  //let modelId = ModelManager.modelIndex

  let modelArrayId:number = modelData.length
  let deleted:boolean = false


  const block = new BuildingBlocks(modelArrayId,deleted,x,y,z,rx,ry,rz,rw,sx,sy,sz,block_id,body_colour_id,face_colour_id,border_colour_id,block_type,parentId)
  //block.getComponent(BaseGridData).baseGridUUID = baseGrid.getComponent(BaseGridData).baseGridUUID
  block.setParent(baseGrid)
}
            

baseGrid.addComponent(
  new OnPointerDown(
    (e) => {
      if (Manager.activeMode == Mode.blockAdd) {

        let transform = picker.getComponent(Transform)
     
       
        addBaseModel(
          transform.position.x,
          // MODEL_SIZE / 2 + 0.7 + transform.position.y, // Offset voxel based on grid thickness (0.1m) and height 
          MODEL_SIZE  / 1 - transform.position.y, // Offset voxel based on grid thickness (0.1m) and height 
          transform.position.z,
          transform.rotation.x,
          transform.rotation.y+90,
          transform.rotation.z,
          transform.rotation.w,
          transform.scale.x,
          transform.scale.y,
          transform.scale.z,
          modelNumber,//ModelManager.modelIndex,
          bodyId,
          faceId,
          borderId,
          0,
          baseGrid.uuid
        ) 
      }
    },
    {
      button: ActionButton.POINTER,
      showFeedback: false,
    }
  )
)

//TODO add component baseGridUUID
//   // get uuid
//  baseGrid.addComponent(new BaseGridData())
//  baseGrid.getComponent(BaseGridData).baseGridUUID = baseGrid.uuid

//  log('baseGrid '+baseGrid.uuid)
 engine.addEntity(baseGrid)


export let selectorClicked:boolean
export let inputEvent:InputEventResult


// //TODO Move code to new selector.ts
// export const selector = new Entity()
// selector.addComponent(resources.models.selector)
// selector.addComponent(
//   new Transform({
//     position: new Vector3(1, 1, 1),
//     scale: new Vector3(1,1,1)
//   })
// )

//added a custom component that keeps the click object name
//selector.addComponent(new SelectedBlockName())

// selector.addComponent(   
//   new OnPointerDown(
//     (e) => {
     
//       log('rot  '+ selector.getComponent(Transform).rotation)
      
//       if (Manager.activeMode == Mode.blockAdd)   {
//         selectorClicked = true
//         selector.getComponent(GLTFShape).visible = true
//         selectorMessageBus.emit('editModel', {
//           modelArrayIndex: ModelManager.modelIndex,
//           colourArrayIndex: colourIndex,
//           position: selector.getComponent(Transform).position,//position,
//           rotation: selector.getComponent(Transform).rotation,
//           scale: selector.getComponent(Transform).scale,
//           normal: e.hit?.normal,//e.hit.normal,
//           model: ModelManager.modelIndex, //currentModelId,//thisModel.uuid, r1c2Id
//           mode: Manager.activeMode
//         })
//       }

//       //
//       if (Manager.activeMode == Mode.Subtract) {
       
//         let sbName = selector.getComponent(SelectedBlockName).selectedBlockName
        
//          engine.removeEntity(engine.entities[sbName])
//        }

//       //
//       if (Manager.activeMode == Mode.Yrotate) {
       
//         let sbName = selector.getComponent(SelectedBlockName).selectedBlockName
        
//          //engine.removeEntity(engine.entities[sbName])
//          engine.entities[sbName].getComponent(Transform).rotate(Vector3.Right(), 90)
//          //TODO Find out which is w x y z
//          //TODO using the
//          // objIndex = modelData.findIndex((obj => obj.modelId == sbName))
//          // modelData[objIndex].rw = 
//          //rx ry rz
//         }

       
//       if (Manager.activeMode == Mode.Xrotate) {
       
//         let sbName = selector.getComponent(SelectedBlockName).selectedBlockName
        
//          //engine.removeEntity(engine.entities[sbName])
//          engine.entities[sbName].getComponent(Transform).rotate(Vector3.Forward(), 90)
//        }

       
//       if (Manager.activeMode == Mode.Zrotate) {
       
//         let sbName = selector.getComponent(SelectedBlockName).selectedBlockName
        
//          //engine.removeEntity(engine.entities[sbName])
//          engine.entities[sbName].getComponent(Transform).rotate(Vector3.Up(), 90)
         
//        }

//     },
//     {
//       button: ActionButton.POINTER,
//       showFeedback: false,
//     }
//   )
// )

// //export let selectorId = selector.uuid 

// engine.addEntity(selector)




// //selector
// const selectorNoCol = new Entity()
// selectorNoCol.addComponent(resources.models.selectorNoCollider)
// selectorNoCol.addComponent(
//   new Transform({
//     position: new Vector3(3, 1, 1),
//     scale: new Vector3(1,1,1)
//   })
// )
// export let selectorNoColId = selectorNoCol.uuid
// engine.addEntity(selectorNoCol)

//building block models

// const r1c2 = new Entity()
// r1c2.addComponent(resources.models.r1c3)
// r1c2.addComponent(
//   new Transform({
//     position: new Vector3(2, 2, 1),
//     scale: new Vector3(.5,.5,.5)
//   })
// )


// export let r1c2Id = r1c2.uuid 

// engine.addEntity(r1c2)
