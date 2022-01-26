import resources from '../resources_2'
import { Manager, Mode } from '../manager'
import { ModelIconManager, iconAttributesArray, iconBackground} from 'src/modelIconManager'
import { ModelManager } from 'src/modelManager'
import {default as foundation} from "./foundations.json"
import { BuildingFoundation } from "./buildingFoundation";
import { blockData, modelData } from './buildingBlock'

//import { BlockId } from './baseGrid'


export let colourIndex: number = 0 

export class HUD {
  
  private container: UIContainerRect
  
  //private c2Container: UIContainerRect
  private modelIconContainer: UIContainerRect
  private addIcon: UIImage
  private subtractIcon: UIImage
  private eyeDropIcon: UIImage
  private swapIcon:UIImage
  private yrotateIcon:UIImage
  private xrotateIcon:UIImage
  private zrotateIcon:UIImage
  private foundationAddIcon:UIImage
  private blockIcon:UIImage
  private fText:UIText

  private r1c1Container: UIContainerRect
  private r1c1Text: UIText
  private r1c1_Icon:UIImage
  private r1c2Container: UIContainerRect
  private r1c2Text: UIText
  private r1c2_Icon:UIImage

  private r1c3Container: UIContainerRect
  private r1c3Text: UIText
  private r1c3_Icon:UIImage
  
  private r1c4Container: UIContainerRect
  private r1c4Text: UIText
  private r1c4_Icon:UIImage

  private r1c5Container: UIContainerRect
  private r1c5Text: UIText
  private r1c5_Icon:UIImage

  private r1c6Container: UIContainerRect
  private r1c6Text: UIText
  private r1c6_Icon:UIImage

  private r2c1Container: UIContainerRect
  private r2c1Text: UIText
  private r2c1_Icon:UIImage
  
  private r2c2Container: UIContainerRect
  private r2c2Text: UIText
  private r2c2_Icon:UIImage

  private r2c3Container: UIContainerRect
  private r2c3Text: UIText
  private r2c3_Icon:UIImage


  private r2c4Container: UIContainerRect
  private r2c4Text: UIText
  private r2c4_Icon:UIImage


  private r2c5Container: UIContainerRect
  private r2c5Text: UIText
  private r2c5_Icon:UIImage
  
  private r2c6Container: UIContainerRect
  private r2c6Text: UIText
  private r2c6_Icon:UIImage


  private r2c7Container: UIContainerRect
  private r2c7Text: UIText
  private r2c7_Icon:UIImage


  private r3c1Container: UIContainerRect
  private r3c1Text: UIText
  private r3c1_Icon:UIImage

  private r3c2Container: UIContainerRect
  private r3c2Text: UIText
  private r3c2_Icon:UIImage


  private r3c3Container: UIContainerRect
  private r3c3Text: UIText
  private r3c3_Icon:UIImage

  private r3c4Container: UIContainerRect
  private r3c4Text: UIText
  private r3c4_Icon:UIImage
  
  private r3c5Container: UIContainerRect
  private r3c5Text: UIText
  private r3c5_Icon:UIImage

  private r3c6Container: UIContainerRect
  private r3c6Text: UIText
  private r3c6_Icon:UIImage

  private r3c7Container: UIContainerRect
  private r3c7Text: UIText
  private r3c7_Icon:UIImage

  private r3c8Container: UIContainerRect
  private r3c8Text: UIText
  private r3c8_Icon:UIImage

  private r4c1Container: UIContainerRect
  private r4c1Text: UIText
  private r4c1_Icon:UIImage


  private r4c2Container: UIContainerRect
  private r4c2Text: UIText
  private r4c2_Icon:UIImage

  private r4c3Container: UIContainerRect
  private r4c3Text: UIText
  private r4c3_Icon:UIImage

  private r4c4Container: UIContainerRect
  private r4c4Text: UIText
  private r4c4_Icon:UIImage

  private r5c1Container: UIContainerRect
  private r5c1Text: UIText
  private r5c1_Icon:UIImage

  private r5c2Container: UIContainerRect
  private r5c2Text: UIText
  private r5c2_Icon:UIImage

  private r5c3Container: UIContainerRect
  private r5c3Text: UIText
  private r5c3_Icon:UIImage

  private r5c4Container: UIContainerRect
  private r5c4Text: UIText
  private r5c4_Icon:UIImage

  private r5c5Container: UIContainerRect
  private r5c5Text: UIText
  private r5c5_Icon:UIImage
  
  private r5c6Container: UIContainerRect
  private r5c6Text: UIText
  private r5c6_Icon:UIImage

  private r5c7Container: UIContainerRect
  private r5c7Text: UIText
  private r5c7_Icon:UIImage

  private r5c8Container: UIContainerRect
  private r5c8Text: UIText
  private r5c8_Icon:UIImage

  private r6c1Container: UIContainerRect
  private r6c1Text: UIText
  private r6c1_Icon:UIImage

  private r6c2Container: UIContainerRect
  private r6c2Text: UIText
  private r6c2_Icon:UIImage

  private r6c3Container: UIContainerRect
  private r6c3Text: UIText
  private r6c3_Icon:UIImage

  private r6c4Container: UIContainerRect
  private r6c4Text: UIText
  private r6c4_Icon:UIImage

  private r6c5Container: UIContainerRect
  private r6c5Text: UIText
  private r6c5_Icon:UIImage

  private r6c6Container: UIContainerRect
  private r6c6Text: UIText
  private r6c6_Icon:UIImage

  private r6c7Container: UIContainerRect
  private r6c7Text: UIText
  private r6c7_Icon:UIImage

  private r6c8Container: UIContainerRect
  private r6c8Text: UIText
  private r6c8_Icon:UIImage

  private r6c9Container: UIContainerRect
  private r6c9Text: UIText
  private r6c9_Icon:UIImage

  private r6c10Container: UIContainerRect
  private r6c10Text: UIText
  private r6c10_Icon:UIImage

  private editIconContainer: UIContainerRect

  private eText: UIText

  private manualFoundationAddIcon: UIImage
  private manualAddIcon: UIImage
  private manualSubtractIcon: UIImage
  private manualEyeIcon: UIImage
  private manualXIcon: UIImage
  private manualYIcon: UIImage
  private manualZIcon: UIImage

  private addContainer: UIContainerRect
  private subtractContainer: UIContainerRect
  private eyeContainer: UIContainerRect
  private xContainer: UIContainerRect
  private yContainer: UIContainerRect
  private zContainer: UIContainerRect
  
  private colourIconContainer: UIContainerRect
  private col1_Container: UIContainerRect
  private col2_Container: UIContainerRect
  private col3_Container: UIContainerRect
 // private col4_Container: UIContainerRect
  private col1_icon: UIImage
  private col2_icon: UIImage
  private col3_icon: UIImage
 // private col4_icon: UIImage

  private fileContainer: UIContainerRect
  private foundationContainer: UIContainerRect
  private foundationIcon: UIImage
  private saveContainer: UIContainerRect
  private save_icon: UIImage

    /////////////////////////

    private iconArray = []

