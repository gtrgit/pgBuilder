import { colourArray } from "../colourSetArray"
import * as utils from '@dcl/ecs-scene-utils'
import { BuildingBlocks, blockData } from "./buildingBlock"

//will be used to save and output data in json format
export const ModelData = []

//new type to be stored in ModelData array
export type foundationData = {
  building_id?: number,
  buildingName: string,
  createDate: number,
  creatorEthAdress: string,
  totalMinted?: number,
  buildingImage?: string
  blockData:blockData[]
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
      colour_id: number,
      blockData:any[]
    )
    {
      super()
      
      //Create 3d object
      const foundationEnt = new Entity()
      const foundationShape = colourArray[colour_id][block_id]
      const newBlock = new Transform({
        position: new Vector3(posX,posY,posZ),
        rotation: new Quaternion(rotX,rotY,rotZ,rotW),
        scale: new Vector3(scaleX,scaleY,scaleZ)
      })

      foundationEnt.addComponent(foundationShape)
      //this.addComponent(foundationShape)
      foundationEnt.addComponent(newBlock)

      
      engine.addEntity(foundationEnt)

      this.addComponent(
        new OnPointerDown(
          (e) => {
      //      this.addBlocks(blockData,this.uuid)
            log('bid ----  '+ building_id+ ' block_id '+block_id+'  colour_id '+colour_id+ ' block arr lenght' )
          },
          {
            button: ActionButton.POINTER,
            showFeedback: false,
          }
        )
      )
     

      for (let index = 0; index < blockData.length; index++) {
        // new utils.Delay(10000, () => {
         const element = blockData[index];

         log(index)
         const ent = new Entity()
         
         //const element = foundation.building[buildingIndex].blockData[index];
                     
                    //  element.x,
                    //  element.y,
                    //  element.z,
                    //  element.rx,
                    //  element.ry,
                    //  element.rz,
                    //  element.rw,
                    //  element.sx,
                    //  element.sy,
                    //  element.sz,
                    //  element.block_id,
                    //  element.colour_id

               log(element.x+' - ' +element.y)


          const newBlock = new BuildingBlocks(element.x,
            element.y,
            element.z,
            element.rx,
            element.ry,
            element.rz,
            element.rw,
            element.sx,
            element.sy,
            element.sz,
            element.block_id,
            element.colour_id)
          //  //create 3d object     
          //  const shape = colourArray[element.colour_id][element.block_id]
          //  const newBlockTrans = new Transform({
          //  position: new Vector3(element.x,element.y,element.x),
          //  rotation: new Quaternion(element.rx,element.ry,element.rz,element.rw),
          //  scale: new Vector3(element.sx,element.sy,element.sx)
          //  })

          //  ent.addComponent(shape)
          //  ent.addComponent(newBlockTrans)
          //  ent.addComponent(
          //    new OnPointerDown(
          //      (e) => {
                 
          //        log('index i ----  '+ index+ 'uuid '+this.uuid)
          //      },
          //      {
          //        button: ActionButton.POINTER,
          //        showFeedback: false,
          //      }
          //    )
          //  )
          //  //ent.setParent(this)
          //  engine.addEntity(ent)

       }
  



      }

      
      addBlocks(blockData:any,id:string){
        log('blockData')
       
          for (let index = 0; index < blockData.length; index++) {
           // new utils.Delay(10000, () => {
            const element = blockData[index];

            const model = new BuildingBlocks(
                        element.x,
                        element.y,
                        element.z,
                        element.rx,
                        element.ry,
                        element.rz,
                        element.rw,
                        element.sx,
                        element.sy,
                        element.sz,
                        element.block_id,
                        element.colour_id)

                  log(element.x+' - ' +element.y)


                  // //create 3d object     
                  // const shape = colourArray[element.colour_id][element.block_id]
                  // const newBlockTrans = new Transform({
                  // position: new Vector3(element.x,element.y,element.x),
                  // rotation: new Quaternion(element.rx,element.ry,element.rz,element.rw),
                  // scale: new Vector3(element.sx,element.sy,element.sx)
                  // })

                  // ent.addComponent(shape)
                  // ent.addComponent(newBlockTrans)
                  // ent.addComponent(
                  //   new OnPointerDown(
                  //     (e) => {
                        
                  //       log('index i ----  '+ index)
                  //     },
                  //     {
                  //       button: ActionButton.POINTER,
                  //       showFeedback: false,
                  //     }
                  //   )
                  // )
                  // ent.setParent(engine.entities[id])
                  // engine.addEntity(ent)

          }
     
      }


}

  