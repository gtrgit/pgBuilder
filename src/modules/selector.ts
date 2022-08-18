import resources_2 from "src/resources_2"
import modelPath from "src/modelPath"
import { Manager, Mode } from "src/manager"
import { ModelManager } from "src/modelManager"
import { colourIndex, bodyId, faceId, borderId } from "./hud"
import { BuildingBlocks, currentModelId, deletedFlag, modelData ,blockData, BlockComponentData} from "./buildingBlock"
import { baseGrid } from "./baseGrid"

// @Component("blockType")
// export class BlockType {
//     blockType: string = 'selector'
// }


@Component("selectedBlockUUID")
export class SelectedBlockUUID {
  selectedBlockUUID: string = ''
}


export const selectorMessageBus = new MessageBus()

// type bt {
//     blockType: string = 'selector'
// }


//class does not work because the UUID is different than the created object

// export class BlockSelector extends Entity{
//  //   private static ent: Entity
// //    private static selectorShape: GLTFShape
// //    private static transform: Transform
    
// //Create blockSelector
// //engine.removeEntity(engine.entities[voxelName])

// constructor(
//  bt: string = 'selector'
// )  {
//     let selectorName:string = 'selector' 
//         super(selectorName)
        

    
//     }

// } 

export const selectorEntity = new Entity()
const selectorShape:GLTFShape = resources_2.models.selector

const transform = new Transform(
    {
        position: new Vector3(16,2,16),
        scale: new Vector3(.1,.1,.1)

    }
)

selectorEntity.addComponent(selectorShape)
selectorEntity.addComponent(transform)
//selectorEntity.addComponent(new BlockType())
selectorEntity.addComponent(new SelectedBlockUUID())

selectorEntity.setParent(baseGrid)

engine.addEntity(selectorEntity)  
//debugger


//new transform need to correct new blocks getting larger as the selector = .1 larger than a block but it is used
// determine the scale. new transform will subtract -.1 from the scale to ensure the blocks do not get larger.


