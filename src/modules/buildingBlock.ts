import { colourArray } from "../colourSetArray"
import * as utils from '@dcl/ecs-scene-utils'
import { Manager, Mode } from "src/manager"
import { ModelManager } from "src/modelManager"
//import { BlockType } from "./selector"


//will be used to save and output data in json format
export const modelData:blockData[] = []

export const sceneMessageBus = new MessageBus()


@Component("blockType")
export class BlockType {
    blockType: string = 'block'
}


//new type to be stored in ModelData array
export type blockData = {
  blockArrayId:number
  deleted:boolean
  x: number 
  y: number
  z: number
  rx: number
  ry: number
  rz: number
  rw: number
  sx: number
  sy: number
  sz: number
  block_id: number
  colour_id: number
}

//is need to retaind the uuid of the give model
export let currentModelId:string


//Class to read json create 3d object from json and create new buildingData type and store it in modelData
export class BuildingBlocks extends Entity {
  private static blockArrayId:number
    constructor(
      blockArrayId: number,
      deleted: boolean,
      posX: number,
      posY: number,
      posZ: number,
      rotX: number,
      rotY: number,
      rotZ: number,
      rotW: number,
      scaleX: number,
      scaleY: number,
      scaleZ: number,
      block_id: number,
      colour_id: number
    )
    {
      super()
      
      engine.addEntity(this)
      const blockShape = colourArray[colour_id][block_id]
      
      const blockTransform = new Transform({
          position: new Vector3(posX,posY,posZ),
          rotation: new Quaternion(rotX,rotY,rotZ,rotW),
          scale: new Vector3(scaleX,scaleY,scaleZ)
          })
      this.addComponent(blockShape)
      this.addComponent(blockTransform)

      // //Create 3d object
      // const newEnt:Entity = new Entity()
      // const blockShape = colourArray[colour_id][block_id]
      // const newBlock = new Transform({
      // position: new Vector3(posX,posY,posZ),
      // rotation: new Quaternion(rotX,rotY,rotZ,rotW),
      // scale: new Vector3(scaleX,scaleY,scaleZ)
      // })

      // engine.addEntity(newEnt)
      // newEnt.addComponent(blockShape)
      // newEnt.addComponent(newBlock)
      
      if (modelData) {
        blockArrayId = modelData.length
      }

      this.addComponent(
        new OnPointerDown(
          (e) => {
            
            if (blockArrayId){
              log('blockArrayId '+blockArrayId)
            } else { log('no blockArrayId')}
            //log(' block_id '+block_id+'  colour_id '+colour_id+ ' parent uuid' +this.uuid)
          },
          {
            button: ActionButton.POINTER,
            showFeedback: false,
          }
        )
      )

      //newEnt.addComponent(new BlockType())
       
      currentModelId = this.uuid
      

    }
     
    

      // Edit a voxel depending on what mode the user is in
      editModel(blockArrayId:number,deleted:boolean, block_id: number, colour_id: number,x: number, y: number, z: number,rx: number,
        ry: number,rz: number,rw: number,sx: number,sy: number,sz: number, mode: Mode)
        {
          log('editModel')
        //log('Model added???? modelArrayIndex ' + block_id + ' col index '+ colour_id)
         switch (mode) 
          {
              case Mode.blockAdd:
                
                //log('Model added index '+ModelManager.modelIndex)
              
                //engine.entities["selector"].getComponent(Transform).scale.setAll(5)
                //engine.entities[selectorId].getComponent(Transform).scale.setAll(1)

                Manager.playAddModelSound()
               
                const newBlock = new BuildingBlocks(blockArrayId,deleted,x,y,z,rx,ry,rz,rw,sx,sy,sz,block_id,colour_id)
                
                //modelData.push(newBlock)

                // engine.entities[newBlock.uuid].getComponent(BlockId).blockId = modelArrayIndex
                // engine.entities[newBlock.uuid].block_id = modelArrayIndex
                

                //TODO replace models array
              
            
              //newBlock.addComponent(materials[color])
              break
              case Mode.Subtract:
                this.subtractModel()
                break
              case Mode.EyeDrop:
                this.eyeDropModel()
                break
              // case Mode.Swap:
              //   log('Swapped')
              //   this.swapModel()
              //   break
              case Mode.Yrotate:
                log('Swapped')
                this.yRotate()
                break
              case Mode.Xrotate:
                log('Swapped')
                this.xRotate()
                break
              default:
              break
            }
      }

}


sceneMessageBus.on('editModel', (e) => {
  let x = e.position.x + e.normal.x * (e.scale.x * 2)
  let y = e.position.y + e.normal.y * (e.scale.y * 2)
  let z = e.position.z + e.normal.z * (e.scale.z * 2)
  let rw = e.rotation.w
  let rx = e.rotation.x
  let ry = e.rotation.y
  let rz = e.rotation.z
  let sx = e.scale.x
  let sy = e.scale.y
  let sz = e.scale.z
  let block_id = e.modelArrayIndex
  let colour_id = e.colourArrayIndex

  // log('editing Model...'+block_id+ ' col '+ colour_id)
  // log(e.position)
  // log(e.rotation)
  // log(e.scale)
  // log(e.normal)
  // log('model '+ e.model)
  // log('mode  '+ e.mode)


  // ' rot '+rw+' rx'+ rx +' ry '+ry+ 'rz'+rz+
  // 'x '+ x + ' y '+y+ ' z '+z +
  // ' sx '+sx +' model '+ e.model +' mode ' +  e.mode)
  
  let blockArrayId: number = modelData.length
  let deleted:boolean = false
  log(' baId '+ blockArrayId)

  engine.entities[e.model].editModel(blockArrayId,deleted,block_id,colour_id,x, y, z,rx,ry,rx,rw,sx,sy,sz,e.mode)
  //log('editing Model...'+e.modelArrayIndex+ ' col '+ e.colourArrayIndex+' rot '+rw+' rx'+ rx +' ry '+ry+ 'rz'+rz)

  //const bPos:blockPosition = {x,y}

   const md:blockData = {blockArrayId,deleted,x,y,z,rx,ry,rz,rw,sx,sy,sz,block_id,colour_id}
  log(md.x+' y'+md.y)

   modelData.push(md)
  //changeModels()
})
