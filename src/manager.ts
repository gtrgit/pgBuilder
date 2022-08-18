import resources from './resources_2'
import { Audio } from './modules/audio'
//import { colour_1, colour_2, colour_3 } from './modules/colourArrays'

/*
 Manager for mode, color and sound
*/


//export const ColourModels:any = []

// ColourModels.push(colour_1)
// ColourModels.push(colour_2)
// ColourModels.push(colour_3)


// Mode
export enum Mode {

  blockAdd = 0,
  Subtract = 1,
  EyeDrop = 2,
  Yrotate = 3,
  Xrotate = 4,
  Zrotate = 5,
  Off = 6
}

//Colour Arrays



// Sound entities
const addModelSound = new Audio(resources.sounds.add)
const subtractModelSound = new Audio(resources.sounds.subtract)
const eyeDropModelSound = new Audio(resources.sounds.eyeDrop)

export class Manager {

  public static colorIndex: number = 0
  public static activeMode = Mode.blockAdd

  // Sound
  public static playAddModelSound(): void {
    addModelSound.getComponent(AudioSource).playOnce()
  }

  public static playSubtractModelSound(): void {
    subtractModelSound.getComponent(AudioSource).playOnce()
  }

  public static playEyeDropModelSound(): void {
    eyeDropModelSound.getComponent(AudioSource).playOnce()
  }

}