selectorEntity.addComponent(   
    new OnPointerDown(
      (e) => {
        let reducedScale = new Transform({    
          scale: new Vector3(selectorEntity.getComponent(Transform).scale.x-.001,selectorEntity.getComponent(Transform).scale.y-.001,selectorEntity.getComponent(Transform).scale.z-.001)
        })
        log(reducedScale.scale)
        let selectedId =  selectorEntity.getComponent(SelectedBlockUUID).selectedBlockUUID
        log('baseGrid id '+baseGrid.uuid+ ' selectedID '+selectedId)
      


        if (Manager.activeMode == Mode.blockAdd)   {
  
          selectorEntity.getComponent(GLTFShape).visible = true
          selectorMessageBus.emit('editModel', {
            modelArrayIndex: ModelManager.modelIndex,
            colourArrayIndex: colourIndex,
            position: selectorEntity.getComponent(Transform).position,//position,
            rotation: selectorEntity.getComponent(Transform).rotation,
            scale: reducedScale.scale,//new Vector3(1,1,1),//selectorEntity.getComponent(Transform).scale,
            normal: e.hit?.normal,//e.hit.normal,
            model: selectorEntity.getComponent(SelectedBlockUUID).selectedBlockUUID,//thisModel.uuid, r1c2Id
            mode: Manager.activeMode,
            body_colour_id: bodyId,
            face_colour_id: faceId,
            border_colour_id: borderId,
            block_type: 0,
            parentId: baseGrid.uuid
          })
          

        }
       
      
        if (Manager.activeMode == Mode.Subtract) {

          let sbName = selectorEntity.getComponent(SelectedBlockUUID).selectedBlockUUID
          log(
            'sbName '+ sbName
          )
          if (engine.entities[sbName]){

          let arrayPos = engine.entities[sbName].getComponent(BlockComponentData).blockArrayPos
          
          let element = modelData[arrayPos]
         
          
          let blockArrayId = element.blockArrayId
          
          let deleted = true
          let x = element.x
          let y = element.y
          let z = element.z
          let rx = element.rx
          let ry = element.ry
          let rz = element.rz
          let rw = element.rw
          let sx = element.sx
          let sy =  element.sy
          let sz = element.sz
          let block_id = element.block_id
          let body_colour_id = bodyId //element.body_colour_id
          let face_colour_id = faceId //element.face_colour_id
          let border_colour_id = borderId //element.border_colour_id
          let block_type = element.block_type
          let parentId = baseGrid.uuid

          let updateBlock:blockData = {blockArrayId,deleted,x,y,z,rx,ry,rz,rw,sx,sy,sz,block_id,body_colour_id,face_colour_id,border_colour_id,block_type,parentId}
         
         // modelData.splice(arrayPos,1,updateBlock)
                  
                if (sbName){
                engine.removeEntity(engine.entities[sbName])
                } else {
                  log('No selectedBlockUUID for this block')
                }

          }
       

         }
  
        //
        if (Manager.activeMode == Mode.Yrotate) {
         
          let sbName = selectorEntity.getComponent(SelectedBlockUUID).selectedBlockUUID
          
          
           engine.entities[sbName].getComponent(Transform).rotate(Vector3.Right(), 90)
           
           
           //Update Array data
           let arrayPos = engine.entities[sbName].getComponent(BlockComponentData).blockArrayPos
           let element = modelData[arrayPos]
           
           let newRotation = engine.entities[sbName].getComponent(Transform).rotation

           let blockArrayId = element.blockArrayId
           let deleted = element.deleted
           let x = element.x
           let y = element.y
           let z = element.z
           let rx = newRotation.x
           let ry = newRotation.y
           let rz = newRotation.z
           let rw = newRotation.w
           let sx = element.sx
           let sy =  element.sy
           let sz = element.sz
           let block_id = element.block_id
           let body_colour_id = element.body_colour_id
           let face_colour_id = element.face_colour_id
           let border_colour_id = element.border_colour_id
           let block_type = element.block_type
           let parentId = element.parentId

 
           let updateBlock:blockData = {blockArrayId,deleted,x,y,z,rx,ry,rz,rw,sx,sy,sz,block_id,body_colour_id,face_colour_id,border_colour_id,block_type,parentId}
           
           
           modelData.splice(arrayPos,1,updateBlock)

          }
  
         
        if (Manager.activeMode == Mode.Xrotate) {
         
          let sbName = selectorEntity.getComponent(SelectedBlockUUID).selectedBlockUUID
          
           //engine.removeEntity(engine.entities[sbName])
           engine.entities[sbName].getComponent(Transform).rotate(Vector3.Forward(), 90)

           //Update Array data
           let arrayPos = engine.entities[sbName].getComponent(BlockComponentData).blockArrayPos
           let element = modelData[arrayPos]
           
           let newRotation = engine.entities[sbName].getComponent(Transform).rotation

           let blockArrayId = element.blockArrayId
           let deleted = element.deleted
           let x = element.x
           let y = element.y
           let z = element.z
           let rx = newRotation.x
           let ry = newRotation.y
           let rz = newRotation.z
           let rw = newRotation.w
           let sx = element.sx
           let sy =  element.sy
           let sz = element.sz
           let block_id = element.block_id
           let body_colour_id = element.body_colour_id
           let face_colour_id = element.face_colour_id
           let border_colour_id = element.border_colour_id
           let block_type = element.block_type
           let parentId = element.parentId

           let updateBlock:blockData = {blockArrayId,deleted,x,y,z,rx,ry,rz,rw,sx,sy,sz,block_id,body_colour_id,face_colour_id,border_colour_id,block_type,parentId}
           
           modelData.splice(arrayPos,1,updateBlock)

         }
  
         
        if (Manager.activeMode == Mode.Zrotate) {
          
      

          let sbName = selectorEntity.getComponent(SelectedBlockUUID).selectedBlockUUID
          log('z rotation uuid '+sbName)

           //engine.removeEntity(engine.entities[sbName])
           engine.entities[sbName].getComponent(Transform).rotate(Vector3.Up(), 90)

            //Update Array data
            let arrayPos = engine.entities[sbName].getComponent(BlockComponentData).blockArrayPos
            let element = modelData[arrayPos]

            let newRotation = engine.entities[sbName].getComponent(Transform).rotation

            let blockArrayId = element.blockArrayId
            let deleted = element.deleted
            let x = element.x
            let y = element.y
            let z = element.z
            let rx = newRotation.x
            let ry = newRotation.y
            let rz = newRotation.z
            let rw = newRotation.w
            let sx = element.sx
            let sy =  element.sy
            let sz = element.sz
            let block_id = element.block_id
            let body_colour_id = element.body_colour_id
            let face_colour_id = element.face_colour_id
            let border_colour_id = element.border_colour_id
            let block_type = element.block_type
            let parentId = element.parentId

            let updateBlock:blockData = {blockArrayId,deleted,x,y,z,rx,ry,rz,rw,sx,sy,sz,block_id,body_colour_id,face_colour_id,border_colour_id,block_type,parentId}
            
            
            modelData.splice(arrayPos,1,updateBlock)
           
           
         }
  
      },
      {
        button: ActionButton.POINTER,
        showFeedback: false,
      }
    )
  )
  

export let selectorUUID = selectorEntity.uuid

