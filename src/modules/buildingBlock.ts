import { colourArray } from "../colourSetArray"
import * as utils from '@dcl/ecs-scene-utils'
import { Manager, Mode } from "src/manager"
import { ModelManager } from "src/modelManager"



//will be used to save and output data in json format
export const modelData:blockData[] = []

export const sceneMessageBus = new MessageBus()


@Component("blockComponentData")
export class BlockComponentData {
    blockArrayPos: number
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
export let deletedFlag: boolean
export let arrayPos: number

//Class to read json create 3d object from json and create new buildingData type and store it in modelData
export class BuildingBlocks extends Entity {
  public static blockArrayId:number
  public static deleted:boolean

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
      
      //do not create a deleted block
      if (deleted != true){
       
            
            //add component
            this.addComponent(new BlockComponentData())

            this.getComponent(BlockComponentData).blockArrayPos = blockArrayId
            log('this should be populated on load: blockArrayPos : '+this.getComponent(BlockComponentData).blockArrayPos)

            engine.addEntity(this)
            const blockShape = colourArray[colour_id][block_id]
            
            const blockTransform = new Transform({
                position: new Vector3(posX,posY,posZ),
                rotation: new Quaternion(rotX,rotY,rotZ,rotW),
                scale: new Vector3(scaleX,scaleY,scaleZ)
                })
            this.addComponent(blockShape)
            this.addComponent(blockTransform)

      }
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
      
      

      this.addComponent(
        new OnPointerDown(
          (e) => {
            
            if (blockArrayId){
              log('blockArrayId '+blockArrayId+' deleted? '+deleted+ ' uuid '+this.uuid )
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
      
      //deletedFlag = false
      arrayPos = blockArrayId

    }
     
    subtractModel(blockArrayId:number){
      log('subtract function '+blockArrayId)
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
                log('case add')
 

                Manager.playAddModelSound()
               
                
                const newBlock = new BuildingBlocks(blockArrayId,deleted,x,y,z,rx,ry,rz,rw,sx,sy,sz,block_id,colour_id)
                
                //modelData.push(newBlock)

                // engine.entities[newBlock.uuid].getComponent(BlockId).blockId = modelArrayIndex
                // engine.entities[newBlock.uuid].block_id = modelArrayIndex
                

                //TODO replace models array
              
            
              //newBlock.addComponent(materials[color])
              break
              case Mode.Subtract:
               //not being used becaues the selector is clicked not the block
                this.subtractModel(blockArrayId)
                break
              case Mode.EyeDrop:
                log('case eyedrop')
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


//  log( ' rot '+rw+' rx'+ rx +' ry '+ry+ 'rz'+rz+
//    'x '+ x + ' y '+y+ ' z '+z +
//    ' sx '+sx +' model '+ e.model +' mode ' +  e.mode)
let blockArrayId: number


   blockArrayId = modelData.length

   //deleted is initialized to false
   let deleted:boolean = false

//  if (e.mode = 1){
//    deleted = false
//  }

  //the uuid is Undefined!!!
  log(' baId '+ blockArrayId+ ' del '+deleted+ ' model uuid '+e.uuid)
  
  if (engine.entities[e.model]) {
    
  engine.entities[e.model].editModel(blockArrayId,deleted,block_id,colour_id,x, y, z,rx,ry,rx,rw,sx,sy,sz,e.mode)
  //log('editing Model...'+e.modelArrayIndex+ ' col '+ e.colourArrayIndex+' rot '+rw+' rx'+ rx +' ry '+ry+ 'rz'+rz)
  }
  //const bPos:blockPosition = {x,y}

   const md:blockData = {blockArrayId,deleted,x,y,z,rx,ry,rz,rw,sx,sy,sz,block_id,colour_id}
  log(md.x+' y'+md.y)
  
   modelData.push(md)
  //changeModels()
})
