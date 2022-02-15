//import { RotateTransformComponent } from "@dcl/ecs-scene-utils"
import resources from "./resources"
import modelPath from "./modelPath"

export const modelTypeColourArray: GLTFShape[] = []

// Colors to cycle through (7 main colours)
//based on paintColors
export const modelArray: GLTFShape[] = [
    resources.models.c1_r1c1,
    resources.models.c1_r1c2,
    resources.models.c1_r1c3,
    resources.models.c1_r1c4,
    resources.models.c1_r1c5,
    resources.models.c1_r1c6,
    resources.models.c1_r2c1,
    resources.models.c1_r2c2,
    resources.models.c1_r2c3,
    resources.models.c1_r2c4,
    resources.models.c1_r2c5,
    resources.models.c1_r2c6,
    resources.models.c1_r2c7,
    resources.models.c1_r3c1,
    resources.models.c1_r3c2,
    resources.models.c1_r3c3,
    resources.models.c1_r3c4,
    resources.models.c1_r3c5,
    resources.models.c1_r3c6,
    resources.models.c1_r3c7,
    resources.models.c1_r3c8,
    resources.models.c1_r4c1,
    resources.models.c1_r4c2,
    resources.models.c1_r4c3,
    resources.models.c1_r4c4,
    resources.models.c1_r5c1,
    resources.models.c1_r5c2,
    resources.models.c1_r5c3,
    resources.models.c1_r5c4,
    resources.models.c1_r5c5,
    resources.models.c1_r5c6,
    resources.models.c1_r5c7,
    resources.models.c1_r5c8,
    resources.models.c1_r6c1,
    resources.models.c1_r6c2,
    resources.models.c1_r6c3,
    resources.models.c1_r6c4,
    resources.models.c1_r6c5,
    resources.models.c1_r6c6,
    resources.models.c1_r6c7,
    resources.models.c1_r6c8,
    resources.models.c1_r6c9,
    resources.models.c1_r6c10,
    resources.models.c2_r1c1,
    resources.models.c2_r1c2,
    resources.models.c2_r1c3,
    resources.models.c2_r1c4,
    resources.models.c2_r1c5,
    resources.models.c2_r1c6,
    resources.models.c2_r2c1,
    resources.models.c2_r2c2,
    resources.models.c2_r2c3,
    resources.models.c2_r2c4,
    resources.models.c2_r2c5,
    resources.models.c2_r2c6,
    resources.models.c2_r2c7,
    resources.models.c2_r3c1,
    resources.models.c2_r3c2,
    resources.models.c2_r3c3,
    resources.models.c2_r3c4,
    resources.models.c2_r3c5,
    resources.models.c2_r3c6,
    resources.models.c2_r3c7,
    resources.models.c2_r3c8,
    resources.models.c2_r4c1,
    resources.models.c2_r4c2,
    resources.models.c2_r4c3,
    resources.models.c2_r4c4,
    resources.models.c2_r5c1,
    resources.models.c2_r5c2,
    resources.models.c2_r5c3,
    resources.models.c2_r5c4,
    resources.models.c2_r5c5,
    resources.models.c2_r5c6,
    resources.models.c2_r5c7,
    resources.models.c2_r5c8,
    resources.models.c2_r6c1,
    resources.models.c2_r6c2,
    resources.models.c2_r6c3,
    resources.models.c2_r6c4,
    resources.models.c2_r6c5,
    resources.models.c2_r6c6,
    resources.models.c2_r6c7,
    resources.models.c2_r6c8,
    resources.models.c2_r6c9,
    resources.models.c2_r6c10,
    resources.models.g1_r1c1,
    resources.models.g1_r1c2,
    resources.models.g1_r1c3,
    resources.models.g1_r1c4,
    resources.models.g1_r1c5,
    resources.models.g1_r1c6,
    resources.models.g1_r2c1,
    resources.models.g1_r2c2,
    resources.models.g1_r2c3,
    resources.models.g1_r2c4,
    resources.models.g1_r2c5,
    resources.models.g1_r2c6,
    resources.models.g1_r2c7,
    resources.models.g1_r3c1,
    resources.models.g1_r3c2,
    resources.models.g1_r3c3,
    resources.models.g1_r3c4,
    resources.models.g1_r3c5,
    resources.models.g1_r3c6,
    resources.models.g1_r3c7,
    resources.models.g1_r3c8,
    resources.models.g1_r4c1,
    resources.models.g1_r4c2,
    resources.models.g1_r4c3,
    resources.models.g1_r4c4,
    resources.models.g1_r5c1,
    resources.models.g1_r5c2,
    resources.models.g1_r5c3,
    resources.models.g1_r5c4,
    resources.models.g1_r5c5,
    resources.models.g1_r5c6,
    resources.models.g1_r5c7,
    resources.models.g1_r5c8,
    resources.models.g1_r6c1,
    resources.models.g1_r6c2,
    resources.models.g1_r6c3,
    resources.models.g1_r6c4,
    resources.models.g1_r6c5,
    resources.models.g1_r6c6,
    resources.models.g1_r6c7,
    resources.models.g1_r6c8,
    resources.models.g1_r6c9,
    resources.models.g1_r6c10
  ]
  


  
  //PaintManager
  export class ModelManager {
  
    public static modelIndex: number = 0
  
    public static nextModel(): void {
      ModelManager.modelIndex < modelArray.length - 1
        ? ModelManager.modelIndex++
        : (ModelManager.modelIndex = 0)
    }
    public static previousModel(): void {
      ModelManager.modelIndex == 0
        ? ModelManager.modelIndex = modelArray.length - 1
        : ModelManager.modelIndex--
    }
  }

  //Manage Model Type
