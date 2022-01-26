import resources_2 from "src/resources_2"
import { Manager, Mode } from "src/manager"
import { ModelManager } from "src/modelManager"
import { colourIndex } from "./hud"
import { BuildingBlocks, currentModelId, deletedFlag, modelData ,blockData, BlockComponentData} from "./buildingBlock"


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

const selectorEntity = new Entity()
const selectorShape:GLTFShape = resources_2.models.selector

const transform = new Transform(
    {
        position: new Vector3(8,2,8),
        scale: new Vector3(.1,.1,.1)

    }
)
selectorEntity.addComponent(selectorShape)
selectorEntity.addComponent(transform)
//selectorEntity.addComponent(new BlockType())
selectorEntity.addComponent(new SelectedBlockUUID())
engine.addEntity(selectorEntity)  


selectorEntity.addComponent(   
    new OnPointerDown(
      (e) => {
        
        //log(Manager.activeMode)
        log('rot  '+ selectorEntity.getComponent(Transform).rotation)
        log('pos  '+ selectorEntity.getComponent(Transform).position)
        log('scale  '+ selectorEntity.getComponent(Transform).scale)
        
        //
        
        if (Manager.activeMode == Mode.blockAdd)   {
           // log(selectorEntity.getComponent(Transform).position)
          //selectorEntityClicked = true
          selectorEntity.getComponent(GLTFShape).visible = true
          selectorMessageBus.emit('editModel', {
            modelArrayIndex: ModelManager.modelIndex,
            colourArrayIndex: colourIndex,
            position: selectorEntity.getComponent(Transform).position,//position,
            rotation: selectorEntity.getComponent(Transform).rotation,
            scale: new Vector3(1,1,1),//selectorEntity.getComponent(Transform).scale,
            normal: e.hit?.normal,//e.hit.normal,
            model: currentModelId,//thisModel.uuid, r1c2Id
            mode: Manager.activeMode
          })
        }
  
        
        if (Manager.activeMode == Mode.Subtract) {
         
          let sbName = selectorEntity.getComponent(SelectedBlockUUID).selectedBlockUUID
         

           //Update Array data
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
          let colour_id = element.colour_id

          let updateBlock:blockData = {blockArrayId,deleted,x,y,z,rx,ry,rz,rw,sx,sy,sz,block_id,colour_id}
          
          
          modelData.splice(arrayPos,1,updateBlock)

          //filter pos return blockData
          // splice blockData deleted = true

          engine.removeEntity(engine.entities[sbName])
         
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
           let colour_id = element.colour_id
 
           let updateBlock:blockData = {blockArrayId,deleted,x,y,z,rx,ry,rz,rw,sx,sy,sz,block_id,colour_id}
           
           
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
           let colour_id = element.colour_id
 
           let updateBlock:blockData = {blockArrayId,deleted,x,y,z,rx,ry,rz,rw,sx,sy,sz,block_id,colour_id}
           
           
           modelData.splice(arrayPos,1,updateBlock)



         }
  
         
        if (Manager.activeMode == Mode.Zrotate) {
          
      

          let sbName = selectorEntity.getComponent(SelectedBlockUUID).selectedBlockUUID
          

           //engine.removeEntity(engine.entities[sbName])
           engine.entities[sbName].getComponent(Transform).rotate(Vector3.Up(), 90)

            //Update Array data
            let arrayPos = engine.entities[sbName].getComponent(BlockComponentData).blockArrayPos
            log('array pos '+ arrayPos)
            let element = modelData[arrayPos]

            log(element)

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
            let colour_id = element.colour_id
  
            let updateBlock:blockData = {blockArrayId,deleted,x,y,z,rx,ry,rz,rw,sx,sy,sz,block_id,colour_id}
            
            
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

