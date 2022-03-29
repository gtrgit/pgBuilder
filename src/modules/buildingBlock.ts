import { colourArray } from "../colourSetArray"
import {default as modelTypes} from "src/modelTypeColour.json"
import * as utils from '@dcl/ecs-scene-utils'
import { Manager, Mode } from "src/manager"
import { ModelManager } from "src/modelManager"
import { test } from "../../models/seperated_blocks/test"
import { default as models } from "src/modelPath"

//will be used to save and output data in json format
export const modelData:blockData[] = []

export const sceneMessageBus = new MessageBus()


@Component("blockComponentData")
export class BlockComponentData {
    blockArrayPos: number = 0
    body_colour_id: number = 0
    face_colour_id: number = 0
    border_colour_id: number = 0
    block_type: number = 0

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
  body_colour_id: number
  face_colour_id: number
  border_colour_id: number
  block_type: number
}

export type planeData = {
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
  image_id: number
  offsetX: number
  offsetY: number
  offsetZ: number
  emission: boolean
  emissionColour: string
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
      body_colour_id: number,
      face_colour_id: number,
      border_colour_id: number,
      block_type: number
      
    )
    {
      super()
      
      //do not create a deleted block
      if (deleted != true){
       
            
            //add component
            this.addComponent(new BlockComponentData())

            this.getComponent(BlockComponentData).blockArrayPos = blockArrayId
            this.getComponent(BlockComponentData).body_colour_id = body_colour_id
            this.getComponent(BlockComponentData).face_colour_id = face_colour_id
            this.getComponent(BlockComponentData).block_type = block_type
            
        //log('../../models/seperated_blocks/'+modelTypes.models[blockArrayId].modelTypes[block_type].colour[colour_id].modelColour+'.gltf')
        const modelPath:string = modelTypes.models[block_id].modelTypes[block_type].colour[body_colour_id].modelColour
           
        //body
            engine.addEntity(this)
            const blockShape = new GLTFShape(modelPath)


            const blockTransform = new Transform({
                position: new Vector3(posX,posY,posZ),
                rotation: new Quaternion(rotX,rotY,rotZ,rotW),
                scale: new Vector3(scaleX,scaleY,scaleZ)
                })
            this.addComponent(blockShape)
            this.addComponent(blockTransform)

            // // collider
            // const colliderPath:string = modelTypes.models[block_id].modelTypes[block_type].colour[body_colour_id].collider
            //   const colliderEnt = new Entity()
            //   const colliderShape = new GLTFShape(colliderPath)
            //   colliderEnt.addComponent(colliderShape)
            //   colliderEnt.addComponent(blockTransform)
            //   engine.addEntity(colliderEnt)
            //face
            if (modelTypes.models[block_id].modelTypes[block_type].colour[face_colour_id].faceColour){
              const facePath:string = modelTypes.models[block_id].modelTypes[block_type].colour[face_colour_id].faceColour
              const faceEnt = new Entity()
              const faceShape = new GLTFShape(facePath)
              faceEnt.addComponent(faceShape)
              const faceTransform = new Transform({
                position: new Vector3(0,.003,0)
                //scale: new Vector3(1.02,1.02,1.02)
                })
               faceEnt.addComponent(faceTransform)
              faceEnt.setParent(this)
              engine.addEntity(faceEnt)
            }
            //highlight
            if (modelTypes.models[block_id].modelTypes[block_type].colour[border_colour_id].highlightColour){
             const highLightPath:string = modelTypes.models[block_id].modelTypes[block_type].colour[border_colour_id].highlightColour
             log(border_colour_id)
           
             const borderTransform = new Transform({
              scale: new Vector3(.99,.99,.99)
              })

              const highLightEnt = new Entity()
              const highlightShape = new GLTFShape(highLightPath)
              highLightEnt.addComponent(highlightShape)
              //highLightEnt.getComponent(Transform).scale.setAll(.9)
              highLightEnt.addComponent(borderTransform)
             highLightEnt.setParent(this)
             engine.addEntity(highLightEnt)
              
            }


      }
      

      this.addComponent(
        new OnPointerDown(
          (e) => {
            
            if (blockArrayId){
             
            } else { log('no blockArrayId')}
           
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
      editModel(blockArrayId:number,deleted:boolean, block_id: number, body_colour_id: number,face_colour_id: number,border_colour_id:number,x: number, y: number, z: number,rx: number,
        ry: number,rz: number,rw: number,sx: number,sy: number,sz: number, mode: Mode,block_type: number) 
        {
          
          log('editModel')
        
         switch (mode) 
          {
              case Mode.blockAdd:
              
 

                Manager.playAddModelSound()
               
                
                const newBlock = new BuildingBlocks(blockArrayId,deleted,x,y,z,rx,ry,rz,rw
                  ,sx,sy,sz,block_id,body_colour_id,face_colour_id,border_colour_id,block_type)
                  
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
              //  this.eyeDropModel()
                break
              // case Mode.Swap:
              
              //   this.swapModel()
              //   break
              case Mode.Yrotate:
                log('Swapped')
           //     this.yRotate()
                break
              case Mode.Xrotate:
                log('Swapped')
            //    this.xRotate()
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
  let body_colour_id = e.body_colour_id //e.colourArrayIndex
  let face_colour_id = e.face_colour_id//e.colourArrayIndex
  let border_colour_id = e.border_colour_id
  let block_type = e.block_type
let blockArrayId: number


   blockArrayId = modelData.length

   //deleted is initialized to false
   let deleted:boolean = false

  log(' baId '+ blockArrayId+ ' del '+deleted+ ' model  '+block_id+ ' body '+body_colour_id+ ' face '+face_colour_id+' border '+ border_colour_id)
  
  if (engine.entities[e.model]) {
    
    
    const newBlock = new BuildingBlocks(blockArrayId,deleted,x,y,z,rx,ry,rz,rw
      ,sx,sy,sz,block_id,body_colour_id,face_colour_id,border_colour_id,block_type)
      
  // engine.entities[e.model].editModel(blockArrayId,deleted,block_id,body_colour_id,face_colour_id,border_colour_id,x, y, z,rx,ry,rx,rw,sx,sy,sz,e.mode,block_type)
  //debugger
   }
  
   const md:blockData = {blockArrayId,deleted,x,y,z,rx,ry,rz,rw,sx,sy,sz,block_id,body_colour_id,face_colour_id,border_colour_id,block_type}
   log(md.x+' y'+md.y)
  
    modelData.push(md)

}
)
