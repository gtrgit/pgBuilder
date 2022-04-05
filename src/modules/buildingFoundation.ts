import { colourArray } from "../colourSetArray"
import {default as modelTypes} from "src/modelTypeColour.json"
import * as utils from '@dcl/ecs-scene-utils'
import { BuildingBlocks, blockData, modelData } from "./buildingBlock"

//will be used to save and output data in json format
//export const ModelData = []

//new type to be stored in ModelData array
export type foundationData = {
  building_id?: number,
  buildingName: string,
  createDate: number,
  creatorEthAdress: string,
  totalMinted?: number,
  buildingImage?: string
  foundationBlockData:blockData[]
}


//Class to read json create 3d object from json and create new buildingData type and store it in modelData
export class BuildingFoundation extends Entity {
  //  public static building_id?: number
  //  public static buildingName: string
  //  public static createDate: number
  //  public static creatorEthAdress: string
  //  public static totalMinted?: number
  //  public static buildingImage?: string
  //  public static posX: number
  //  public static posY: number
  //  public static posZ: number
  //  public static rotX?: number
  //  public static rotY?: number
  //  public static rotZ?: number
  //  public static rotW?: number
  //  public static scaleX?: number
  //  public static scaleY?: number
  //  public static scaleZ?: number
  //  public static block_id?: number
  //  public static colour_id?: number
  //  //public static blockData:any[]

    constructor(
      building_id: number,
      createDate: number,
      creatorEthAdress: string,
      totalMinted: number,
      buildingImage: string,
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
      block_type: number,
      body_colour_id : number,
      face_colour_id : number,
      border_colour_id : number,
      foundationBlockData:any[]
    )
    {
      super()
      
      //log(modelTypes.models[block_id].modelTypes[block_type].colour[0].modelColour)
      //Create 3d object
      const foundationEnt = new Entity()
      //const foundationShape = new GLTFShape(modelTypes.models[block_id].modelTypes[block_type].colour[0].modelColour) //colourArray[colour_id][block_id]
      const newBlock = new Transform({
        position: new Vector3(posX,posY,posZ),
        rotation: new Quaternion(rotX,rotY,rotZ,rotW),
        scale: new Vector3(scaleX,scaleY,scaleZ)
      })

      //foundationEnt.addComponent(foundationShape)
      //this.addComponent(foundationShape)
      foundationEnt.addComponent(newBlock)

      
      engine.addEntity(foundationEnt)

      this.addComponent(
        new OnPointerDown(
          (e) => {
      //      this.addBlocks(blockData,this.uuid)
            
          },
          {
            button: ActionButton.POINTER,
            showFeedback: false,
          }
        )
      )
     

      for (let index = 0; index < foundationBlockData.length; index++) {
        // new utils.Delay(10000, () => {
         const element = foundationBlockData[index];

         const ent = new Entity()
         
        
         let blockArrayId = element.blockArrayId
         let deleted = element.deleted
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
         let body_colour_id = element.body_colour_id
         let face_colour_id = element.face_colour_id
         let border_colour_id = element.border_colour_id
         let block_type = element.block_type

         const md:blockData = {blockArrayId,deleted,x,y,z,rx,ry,rz,rw,sx,sy,sz,block_id,body_colour_id,face_colour_id,border_colour_id,block_type}
       
       
          modelData.push(md)

        // Dont add deleted blocks// todo write why = true
        if (element.deleted = true){

          const newBlock = new BuildingBlocks(blockArrayId,deleted,x,y,z,rx,ry,rz,rw,sx,sy,sz,block_id,body_colour_id,face_colour_id,border_colour_id,block_type)
         newBlock.setParent(foundationEnt)
          }


       }
  



      }


}

  