  constructor(canvas: UICanvas) {

    // this.container = new UIContainerRect(canvas)
    // this.container.width = '50%'
    // this.container.height = '50%'
    // //this.container.positionX = 200
    // this.container.visible = true
      // Container

    this.container = new UIContainerRect(canvas)
    this.container.width = '100%'
    this.container.height = '100%'
    this.container.positionY = 25
    this.container.visible = true
    this.container.isPointerBlocker = false


    this.addIcon = new UIImage(this.container, resources.icons.add)
    this.addIcon.sourceWidth = 50
    this.addIcon.sourceHeight = 50
    this.addIcon.width = 18
    this.addIcon.height = 19.98 // Compensate by 11.1% for aspect ratio issue
    this.addIcon.positionX = 0
    this.addIcon.positionY = 15
    this.addIcon.isPointerBlocker = false
   
    this.subtractIcon = new UIImage(this.container, resources.icons.subtract)
    this.subtractIcon.sourceWidth = 50
    this.subtractIcon.sourceHeight = 50
    this.subtractIcon.width = 18
    this.subtractIcon.height = 19.98 // Compensate by 11.1% for aspect ratio issue
    this.subtractIcon.positionX = 0
    this.subtractIcon.positionY = 15
    this.subtractIcon.isPointerBlocker = false
    this.subtractIcon.visible = false

    this.eyeDropIcon = new UIImage(this.container, resources.icons.eyeDrop)
    this.eyeDropIcon.sourceWidth = 50
    this.eyeDropIcon.sourceHeight = 50
    this.eyeDropIcon.width = 18
    this.eyeDropIcon.height = 19.98 // Compensate by 11.1% for aspect ratio issue
    this.eyeDropIcon.positionX = 0
    this.eyeDropIcon.positionY = 15
    this.eyeDropIcon.isPointerBlocker = false
    this.eyeDropIcon.visible = false

    this.swapIcon = new UIImage(this.container, resources.icons.swap)
    this.swapIcon.sourceWidth = 50
    this.swapIcon.sourceHeight = 50
    this.swapIcon.width = 18
    this.swapIcon.height = 19.98 // Compensate by 11.1% for aspect ratio issue
    this.swapIcon.positionX = 0
    this.swapIcon.positionY = 15
    this.swapIcon.isPointerBlocker = false
    this.swapIcon.visible = false
  
    this.yrotateIcon = new UIImage(this.container, resources.icons.yrotate)
    this.yrotateIcon.sourceWidth = 50
    this.yrotateIcon.sourceHeight = 50
    this.yrotateIcon.width = 18
    this.yrotateIcon.height = 19.98 // Compensate by 11.1% for aspect ratio issue
    this.yrotateIcon.positionX = 0
    this.yrotateIcon.positionY = 15
    this.yrotateIcon.isPointerBlocker = false
    this.yrotateIcon.visible = false
  
    this.xrotateIcon = new UIImage(this.container, resources.icons.xrotate)
    this.xrotateIcon.sourceWidth = 50
    this.xrotateIcon.sourceHeight = 50
    this.xrotateIcon.width = 18
    this.xrotateIcon.height = 19.98 // Compensate by 11.1% for aspect ratio issue
    this.xrotateIcon.positionX = 0
    this.xrotateIcon.positionY = 15
    this.xrotateIcon.isPointerBlocker = false
    this.xrotateIcon.visible = false

    this.zrotateIcon = new UIImage(this.container, resources.icons.zrotate)
    this.zrotateIcon.sourceWidth = 50
    this.zrotateIcon.sourceHeight = 50
    this.zrotateIcon.width = 18
    this.zrotateIcon.height = 19.98 // Compensate by 11.1% for aspect ratio issue
    this.zrotateIcon.positionX = 0
    this.zrotateIcon.positionY = 15
    this.zrotateIcon.isPointerBlocker = false
    this.zrotateIcon.visible = false

    this.foundationAddIcon = new UIImage(this.container, resources.icons.foundationAdd)
    this.foundationAddIcon.sourceWidth = 50
    this.foundationAddIcon.sourceHeight = 50
    this.foundationAddIcon.width = 18
    this.foundationAddIcon.height = 19.98 // Compensate by 11.1% for aspect ratio issue
    this.foundationAddIcon.positionX = 0
    this.foundationAddIcon.positionY = 15
    this.foundationAddIcon.isPointerBlocker = false
    this.foundationAddIcon.visible = false

    //block icon
    this.blockIcon = new UIImage(this.container, resources.images.r1c1)
    this.blockIcon.sourceWidth = 90
    this.blockIcon.sourceHeight = 90
    this.blockIcon.width = 40
    this.blockIcon.height = 40 // Compensate by 11.1% for aspect ratio issue
    this.blockIcon.positionX = 0
    this.blockIcon.positionY = -50
    this.blockIcon.isPointerBlocker = false
    this.blockIcon.visible = true

    const rect = new UIContainerRect(canvas)
    rect.hAlign = 'right'
    rect.vAlign = 'top'
    rect.opacity = 0.8

    ////////////////////////////////////////////////////////////////////////


    this.modelIconContainer = new UIContainerRect(canvas)
    this.modelIconContainer.width = 620
    this.modelIconContainer.height = 120
    // this.modelIconContainer.positionX = 150
    this.modelIconContainer.hAlign = "center"
    this.modelIconContainer.vAlign = "bottom"
    this.modelIconContainer.color = Color4.Black()
    this.modelIconContainer.opacity = .7
  
  

    this.fText = new UIText(this.modelIconContainer)
    this.fText.value = "F"
    this.fText.fontSize = 14
    this.fText.height = 10
    this.fText.positionY = 10
    this.fText.hAlign = "left"
    this.fText.vAlign = "top"
    

    ///////////////////////////////////////////
    //r1c1
    this.r1c1Container = new UIContainerRect(this.modelIconContainer)
    this.r1c1Container.width = 35
    this.r1c1Container.height = 35
    this.r1c1Container.positionX = -285
    this.r1c1Container.positionY = 40
    this.r1c1Container.color = Color4.Gray()
    this.r1c1Container.opacity = 1


    // iconBackground.push(this.r1c1Container)

    this.r1c1Text = new UIText(this.r1c1Container)
    this.r1c1Text.value = "1"
    this.r1c1Text.fontSize = 6
    this.r1c1Text.height = 10
    this.r1c1Text.hAlign = "center"
    this.r1c1Text.vAlign = "top"
    
    this.r1c1_Icon = new UIImage(this.r1c1Container, resources.images.r1c1)
    this.r1c1_Icon.sourceWidth = 90
    this.r1c1_Icon.sourceHeight = 90
    this.r1c1_Icon.width = "80%"
    this.r1c1_Icon.height = "80%" 
   
    this.r1c1_Icon.isPointerBlocker = true
    this.r1c1_Icon.visible = true
    this.r1c1_Icon.onClick = new OnPointerDown(()=>{
      
      ModelIconManager.setModel(0)
      this.manualSelectIcon(0)

    })


    ///////////////////////////////////////////
    //r1c2
    this.r1c2Container = new UIContainerRect(this.modelIconContainer)
    this.r1c2Container.width = 35
    this.r1c2Container.height = 35
    this.r1c2Container.positionX = -245
    this.r1c2Container.positionY = 40
    this.r1c2Container.color = Color4.Black()
    this.r1c2Container.hAlign = 'center'
    this.r1c2Container.opacity = 0.8

    
    // iconBackground.push(this.r1c2Container)

    this.r1c2Text = new UIText(this.r1c2Container)
    this.r1c2Text.value = "2"
    this.r1c2Text.fontSize = 6
    this.r1c2Text.height = 10
    this.r1c2Text.hAlign = "center"
    this.r1c2Text.vAlign = "top"
    
    this.r1c2_Icon = new UIImage(this.r1c2Container, resources.images.r1c2)
    this.r1c2_Icon.sourceWidth = 90
    this.r1c2_Icon.sourceHeight = 90
    this.r1c2_Icon.width = "80%"
    this.r1c2_Icon.height = "80%" 
   
    this.r1c2_Icon.isPointerBlocker = true
    this.r1c2_Icon.visible = true
    this.r1c2_Icon.onClick = new OnPointerDown(()=>{
      let modIndex = 1 + (42 * colourIndex) 
      log( "model index "+ colourIndex)
      ModelIconManager.setModel(modIndex)
      this.manualSelectIcon(modIndex)
      
    })

    
    ///////////////////////////////////////////
    //r1c3
    this.r1c3Container = new UIContainerRect(this.modelIconContainer)
    this.r1c3Container.width = 35
    this.r1c3Container.height = 35
    this.r1c3Container.positionX = -205
    this.r1c3Container.positionY = 40
    this.r1c3Container.color = Color4.Black()
    this.r1c3Container.hAlign = 'center'
    this.r1c3Container.opacity = 0.8

    
    // iconBackground.push(this.r1c3Container)

    this.r1c3Text = new UIText(this.r1c3Container)
    this.r1c3Text.value = "3"
    this.r1c3Text.fontSize = 6
    this.r1c3Text.height = 10
    this.r1c3Text.hAlign = "center"
    this.r1c3Text.vAlign = "top"
    
    this.r1c3_Icon = new UIImage(this.r1c3Container, resources.images.r1c3)
    this.r1c3_Icon.sourceWidth = 90
    this.r1c3_Icon.sourceHeight = 90
    this.r1c3_Icon.width = "80%"
    this.r1c3_Icon.height = "80%" 
    this.r1c3_Icon.isPointerBlocker = true
    this.r1c3_Icon.visible = true
    this.r1c3_Icon.onClick = new OnPointerDown(()=>{
      // ModelIconManager.setModel(2)
      // this.manualSelectIcon(2)

      let modIndex = 2 + (42 * colourIndex) 
      log( "model index "+ colourIndex)
      ModelIconManager.setModel(modIndex)
      this.manualSelectIcon(modIndex)
      
    })


    
    ///////////////////////////////////////////
    //r1c4
    this.r1c4Container = new UIContainerRect(this.modelIconContainer)
    this.r1c4Container.width = 35
    this.r1c4Container.height = 35
    this.r1c4Container.positionX = -165
    this.r1c4Container.positionY = 40
    this.r1c4Container.color = Color4.Black()
    this.r1c4Container.hAlign = 'center'
    this.r1c4Container.opacity = 0.8

    
    // iconBackground.push(this.r1c4Container)

    this.r1c4Text = new UIText(this.r1c4Container)
    this.r1c4Text.value = "4"
    this.r1c4Text.fontSize = 6
    this.r1c4Text.height = 10
    this.r1c4Text.hAlign = "center"
    this.r1c4Text.vAlign = "top"
    
    this.r1c4_Icon = new UIImage(this.r1c4Container, resources.images.r1c4)
    this.r1c4_Icon.sourceWidth = 90
    this.r1c4_Icon.sourceHeight = 90
    this.r1c4_Icon.width = "80%"
    this.r1c4_Icon.height = "80%" 
    this.r1c4_Icon.isPointerBlocker = true
    this.r1c4_Icon.visible = true
    this.r1c4_Icon.onClick = new OnPointerDown(()=>{
      ModelIconManager.setModel(3)
      this.manualSelectIcon(3)
    })

    
    
    ///////////////////////////////////////////
    //r1c5
    this.r1c5Container = new UIContainerRect(this.modelIconContainer)
    this.r1c5Container.width = 35
    this.r1c5Container.height = 35
    this.r1c5Container.positionX = -125
    this.r1c5Container.positionY = 40
    this.r1c5Container.color = Color4.Black()
    this.r1c5Container.hAlign = 'center'
    this.r1c5Container.opacity = 0.8

    
    // iconBackground.push(this.r1c5Container)

    this.r1c5Text = new UIText(this.r1c5Container)
    this.r1c5Text.value = "5"
    this.r1c5Text.fontSize = 6
    this.r1c5Text.height = 10
    this.r1c5Text.hAlign = "center"
    this.r1c5Text.vAlign = "top"
    
    this.r1c5_Icon = new UIImage(this.r1c5Container, resources.images.r1c5)
    this.r1c5_Icon.sourceWidth = 90
    this.r1c5_Icon.sourceHeight = 90
    this.r1c5_Icon.width = "80%"
    this.r1c5_Icon.height = "80%" 
    this.r1c5_Icon.isPointerBlocker = true
    this.r1c5_Icon.visible = true
    this.r1c5_Icon.onClick = new OnPointerDown(()=>{
      ModelIconManager.setModel(4)
      this.manualSelectIcon(4)
    })

    
    
    ///////////////////////////////////////////
    //r1c6
    this.r1c6Container = new UIContainerRect(this.modelIconContainer)
    this.r1c6Container.width = 35
    this.r1c6Container.height = 35
    this.r1c6Container.positionX = -85
    this.r1c6Container.positionY = 40
    this.r1c6Container.color = Color4.Black()
    this.r1c6Container.hAlign = 'center'
    this.r1c6Container.opacity = 0.8

    // iconBackground.push(this.r1c6Container)

    this.r1c6Text = new UIText(this.r1c6Container)
    this.r1c6Text.value = "6"
    this.r1c6Text.fontSize = 6
    this.r1c6Text.height = 10
    this.r1c6Text.hAlign = "center"
    this.r1c6Text.vAlign = "top"
    
    this.r1c6_Icon = new UIImage(this.r1c6Container, resources.images.r1c6)
    this.r1c6_Icon.sourceWidth = 90
    this.r1c6_Icon.sourceHeight = 90
    this.r1c6_Icon.width = "80%"
    this.r1c6_Icon.height = "80%" 
    this.r1c6_Icon.isPointerBlocker = true
    this.r1c6_Icon.visible = true
    this.r1c6_Icon.onClick = new OnPointerDown(()=>{
      ModelIconManager.setModel(5)
      this.manualSelectIcon(5)
    })

    
    ///////////////////////////////////////////
    //r2c1
    this.r2c1Container = new UIContainerRect(this.modelIconContainer)
    this.r2c1Container.width = 35
    this.r2c1Container.height = 35
    this.r2c1Container.positionX = -45
    this.r2c1Container.positionY = 40
    this.r2c1Container.color = Color4.Black()
    this.r2c1Container.hAlign = 'center'
    this.r2c1Container.opacity = 0.8

    // iconBackground.push(this.r2c1Container)

    this.r2c1Text = new UIText(this.r2c1Container)
    this.r2c1Text.value = "7"
    this.r2c1Text.fontSize = 6
    this.r2c1Text.height = 10
    this.r2c1Text.hAlign = "center"
    this.r2c1Text.vAlign = "top"
    
    this.r2c1_Icon = new UIImage(this.r2c1Container, resources.images.r2c1)
    this.r2c1_Icon.sourceWidth = 90
    this.r2c1_Icon.sourceHeight = 90
    this.r2c1_Icon.width = "80%"
    this.r2c1_Icon.height = "80%" 
    this.r2c1_Icon.isPointerBlocker = true
    this.r2c1_Icon.visible = true
    this.r2c1_Icon.onClick = new OnPointerDown(()=>{
      ModelIconManager.setModel(6)
      this.manualSelectIcon(6)
    })

    
    ///////////////////////////////////////////
    //r2c2
    this.r2c2Container = new UIContainerRect(this.modelIconContainer)
    this.r2c2Container.width = 35
    this.r2c2Container.height = 35
    this.r2c2Container.positionX = -5
    this.r2c2Container.positionY = 40
    this.r2c2Container.color = Color4.Black()
    this.r2c2Container.hAlign = 'center'
    this.r2c2Container.opacity = 0.8

    // iconBackground.push(this.r2c2Container)

    this.r2c2Text = new UIText(this.r2c2Container)
    this.r2c2Text.value = "8"
    this.r2c2Text.fontSize = 6
    this.r2c2Text.height = 10
    this.r2c2Text.hAlign = "center"
    this.r2c2Text.vAlign = "top"
    
    this.r2c2_Icon = new UIImage(this.r2c2Container, resources.images.r2c2)
    this.r2c2_Icon.sourceWidth = 90
    this.r2c2_Icon.sourceHeight = 90
    this.r2c2_Icon.width = "80%"
    this.r2c2_Icon.height = "80%" 
    this.r2c2_Icon.isPointerBlocker = true
    this.r2c2_Icon.visible = true
    this.r2c2_Icon.onClick = new OnPointerDown(()=>{
      ModelIconManager.setModel(7)
      this.manualSelectIcon(7)
    })


    ///////////////////////////////////////////
    //r2c3
    this.r2c3Container = new UIContainerRect(this.modelIconContainer)
    this.r2c3Container.width = 35
    this.r2c3Container.height = 35
    this.r2c3Container.positionX = 35
    this.r2c3Container.positionY = 40
    this.r2c3Container.color = Color4.Black()
    this.r2c3Container.hAlign = 'center'
    this.r2c3Container.opacity = 0.8

    // iconBackground.push(this.r2c3Container)

    this.r2c3Text = new UIText(this.r2c3Container)
    this.r2c3Text.value = "9"
    this.r2c3Text.fontSize = 6
    this.r2c3Text.height = 10
    this.r2c3Text.hAlign = "center"
    this.r2c3Text.vAlign = "top"
    
    this.r2c3_Icon = new UIImage(this.r2c3Container, resources.images.r2c3)
    this.r2c3_Icon.sourceWidth = 90
    this.r2c3_Icon.sourceHeight = 90
    this.r2c3_Icon.width = "80%"
    this.r2c3_Icon.height = "80%" 
    this.r2c3_Icon.isPointerBlocker = true
    this.r2c3_Icon.visible = true
    this.r2c3_Icon.onClick = new OnPointerDown(()=>{
      ModelIconManager.setModel(8)
      this.manualSelectIcon(8)
    })



    ///////////////////////////////////////////
    //r2c4
    this.r2c4Container = new UIContainerRect(this.modelIconContainer)
    this.r2c4Container.width = 35
    this.r2c4Container.height = 35
    this.r2c4Container.positionX = 75
    this.r2c4Container.positionY = 40
    this.r2c4Container.color = Color4.Black()
    this.r2c4Container.hAlign = 'center'
    this.r2c4Container.opacity = 0.8

    // iconBackground.push(this.r2c4Container)

    this.r2c4Text = new UIText(this.r2c4Container)
    this.r2c4Text.value = "10"
    this.r2c4Text.fontSize = 6
    this.r2c4Text.height = 10
    this.r2c4Text.hAlign = "center"
    this.r2c4Text.vAlign = "top"
    
    this.r2c4_Icon = new UIImage(this.r2c4Container, resources.images.r2c4)
    this.r2c4_Icon.sourceWidth = 90
    this.r2c4_Icon.sourceHeight = 90
    this.r2c4_Icon.width = "80%"
    this.r2c4_Icon.height = "80%" 
    this.r2c4_Icon.isPointerBlocker = true
    this.r2c4_Icon.visible = true
    this.r2c4_Icon.onClick = new OnPointerDown(()=>{
      ModelIconManager.setModel(9)
      this.manualSelectIcon(9)
    })


    ///////////////////////////////////////////
    //r2c5
    this.r2c5Container = new UIContainerRect(this.modelIconContainer)
    this.r2c5Container.width = 35
    this.r2c5Container.height = 35
    this.r2c5Container.positionX = 115
    this.r2c5Container.positionY = 40
    this.r2c5Container.color = Color4.Black()
    this.r2c5Container.hAlign = 'center'
    this.r2c5Container.opacity = 0.8

    // iconBackground.push(this.r2c5Container)

    this.r2c5Text = new UIText(this.r2c5Container)
    this.r2c5Text.value = "11"
    this.r2c5Text.fontSize = 6
    this.r2c5Text.height = 10
    this.r2c5Text.hAlign = "center"
    this.r2c5Text.vAlign = "top"
    
    this.r2c5_Icon = new UIImage(this.r2c5Container, resources.images.r2c5)
    this.r2c5_Icon.sourceWidth = 90
    this.r2c5_Icon.sourceHeight = 90
    this.r2c5_Icon.width = "80%"
    this.r2c5_Icon.height = "80%" 
    this.r2c5_Icon.isPointerBlocker = true
    this.r2c5_Icon.visible = true
    this.r2c5_Icon.onClick = new OnPointerDown(()=>{
      ModelIconManager.setModel(10)
      this.manualSelectIcon(10)
    })


    ///////////////////////////////////////////
    //r2c6
    this.r2c6Container = new UIContainerRect(this.modelIconContainer)
    this.r2c6Container.width = 35
    this.r2c6Container.height = 35
    this.r2c6Container.positionX = 155
    this.r2c6Container.positionY = 40
    this.r2c6Container.color = Color4.Black()
    this.r2c6Container.hAlign = 'center'
    this.r2c6Container.opacity = 0.8

    // iconBackground.push(this.r2c6Container)


    this.r2c6Text = new UIText(this.r2c6Container)
    this.r2c6Text.value = "12"
    this.r2c6Text.fontSize = 6
    this.r2c6Text.height = 10
    this.r2c6Text.hAlign = "center"
    this.r2c6Text.vAlign = "top"
    
    this.r2c6_Icon = new UIImage(this.r2c6Container, resources.images.r2c6)
    this.r2c6_Icon.sourceWidth = 90
    this.r2c6_Icon.sourceHeight = 90
    this.r2c6_Icon.width = "80%"
    this.r2c6_Icon.height = "80%" 
    this.r2c6_Icon.isPointerBlocker = true
    this.r2c6_Icon.visible = true
    this.r2c6_Icon.onClick = new OnPointerDown(()=>{
      ModelIconManager.setModel(11)
      this.manualSelectIcon(11)
    })

    
    ///////////////////////////////////////////
    //r2c7
    this.r2c7Container = new UIContainerRect(this.modelIconContainer)
    this.r2c7Container.width = 35
    this.r2c7Container.height = 35
    this.r2c7Container.positionX = 195
    this.r2c7Container.positionY = 40
    this.r2c7Container.color = Color4.Black()
    this.r2c7Container.hAlign = 'center'
    this.r2c7Container.opacity = 0.8

    // iconBackground.push(this.r2c7Container)


    this.r2c7Text = new UIText(this.r2c7Container)
    this.r2c7Text.value = "13"
    this.r2c7Text.fontSize = 6
    this.r2c7Text.height = 10
    this.r2c7Text.hAlign = "center"
    this.r2c7Text.vAlign = "top"
    
    this.r2c7_Icon = new UIImage(this.r2c7Container, resources.images.r2c7)
    this.r2c7_Icon.sourceWidth = 90
    this.r2c7_Icon.sourceHeight = 90
    this.r2c7_Icon.width = "80%"
    this.r2c7_Icon.height = "80%" 
    this.r2c7_Icon.isPointerBlocker = true
    this.r2c7_Icon.visible = true
    this.r2c7_Icon.onClick = new OnPointerDown(()=>{
      ModelIconManager.setModel(12)
      this.manualSelectIcon(12)
    })


    
    ///////////////////////////////////////////
    //r3c1
    this.r3c1Container = new UIContainerRect(this.modelIconContainer)
    this.r3c1Container.width = 35
    this.r3c1Container.height = 35
    this.r3c1Container.positionX = 235
    this.r3c1Container.positionY = 40
    this.r3c1Container.color = Color4.Black()
    this.r3c1Container.hAlign = 'center'
    this.r3c1Container.opacity = 0.8

    // iconBackground.push(this.r3c1Container)


    this.r3c1Text = new UIText(this.r3c1Container)
    this.r3c1Text.value = "14"
    this.r3c1Text.fontSize = 6
    this.r3c1Text.height = 10
    this.r3c1Text.hAlign = "center"
    this.r3c1Text.vAlign = "top"
    
    this.r3c1_Icon = new UIImage(this.r3c1Container, resources.images.r3c1)
    this.r3c1_Icon.sourceWidth = 90
    this.r3c1_Icon.sourceHeight = 90
    this.r3c1_Icon.width = "80%"
    this.r3c1_Icon.height = "80%" 
    this.r3c1_Icon.isPointerBlocker = true
    this.r3c1_Icon.visible = true
    this.r3c1_Icon.onClick = new OnPointerDown(()=>{
      ModelIconManager.setModel(13)
      this.manualSelectIcon(13)
    })

    
    ///////////////////////////////////////////
    //r2c8
    this.r3c2Container = new UIContainerRect(this.modelIconContainer)
    this.r3c2Container.width = 35
    this.r3c2Container.height = 35
    this.r3c2Container.positionX = 275
    this.r3c2Container.positionY = 40
    this.r3c2Container.color = Color4.Black()
    this.r3c2Container.hAlign = 'center'
    this.r3c2Container.opacity = 0.8

    // iconBackground.push(this.r3c2Container)


    this.r3c2Text = new UIText(this.r3c2Container)
    this.r3c2Text.value = "15"
    this.r3c2Text.fontSize = 6
    this.r3c2Text.height = 10
    this.r3c2Text.hAlign = "center"
    this.r3c2Text.vAlign = "top"
    
    this.r3c2_Icon = new UIImage(this.r3c2Container, resources.images.r3c2)
    this.r3c2_Icon.sourceWidth = 90
    this.r3c2_Icon.sourceHeight = 90
    this.r3c2_Icon.width = "80%"
    this.r3c2_Icon.height = "80%" 
    this.r3c2_Icon.isPointerBlocker = true
    this.r3c2_Icon.visible = true
    this.r3c2_Icon.onClick = new OnPointerDown(()=>{
      ModelIconManager.setModel(14)
      this.manualSelectIcon(14)
    })

    
    ///////////////////////////////////////////
    //r3c3
    this.r3c3Container = new UIContainerRect(this.modelIconContainer)
    this.r3c3Container.width = 35
    this.r3c3Container.height = 35
    this.r3c3Container.positionX = -285
    this.r3c3Container.positionY = 0
    this.r3c3Container.color = Color4.Black()
    this.r3c3Container.hAlign = 'center'
    this.r3c3Container.opacity = 0.8

    // iconBackground.push(this.r3c3Container)

    this.r3c3Text = new UIText(this.r3c3Container)
    this.r3c3Text.value = "16"
    this.r3c3Text.fontSize = 6
    this.r3c3Text.height = 10
    this.r3c3Text.hAlign = "center"
    this.r3c3Text.vAlign = "top"
    
    this.r3c3_Icon = new UIImage(this.r3c3Container, resources.images.r3c3)
    this.r3c3_Icon.sourceWidth = 90
    this.r3c3_Icon.sourceHeight = 90
    this.r3c3_Icon.width = "80%"
    this.r3c3_Icon.height = "80%" 
    this.r3c3_Icon.isPointerBlocker = true
    this.r3c3_Icon.visible = true
    this.r3c3_Icon.onClick = new OnPointerDown(()=>{
      ModelIconManager.setModel(15)
      this.manualSelectIcon(15)
    })

    
    
    ///////////////////////////////////////////
    //r3c4
    this.r3c4Container = new UIContainerRect(this.modelIconContainer)
    this.r3c4Container.width = 35
    this.r3c4Container.height = 35
    this.r3c4Container.positionX = -245
    this.r3c4Container.positionY = 0
    this.r3c4Container.color = Color4.Black()
    this.r3c4Container.hAlign = 'center'
    this.r3c4Container.opacity = 0.8

    // iconBackground.push(this.r3c4Container)

    this.r3c4Text = new UIText(this.r3c4Container)
    this.r3c4Text.value = "17"
    this.r3c4Text.fontSize = 6
    this.r3c4Text.height = 10
    this.r3c4Text.hAlign = "center"
    this.r3c4Text.vAlign = "top"
    
    this.r3c4_Icon = new UIImage(this.r3c4Container, resources.images.r3c4)
    this.r3c4_Icon.sourceWidth = 90
    this.r3c4_Icon.sourceHeight = 90
    this.r3c4_Icon.width = "80%"
    this.r3c4_Icon.height = "80%" 
    this.r3c4_Icon.isPointerBlocker = true
    this.r3c4_Icon.visible = true
    this.r3c4_Icon.onClick = new OnPointerDown(()=>{
      ModelIconManager.setModel(16)
      this.manualSelectIcon(16)
    })


    
    ///////////////////////////////////////////
    //r3c5
    this.r3c5Container = new UIContainerRect(this.modelIconContainer)
    this.r3c5Container.width = 35
    this.r3c5Container.height = 35
    this.r3c5Container.positionX = -205
    this.r3c5Container.positionY = 0
    this.r3c5Container.color = Color4.Black()
    this.r3c5Container.hAlign = 'center'
    this.r3c5Container.opacity = 0.8

    // iconBackground.push(this.r3c5Container)

    this.r3c5Text = new UIText(this.r3c5Container)
    this.r3c5Text.value = "18"
    this.r3c5Text.fontSize = 6
    this.r3c5Text.height = 10
    this.r3c5Text.hAlign = "center"
    this.r3c5Text.vAlign = "top"
    
    this.r3c5_Icon = new UIImage(this.r3c5Container, resources.images.r3c5)
    this.r3c5_Icon.sourceWidth = 90
    this.r3c5_Icon.sourceHeight = 90
    this.r3c5_Icon.width = "80%"
    this.r3c5_Icon.height = "80%" 
    this.r3c5_Icon.isPointerBlocker = true
    this.r3c5_Icon.visible = true
    this.r3c5_Icon.onClick = new OnPointerDown(()=>{
      ModelIconManager.setModel(17)
      this.manualSelectIcon(17)
    })

    
    
    ///////////////////////////////////////////
    //r3c6
    this.r3c6Container = new UIContainerRect(this.modelIconContainer)
    this.r3c6Container.width = 35
    this.r3c6Container.height = 35
    this.r3c6Container.positionX = -165
    this.r3c6Container.positionY = 0
    this.r3c6Container.color = Color4.Black()
    this.r3c6Container.hAlign = 'center'
    this.r3c6Container.opacity = 0.8

    // iconBackground.push(this.r3c6Container)

    this.r3c6Text = new UIText(this.r3c6Container)
    this.r3c6Text.value = "19"
    this.r3c6Text.fontSize = 6
    this.r3c6Text.height = 10
    this.r3c6Text.hAlign = "center"
    this.r3c6Text.vAlign = "top"
    
    this.r3c6_Icon = new UIImage(this.r3c6Container, resources.images.r3c6)
    this.r3c6_Icon.sourceWidth = 90
    this.r3c6_Icon.sourceHeight = 90
    this.r3c6_Icon.width = "80%"
    this.r3c6_Icon.height = "80%" 
    this.r3c6_Icon.isPointerBlocker = true
    this.r3c6_Icon.visible = true
    this.r3c6_Icon.onClick = new OnPointerDown(()=>{
      ModelIconManager.setModel(18)
      this.manualSelectIcon(18)
    })


    
    ///////////////////////////////////////////
    //r3c7
    this.r3c7Container = new UIContainerRect(this.modelIconContainer)
    this.r3c7Container.width = 35
    this.r3c7Container.height = 35
    this.r3c7Container.positionX = -165
    this.r3c7Container.positionY = 0
    this.r3c7Container.color = Color4.Black()
    this.r3c7Container.hAlign = 'center'
    this.r3c7Container.opacity = 0.8

    // iconBackground.push(this.r3c7Container)

    this.r3c7Text = new UIText(this.r3c7Container)
    this.r3c7Text.value = "19"
    this.r3c7Text.fontSize = 6
    this.r3c7Text.height = 10
    this.r3c7Text.hAlign = "center"
    this.r3c7Text.vAlign = "top"
    
    this.r3c7_Icon = new UIImage(this.r3c7Container, resources.images.r3c7)
    this.r3c7_Icon.sourceWidth = 90
    this.r3c7_Icon.sourceHeight = 90
    this.r3c7_Icon.width = "80%"
    this.r3c7_Icon.height = "80%" 
    this.r3c7_Icon.isPointerBlocker = true
    this.r3c7_Icon.visible = true
    this.r3c7_Icon.onClick = new OnPointerDown(()=>{
      ModelIconManager.setModel(19)
      this.manualSelectIcon(19)
    })

    ///////////////////////////////////////////
    //r3c8
    this.r3c8Container = new UIContainerRect(this.modelIconContainer)
    this.r3c8Container.width = 35
    this.r3c8Container.height = 35
    this.r3c8Container.positionX = -125
    this.r3c8Container.positionY = 0
    this.r3c8Container.color = Color4.Black()
    this.r3c8Container.hAlign = 'center'
    this.r3c8Container.opacity = 0.8

    // iconBackground.push(this.r3c8Container)

    this.r3c8Text = new UIText(this.r3c8Container)
    this.r3c8Text.value = "20"
    this.r3c8Text.fontSize = 6
    this.r3c8Text.height = 10
    this.r3c8Text.hAlign = "center"
    this.r3c8Text.vAlign = "top"
    
    this.r3c8_Icon = new UIImage(this.r3c8Container, resources.images.r3c8)
    this.r3c8_Icon.sourceWidth = 90
    this.r3c8_Icon.sourceHeight = 90
    this.r3c8_Icon.width = "80%"
    this.r3c8_Icon.height = "80%" 
    this.r3c8_Icon.isPointerBlocker = true
    this.r3c8_Icon.visible = true
    this.r3c8_Icon.onClick = new OnPointerDown(()=>{
      ModelIconManager.setModel(20)
      this.manualSelectIcon(20)
    })

    ///////////////////////////////////////////
    //r4c1
    this.r4c1Container = new UIContainerRect(this.modelIconContainer)
    this.r4c1Container.width = 35
    this.r4c1Container.height = 35
    this.r4c1Container.positionX = 155
    this.r4c1Container.positionY = -40
    this.r4c1Container.color = Color4.Black()
    this.r4c1Container.hAlign = 'center'
    this.r4c1Container.opacity = 0.8

    // iconBackground.push(this.r4c1Container)

    this.r4c1Text = new UIText(this.r4c1Container)
    this.r4c1Text.value = "42"
    this.r4c1Text.fontSize = 6
    this.r4c1Text.height = 10
    this.r4c1Text.hAlign = "center"
    this.r4c1Text.vAlign = "top"
    
    this.r4c1_Icon = new UIImage(this.r4c1Container, resources.images.r4c1)
    this.r4c1_Icon.sourceWidth = 90
    this.r4c1_Icon.sourceHeight = 90
    this.r4c1_Icon.width = "80%"
    this.r4c1_Icon.height = "80%" 
    this.r4c1_Icon.isPointerBlocker = true
    this.r4c1_Icon.visible = true
    this.r4c1_Icon.onClick = new OnPointerDown(()=>{
      ModelIconManager.setModel(21)
      this.manualSelectIcon(21)
    })


    ///////////////////////////////////////////
    //r4c2
    this.r4c2Container = new UIContainerRect(this.modelIconContainer)
    this.r4c2Container.width = 35
    this.r4c2Container.height = 35
    this.r4c2Container.positionX = -85
    this.r4c2Container.positionY = 0
    this.r4c2Container.color = Color4.Black()
    this.r4c2Container.hAlign = 'center'
    this.r4c2Container.opacity = 0.8

    // iconBackground.push(this.r4c2Container)

    this.r4c2Text = new UIText(this.r4c2Container)
    this.r4c2Text.value = "21"
    this.r4c2Text.fontSize = 6
    this.r4c2Text.height = 10
    this.r4c2Text.hAlign = "center"
    this.r4c2Text.vAlign = "top"
    
    this.r4c2_Icon = new UIImage(this.r4c2Container, resources.images.r4c2)
    this.r4c2_Icon.sourceWidth = 90
    this.r4c2_Icon.sourceHeight = 90
    this.r4c2_Icon.width = "80%"
    this.r4c2_Icon.height = "80%" 
    this.r4c2_Icon.isPointerBlocker = true
    this.r4c2_Icon.visible = true
    this.r4c2_Icon.onClick = new OnPointerDown(()=>{
      ModelIconManager.setModel(22)
      this.manualSelectIcon(22)
    })


    ///////////////////////////////////////////
    //r4c3
    this.r4c3Container = new UIContainerRect(this.modelIconContainer)
    this.r4c3Container.width = 35
    this.r4c3Container.height = 35
    this.r4c3Container.positionX = -45
    this.r4c3Container.positionY = 0
    this.r4c3Container.color = Color4.Black()
    this.r4c3Container.hAlign = 'center'
    this.r4c3Container.opacity = 0.8

    // iconBackground.push(this.r4c3Container)

    this.r4c3Text = new UIText(this.r4c3Container)
    this.r4c3Text.value = "22"
    this.r4c3Text.fontSize = 6
    this.r4c3Text.height = 10
    this.r4c3Text.hAlign = "center"
    this.r4c3Text.vAlign = "top"
    
    this.r4c3_Icon = new UIImage(this.r4c3Container, resources.images.r4c3)
    this.r4c3_Icon.sourceWidth = 90
    this.r4c3_Icon.sourceHeight = 90
    this.r4c3_Icon.width = "80%"
    this.r4c3_Icon.height = "80%" 
    this.r4c3_Icon.isPointerBlocker = true
    this.r4c3_Icon.visible = true
    this.r4c3_Icon.onClick = new OnPointerDown(()=>{
      ModelIconManager.setModel(23)
      this.manualSelectIcon(23)
    })
    

    ///////////////////////////////////////////
    //r4c4
    this.r4c4Container = new UIContainerRect(this.modelIconContainer)
    this.r4c4Container.width = 35
    this.r4c4Container.height = 35
    this.r4c4Container.positionX = -5
    this.r4c4Container.positionY = 0
    this.r4c4Container.color = Color4.Black()
    this.r4c4Container.hAlign = 'center'
    this.r4c4Container.opacity = 0.8

    // iconBackground.push(this.r4c4Container)

    this.r4c4Text = new UIText(this.r4c4Container)
    this.r4c4Text.value = "23"
    this.r4c4Text.fontSize = 6
    this.r4c4Text.height = 10
    this.r4c4Text.hAlign = "center"
    this.r4c4Text.vAlign = "top"
    
    this.r4c4_Icon = new UIImage(this.r4c4Container, resources.images.r4c4)
    this.r4c4_Icon.sourceWidth = 90
    this.r4c4_Icon.sourceHeight = 90
    this.r4c4_Icon.width = "80%"
    this.r4c4_Icon.height = "80%" 
    this.r4c4_Icon.isPointerBlocker = true
    this.r4c4_Icon.visible = true
    this.r4c4_Icon.onClick = new OnPointerDown(()=>{
      ModelIconManager.setModel(24)
      this.manualSelectIcon(24)
    })

    
    ///////////////////////////////////////////
    //r5c1
    this.r5c1Container = new UIContainerRect(this.modelIconContainer)
    this.r5c1Container.width = 35
    this.r5c1Container.height = 35
    this.r5c1Container.positionX = 35
    this.r5c1Container.positionY = 0
    this.r5c1Container.color = Color4.Black()
    this.r5c1Container.hAlign = 'center'
    this.r5c1Container.opacity = 0.8

    // iconBackground.push(this.r5c1Container)

    this.r5c1Text = new UIText(this.r5c1Container)
    this.r5c1Text.value = "24"
    this.r5c1Text.fontSize = 6
    this.r5c1Text.height = 10
    this.r5c1Text.hAlign = "center"
    this.r5c1Text.vAlign = "top"
    
    this.r5c1_Icon = new UIImage(this.r5c1Container, resources.images.r5c1)
    this.r5c1_Icon.sourceWidth = 90
    this.r5c1_Icon.sourceHeight = 90
    this.r5c1_Icon.width = "80%"
    this.r5c1_Icon.height = "80%" 
    this.r5c1_Icon.isPointerBlocker = true
    this.r5c1_Icon.visible = true
    this.r5c1_Icon.onClick = new OnPointerDown(()=>{
      ModelIconManager.setModel(25)
      this.manualSelectIcon(25)
    })
    
    ///////////////////////////////////////////
    //r5c2
    this.r5c2Container = new UIContainerRect(this.modelIconContainer)
    this.r5c2Container.width = 35
    this.r5c2Container.height = 35
    this.r5c2Container.positionX = 75
    this.r5c2Container.positionY = 0
    this.r5c2Container.color = Color4.Black()
    this.r5c2Container.hAlign = 'center'
    this.r5c2Container.opacity = 0.8

    // iconBackground.push(this.r5c2Container)

    this.r5c2Text = new UIText(this.r5c2Container)
    this.r5c2Text.value = "25"
    this.r5c2Text.fontSize = 6
    this.r5c2Text.height = 10
    this.r5c2Text.hAlign = "center"
    this.r5c2Text.vAlign = "top"
    
    this.r5c2_Icon = new UIImage(this.r5c2Container, resources.images.r5c2)
    this.r5c2_Icon.sourceWidth = 90
    this.r5c2_Icon.sourceHeight = 90
    this.r5c2_Icon.width = "80%"
    this.r5c2_Icon.height = "80%" 
    this.r5c2_Icon.isPointerBlocker = true
    this.r5c2_Icon.visible = true
    this.r5c2_Icon.onClick = new OnPointerDown(()=>{
      ModelIconManager.setModel(26)
      this.manualSelectIcon(26)
    })

     ///////////////////////////////////////////
    //r5c3
    this.r5c3Container = new UIContainerRect(this.modelIconContainer)
    this.r5c3Container.width = 35
    this.r5c3Container.height = 35
    this.r5c3Container.positionX = 115
    this.r5c3Container.positionY = 0
    this.r5c3Container.color = Color4.Black()
    this.r5c3Container.hAlign = 'center'
    this.r5c3Container.opacity = 0.8

    // iconBackground.push(this.r5c3Container)

    this.r5c3Text = new UIText(this.r5c3Container)
    this.r5c3Text.value = "26"
    this.r5c3Text.fontSize = 6
    this.r5c3Text.height = 10
    this.r5c3Text.hAlign = "center"
    this.r5c3Text.vAlign = "top"
    
    this.r5c3_Icon = new UIImage(this.r5c3Container, resources.images.r5c3)
    this.r5c3_Icon.sourceWidth = 90
    this.r5c3_Icon.sourceHeight = 90
    this.r5c3_Icon.width = "80%"
    this.r5c3_Icon.height = "80%" 
    this.r5c3_Icon.isPointerBlocker = true
    this.r5c3_Icon.visible = true
    this.r5c3_Icon.onClick = new OnPointerDown(()=>{
      ModelIconManager.setModel(27)
      this.manualSelectIcon(27)
    })

    ///////////////////////////////////////////
    //r5c3
    this.r5c4Container = new UIContainerRect(this.modelIconContainer)
    this.r5c4Container.width = 35
    this.r5c4Container.height = 35
    this.r5c4Container.positionX = 155
    this.r5c4Container.positionY = 0
    this.r5c4Container.color = Color4.Black()
    this.r5c4Container.hAlign = 'center'
    this.r5c4Container.opacity = 0.8

    // iconBackground.push(this.r5c4Container)

    this.r5c4Text = new UIText(this.r5c4Container)
    this.r5c4Text.value = "27"
    this.r5c4Text.fontSize = 6
    this.r5c4Text.height = 10
    this.r5c4Text.hAlign = "center"
    this.r5c4Text.vAlign = "top"
    
    this.r5c4_Icon = new UIImage(this.r5c4Container, resources.images.r5c4)
    this.r5c4_Icon.sourceWidth = 90
    this.r5c4_Icon.sourceHeight = 90
    this.r5c4_Icon.width = "80%"
    this.r5c4_Icon.height = "80%" 
    this.r5c4_Icon.isPointerBlocker = true
    this.r5c4_Icon.visible = true
    this.r5c4_Icon.onClick = new OnPointerDown(()=>{
      ModelIconManager.setModel(28)
      this.manualSelectIcon(28)
    })

    
    ///////////////////////////////////////////
    //r5c4
    this.r5c5Container = new UIContainerRect(this.modelIconContainer)
    this.r5c5Container.width = 35
    this.r5c5Container.height = 35
    this.r5c5Container.positionX = 195
    this.r5c5Container.positionY = 0
    this.r5c5Container.color = Color4.Black()
    this.r5c5Container.hAlign = 'center'
    this.r5c5Container.opacity = 0.8

    // iconBackground.push(this.r5c4Container)

    this.r5c5Text = new UIText(this.r5c5Container)
    this.r5c5Text.value = "28"
    this.r5c5Text.fontSize = 6
    this.r5c5Text.height = 10
    this.r5c5Text.hAlign = "center"
    this.r5c5Text.vAlign = "top"
    
    this.r5c5_Icon = new UIImage(this.r5c5Container, resources.images.r5c5)
    this.r5c5_Icon.sourceWidth = 90
    this.r5c5_Icon.sourceHeight = 90
    this.r5c5_Icon.width = "80%"
    this.r5c5_Icon.height = "80%" 
    this.r5c5_Icon.isPointerBlocker = true
    this.r5c5_Icon.visible = true
    this.r5c5_Icon.onClick = new OnPointerDown(()=>{
      ModelIconManager.setModel(29)
      this.manualSelectIcon(29)
    })


    ///////////////////////////////////////////
    //r5c5
    this.r5c6Container = new UIContainerRect(this.modelIconContainer)
    this.r5c6Container.width = 35
    this.r5c6Container.height = 35
    this.r5c6Container.positionX = 235
    this.r5c6Container.positionY = 0
    this.r5c6Container.color = Color4.Black()
    this.r5c6Container.hAlign = 'center'
    this.r5c6Container.opacity = 0.8

    // iconBackground.push(this.r5c6Container)

    this.r5c6Text = new UIText(this.r5c6Container)
    this.r5c6Text.value = "29"
    this.r5c6Text.fontSize = 6
    this.r5c6Text.height = 10
    this.r5c6Text.hAlign = "center"
    this.r5c6Text.vAlign = "top"
    
    this.r5c6_Icon = new UIImage(this.r5c6Container, resources.images.r5c6)
    this.r5c6_Icon.sourceWidth = 90
    this.r5c6_Icon.sourceHeight = 90
    this.r5c6_Icon.width = "80%"
    this.r5c6_Icon.height = "80%" 
    this.r5c6_Icon.isPointerBlocker = true
    this.r5c6_Icon.visible = true
    this.r5c6_Icon.onClick = new OnPointerDown(()=>{
      ModelIconManager.setModel(30)
      this.manualSelectIcon(30)
    })

    ///////////////////////////////////////////
    //r5c7
    this.r5c7Container = new UIContainerRect(this.modelIconContainer)
    this.r5c7Container.width = 35
    this.r5c7Container.height = 35
    this.r5c7Container.positionX = 275
    this.r5c7Container.positionY = 0
    this.r5c7Container.color = Color4.Black()
    this.r5c7Container.hAlign = 'center'
    this.r5c7Container.opacity = 0.8

    // iconBackground.push(this.r5c7Container)

    this.r5c7Text = new UIText(this.r5c7Container)
    this.r5c7Text.value = "30"
    this.r5c7Text.fontSize = 6
    this.r5c7Text.height = 10
    this.r5c7Text.hAlign = "center"
    this.r5c7Text.vAlign = "top"
    
    this.r5c7_Icon = new UIImage(this.r5c7Container, resources.images.r5c7)
    this.r5c7_Icon.sourceWidth = 90
    this.r5c7_Icon.sourceHeight = 90
    this.r5c7_Icon.width = "80%"
    this.r5c7_Icon.height = "80%" 
    this.r5c7_Icon.isPointerBlocker = true
    this.r5c7_Icon.visible = true
    this.r5c7_Icon.onClick = new OnPointerDown(()=>{
      ModelIconManager.setModel(31)
      this.manualSelectIcon(31)
    })

    
    ///////////////////////////////////////////
    //r5c8
    this.r5c8Container = new UIContainerRect(this.modelIconContainer)
    this.r5c8Container.width = 35
    this.r5c8Container.height = 35
    this.r5c8Container.positionX = -285
    this.r5c8Container.positionY = -40
    this.r5c8Container.color = Color4.Black()
    this.r5c8Container.hAlign = 'center'
    this.r5c8Container.opacity = 0.8

    // iconBackground.push(this.r5c8Container)

    this.r5c8Text = new UIText(this.r5c8Container)
    this.r5c8Text.value = "31"
    this.r5c8Text.fontSize = 6
    this.r5c8Text.height = 10
    this.r5c8Text.hAlign = "center"
    this.r5c8Text.vAlign = "top"
    
    this.r5c8_Icon = new UIImage(this.r5c8Container, resources.images.r5c8)
    this.r5c8_Icon.sourceWidth = 90
    this.r5c8_Icon.sourceHeight = 90
    this.r5c8_Icon.width = "80%"
    this.r5c8_Icon.height = "80%" 
    this.r5c8_Icon.isPointerBlocker = true
    this.r5c8_Icon.visible = true
    this.r5c8_Icon.onClick = new OnPointerDown(()=>{
      ModelIconManager.setModel(32)
      this.manualSelectIcon(32)
    })

    ///////////////////////////////////////////
    //r6c1
    this.r6c1Container = new UIContainerRect(this.modelIconContainer)
    this.r6c1Container.width = 35
    this.r6c1Container.height = 35
    this.r6c1Container.positionX = -245
    this.r6c1Container.positionY = -40
    this.r6c1Container.color = Color4.Black()
    this.r6c1Container.hAlign = 'center'
    this.r6c1Container.opacity = 0.8

    // iconBackground.push(this.r6c1Container)

    this.r6c1Text = new UIText(this.r6c1Container)
    this.r6c1Text.value = "32"
    this.r6c1Text.fontSize = 6
    this.r6c1Text.height = 10
    this.r6c1Text.hAlign = "center"
    this.r6c1Text.vAlign = "top"
    
    this.r6c1_Icon = new UIImage(this.r6c1Container, resources.images.r6c1)
    this.r6c1_Icon.sourceWidth = 90
    this.r6c1_Icon.sourceHeight = 90
    this.r6c1_Icon.width = "80%"
    this.r6c1_Icon.height = "80%" 
    this.r6c1_Icon.isPointerBlocker = true
    this.r6c1_Icon.visible = true
    this.r6c1_Icon.onClick = new OnPointerDown(()=>{
      ModelIconManager.setModel(33)
      this.manualSelectIcon(33)
    })


    ///////////////////////////////////////////
    //r6c2
    this.r6c2Container = new UIContainerRect(this.modelIconContainer)
    this.r6c2Container.width = 35
    this.r6c2Container.height = 35
    this.r6c2Container.positionX = -205
    this.r6c2Container.positionY = -40
    this.r6c2Container.color = Color4.Black()
    this.r6c2Container.hAlign = 'center'
    this.r6c2Container.opacity = 0.8

    // iconBackground.push(this.r6c2Container)

    this.r6c2Text = new UIText(this.r6c2Container)
    this.r6c2Text.value = "33"
    this.r6c2Text.fontSize = 6
    this.r6c2Text.height = 10
    this.r6c2Text.hAlign = "center"
    this.r6c2Text.vAlign = "top"
    
    this.r6c2_Icon = new UIImage(this.r6c2Container, resources.images.r6c2)
    this.r6c2_Icon.sourceWidth = 90
    this.r6c2_Icon.sourceHeight = 90
    this.r6c2_Icon.width = "80%"
    this.r6c2_Icon.height = "80%" 
    this.r6c2_Icon.isPointerBlocker = true
    this.r6c2_Icon.visible = true
    this.r6c2_Icon.onClick = new OnPointerDown(()=>{
      ModelIconManager.setModel(34)
      this.manualSelectIcon(34)
    })

    
    ///////////////////////////////////////////
    //r6c3
    this.r6c3Container = new UIContainerRect(this.modelIconContainer)
    this.r6c3Container.width = 35
    this.r6c3Container.height = 35
    this.r6c3Container.positionX = -165
    this.r6c3Container.positionY = -40
    this.r6c3Container.color = Color4.Black()
    this.r6c3Container.hAlign = 'center'
    this.r6c3Container.opacity = 0.8

    // iconBackground.push(this.r6c3Container)

    this.r6c3Text = new UIText(this.r6c3Container)
    this.r6c3Text.value = "34"
    this.r6c3Text.fontSize = 6
    this.r6c3Text.height = 10
    this.r6c3Text.hAlign = "center"
    this.r6c3Text.vAlign = "top"
    
    this.r6c3_Icon = new UIImage(this.r6c3Container, resources.images.r6c3)
    this.r6c3_Icon.sourceWidth = 90
    this.r6c3_Icon.sourceHeight = 90
    this.r6c3_Icon.width = "80%"
    this.r6c3_Icon.height = "80%" 
    this.r6c3_Icon.isPointerBlocker = true
    this.r6c3_Icon.visible = true
    this.r6c3_Icon.onClick = new OnPointerDown(()=>{
      ModelIconManager.setModel(35)
      this.manualSelectIcon(35)
    })



    ///////////////////////////////////////////
    //r6c4
    this.r6c4Container = new UIContainerRect(this.modelIconContainer)
    this.r6c4Container.width = 35
    this.r6c4Container.height = 35
    this.r6c4Container.positionX = -125
    this.r6c4Container.positionY = -40
    this.r6c4Container.color = Color4.Black()
    this.r6c4Container.hAlign = 'center'
    this.r6c4Container.opacity = 0.8

    // iconBackground.push(this.r6c4Container)

    this.r6c4Text = new UIText(this.r6c4Container)
    this.r6c4Text.value = "35"
    this.r6c4Text.fontSize = 6
    this.r6c4Text.height = 10
    this.r6c4Text.hAlign = "center"
    this.r6c4Text.vAlign = "top"
    
    this.r6c4_Icon = new UIImage(this.r6c4Container, resources.images.r6c4)
    this.r6c4_Icon.sourceWidth = 90
    this.r6c4_Icon.sourceHeight = 90
    this.r6c4_Icon.width = "80%"
    this.r6c4_Icon.height = "80%" 
    this.r6c4_Icon.isPointerBlocker = true
    this.r6c4_Icon.visible = true
    this.r6c4_Icon.onClick = new OnPointerDown(()=>{
      ModelIconManager.setModel(36)
      this.manualSelectIcon(36)
    })


    ///////////////////////////////////////////
    //r6c5
    this.r6c5Container = new UIContainerRect(this.modelIconContainer)
    this.r6c5Container.width = 35
    this.r6c5Container.height = 35
    this.r6c5Container.positionX = -85
    this.r6c5Container.positionY = -40
    this.r6c5Container.color = Color4.Black()
    this.r6c5Container.hAlign = 'center'
    this.r6c5Container.opacity = 0.8

    // iconBackground.push(this.r6c5Container)

    this.r6c5Text = new UIText(this.r6c5Container)
    this.r6c5Text.value = "36"
    this.r6c5Text.fontSize = 6
    this.r6c5Text.height = 10
    this.r6c5Text.hAlign = "center"
    this.r6c5Text.vAlign = "top"
    
    this.r6c5_Icon = new UIImage(this.r6c5Container, resources.images.r6c5)
    this.r6c5_Icon.sourceWidth = 90
    this.r6c5_Icon.sourceHeight = 90
    this.r6c5_Icon.width = "80%"
    this.r6c5_Icon.height = "80%" 
    this.r6c5_Icon.isPointerBlocker = true
    this.r6c5_Icon.visible = true
    this.r6c5_Icon.onClick = new OnPointerDown(()=>{
      ModelIconManager.setModel(37)
      this.manualSelectIcon(37)
    })

    

    ///////////////////////////////////////////
    //r6c6
    this.r6c6Container = new UIContainerRect(this.modelIconContainer)
    this.r6c6Container.width = 35
    this.r6c6Container.height = 35
    this.r6c6Container.positionX = -45
    this.r6c6Container.positionY = -40
    this.r6c6Container.color = Color4.Black()
    this.r6c6Container.hAlign = 'center'
    this.r6c6Container.opacity = 0.8

    // iconBackground.push(this.r6c6Container)

    this.r6c6Text = new UIText(this.r6c6Container)
    this.r6c6Text.value = "37"
    this.r6c6Text.fontSize = 6
    this.r6c6Text.height = 10
    this.r6c6Text.hAlign = "center"
    this.r6c6Text.vAlign = "top"
    
    this.r6c6_Icon = new UIImage(this.r6c6Container, resources.images.r6c6)
    this.r6c6_Icon.sourceWidth = 90
    this.r6c6_Icon.sourceHeight = 90
    this.r6c6_Icon.width = "80%"
    this.r6c6_Icon.height = "80%" 
    this.r6c6_Icon.isPointerBlocker = true
    this.r6c6_Icon.visible = true
    this.r6c6_Icon.onClick = new OnPointerDown(()=>{
      ModelIconManager.setModel(38)
      this.manualSelectIcon(38)
    })

    ///////////////////////////////////////////
    //r6c7
    this.r6c7Container = new UIContainerRect(this.modelIconContainer)
    this.r6c7Container.width = 35
    this.r6c7Container.height = 35
    this.r6c7Container.positionX = -5
    this.r6c7Container.positionY = -40
    this.r6c7Container.color = Color4.Black()
    this.r6c7Container.hAlign = 'center'
    this.r6c7Container.opacity = 0.8

    // iconBackground.push(this.r6c7Container)

    this.r6c7Text = new UIText(this.r6c7Container)
    this.r6c7Text.value = "38"
    this.r6c7Text.fontSize = 6
    this.r6c7Text.height = 10
    this.r6c7Text.hAlign = "center"
    this.r6c7Text.vAlign = "top"
    
    this.r6c7_Icon = new UIImage(this.r6c7Container, resources.images.r6c7)
    this.r6c7_Icon.sourceWidth = 90
    this.r6c7_Icon.sourceHeight = 90
    this.r6c7_Icon.width = "80%"
    this.r6c7_Icon.height = "80%" 
    this.r6c7_Icon.isPointerBlocker = true
    this.r6c7_Icon.visible = true
    this.r6c7_Icon.onClick = new OnPointerDown(()=>{
      ModelIconManager.setModel(39)
      this.manualSelectIcon(39)
    })


    ///////////////////////////////////////////
    //r6c8
    this.r6c8Container = new UIContainerRect(this.modelIconContainer)
    this.r6c8Container.width = 35
    this.r6c8Container.height = 35
    this.r6c8Container.positionX = 35
    this.r6c8Container.positionY = -40
    this.r6c8Container.color = Color4.Black()
    this.r6c8Container.hAlign = 'center'
    this.r6c8Container.opacity = 0.8

    // iconBackground.push(this.r6c8Container)

    this.r6c8Text = new UIText(this.r6c8Container)
    this.r6c8Text.value = "39"
    this.r6c8Text.fontSize = 6
    this.r6c8Text.height = 10
    this.r6c8Text.hAlign = "center"
    this.r6c8Text.vAlign = "top"
    
    this.r6c8_Icon = new UIImage(this.r6c8Container, resources.images.r6c8)
    this.r6c8_Icon.sourceWidth = 90
    this.r6c8_Icon.sourceHeight = 90
    this.r6c8_Icon.width = "80%"
    this.r6c8_Icon.height = "80%" 
    this.r6c8_Icon.isPointerBlocker = true
    this.r6c8_Icon.visible = true
    this.r6c8_Icon.onClick = new OnPointerDown(()=>{
      ModelIconManager.setModel(40)
      this.manualSelectIcon(40)
    })

    

    ///////////////////////////////////////////
    //r6c9
    this.r6c9Container = new UIContainerRect(this.modelIconContainer)
    this.r6c9Container.width = 35
    this.r6c9Container.height = 35
    this.r6c9Container.positionX = 75
    this.r6c9Container.positionY = -40
    this.r6c9Container.color = Color4.Black()
    this.r6c9Container.hAlign = 'center'
    this.r6c9Container.opacity = 0.8

    // iconBackground.push(this.r6c9Container)

    this.r6c9Text = new UIText(this.r6c9Container)
    this.r6c9Text.value = "40"
    this.r6c9Text.fontSize = 6
    this.r6c9Text.height = 10
    this.r6c9Text.hAlign = "center"
    this.r6c9Text.vAlign = "top"
    
    this.r6c9_Icon = new UIImage(this.r6c9Container, resources.images.r6c9)
    this.r6c9_Icon.sourceWidth = 90
    this.r6c9_Icon.sourceHeight = 90
    this.r6c9_Icon.width = "80%"
    this.r6c9_Icon.height = "80%" 
    this.r6c9_Icon.isPointerBlocker = true
    this.r6c9_Icon.visible = true
    this.r6c9_Icon.onClick = new OnPointerDown(()=>{
      ModelIconManager.setModel(41)
      this.manualSelectIcon(41)
    })



    ///////////////////////////////////////////
    //r6c10
    this.r6c10Container = new UIContainerRect(this.modelIconContainer)
    this.r6c10Container.width = 35
    this.r6c10Container.height = 35
    this.r6c10Container.positionX = 115
    this.r6c10Container.positionY = -40
    this.r6c10Container.color = Color4.Black()
    this.r6c10Container.hAlign = 'center'
    this.r6c10Container.opacity = 0.8

    // iconBackground.push(this.r6c10Container)

    this.r6c10Text = new UIText(this.r6c10Container)
    this.r6c10Text.value = "41"
    this.r6c10Text.fontSize = 6
    this.r6c10Text.height = 10
    this.r6c10Text.hAlign = "center"
    this.r6c10Text.vAlign = "top"
    
    this.r6c10_Icon = new UIImage(this.r6c10Container, resources.images.r6c10)
    this.r6c10_Icon.sourceWidth = 90
    this.r6c10_Icon.sourceHeight = 90
    this.r6c10_Icon.width = "80%"
    this.r6c10_Icon.height = "80%" 
    this.r6c10_Icon.isPointerBlocker = true
    this.r6c10_Icon.visible = true
    this.r6c10_Icon.onClick = new OnPointerDown(()=>{
      ModelIconManager.setModel(42)
      this.manualSelectIcon(42)
    })

///////////////////////////////////////////////////////////////////////////////////

this.editIconContainer = new UIContainerRect(canvas)
this.editIconContainer.width = 250
this.editIconContainer.height = 40
this.editIconContainer.positionY = 122
this.editIconContainer.hAlign = "center"
this.editIconContainer.vAlign = "bottom"
this.editIconContainer.color = Color4.Black()
this.editIconContainer.opacity = .7

this.eText = new UIText(this.editIconContainer)
this.eText.value = "E"
this.eText.fontSize = 14
this.eText.height = 10
this.eText.positionY = 10
this.eText.hAlign = "left"
this.eText.vAlign = "top"




// private addContainer: UIContainerRect
// private subtractContainer: UIContainerRect
// private eyeContainer: UIContainerRect
// private xContainer: UIContainerRect
// private yContainer: UIContainerRect
// private zContainer: UIContainerRect

this.addContainer = new UIContainerRect(this.editIconContainer)
this.addContainer.width = 35
this.addContainer.height = 35
this.addContainer.positionX = -100
this.addContainer.positionY = 0
this.addContainer.color = Color4.Black()
this.addContainer.hAlign = 'center'
this.addContainer.opacity = 0.8


this.manualFoundationAddIcon = new UIImage(this.addContainer, resources.icons.add)
this.manualFoundationAddIcon.sourceWidth = 90
this.manualFoundationAddIcon.sourceHeight = 90
this.manualFoundationAddIcon.width = 40
this.manualFoundationAddIcon.height = 40
this.manualFoundationAddIcon.positionX = 0
this.manualFoundationAddIcon.positionY = -9
this.manualFoundationAddIcon.isPointerBlocker = true
this.manualFoundationAddIcon.visible = true
this.manualFoundationAddIcon.onClick = new OnPointerDown(()=>{
  Manager.activeMode = Mode.foundationAdd
  this.switchModeIcon(Mode.foundationAdd)
})



this.manualAddIcon = new UIImage(this.addContainer, resources.icons.add)
this.manualAddIcon.sourceWidth = 90
this.manualAddIcon.sourceHeight = 90
this.manualAddIcon.width = 40
this.manualAddIcon.height = 40
this.manualAddIcon.positionX = 7
this.manualAddIcon.positionY = -9
this.manualAddIcon.isPointerBlocker = true
this.manualAddIcon.visible = true
this.manualAddIcon.onClick = new OnPointerDown(()=>{
  Manager.activeMode = Mode.blockAdd
  this.switchModeIcon(Mode.blockAdd)
})



this.subtractContainer = new UIContainerRect(this.editIconContainer)
this.subtractContainer.width = 35
this.subtractContainer.height = 35
this.subtractContainer.positionX = -60
this.subtractContainer.positionY = 0
this.subtractContainer.color = Color4.Black()
this.subtractContainer.hAlign = 'center'
this.subtractContainer.opacity = 0.8

this.manualSubtractIcon = new UIImage(this.subtractContainer, resources.icons.subtract)
this.manualSubtractIcon.sourceWidth = 90
this.manualSubtractIcon.sourceHeight = 90
this.manualSubtractIcon.width = 40
this.manualSubtractIcon.height = 40 
this.manualSubtractIcon.positionX = 7
this.manualSubtractIcon.positionY = -9
this.manualSubtractIcon.isPointerBlocker = true
this.manualSubtractIcon.visible = true
this.manualSubtractIcon.onClick = new OnPointerDown(()=>{
  Manager.activeMode = Mode.foundationAdd
  this.switchModeIcon(Mode.foundationAdd)
})



this.eyeContainer = new UIContainerRect(this.editIconContainer)
this.eyeContainer.width = 35
this.eyeContainer.height = 35
this.eyeContainer.positionX = -20
this.eyeContainer.positionY = 0
this.eyeContainer.color = Color4.Black()
this.eyeContainer.hAlign = 'center'
this.eyeContainer.opacity = 0.8

this.manualEyeIcon = new UIImage(this.eyeContainer, resources.icons.eyeDrop)
this.manualEyeIcon.sourceWidth = 90
this.manualEyeIcon.sourceHeight = 90
this.manualEyeIcon.width = 40
this.manualEyeIcon.height = 40
this.manualEyeIcon.positionX = 7
this.manualEyeIcon.positionY = -9 
this.manualEyeIcon.isPointerBlocker = true
this.manualEyeIcon.visible = true
this.manualEyeIcon.onClick = new OnPointerDown(()=>{
  Manager.activeMode = Mode.EyeDrop
  this.switchModeIcon(Mode.EyeDrop)
})



this.xContainer = new UIContainerRect(this.editIconContainer)
this.xContainer.width = 35
this.xContainer.height = 35
this.xContainer.positionX = 20
this.xContainer.positionY = 0
this.xContainer.color = Color4.Black()
this.xContainer.hAlign = 'center'
this.xContainer.opacity = 0.8


this.manualXIcon = new UIImage(this.xContainer, resources.icons.xrotate)
this.manualXIcon.sourceWidth = 50
this.manualXIcon.sourceHeight = 50
this.manualXIcon.width = 25
this.manualXIcon.height = 25 
this.manualXIcon.isPointerBlocker = true
this.manualXIcon.visible = true
this.manualXIcon.onClick = new OnPointerDown(()=>{
  Manager.activeMode = Mode.Xrotate
  this.switchModeIcon(Mode.Xrotate)
})


this.yContainer = new UIContainerRect(this.editIconContainer)
this.yContainer.width = 35
this.yContainer.height = 35
this.yContainer.positionX = 60
this.yContainer.positionY = 0
this.yContainer.color = Color4.Black()
this.yContainer.hAlign = 'center'
this.yContainer.opacity = 0.8


this.manualYIcon = new UIImage(this.yContainer, resources.icons.yrotate)
this.manualYIcon.sourceWidth = 50
this.manualYIcon.sourceHeight = 50
this.manualYIcon.width = 25
this.manualYIcon.height = 25 
this.manualYIcon.isPointerBlocker = true
this.manualYIcon.visible = true
this.manualYIcon.onClick = new OnPointerDown(()=>{
  Manager.activeMode = Mode.Yrotate
  this.switchModeIcon(Mode.Yrotate)
})


this.zContainer = new UIContainerRect(this.editIconContainer)
this.zContainer.width = 35
this.zContainer.height = 35
this.zContainer.positionX = 100
this.zContainer.positionY = 0
this.zContainer.color = Color4.Black()
this.zContainer.hAlign = 'center'
this.zContainer.opacity = 0.8


this.manualZIcon = new UIImage(this.zContainer, resources.icons.zrotate)
this.manualZIcon.sourceWidth = 50
this.manualZIcon.sourceHeight = 50
this.manualZIcon.width = 25
this.manualZIcon.height = 25 
this.manualZIcon.isPointerBlocker = true
this.manualZIcon.visible = true
this.manualZIcon.onClick = new OnPointerDown(()=>{
  Manager.activeMode = Mode.Zrotate
  this.switchModeIcon(Mode.Zrotate)
})



/////////////////////////////////////////////////////////////////////////////////////////////
//Colour menu



this.colourIconContainer = new UIContainerRect(canvas)
this.colourIconContainer.width = 85
this.colourIconContainer.height = 120
this.colourIconContainer.positionX = 355
this.colourIconContainer.positionY = 0
this.colourIconContainer.color = Color4.Black()
this.colourIconContainer.hAlign = 'center'
this.colourIconContainer.vAlign = 'bottom'
this.colourIconContainer.opacity = 0.8
  

this.col1_Container = new UIContainerRect(this.colourIconContainer)
this.col1_Container.width = 35
this.col1_Container.height = 35
this.col1_Container.positionX = -20
this.col1_Container.positionY = 40
this.col1_Container.color = Color4.Black()
this.col1_Container.hAlign = 'center'
this.col1_Container.opacity = 0.8

this.col1_icon = new UIImage(this.col1_Container, resources.images.col1_icon)
this.col1_icon.sourceWidth = 307
this.col1_icon.sourceHeight = 322
this.col1_icon.width = 25
this.col1_icon.height = 27 
this.col1_icon.isPointerBlocker = true
this.col1_icon.visible = true
this.col1_icon.onClick = new OnPointerDown(()=>{
  //
  colourIndex = 0
  log("colour index "+ colourIndex)
})


this.col2_Container = new UIContainerRect(this.colourIconContainer)
this.col2_Container.width = 35
this.col2_Container.height = 35
this.col2_Container.positionX = 20
this.col2_Container.positionY = 40
this.col2_Container.color = Color4.Black()
this.col2_Container.hAlign = 'center'
this.col2_Container.opacity = 0.8

this.col2_icon = new UIImage(this.col2_Container, resources.images.col2_icon)
this.col2_icon.sourceWidth = 307
this.col2_icon.sourceHeight = 322
this.col2_icon.width = 25
this.col2_icon.height = 27 
this.col2_icon.isPointerBlocker = true
this.col2_icon.visible = true
this.col2_icon.onClick = new OnPointerDown(()=>{
  //
  colourIndex = 1
  log("colour index "+ colourIndex)
})


this.col3_Container = new UIContainerRect(this.colourIconContainer)
this.col3_Container.width = 35
this.col3_Container.height = 35
this.col3_Container.positionX = -20
this.col3_Container.positionY = 0
this.col3_Container.color = Color4.Black()
this.col3_Container.hAlign = 'center'
this.col3_Container.opacity = 0.8

this.col3_icon = new UIImage(this.col3_Container, resources.images.col3_icon)
this.col3_icon.sourceWidth = 307
this.col3_icon.sourceHeight = 322
this.col3_icon.width = 25
this.col3_icon.height = 27 
this.col3_icon.isPointerBlocker = true
this.col3_icon.visible = true
this.col3_icon.onClick = new OnPointerDown(()=>{
  //
  colourIndex = 2
  log("colour index "+ colourIndex)
})

///////////////////////////////////
//Save json btn

this.fileContainer = new UIContainerRect(canvas)
this.fileContainer.width = 85
this.fileContainer.height = 120
this.fileContainer.positionX = 442
this.fileContainer.positionY = 0
this.fileContainer.color = Color4.Black()
this.fileContainer.vAlign = 'bottom'
this.fileContainer.hAlign = 'center'
this.fileContainer.opacity = 0.8



this.foundationContainer = new UIContainerRect(this.fileContainer)
this.foundationContainer.width = 35
this.foundationContainer.height = 35
this.foundationContainer.positionX = -20
this.foundationContainer.positionY = 40
this.foundationContainer.color = Color4.Black()
this.foundationContainer.hAlign = 'center'
this.foundationContainer.opacity = 0.8




//TODO add multiple foundation icons for each different foundation they have and hide containers
// that do not have a foundation
const f1Icon:Texture = resources.images.foundationIcon

if (foundation.building[0]) {

  const f1Icon = resources.images.foundationIcon

} else {

  const f1Icon = resources.images.foundationIcon
}



this.foundationIcon = new UIImage(this.foundationContainer, f1Icon)
this.foundationIcon.sourceWidth = 60
this.foundationIcon.sourceHeight = 60
this.foundationIcon.width = 25
this.foundationIcon.height = 27 
this.foundationIcon.isPointerBlocker = true
this.foundationIcon.visible = true
this.foundationIcon.onClick = new OnPointerDown(()=>{
  //
  
  this.addFoundation(0)
})



this.saveContainer = new UIContainerRect(this.fileContainer)
this.saveContainer.width = 35
this.saveContainer.height = 35
this.saveContainer.positionX = 20
this.saveContainer.positionY = 40
this.saveContainer.color = Color4.Black()
this.saveContainer.hAlign = 'center'
this.saveContainer.opacity = 0.8


this.save_icon = new UIImage(this.saveContainer, resources.images.saveIcon)
this.save_icon.sourceWidth = 182
this.save_icon.sourceHeight = 176
this.save_icon.width = 25
this.save_icon.height = 27 
this.save_icon.isPointerBlocker = true
this.save_icon.visible = true
this.save_icon.onClick = new OnPointerDown(()=>{
  //this.displayModels()
  log("saved! ")

  this.logJSON(modelData)


})




}

