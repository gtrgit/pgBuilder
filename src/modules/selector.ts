import resources_2 from "src/resources_2"
import { Manager, Mode } from "src/manager"
import { ModelManager } from "src/modelManager"
import { colourIndex } from "./hud"
import { currentModelId } from "./buildingBlock"

@Component("blockType")
export class BlockType {
    blockType: string = 'selector'
}


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
selectorEntity.addComponent(new BlockType())
selectorEntity.addComponent(new SelectedBlockUUID())
engine.addEntity(selectorEntity)  


selectorEntity.addComponent(   
    new OnPointerDown(
      (e) => {
        //log(Manager.activeMode)
        log('rot  '+ selectorEntity.getComponent(Transform).rotation)
        log('pos  '+ selectorEntity.getComponent(Transform).position)
        log('scale  '+ selectorEntity.getComponent(Transform).scale)
        
        
        if (Manager.activeMode == Mode.blockAdd)   {
           // log(selectorEntity.getComponent(Transform).position)
          //selectorEntityClicked = true
          selectorEntity.getComponent(GLTFShape).visible = true
          selectorMessageBus.emit('editModel', {
            modelArrayIndex: ModelManager.modelIndex,
            colourArrayIndex: colourIndex,
            position: selectorEntity.getComponent(Transform).position,//position,
            rotation: selectorEntity.getComponent(Transform).rotation,
            scale: selectorEntity.getComponent(Transform).scale,
            normal: e.hit?.normal,//e.hit.normal,
            model: currentModelId,//thisModel.uuid, r1c2Id
            mode: Manager.activeMode
          })
        }
  
        //
        if (Manager.activeMode == Mode.Subtract) {
         
          let sbName = selectorEntity.getComponent(SelectedBlockUUID).selectedBlockUUID
          
          engine.entities[sbName].deleted = true

           engine.removeEntity(engine.entities[sbName])
          log(engine.entities[sbName].deleted)
         }
  
        //
        if (Manager.activeMode == Mode.Yrotate) {
         
          let sbName = selectorEntity.getComponent(SelectedBlockUUID).selectedBlockUUID
          
           //engine.removeEntity(engine.entities[sbName])
           engine.entities[sbName].getComponent(Transform).rotate(Vector3.Right(), 90)
           //TODO Find out which is w x y z
           //TODO using the
           // objIndex = modelData.findIndex((obj => obj.modelId == sbName))
           // modelData[objIndex].rw = 
           //rx ry rz
          }
  
         
        if (Manager.activeMode == Mode.Xrotate) {
         
          let sbName = selectorEntity.getComponent(SelectedBlockUUID).selectedBlockUUID
          
           //engine.removeEntity(engine.entities[sbName])
           engine.entities[sbName].getComponent(Transform).rotate(Vector3.Forward(), 90)
         }
  
         
        if (Manager.activeMode == Mode.Zrotate) {
         
          let sbName = selectorEntity.getComponent(SelectedBlockUUID).selectedBlockUUID
          
           //engine.removeEntity(engine.entities[sbName])
           engine.entities[sbName].getComponent(Transform).rotate(Vector3.Up(), 90)
           
         }
  
      },
      {
        button: ActionButton.POINTER,
        showFeedback: false,
      }
    )
  )
  

export let selectorUUID = selectorEntity.uuid

