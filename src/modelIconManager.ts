//import { RotateTransformComponent } from "@dcl/ecs-scene-utils"
import resources from "./resources"
import { HUD } from "./modules/hud"

export const iconBackground = []

export const sceneMessageBus = new MessageBus()

// Colors to cycle through (7 main colours)
//based on paintColors
export const iconAttributesArray  = [
    resources.images.r1c1,
    resources.images.r1c2,
    resources.images.r1c3,
    resources.images.r1c4,
    resources.images.r1c5,
    resources.images.r1c6,
    resources.images.r2c1,
    resources.images.r2c2,
    resources.images.r2c3,
    resources.images.r2c4,
    resources.images.r2c5,
    resources.images.r2c6,
    resources.images.r2c7,
    resources.images.r3c1,
    resources.images.r3c2,
    resources.images.r3c3,
    resources.images.r3c4,
    resources.images.r3c5,
    resources.images.r3c6,
    resources.images.r3c7,
    resources.images.r3c8,
    resources.images.r4c1,
    resources.images.r4c2,
    resources.images.r4c3,
    resources.images.r4c4,
    resources.images.r5c1,
    resources.images.r5c2,
    resources.images.r5c3,
    resources.images.r5c4,
    resources.images.r5c5,
    resources.images.r5c6,
    resources.images.r5c7,
    resources.images.r5c8,
    resources.images.r6c1,
    resources.images.r6c2,
    resources.images.r6c3,
    resources.images.r6c4,
    resources.images.r6c5,
    resources.images.r6c6,
    resources.images.r6c7,
    resources.images.r6c8,
    resources.images.r6c9,
    resources.images.r6c10
  ]
  
  //PaintManager
  export class ModelIconManager {
  
    public static modelIndex: number = 0

    public static setModel(id:number): number {
      ModelIconManager.modelIndex = id
      log("setModel model index = "+ ModelIconManager.modelIndex)

      //       //turns off highligth
      // for (let index = 0; index < iconBackground.length; index++) {
      //   log("iconBackground length "+iconBackground.length)
      //   const element = iconBackground[index];
      //   iconBackground[index].color = Color4.Black()
      // }
      
      //ModelIconManager.modelIndex = id
     // iconBackground[ModelIconManager.modelIndex].color = Color4.Gray()
      return ModelIconManager.modelIndex
    }
  
    public static nextModel(): number {
      log("next model index = "+ ModelIconManager.modelIndex)
      ModelIconManager.modelIndex < iconAttributesArray.length - 1
        ? ModelIconManager.modelIndex++
        : (ModelIconManager.modelIndex = 0)
        return ModelIconManager.modelIndex
    }
    public static previousModel(): void {
      ModelIconManager.modelIndex == 0
        ? ModelIconManager.modelIndex = iconAttributesArray.length - 1
        : ModelIconManager.modelIndex--
    }
  }