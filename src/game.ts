
//import { BlockData } from "./modules/blockData";
//import {default as building} from "./modules/building.json"
import {default as foundation} from "./modules/foundations.json"
import { BuildingFoundation } from "./modules/buildingFoundation";
import { blockData, BuildingBlocks } from "./modules/buildingBlock";
import { HUD } from "./modules/hud";
//import { BlockSelector, SelectedBlockName } from "./modules/selector";
import { Manager, Mode } from './manager'
import { ModelManager } from "./modelManager";
import { ModelIconManager } from "./modelIconManager";

// UI Elements
const canvas = new UICanvas()
const hud = new HUD(canvas)
// const blkSel = new BlockSelector()

// export let selectorUUID = blkSel.uuid
//log('uuid '+ blkSel.name)
//log('selectedBlockName  '+engine.entities[blkSelUuid].getComponent(SelectedBlockName).selectedBlockName)// = blkSel.uuid

for (const key in engine.entities) {
  if (Object.prototype.hasOwnProperty.call(engine.entities, key)) {
    const element = engine.entities[key];
    
  //  log(element.uuid)
  }
}


for (let buildingIndex = 0; buildingIndex < foundation.building.length; buildingIndex++) {

  const element = foundation.building[buildingIndex];

  //const bb = new BuildingBlocks(foundation.building[buildingIndex].blockData[0].x)
  // stages of a buildingFoundation load existing, create New, remove from scene,

  if(foundation.building[0]){
    log('f.b 0 = true')
  }

  
  if(foundation.building[1]){
    log('f.b 1 = true')
  }
  
  if(foundation.building[2]){
    log('f.b 2 = true')
  } else {
    log('f.b 2 = false')
  }

  // const newBox = new BuildingFoundation(
  //   foundation.building[buildingIndex].building_id,
  //   foundation.building[buildingIndex].createDate,
  //   foundation.building[buildingIndex].creatorEthAddress,
  //   foundation.building[buildingIndex].totalMinted,
  //   foundation.building[buildingIndex].buildingImage,
  //   foundation.building[buildingIndex].x,
  //   foundation.building[buildingIndex].y,
  //   foundation.building[buildingIndex].z,
  //   foundation.building[buildingIndex].rx,
  //   foundation.building[buildingIndex].ry,
  //   foundation.building[buildingIndex].rz,
  //   foundation.building[buildingIndex].rw,
  //   foundation.building[buildingIndex].sx,
  //   foundation.building[buildingIndex].sy,
  //   foundation.building[buildingIndex].sz,
  //   foundation.building[buildingIndex].block_id,
  //   foundation.building[buildingIndex].colour_id,
  //   foundation.building[buildingIndex].blockData
  // )

      // //Read JSON and for each create a new BlockData
      // for (let index = 0; index < foundation.building[buildingIndex].blockData.length; index++) {
      //   const element = foundation.building[buildingIndex].blockData[index];

      //   const newBox = new BlockData
      //               (
      //                 foundation.building[buildingIndex].blockData[index].block_id,
      //                 foundation.building[buildingIndex].blockData[index].x,
      //                 foundation.building[buildingIndex].blockData[index].y,
      //                 foundation.building[buildingIndex].blockData[index].z,
      //                 foundation.building[buildingIndex].blockData[index].rx,
      //                 foundation.building[buildingIndex].blockData[index].ry,
      //                 foundation.building[buildingIndex].blockData[index].rz,
      //                 foundation.building[buildingIndex].blockData[index].rw,
      //                 foundation.building[buildingIndex].blockData[index].sx,
      //                 foundation.building[buildingIndex].blockData[index].sy,
      //                 foundation.building[buildingIndex].blockData[index].sz,
      //                 foundation.building[buildingIndex].blockData[index].block_id,
      //                 foundation.building[buildingIndex].blockData[index].colour_id
      //               )


      // }
}


// Global button events
const input = Input.instance

Object.keys(Mode).length

input.subscribe('BUTTON_DOWN', ActionButton.PRIMARY, false, (): void => {
  log('E Key Pressed')
  switch (Manager.activeMode) {
    
    case Mode.foundationAdd:
      Manager.activeMode = Mode.blockAdd
      hud.switchModeIcon(Mode.blockAdd)
    
    case Mode.blockAdd:
      Manager.activeMode = Mode.Subtract
      hud.switchModeIcon(Mode.Subtract)
      
      break
    case Mode.Subtract:
      Manager.activeMode = Mode.EyeDrop
      hud.switchModeIcon(Mode.EyeDrop)
      
      break
    case Mode.EyeDrop:
      Manager.activeMode = Mode.Yrotate
      hud.switchModeIcon(Mode.Yrotate)
      break
    case Mode.Yrotate:
      Manager.activeMode = Mode.Xrotate
      hud.switchModeIcon(Mode.Xrotate)
      break
    case Mode.Xrotate:
      Manager.activeMode = Mode.Zrotate
      hud.switchModeIcon(Mode.Zrotate)
      break
    case Mode.Zrotate:
      Manager.activeMode = Mode.blockAdd
      hud.switchModeIcon(Mode.blockAdd)
      break
    default:
      break
  }

  log('Active Mode: ', Manager.activeMode)
})

//TODO replace color to model picker
input.subscribe('BUTTON_DOWN', ActionButton.SECONDARY, false, (): void => {
  log('F Key Pressed')
  
  hud.modelIconChange()
  ModelManager.nextModel()
  ModelIconManager.nextModel()

})