  // public displayModels():void {

  //   for (let key in modelData) {
  //        const element = modelData[key];
  //       const mod = 1// key.getComponent(Model3D).modelArrayIndex
  //       log('model index : ' + element.modelArrayIndex + ' col '+element.colourArrayIndex 
  //       +' x: '+ element.x
  //       +' y: '+ element.y
  //       +' z: '+ element.z
        
  //       )
  //       //) //+ engine.entities[element.uuid].getComponent(Model3D).modelArrayIndex 
  //      // + ' position: '+ engine.entities[element.uuid].getComponent(Transform).position 
  //       // + ' rotation: '+ element.getComponent(Model3D).getComponent(Transform).rotation
  //       // )
  //   }
   
    
  // }

  public logJSON(arr: blockData[] ){

    log(JSON.stringify(modelData))
    // log('show JSON' + modelData.length)
    // for (let index = 0; index < modelData.length; index++) {
    //   const element = modelData[index];
    //   log(element)
    // }
    
  }

  public switchModeIcon(mode: Mode): void {
    switch (mode) {
      case Mode.blockAdd:
        this.addIcon.visible = true
        this.subtractIcon.visible = false
        this.eyeDropIcon.visible = false
        this.yrotateIcon.visible = false
        this.xrotateIcon.visible = false
        this.zrotateIcon.visible = false
        this.foundationAddIcon.visible = false
        break
      case Mode.Subtract:
        this.addIcon.visible = false
        this.subtractIcon.visible = true
        this.eyeDropIcon.visible = false
        this.yrotateIcon.visible = false
        this.xrotateIcon.visible = false
        this.zrotateIcon.visible = false
        this.foundationAddIcon.visible = false
        break
      case Mode.EyeDrop:
        this.addIcon.visible = false
        this.subtractIcon.visible = false
        this.eyeDropIcon.visible = true
        this.yrotateIcon.visible = false
        this.xrotateIcon.visible = false
        this.zrotateIcon.visible = false
        this.foundationAddIcon.visible = false
        break
      case Mode.Yrotate:
        this.addIcon.visible = false
        this.subtractIcon.visible = false
        this.eyeDropIcon.visible = false
        this.yrotateIcon.visible = true
        this.xrotateIcon.visible = false
        this.zrotateIcon.visible = false
        this.foundationAddIcon.visible = false
        break
      case Mode.Xrotate:
        this.addIcon.visible = false
        this.subtractIcon.visible = false
        this.eyeDropIcon.visible = false
        this.yrotateIcon.visible = false
        this.xrotateIcon.visible = true
        this.zrotateIcon.visible = false
        this.foundationAddIcon.visible = false
        break
      case Mode.Zrotate:
        this.addIcon.visible = false
        this.subtractIcon.visible = false
        this.eyeDropIcon.visible = false
        this.yrotateIcon.visible = false
        this.xrotateIcon.visible = false
        this.zrotateIcon.visible = true
        this.foundationAddIcon.visible = false
        break
      case Mode.foundationAdd:
        this.addIcon.visible = false
        this.subtractIcon.visible = false
        this.eyeDropIcon.visible = false
        this.yrotateIcon.visible = false
        this.xrotateIcon.visible = false
        this.zrotateIcon.visible = false
        this.foundationAddIcon.visible = true
        break
      default:
        break
    }
  }

