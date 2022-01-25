import { colourArray } from "../colourSetArray"

//will be used to save and output data in json format
export const ModelData = []

//new type to be stored in ModelData array
type buidingData = {
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


//Class to read json create 3d object from json and create new buildingData type and store it in modelData
export class BlockData extends Entity {
   public static building_id?: number
   public static posX: number
   public static posY: number
   public static posZ: number
   public static rotX?: number
   public static rotY?: number
   public static rotZ?: number
   public static rotW?: number
   public static scaleX?: number
   public static scaleY?: number
   public static scaleZ?: number
   public static block_id?: number
   public static colour_id?: number

    constructor(
      building_id: number,
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

      if (building_id) {
        log(building_id)
      }
      const shape = colourArray[colour_id][block_id]
      const newBlock = new Transform({
      position: new Vector3(posX,posY,posZ),
      rotation: new Quaternion(rotX,rotY,rotZ,rotW),
      scale: new Vector3(scaleX,scaleY,scaleZ)
      })

      this.addComponent(shape)
      this.addComponent(newBlock)
      this.addComponent(
        new OnPointerDown(
          (e) => {
           
            log('bid ----  '+ building_id+ ' block_id '+block_id+'  colour_id '+colour_id)
          },
          {
            button: ActionButton.POINTER,
            showFeedback: false,
          }
        )
      )
      engine.addEntity(this)
    }
  }
  