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
  foundationAdd = 0,
  blockAdd = 1,
  Subtract = 2,
  EyeDrop = 3,
  Yrotate = 4,
  Xrotate = 5,
  Zrotate = 6,
  Off = 7
}

//Colour Arrays



// Sound entities
const addModelSound = new Audio(resources.sounds.add)
const subtractModelSound = new Audio(resources.sounds.subtract)
const eyeDropModelSound = new Audio(resources.sounds.eyeDrop)

export class Manager {

  public static colorIndex: number = 0
  public static activeMode = Mode.foundationAdd

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