  public addFoundation(index:number): void {
        
    log('foundation index ' +index)
      const newBox = new BuildingFoundation(
        foundation.building[index].building_id,
        foundation.building[index].createDate,
        foundation.building[index].creatorEthAddress,
        foundation.building[index].totalMinted,
        foundation.building[index].buildingImage,
        foundation.building[index].x,
        foundation.building[index].y,
        foundation.building[index].z,
        foundation.building[index].rx,
        foundation.building[index].ry,
        foundation.building[index].rz,
        foundation.building[index].rw,
        foundation.building[index].sx,
        foundation.building[index].sy,
        foundation.building[index].sz,
        foundation.building[index].block_id,
        foundation.building[index].colour_id,
        foundation.building[index].blockData
      )

      log('f uuid '+ newBox.uuid)
  }

  public manualSelectIcon(id:number): void {
    this.blockIcon.source = iconAttributesArray[id]
    ModelManager.modelIndex = id
  }

  public modelIconChange(): void {
    
    if (ModelManager.modelIndex==42) {
      this.blockIcon.source = iconAttributesArray[0]
      
  
    } else {

    this.blockIcon.source = iconAttributesArray[ModelManager.modelIndex+1]
    }
  }


  public colourIcon(): void {
    
    if (ModelManager.modelIndex==42) {
      this.blockIcon.source = iconAttributesArray[0]
  
    } else {

    this.blockIcon.source = iconAttributesArray[ModelManager.modelIndex+1]
    }
  }

}
