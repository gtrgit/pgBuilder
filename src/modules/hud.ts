import resources from '../resources_2'
import { Manager, Mode } from '../manager'
import { ModelIconManager, iconAttributesArray, iconBackground} from 'src/modelIconManager'
import { ModelManager } from 'src/modelManager'
import {default as foundation} from "./foundations.json"
import {default as modelTypes} from "src/modelTypeColour"
import { BuildingFoundation } from "./buildingFoundation";
import { blockData, modelData } from './buildingBlock'
import { changeMaterial} from './modelPicker'
//import {selectorEntity} from './selector'
//import { BlockId } from './baseGrid'


export let colourIndex: number = 0 
export let bodyId: number = 0
export let faceId: number = 0
export let borderId: number = 0
export let uiActiveStatus: boolean = true
//TODO add COLOUR IDENTIFIER

export class HUD {
  
  private container: UIContainerRect
  private header: UIContainerRect
  private uiOnOffRect: UIContainerRect
  private uiMessage1: UIContainerRect
  private uiMessage2: UIContainerRect
  private uiMessage3: UIContainerRect
  // private uiMessage4: UIContainerRect
  // private uiMessage5: UIContainerRect


  private uiMenuBackgroundRect : UIContainerRect
  private uiModelMenu: UIContainerRect
  // private selectionBodyColour: UIContainerRect
  private menuBodyColour: UIContainerRect
  //private menuFaceColour: UIContainerRect
  //private colourSwatchs: UIContainerRect
  
  //private c2Container: UIContainerRect
  private modelIconContainer: UIContainerRect
  private headerLogo: UIImage
  private uiOnOff: UIImage
  private uiMenuOn: UIImage
  private uiMenuOff: UIImage
  private uiMenuBackground: UIImage
  private uiModelMenuRect: UIImage
  private uiModelBodyBtn: UIImage
  private uiModelFaceBtn: UIImage
  private uiModelBorderBtn: UIImage
  private uiColourMenu: UIImage
  private uiEdit: UIImage
  private uiClose: UIImage
  // private bodyColourHeader:UIText
  private uiEditSelector:UIImage
  private uiHeaderText:UIText
  private uiOnOffText:UIText 
  private uiOnOffHintText:UIText
  private uiAddHintText: UIText
  private uiModelHintText: UIText
  


  private selectedBodyNoSelection: UIImage
  private selectedBodyBlack: UIImage
  private selectedBodyGrey: UIImage
  private selectedBodyLightGrey: UIImage
  private selectedBodyWhite: UIImage
  private selectedBodyBlue: UIImage
  private selectedBodyYellow: UIImage
  private selectedBodyBrown: UIImage
  private selectedBodyOrange: UIImage
  private selectedBodyPink: UIImage
  private selectedBodyRed: UIImage
  private selectedBodyGreen: UIImage

  private selectedFaceNoSelection: UIImage
  private selectedFaceBlack: UIImage
  private selectedFaceGrey: UIImage
  private selectedFaceLightGrey: UIImage
  private selectedFaceWhite: UIImage
  private selectedFaceBlue: UIImage
  private selectedFaceYellow: UIImage
  private selectedFaceBrown: UIImage
  private selectedFaceOrange: UIImage
  private selectedFacePink: UIImage
  private selectedFaceRed: UIImage
  private selectedFaceGreen: UIImage


  private selectedBorderNoSelection: UIImage
  private selectedBorderBlack: UIImage
  private selectedBorderGrey: UIImage
  private selectedBorderLightGrey: UIImage
  private selectedBorderWhite: UIImage
  private selectedBorderBlue: UIImage
  private selectedBorderYellow: UIImage
  private selectedBorderBrown: UIImage
  private selectedBorderOrange: UIImage
  private selectedBorderPink: UIImage
  private selectedBorderRed: UIImage
  private selectedBorderGreen: UIImage


  private noSelection: UIImage
  private bodyBlack: UIImage
  private bodyGrey: UIImage
  private bodyLightGrey: UIImage
  private bodyWhite: UIImage
  private bodyBlue: UIImage
  private bodyYellow: UIImage
  private bodyBrown: UIImage
  private bodyOrange: UIImage
  private bodyPink: UIImage
  private bodyRed: UIImage
  private bodyGreen: UIImage
  
  private addIcon: UIImage
  private subtractIcon: UIImage
  private eyeDropIcon: UIImage
  // private swapIcon:UIImage
  private yrotateIcon:UIImage
  private xrotateIcon:UIImage
  private zrotateIcon:UIImage
  // private foundationAddIcon:UIImage
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

  private fileContainer: UIContainerRect
  private foundationContainer: UIContainerRect
  private foundationIcon: UIImage
  private saveContainer: UIContainerRect
  private save_icon: UIImage


  private colourPart:string = ""

    /////////////////////////

    private iconArray = []

  constructor(canvas: UICanvas) {


      this.header = new UIContainerRect(canvas)
      this.header.visible = true
      this.header.isPointerBlocker = false
      this.header.width = 0
      this.header.height = 0
      this.header.positionX = 165
      this.header.positionY = 30
      this.header.hAlign = "left"
      this.header.vAlign = "top"
      this.header.opacity = 1
      this.header.color = Color4.Black()
  
      this.headerLogo = new UIImage(this.header, resources.images.pgLogo)
      this.headerLogo.sourceHeight = 245
      this.headerLogo.sourceWidth = 1012      
      this.headerLogo.width = 300
      this.headerLogo.height = 60 // Compensate by 11.1% for aspect ratio issue
      this.headerLogo.positionX = 0
      this.headerLogo.positionY = 0
      this.headerLogo.isPointerBlocker = false
      
      this.uiHeaderText = new UIText(this.headerLogo)
      this.uiHeaderText.value = "Discord:     gtrfrost#8788      Sally_Balls#6454"
      this.uiHeaderText.fontSize = 8
      this.uiHeaderText.height = 10
      this.uiHeaderText.positionY = -48
      this.uiHeaderText.positionX = -82
      this.uiHeaderText.hAlign = "center"
      this.uiHeaderText.vAlign = "top"

      
      this.uiOnOffRect = new UIContainerRect(canvas)
      this.uiOnOffRect.visible = true
      this.uiOnOffRect.isPointerBlocker = true
      this.uiOnOffRect.width = 0
      this.uiOnOffRect.height = 0
      this.uiOnOffRect.positionX = 415
      this.uiOnOffRect.positionY = 30
      this.uiOnOffRect.hAlign = "left"
      this.uiOnOffRect.vAlign = "top"
      this.uiOnOffRect.opacity = .8
      this.uiOnOffRect.color = Color4.Black()

      
      this.uiOnOffText = new UIText(this.uiOnOffRect)
      this.uiOnOffText.value = "UI On/Off"
      this.uiOnOffText.fontSize = 8
      this.uiOnOffText.height = 10
      this.uiOnOffText.positionY = 15
      this.uiOnOffText.positionX = 3
      this.uiOnOffText.hAlign = "center"
      this.uiOnOffText.vAlign = "top"
      
      
      this.uiMessage1 = new UIContainerRect(canvas)
      this.uiMessage1.visible = true
      this.uiMessage1.isPointerBlocker = true
      this.uiMessage1.width = 120
      this.uiMessage1.height = 20
      this.uiMessage1.positionX = 415
      this.uiMessage1.positionY = 0
      this.uiMessage1.hAlign = "left"
      this.uiMessage1.vAlign = "top"
      this.uiMessage1.opacity = .8
      this.uiMessage1.color = Color4.Red()


      this.uiOnOffHintText = new UIText(this.uiMessage1)
      this.uiOnOffHintText.value = "Click switch to turn UI on/off"
      this.uiOnOffHintText.fontSize = 8
      this.uiOnOffHintText.height = 10
      this.uiOnOffHintText.positionY = -5
      this.uiOnOffHintText.positionX = -5
      this.uiOnOffHintText.hAlign = "center"
      this.uiOnOffHintText.vAlign = "top"
      

      this.uiOnOff = new UIImage(this.uiOnOffRect, resources.images.uiOnOff)
      this.uiOnOff.sourceHeight = 189
      this.uiOnOff.sourceWidth = 150      
      this.uiOnOff.width = 42
      this.uiOnOff.height = 42 // Compensate by 11.1% for aspect ratio issue
      this.uiOnOff.positionX = 0
      this.uiOnOff.positionY = 0
      this.uiOnOff.isPointerBlocker = true



      this.uiMenuOff = new UIImage(this.uiOnOffRect, resources.images.uiMenuOff)
      this.uiMenuOff.sourceHeight = 57
      this.uiMenuOff.sourceWidth = 112      
      this.uiMenuOff.width = 30
      this.uiMenuOff.height = 15 // Compensate by 11.1% for aspect ratio issue
      this.uiMenuOff.positionX = 7
      this.uiMenuOff.positionY = -5
      this.uiMenuOff.isPointerBlocker = true
      this.uiMenuOff.onClick = new OnPointerDown(()=>{
        // log('off>on')
        uiActiveStatus = true
        this.uiMenuOn.visible= true
        this.uiMenuOff.visible = false
        this.uiMenuBackgroundRect.visible = true
        this.uiModelMenu.visible = true
        this.uiMessage1.visible = false
        this.uiMessage2.visible = true
       // selectorEntity.getComponent(GLTFShape).visible = true
      })

      this.uiMenuOn = new UIImage(this.uiOnOffRect, resources.images.uiMenuOn)
      this.uiMenuOn.sourceHeight = 57
      this.uiMenuOn.sourceWidth = 112      
      this.uiMenuOn.width = 30
      this.uiMenuOn.height = 15 // Compensate by 11.1% for aspect ratio issue
      this.uiMenuOn.positionX = 7
      this.uiMenuOn.positionY = -5
      this.uiMenuOn.isPointerBlocker = true
      this.uiMenuOn.visible = false
      this.uiMenuOn.onClick = new OnPointerDown(()=>{
        // log('on>off')
        uiActiveStatus = false
        this.uiMenuOn.visible= false
        this.uiMenuOff.visible = true
        this.uiMenuBackgroundRect.visible = false
        this.uiMessage2.visible = false
        this.uiModelMenu.visible = false
       // selectorEntity.getComponent(GLTFShape).visible = false
      })




      this.uiMenuBackgroundRect = new UIContainerRect(canvas)
      this.uiMenuBackgroundRect.visible = true
      this.uiMenuBackgroundRect.isPointerBlocker = true
      this.uiMenuBackgroundRect.width = 0
      this.uiMenuBackgroundRect.height = 0
      this.uiMenuBackgroundRect.positionX = 470
      this.uiMenuBackgroundRect.positionY = 30
      this.uiMenuBackgroundRect.hAlign = "left"
      this.uiMenuBackgroundRect.vAlign = "top"
      this.uiMenuBackgroundRect.opacity = 1
      this.uiMenuBackgroundRect.color = Color4.Black()
      this.uiMenuBackgroundRect.visible = false


  
      this.uiMenuBackground = new UIImage(this.uiMenuBackgroundRect, resources.images.uiMenuBackground)
      this.uiMenuBackground.sourceHeight = 243
      this.uiMenuBackground.sourceWidth = 1818      
      this.uiMenuBackground.width = 515
      this.uiMenuBackground.height = 60 // Compensate by 11.1% for aspect ratio issue
      this.uiMenuBackground.positionX = 0
      this.uiMenuBackground.positionY = 0
      this.uiMenuBackground.isPointerBlocker = true



      

      this.uiEdit = new UIImage(this.uiMenuBackgroundRect, resources.images.uiEdit)
      this.uiEdit.sourceHeight = 189
      this.uiEdit.sourceWidth = 601      
      this.uiEdit.width = 165
      this.uiEdit.height = 50 // Compensate by 11.1% for aspect ratio issue
      this.uiEdit.positionX = 10
      this.uiEdit.positionY = 0
      this.uiEdit.isPointerBlocker = true
      this.uiEdit.opacity = .8


      this.uiEditSelector = new UIImage(this.uiMenuBackgroundRect, resources.icons.uiEditSelector)
      this.uiEditSelector.sourceHeight = 90
      this.uiEditSelector.sourceWidth = 85      
      this.uiEditSelector.width = 25
      this.uiEditSelector.height = 25 // Compensate by 11.1% for aspect ratio issue
      this.uiEditSelector.positionX = 16
      this.uiEditSelector.positionY = -5
      this.uiEditSelector.isPointerBlocker = true
      this.uiEditSelector.opacity = .8
      this.uiEditSelector.visible = false


      
      this.uiMessage2 = new UIContainerRect(canvas)
      this.uiMessage2.visible = true
      this.uiMessage2.isPointerBlocker = true
      this.uiMessage2.width = 120
      this.uiMessage2.height = 20
      this.uiMessage2.positionX = 480
      this.uiMessage2.positionY = 1
      this.uiMessage2.hAlign = "left"
      this.uiMessage2.vAlign = "top"
      this.uiMessage2.opacity = .8
      this.uiMessage2.color = Color4.Red()
      this.uiMessage2.visible = false

      
      this.uiAddHintText = new UIText(this.uiMessage2)
      this.uiAddHintText.value = "Click (+) to add blocks"
      this.uiAddHintText.fontSize = 8
      this.uiAddHintText.height = 10
      this.uiAddHintText.positionY = -5
      this.uiAddHintText.positionX = 3
      this.uiAddHintText.hAlign = "center"
      this.uiAddHintText.vAlign = "top"

      //TODO: Change switchModeIcon here

    this.container = new UIContainerRect(canvas)
    this.container.width = '100%'
    this.container.height = '100%'
    this.container.positionY = 25
    this.container.visible = true
    this.container.isPointerBlocker = false


    this.addIcon = new UIImage(this.uiMenuBackgroundRect, resources.icons.add)
    this.addIcon.sourceWidth = 50
    this.addIcon.sourceHeight = 50
    this.addIcon.width = 18
    this.addIcon.height = 19.98 // Compensate by 11.1% for aspect ratio issue
    this.addIcon.positionX = 20
    this.addIcon.positionY = -5
    this.addIcon.isPointerBlocker = true
    this.addIcon.onClick = new OnPointerDown(() => {
      log('add clicked')
      Manager.activeMode = Mode.blockAdd
      this.switchModeIcon(Mode.blockAdd)
      this.uiEditSelector.visible = true
      this.uiMessage2.visible = false
      this.uiMessage3.visible = true
      
      // addMaterial.alphaTexture = resources.images.addImage
      // addMaterial.emissiveColor = Color3.Green()
      //picker.addComponentOrReplace(addMaterial)
      changeMaterial(resources.images.addImage,Color3.Green())
    })
   //TODO HIDE ADDICONS SELECTION AND DISPLAY TEXT TO CLICK ICON

    this.subtractIcon = new UIImage(this.uiMenuBackgroundRect, resources.icons.subtract)
    this.subtractIcon.sourceWidth = 50
    this.subtractIcon.sourceHeight = 50
    this.subtractIcon.width = 18
    this.subtractIcon.height = 19.98 // Compensate by 11.1% for aspect ratio issue
    this.subtractIcon.positionX = 45
    this.subtractIcon.positionY = -5
    this.subtractIcon.isPointerBlocker = true
    this.subtractIcon.visible = true
    this.subtractIcon.onClick = new OnPointerDown(() => {
      Manager.activeMode = Mode.Subtract
      this.switchModeIcon(Mode.Subtract)
      this.uiEditSelector.visible = true
      // this.uiAddHintText.visible = false
      
      // addMaterial.emissiveColor = Color3.Red()
      // addMaterial.alphaTexture = resources.images.subtractImage
     // picker.addComponent(addMaterial)
     changeMaterial(resources.images.subtractImage,Color3.Red())
    })


    this.eyeDropIcon = new UIImage(this.uiMenuBackgroundRect, resources.icons.eyeDrop)
    this.eyeDropIcon.sourceWidth = 50
    this.eyeDropIcon.sourceHeight = 50
    this.eyeDropIcon.width = 18
    this.eyeDropIcon.height = 19.98 // Compensate by 11.1% for aspect ratio issue
    this.eyeDropIcon.positionX = 70
    this.eyeDropIcon.positionY = -5
    this.eyeDropIcon.isPointerBlocker = true
    this.eyeDropIcon.visible = true
    this.eyeDropIcon.onClick = new OnPointerDown(() => {
      Manager.activeMode = Mode.EyeDrop
      this.switchModeIcon(Mode.EyeDrop)
      this.uiEditSelector.visible = true
      // this.uiAddHintText.visible = false

      // addMaterial.alphaTexture = resources.images.eyeImage
      // addMaterial.emissiveColor = Color3.Yellow()
      //picker.addComponentOrReplace(addMaterial)
      changeMaterial(resources.images.eyeImage,Color3.Yellow())
    })

  
    this.yrotateIcon = new UIImage(this.uiMenuBackgroundRect, resources.icons.yrotate)
    this.yrotateIcon.sourceWidth = 50
    this.yrotateIcon.sourceHeight = 50
    this.yrotateIcon.width = 18
    this.yrotateIcon.height = 19.98 // Compensate by 11.1% for aspect ratio issue
    this.yrotateIcon.positionX = 95
    this.yrotateIcon.positionY = -5
    this.yrotateIcon.isPointerBlocker = true
    this.yrotateIcon.visible = true
    this.yrotateIcon.onClick = new OnPointerDown(()=>{
      Manager.activeMode = Mode.Yrotate
      this.switchModeIcon(Mode.Yrotate)
      this.uiEditSelector.visible = true
      // this.uiAddHintText.visible = false
      
      // addMaterial.alphaTexture = resources.images.yrotate
      // addMaterial.emissiveColor = Color3.Green()
     // picker.addComponentOrReplace(addMaterial)
     
     changeMaterial(resources.images.yrotate,Color3.Green())

    })
  
    this.xrotateIcon = new UIImage(this.uiMenuBackgroundRect, resources.icons.xrotate)
    this.xrotateIcon.sourceWidth = 50
    this.xrotateIcon.sourceHeight = 50
    this.xrotateIcon.width = 18
    this.xrotateIcon.height = 19.98 // Compensate by 11.1% for aspect ratio issue
    this.xrotateIcon.positionX = 120
    this.xrotateIcon.positionY = -5
    this.xrotateIcon.isPointerBlocker = true
    this.xrotateIcon.visible = true
    this.xrotateIcon.onClick = new OnPointerDown(()=>{
      Manager.activeMode = Mode.Xrotate
      this.switchModeIcon(Mode.Xrotate)
      this.uiEditSelector.visible = true
      // this.uiAddHintText.visible = false

      // addMaterial.alphaTexture = resources.images.xrotate
      // addMaterial.emissiveColor = Color3.Red()
     // picker.addComponentOrReplace(addMaterial)
     changeMaterial(resources.images.xrotate,Color3.Red())

    })

    this.zrotateIcon = new UIImage(this.uiMenuBackgroundRect, resources.icons.zrotate)
    this.zrotateIcon.sourceWidth = 50
    this.zrotateIcon.sourceHeight = 50
    this.zrotateIcon.width = 18
    this.zrotateIcon.height = 19.98 // Compensate by 11.1% for aspect ratio issue
    this.zrotateIcon.positionX = 145
    this.zrotateIcon.positionY = -5
    this.zrotateIcon.isPointerBlocker = true
    this.zrotateIcon.visible = true
    this.zrotateIcon.onClick = new OnPointerDown(()=>{
      Manager.activeMode = Mode.Zrotate
      this.switchModeIcon(Mode.Zrotate)
      this.uiEditSelector.visible = true
      // this.uiAddHintText.visible = false
      // addMaterial.alphaTexture = resources.images.zrotate
      // addMaterial.emissiveColor = Color3.Blue()
     // picker.addComponentOrReplace(addMaterial).
     changeMaterial(resources.images.zrotate,Color3.Blue())

    })

    // this.foundationAddIcon = new UIImage(this.container, resources.icons.foundationAdd)
    // this.foundationAddIcon.sourceWidth = 50
    // this.foundationAddIcon.sourceHeight = 50
    // this.foundationAddIcon.width = 18
    // this.foundationAddIcon.height = 19.98 // Compensate by 11.1% for aspect ratio issue
    // this.foundationAddIcon.positionX = 0
    // this.foundationAddIcon.positionY = 15
    // this.foundationAddIcon.isPointerBlocker = false
    // this.foundationAddIcon.visible = false


    const rect = new UIContainerRect(canvas)
    rect.hAlign = 'right'
    rect.vAlign = 'top'
    rect.opacity = 0.8

    ///////////////////////////////////////////////////////////////////
    //Body colour menu



    this.uiModelMenu = new UIContainerRect(canvas)
    this.uiModelMenu.visible = true
    this.uiModelMenu.isPointerBlocker = true
    this.uiModelMenu.width = 0
    this.uiModelMenu.height = 0
    this.uiModelMenu.positionX = 650
    this.uiModelMenu.positionY = 30
    this.uiModelMenu.hAlign = "left"
    this.uiModelMenu.vAlign = "top"
    this.uiModelMenu.opacity = 1
    this.uiModelMenu.color = Color4.Black()
    this.uiModelMenu.visible = false
    


      this.uiModelMenuRect = new UIImage(this.uiModelMenu, resources.images.uiModelBackground)
      this.uiModelMenuRect.sourceHeight = 189
      this.uiModelMenuRect.sourceWidth = 545      
      this.uiModelMenuRect.width = 165
      this.uiModelMenuRect.height = 50 // Compensate by 11.1% for aspect ratio issue
      this.uiModelMenuRect.positionX = 0
      this.uiModelMenuRect.positionY = 0
      this.uiModelMenuRect.isPointerBlocker = true
      this.uiModelMenuRect.opacity = .8

      
      
      this.uiMessage3 = new UIContainerRect(canvas)
      this.uiMessage3.visible = true
      this.uiMessage3.isPointerBlocker = true
      this.uiMessage3.width = 120
      this.uiMessage3.height = 20
      this.uiMessage3.positionX = 660
      this.uiMessage3.positionY = 0
      this.uiMessage3.hAlign = "left"
      this.uiMessage3.vAlign = "top"
      this.uiMessage3.opacity = .8
      this.uiMessage3.color = Color4.Red()
      this.uiMessage3.visible = false
      

      

      this.uiModelHintText = new UIText(this.uiMessage3)
      this.uiModelHintText.value = "Click to change block"
      this.uiModelHintText.fontSize = 8
      this.uiModelHintText.height = 10
      this.uiModelHintText.positionY = -5
      this.uiModelHintText.positionX = 3
      this.uiModelHintText.hAlign = "center"
      this.uiModelHintText.vAlign = "top"

    //block icon
    this.blockIcon = new UIImage(this.uiModelMenu, resources.images.r1c1)
    this.blockIcon.sourceWidth = 90
    this.blockIcon.sourceHeight = 90
    this.blockIcon.width = 40
    this.blockIcon.height = 40 // Compensate by 11.1% for aspect ratio issue
    this.blockIcon.positionX = 50
    this.blockIcon.positionY = 0
    this.blockIcon.isPointerBlocker = true
    this.blockIcon.visible = true
    this.blockIcon.onClick = new OnPointerDown(()=>{
      this.modelIconContainer.visible = true
      this.uiMessage3.visible = false
    })

      
      this.uiModelBodyBtn = new UIImage(this.uiModelMenu, resources.images.uiModelBody)
      this.uiModelBodyBtn.sourceHeight = 56
      this.uiModelBodyBtn.sourceWidth = 190      
      this.uiModelBodyBtn.width = 60
      this.uiModelBodyBtn.height = 15 // Compensate by 11.1% for aspect ratio issue
      this.uiModelBodyBtn.positionX = 100
      this.uiModelBodyBtn.positionY = 14
      this.uiModelBodyBtn.isPointerBlocker = true
      this.uiModelBodyBtn.opacity = .8
      this.uiModelBodyBtn.onClick =  new OnPointerDown(()=>{
        this.menuBodyColour.visible = true
        this.colourPart = "body"
      })

      
      this.uiModelFaceBtn = new UIImage(this.uiModelMenu, resources.images.uiModelFace)
      this.uiModelFaceBtn.sourceHeight = 56
      this.uiModelFaceBtn.sourceWidth = 190      
      this.uiModelFaceBtn.width = 60
      this.uiModelFaceBtn.height = 15 
      this.uiModelFaceBtn.positionX = 100
      this.uiModelFaceBtn.positionY = 0
      this.uiModelFaceBtn.isPointerBlocker = true
      this.uiModelFaceBtn.opacity = .8
      this.uiModelFaceBtn.onClick = new OnPointerDown(()=>{
        log('face?')
        this.menuBodyColour.visible = true
        this.colourPart ="face"
      })


      this.uiModelBorderBtn = new UIImage(this.uiModelMenu, resources.images.uiModelBorder)
      this.uiModelBorderBtn.sourceHeight = 56
      this.uiModelBorderBtn.sourceWidth = 190      
      this.uiModelBorderBtn.width = 60
      this.uiModelBorderBtn.height = 15 
      this.uiModelBorderBtn.positionX = 100
      this.uiModelBorderBtn.positionY = -13
      this.uiModelBorderBtn.isPointerBlocker = true
      this.uiModelBorderBtn.opacity = .8
      this.uiModelBorderBtn.onClick =  new OnPointerDown(()=>{
        this.uiModelMenu.visible = true
        this.colourPart = "border"
      })


    // this.selectionBodyColour = new UIContainerRect(canvas)
    // this.selectionBodyColour.visible = true
    // this.selectionBodyColour.width = 45
    // this.selectionBodyColour.height = 35
    // this.selectionBodyColour.positionX = 550
    // this.selectionBodyColour.positionY = 60
    // this.selectionBodyColour.hAlign = "left"
    // this.selectionBodyColour.vAlign = "top"
    // this.selectionBodyColour.color = Color4.Black()
    // this.selectionBodyColour.opacity = .5
    // // this.SelectionBodyColour.thickness = 2


    // this.bodyColourHeader = new UIText(this.selectionBodyColour)
    // this.bodyColourHeader.value = "Body Colour"
    // this.bodyColourHeader.fontSize = 6
    // this.bodyColourHeader.height = 10
    // this.bodyColourHeader.positionY = -2
    // this.bodyColourHeader.positionX = 3
    // this.bodyColourHeader.hAlign = "center"
    // this.bodyColourHeader.vAlign = "top"
    

    ////////////////////////////////////
    //SELECTED COLOUR ICON: 

    this.selectedBodyBlack = new UIImage(this.uiModelMenu, resources.images.black)
    this.selectedBodyBlack.sourceHeight = 20
    this.selectedBodyBlack.sourceWidth = 41      
    this.selectedBodyBlack.height = 10 
    this.selectedBodyBlack.width = 25
    this.selectedBodyBlack.positionX = 130
    this.selectedBodyBlack.positionY = 14
    this.selectedBodyBlack.isPointerBlocker = true
    this.selectedBodyBlack.visible = true
    this.selectedBodyBlack.onClick = new OnPointerDown(()=>{
      
      this.menuBodyColour.visible = true
      this.colourPart = "body"
      
    })

    
    this.selectedBodyBlue = new UIImage(this.uiModelMenu, resources.images.blue)
    this.selectedBodyBlue.sourceHeight = 20
    this.selectedBodyBlue.sourceWidth = 41      
    this.selectedBodyBlue.height = 10
    this.selectedBodyBlue.width = 25
    this.selectedBodyBlue.positionX = 130
    this.selectedBodyBlue.positionY = 14
    this.selectedBodyBlue.isPointerBlocker = true
    this.selectedBodyBlue.visible = false
    this.selectedBodyBlue.onClick = new OnPointerDown(()=>{
      log('TODO Open menuBodyColour')
      this.menuBodyColour.visible = true
      this.colourPart = "body"
   

    })

    
    
    this.selectedBodyBrown = new UIImage(this.uiModelMenu, resources.images.brown)
    this.selectedBodyBrown.sourceHeight = 20
    this.selectedBodyBrown.sourceWidth = 41      
    this.selectedBodyBrown.height = 10
    this.selectedBodyBrown.width = 25
    this.selectedBodyBrown.positionX = 130
    this.selectedBodyBrown.positionY = 14
    this.selectedBodyBrown.isPointerBlocker = true
    this.selectedBodyBrown.visible = false
    this.selectedBodyBrown.onClick = new OnPointerDown(()=>{
      log('TODO Open menuBodyColour')
      this.menuBodyColour.visible = true
      this.colourPart = "body"


    })

    
    
    this.selectedBodyGreen = new UIImage(this.uiModelMenu, resources.images.green)
    this.selectedBodyGreen.sourceHeight = 20
    this.selectedBodyGreen.sourceWidth = 41      
    this.selectedBodyGreen.height = 10
    this.selectedBodyGreen.width = 25
    this.selectedBodyGreen.positionX = 130
    this.selectedBodyGreen.positionY = 14
    this.selectedBodyGreen.isPointerBlocker = true
    this.selectedBodyGreen.visible = false
    this.selectedBodyGreen.onClick = new OnPointerDown(()=>{
      log('TODO Open menuBodyColour')
      this.menuBodyColour.visible = true
      this.colourPart = "body"


    })

    
    
    this.selectedBodyGrey= new UIImage(this.uiModelMenu, resources.images.grey)
    this.selectedBodyGrey.sourceHeight = 20
    this.selectedBodyGrey.sourceWidth = 41      
    this.selectedBodyGrey.height = 10
    this.selectedBodyGrey.width = 25
    this.selectedBodyGrey.positionX = 130
    this.selectedBodyGrey.positionY = 14
    this.selectedBodyGrey.isPointerBlocker = true
    this.selectedBodyGrey.visible = false
    this.selectedBodyGrey.onClick = new OnPointerDown(()=>{
      log('TODO Open menuBodyColour')
      this.menuBodyColour.visible = true
      this.colourPart = "body"
 

    })

    
    
    this.selectedBodyLightGrey= new UIImage(this.uiModelMenu, resources.images.lightGrey)
    this.selectedBodyLightGrey.sourceHeight = 20
    this.selectedBodyLightGrey.sourceWidth = 41      
    this.selectedBodyLightGrey.height = 10
    this.selectedBodyLightGrey.width = 25
    this.selectedBodyLightGrey.positionX = 130
    this.selectedBodyLightGrey.positionY = 14
    this.selectedBodyLightGrey.isPointerBlocker = true
    this.selectedBodyLightGrey.visible = false
    this.selectedBodyLightGrey.onClick = new OnPointerDown(()=>{
      log('TODO Open menuBodyColour')
      this.menuBodyColour.visible = true
      this.colourPart = "body"
    

    })


    
    this.selectedBodyOrange= new UIImage(this.uiModelMenu, resources.images.orange)
    this.selectedBodyOrange.sourceHeight = 20
    this.selectedBodyOrange.sourceWidth = 41      
    this.selectedBodyOrange.height = 10
    this.selectedBodyOrange.width = 25
    this.selectedBodyOrange.positionX = 130
    this.selectedBodyOrange.positionY = 14
    this.selectedBodyOrange.isPointerBlocker = true
    this.selectedBodyOrange.visible = false
    this.selectedBodyOrange.onClick = new OnPointerDown(()=>{
      log('TODO Open menuBodyColour')
      this.menuBodyColour.visible = true
      this.colourPart = "body"

    })

    
    this.selectedBodyPink= new UIImage(this.uiModelMenu, resources.images.pink)
    this.selectedBodyPink.sourceHeight = 20
    this.selectedBodyPink.sourceWidth = 41      
    this.selectedBodyPink.height = 10
    this.selectedBodyPink.width = 25
    this.selectedBodyPink.positionX = 130
    this.selectedBodyPink.positionY = 14
    this.selectedBodyPink.isPointerBlocker = true
    this.selectedBodyPink.visible = false
    this.selectedBodyPink.onClick = new OnPointerDown(()=>{
      log('TODO Open menuBodyColour')
      this.menuBodyColour.visible = true
      this.colourPart = "body"


    })

    
    this.selectedBodyRed= new UIImage(this.uiModelMenu, resources.images.red)
    this.selectedBodyRed.sourceHeight = 20
    this.selectedBodyRed.sourceWidth = 41      
    this.selectedBodyRed.height = 10
    this.selectedBodyRed.width = 25
    this.selectedBodyRed.positionX = 130
    this.selectedBodyRed.positionY = 14
    this.selectedBodyRed.isPointerBlocker = true
    this.selectedBodyRed.visible = false
    this.selectedBodyRed.onClick = new OnPointerDown(()=>{
      log('TODO Open menuBodyColour')
      this.menuBodyColour.visible = true
      this.colourPart = "body"


    })

    
    this.selectedBodyYellow= new UIImage(this.uiModelMenu, resources.images.yellow)
    this.selectedBodyYellow.sourceHeight = 20
    this.selectedBodyYellow.sourceWidth = 41      
    this.selectedBodyYellow.height = 10
    this.selectedBodyYellow.width = 25
    this.selectedBodyYellow.positionX = 130
    this.selectedBodyYellow.positionY = 14
    this.selectedBodyYellow.isPointerBlocker = true
    this.selectedBodyYellow.visible = false
    this.selectedBodyYellow.onClick = new OnPointerDown(()=>{
      log('TODO Open menuBodyColour')
      this.menuBodyColour.visible = true
      this.colourPart = "body"


    })
    
    this.selectedBodyWhite= new UIImage(this.uiModelMenu, resources.images.white)
    this.selectedBodyWhite.sourceHeight = 20
    this.selectedBodyWhite.sourceWidth = 41      
    this.selectedBodyWhite.height = 10
    this.selectedBodyWhite.width = 25
    this.selectedBodyWhite.positionX = 130
    this.selectedBodyWhite.positionY = 14
    this.selectedBodyWhite.isPointerBlocker = true
    this.selectedBodyWhite.visible = false
    this.selectedBodyWhite.onClick = new OnPointerDown(()=>{
      log('TODO Open menuBodyColour')
      this.menuBodyColour.visible = true
      this.colourPart = "body"

    })

    
    this.selectedBodyNoSelection= new UIImage(this.uiModelMenu, resources.images.noSelection)
    this.selectedBodyNoSelection.sourceHeight = 20
    this.selectedBodyNoSelection.sourceWidth = 41      
    this.selectedBodyNoSelection.height = 10
    this.selectedBodyNoSelection.width = 25
    this.selectedBodyNoSelection.positionX = 130
    this.selectedBodyNoSelection.positionY = 14
    this.selectedBodyNoSelection.isPointerBlocker = true
    this.selectedBodyNoSelection.visible = false
    this.selectedBodyNoSelection.onClick = new OnPointerDown(()=>{
      log('TODO Open menuBodyColour')
      this.menuBodyColour.visible = true
      this.colourPart = "body"


    })











    ////////////////////////////////////
    //SELECTED COLOUR ICON: FACE

    this.selectedFaceBlack = new UIImage(this.uiModelMenu, resources.images.black)
    this.selectedFaceBlack.sourceHeight = 20
    this.selectedFaceBlack.sourceWidth = 41      
    this.selectedFaceBlack.height = 10 
    this.selectedFaceBlack.width = 25
    this.selectedFaceBlack.positionX = 130
    this.selectedFaceBlack.positionY = 0
    this.selectedFaceBlack.isPointerBlocker = true
    this.selectedFaceBlack.visible = true
    this.selectedFaceBlack.onClick = new OnPointerDown(()=>{
      
      this.menuBodyColour.visible = true
      this.colourPart = "face"

    })

    
    this.selectedFaceBlue = new UIImage(this.uiModelMenu, resources.images.blue)
    this.selectedFaceBlue.sourceHeight = 20
    this.selectedFaceBlue.sourceWidth = 41      
    this.selectedFaceBlue.height = 10
    this.selectedFaceBlue.width = 25
    this.selectedFaceBlue.positionX = 130
    this.selectedFaceBlue.positionY = 0
    this.selectedFaceBlue.isPointerBlocker = true
    this.selectedFaceBlue.visible = false
    this.selectedFaceBlue.onClick = new OnPointerDown(()=>{
      this.colourPart = "face"
      this.menuBodyColour.visible = true


    })

    
    
    this.selectedFaceBrown = new UIImage(this.uiModelMenu, resources.images.brown)
    this.selectedFaceBrown.sourceHeight = 20
    this.selectedFaceBrown.sourceWidth = 41      
    this.selectedFaceBrown.height = 10
    this.selectedFaceBrown.width = 25
    this.selectedFaceBrown.positionX = 130
    this.selectedFaceBrown.positionY = 0
    this.selectedFaceBrown.isPointerBlocker = true
    this.selectedFaceBrown.visible = false
    this.selectedFaceBrown.onClick = new OnPointerDown(()=>{
      this.colourPart = "face"
      this.menuBodyColour.visible = true


    })

    
    
    this.selectedFaceGreen = new UIImage(this.uiModelMenu, resources.images.green)
    this.selectedFaceGreen.sourceHeight = 20
    this.selectedFaceGreen.sourceWidth = 41      
    this.selectedFaceGreen.height = 10
    this.selectedFaceGreen.width = 25
    this.selectedFaceGreen.positionX = 130
    this.selectedFaceGreen.positionY = 0
    this.selectedFaceGreen.isPointerBlocker = true
    this.selectedFaceGreen.visible = false
    this.selectedFaceGreen.onClick = new OnPointerDown(()=>{
      this.colourPart = "face"
      this.menuBodyColour.visible = true


    })

    
    
    this.selectedFaceGrey= new UIImage(this.uiModelMenu, resources.images.grey)
    this.selectedFaceGrey.sourceHeight = 20
    this.selectedFaceGrey.sourceWidth = 41      
    this.selectedFaceGrey.height = 10
    this.selectedFaceGrey.width = 25
    this.selectedFaceGrey.positionX = 130
    this.selectedFaceGrey.positionY = 0
    this.selectedFaceGrey.isPointerBlocker = true
    this.selectedFaceGrey.visible = false
    this.selectedFaceGrey.onClick = new OnPointerDown(()=>{
      this.colourPart = "face"
      this.menuBodyColour.visible = true
  

    })

    
    
    this.selectedFaceLightGrey= new UIImage(this.uiModelMenu, resources.images.lightGrey)
    this.selectedFaceLightGrey.sourceHeight = 20
    this.selectedFaceLightGrey.sourceWidth = 41      
    this.selectedFaceLightGrey.height = 10
    this.selectedFaceLightGrey.width = 25
    this.selectedFaceLightGrey.positionX = 130
    this.selectedFaceLightGrey.positionY = 0
    this.selectedFaceLightGrey.isPointerBlocker = true
    this.selectedFaceLightGrey.visible = false
    this.selectedFaceLightGrey.onClick = new OnPointerDown(()=>{
      this.colourPart = "face"
      this.menuBodyColour.visible = true


    })


    
    this.selectedFaceOrange= new UIImage(this.uiModelMenu, resources.images.orange)
    this.selectedFaceOrange.sourceHeight = 20
    this.selectedFaceOrange.sourceWidth = 41      
    this.selectedFaceOrange.height = 10
    this.selectedFaceOrange.width = 25
    this.selectedFaceOrange.positionX = 130
    this.selectedFaceOrange.positionY = 0
    this.selectedFaceOrange.isPointerBlocker = true
    this.selectedFaceOrange.visible = false
    this.selectedFaceOrange.onClick = new OnPointerDown(()=>{
      this.colourPart = "face"
      this.menuBodyColour.visible = true


    })

    
    this.selectedFacePink= new UIImage(this.uiModelMenu, resources.images.pink)
    this.selectedFacePink.sourceHeight = 20
    this.selectedFacePink.sourceWidth = 41      
    this.selectedFacePink.height = 10
    this.selectedFacePink.width = 25
    this.selectedFacePink.positionX = 130
    this.selectedFacePink.positionY = 0
    this.selectedFacePink.isPointerBlocker = true
    this.selectedFacePink.visible = false
    this.selectedFacePink.onClick = new OnPointerDown(()=>{
      this.colourPart = "face"
      this.menuBodyColour.visible = true


    })

    
    this.selectedFaceRed= new UIImage(this.uiModelMenu, resources.images.red)
    this.selectedFaceRed.sourceHeight = 20
    this.selectedFaceRed.sourceWidth = 41      
    this.selectedFaceRed.height = 10
    this.selectedFaceRed.width = 25
    this.selectedFaceRed.positionX = 130
    this.selectedFaceRed.positionY = 0
    this.selectedFaceRed.isPointerBlocker = true
    this.selectedFaceRed.visible = false
    this.selectedFaceRed.onClick = new OnPointerDown(()=>{
      this.colourPart = "face"
      this.menuBodyColour.visible = true
 

    })

    
    this.selectedFaceYellow= new UIImage(this.uiModelMenu, resources.images.yellow)
    this.selectedFaceYellow.sourceHeight = 20
    this.selectedFaceYellow.sourceWidth = 41      
    this.selectedFaceYellow.height = 10
    this.selectedFaceYellow.width = 25
    this.selectedFaceYellow.positionX = 130
    this.selectedFaceYellow.positionY = 0
    this.selectedFaceYellow.isPointerBlocker = true
    this.selectedFaceYellow.visible = false
    this.selectedFaceYellow.onClick = new OnPointerDown(()=>{
      this.colourPart = "face"
      this.menuBodyColour.visible = true
    

    })
    
    this.selectedFaceWhite= new UIImage(this.uiModelMenu, resources.images.white)
    this.selectedFaceWhite.sourceHeight = 20
    this.selectedFaceWhite.sourceWidth = 41      
    this.selectedFaceWhite.height = 10
    this.selectedFaceWhite.width = 25
    this.selectedFaceWhite.positionX = 130
    this.selectedFaceWhite.positionY = 0
    this.selectedFaceWhite.isPointerBlocker = true
    this.selectedFaceWhite.visible = false
    this.selectedFaceWhite.onClick = new OnPointerDown(()=>{
      this.colourPart = "face"
      this.menuBodyColour.visible = true


    })

    
    this.selectedFaceNoSelection= new UIImage(this.uiModelMenu, resources.images.noSelection)
    this.selectedFaceNoSelection.sourceHeight = 20
    this.selectedFaceNoSelection.sourceWidth = 41      
    this.selectedFaceNoSelection.height = 10
    this.selectedFaceNoSelection.width = 25
    this.selectedFaceNoSelection.positionX = 130
    this.selectedFaceNoSelection.positionY = 0
    this.selectedFaceNoSelection.isPointerBlocker = true
    this.selectedFaceNoSelection.visible = false
    this.selectedFaceNoSelection.onClick = new OnPointerDown(()=>{
      this.colourPart = "face"
      this.menuBodyColour.visible = true
 

    })






    ////////////////////////////////////
    //SELECTED COLOUR ICON: Border

    this.selectedBorderBlack = new UIImage(this.uiModelMenu, resources.images.black)
    this.selectedBorderBlack.sourceHeight = 20
    this.selectedBorderBlack.sourceWidth = 41      
    this.selectedBorderBlack.height = 10 
    this.selectedBorderBlack.width = 25
    this.selectedBorderBlack.positionX = 130
    this.selectedBorderBlack.positionY = -10
    this.selectedBorderBlack.isPointerBlocker = true
    this.selectedBorderBlack.visible = true
    this.selectedBorderBlack.onClick = new OnPointerDown(()=>{
      
      this.menuBodyColour.visible = true
      this.colourPart = "border"
    })

    
    this.selectedBorderBlue = new UIImage(this.uiModelMenu, resources.images.blue)
    this.selectedBorderBlue.sourceHeight = 20
    this.selectedBorderBlue.sourceWidth = 41      
    this.selectedBorderBlue.height = 10
    this.selectedBorderBlue.width = 25
    this.selectedBorderBlue.positionX = 130
    this.selectedBorderBlue.positionY = -10
    this.selectedBorderBlue.isPointerBlocker = true
    this.selectedBorderBlue.visible = false
    this.selectedBorderBlue.onClick = new OnPointerDown(()=>{
      this.colourPart = "border"
      this.menuBodyColour.visible = true
    })

    
    
    this.selectedBorderBrown = new UIImage(this.uiModelMenu, resources.images.brown)
    this.selectedBorderBrown.sourceHeight = 20
    this.selectedBorderBrown.sourceWidth = 41      
    this.selectedBorderBrown.height = 10
    this.selectedBorderBrown.width = 25
    this.selectedBorderBrown.positionX = 130
    this.selectedBorderBrown.positionY = -10
    this.selectedBorderBrown.isPointerBlocker = true
    this.selectedBorderBrown.visible = false
    this.selectedBorderBrown.onClick = new OnPointerDown(()=>{
      this.colourPart = "border"
      this.menuBodyColour.visible = true
    })

    
    
    this.selectedBorderGreen = new UIImage(this.uiModelMenu, resources.images.green)
    this.selectedBorderGreen.sourceHeight = 20
    this.selectedBorderGreen.sourceWidth = 41      
    this.selectedBorderGreen.height = 10
    this.selectedBorderGreen.width = 25
    this.selectedBorderGreen.positionX = 130
    this.selectedBorderGreen.positionY = -10
    this.selectedBorderGreen.isPointerBlocker = true
    this.selectedBorderGreen.visible = false
    this.selectedBorderGreen.onClick = new OnPointerDown(()=>{
      this.colourPart = "border"
      this.menuBodyColour.visible = true
    })

    
    
    this.selectedBorderGrey= new UIImage(this.uiModelMenu, resources.images.grey)
    this.selectedBorderGrey.sourceHeight = 20
    this.selectedBorderGrey.sourceWidth = 41      
    this.selectedBorderGrey.height = 10
    this.selectedBorderGrey.width = 25
    this.selectedBorderGrey.positionX = 130
    this.selectedBorderGrey.positionY = -10
    this.selectedBorderGrey.isPointerBlocker = true
    this.selectedBorderGrey.visible = false
    this.selectedBorderGrey.onClick = new OnPointerDown(()=>{
      this.colourPart = "border"
      this.menuBodyColour.visible = true
    })

    
    
    this.selectedBorderLightGrey= new UIImage(this.uiModelMenu, resources.images.lightGrey)
    this.selectedBorderLightGrey.sourceHeight = 20
    this.selectedBorderLightGrey.sourceWidth = 41      
    this.selectedBorderLightGrey.height = 10
    this.selectedBorderLightGrey.width = 25
    this.selectedBorderLightGrey.positionX = 130
    this.selectedBorderLightGrey.positionY = -10
    this.selectedBorderLightGrey.isPointerBlocker = true
    this.selectedBorderLightGrey.visible = false
    this.selectedBorderLightGrey.onClick = new OnPointerDown(()=>{
      this.colourPart = "border"
      this.menuBodyColour.visible = true
    })


    
    this.selectedBorderOrange= new UIImage(this.uiModelMenu, resources.images.orange)
    this.selectedBorderOrange.sourceHeight = 20
    this.selectedBorderOrange.sourceWidth = 41      
    this.selectedBorderOrange.height = 10
    this.selectedBorderOrange.width = 25
    this.selectedBorderOrange.positionX = 130
    this.selectedBorderOrange.positionY = -10
    this.selectedBorderOrange.isPointerBlocker = true
    this.selectedBorderOrange.visible = false
    this.selectedBorderOrange.onClick = new OnPointerDown(()=>{
      this.colourPart = "border"
      this.menuBodyColour.visible = true
    })

    
    this.selectedBorderPink= new UIImage(this.uiModelMenu, resources.images.pink)
    this.selectedBorderPink.sourceHeight = 20
    this.selectedBorderPink.sourceWidth = 41      
    this.selectedBorderPink.height = 10
    this.selectedBorderPink.width = 25
    this.selectedBorderPink.positionX = 130
    this.selectedBorderPink.positionY = -10
    this.selectedBorderPink.isPointerBlocker = true
    this.selectedBorderPink.visible = false
    this.selectedBorderPink.onClick = new OnPointerDown(()=>{
      this.colourPart = "border"
      this.menuBodyColour.visible = true
    })

    
    this.selectedBorderRed= new UIImage(this.uiModelMenu, resources.images.red)
    this.selectedBorderRed.sourceHeight = 20
    this.selectedBorderRed.sourceWidth = 41      
    this.selectedBorderRed.height = 10
    this.selectedBorderRed.width = 25
    this.selectedBorderRed.positionX = 130
    this.selectedBorderRed.positionY = -10
    this.selectedBorderRed.isPointerBlocker = true
    this.selectedBorderRed.visible = false
    this.selectedBorderRed.onClick = new OnPointerDown(()=>{
      this.colourPart = "border"
      this.menuBodyColour.visible = true
    })

    
    this.selectedBorderYellow= new UIImage(this.uiModelMenu, resources.images.yellow)
    this.selectedBorderYellow.sourceHeight = 20
    this.selectedBorderYellow.sourceWidth = 41      
    this.selectedBorderYellow.height = 10
    this.selectedBorderYellow.width = 25
    this.selectedBorderYellow.positionX = 130
    this.selectedBorderYellow.positionY = -10
    this.selectedBorderYellow.isPointerBlocker = true
    this.selectedBorderYellow.visible = false
    this.selectedBorderYellow.onClick = new OnPointerDown(()=>{
      this.colourPart = "border"
      this.menuBodyColour.visible = true
    })
    
    this.selectedBorderWhite= new UIImage(this.uiModelMenu, resources.images.white)
    this.selectedBorderWhite.sourceHeight = 20
    this.selectedBorderWhite.sourceWidth = 41      
    this.selectedBorderWhite.height = 10
    this.selectedBorderWhite.width = 25
    this.selectedBorderWhite.positionX = 130
    this.selectedBorderWhite.positionY = -10
    this.selectedBorderWhite.isPointerBlocker = true
    this.selectedBorderWhite.visible = false
    this.selectedBorderWhite.onClick = new OnPointerDown(()=>{
      this.colourPart = "border"
      this.menuBodyColour.visible = true
    })

    
    this.selectedBorderNoSelection= new UIImage(this.uiModelMenu, resources.images.noSelection)
    this.selectedBorderNoSelection.sourceHeight = 20
    this.selectedBorderNoSelection.sourceWidth = 41      
    this.selectedBorderNoSelection.height = 10
    this.selectedBorderNoSelection.width = 25
    this.selectedBorderNoSelection.positionX = 130
    this.selectedBorderNoSelection.positionY = -10
    this.selectedBorderNoSelection.isPointerBlocker = true
    this.selectedBorderNoSelection.visible = false
    this.selectedBorderNoSelection.onClick = new OnPointerDown(()=>{
      this.colourPart = "border"
      this.menuBodyColour.visible = true
    })







    //  this.colourSwatchs = new UIContainerRect(canvas)
    //  this.colourSwatchs.visible = true
    //  this.colourSwatchs.width = 45
    //  this.colourSwatchs.height = 35
    //  this.colourSwatchs.positionX = 375
    //  this.colourSwatchs.positionY = 60
    //  this.colourSwatchs.hAlign = "left"
    //  this.colourSwatchs.vAlign = "top"
    //  this.colourSwatchs.color = Color4.Black()
    //  this.colourSwatchs.opacity = .5
    //  // this.bodyColour.thickness = 2
 
 

    ////////////////////////////////////////////////////////////////////////


    this.modelIconContainer = new UIContainerRect(canvas)
    this.modelIconContainer.width = 820
    this.modelIconContainer.height = 120
    this.modelIconContainer.positionX = 165
    this.modelIconContainer.hAlign = "left"
    this.modelIconContainer.vAlign = "top"
    this.modelIconContainer.color = Color4.Black()
    this.modelIconContainer.opacity = .7
    this.modelIconContainer.visible = false
  
  

    this.fText = new UIText(this.modelIconContainer)
    this.fText.value = "F"
    this.fText.fontSize = 14
    this.fText.height = 10
    this.fText.positionY = 10
    this.fText.hAlign = "left"
    this.fText.vAlign = "top"
    

    this.uiClose = new UIImage(this.modelIconContainer, resources.images.uiClose)
    this.uiClose.sourceWidth = 62
    this.uiClose.sourceHeight = 62
    this.uiClose.width = 20
    this.uiClose.height = 20 
    this.uiClose.positionX = 395
    this.uiClose.positionY = 45
    this.uiClose.onClick = new OnPointerDown(()=>{
      this.modelIconContainer.visible = false
    })

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
      ModelIconManager.setModel(1)
      this.manualSelectIcon(1)
      
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

      ModelIconManager.setModel(2)
      this.manualSelectIcon(2)
      
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




    //////////////////////////////////////////////////
    /// COLOUR MENU //////////////////////////////////

    this.menuBodyColour = new UIContainerRect(canvas)
    this.menuBodyColour.visible = true
    this.menuBodyColour.width = 35
    this.menuBodyColour.height = 190
    this.menuBodyColour.positionX = 765
    this.menuBodyColour.positionY = 0
    this.menuBodyColour.hAlign = "left"
    this.menuBodyColour.vAlign = "top"
    //this.menuBodyColour.color = Color4.Black()
    this.menuBodyColour.opacity = 1
    this.menuBodyColour.visible = false


    
    this.uiColourMenu = new UIImage(this.menuBodyColour, resources.images.uiColourMenu)
    this.uiColourMenu.sourceHeight = 521
    this.uiColourMenu.sourceWidth = 105      
    this.uiColourMenu.height = 190 
    this.uiColourMenu.width = 35
    this.uiColourMenu.positionX = 0
    this.uiColourMenu.positionY = -3
    this.uiColourMenu.isPointerBlocker = true

    this.noSelection = new UIImage(this.menuBodyColour, resources.images.noSelection)
    this.noSelection.sourceHeight = 20
    this.noSelection.sourceWidth = 41      
    this.noSelection.height = 15 
    this.noSelection.width = 25
    this.noSelection.positionX = 0
    this.noSelection.positionY = 80
    this.noSelection.isPointerBlocker = true
    this.noSelection.onClick = new OnPointerDown(()=>{
      
      
      
      this.menuBodyColour.visible = false

      if(this.colourPart=="body"){
        
        log('body no select')
        this.selectedBodyNoSelection.visible = true
        this.selectedBodyBlack.visible = false
        this.selectedBodyBlue.visible = false
        this.selectedBodyBrown.visible = false
        this.selectedBodyGreen.visible = false
        this.selectedBodyGrey.visible = false
        this.selectedBodyLightGrey.visible = false
        this.selectedBodyOrange.visible = false
        this.selectedBodyPink.visible = false
        this.selectedBodyRed.visible = false
        this.selectedBodyWhite.visible = false
        this.selectedBodyYellow.visible = false
      }
      if(this.colourPart=="face"){
         log('face no select')
        this.selectedFaceNoSelection.visible = true
        this.selectedFaceBlack.visible = false
        this.selectedFaceBlue.visible = false
        this.selectedFaceBrown.visible = false
        this.selectedFaceGreen.visible = false
        this.selectedFaceGrey.visible = false
        this.selectedFaceLightGrey.visible = false
        this.selectedFaceOrange.visible = false
        this.selectedFacePink.visible = false
        this.selectedFaceRed.visible = false
        this.selectedFaceWhite.visible = false
        this.selectedFaceYellow.visible = false

      }
      if(this.colourPart=="border"){
        this.selectedBorderNoSelection.visible = true
        this.selectedBorderBlack.visible = false
        this.selectedBorderBlue.visible = false
        this.selectedBorderBrown.visible = false
        this.selectedBorderGreen.visible = false
        this.selectedBorderGrey.visible = false
        this.selectedBorderLightGrey.visible = false
        this.selectedBorderOrange.visible = false
        this.selectedBorderPink.visible = false
        this.selectedBorderRed.visible = false
        this.selectedBorderWhite.visible = false
        this.selectedBorderYellow.visible = false
      }
    })
     
    this.bodyBlack = new UIImage(this.menuBodyColour, resources.images.black)
    this.bodyBlack.sourceHeight = 20
    this.bodyBlack.sourceWidth = 41      
    this.bodyBlack.height = 15 
    this.bodyBlack.width = 25
    this.bodyBlack.positionX = 0
    this.bodyBlack.positionY = 65
    this.bodyBlack.isPointerBlocker = true
    this.bodyBlack.onClick = new OnPointerDown(()=>{
        if(this.colourPart=="body"){
          bodyId = 0
          this.selectedBodyNoSelection.visible = false
          this.selectedBodyBlack.visible = true
          this.selectedBodyBlue.visible = false
          this.selectedBodyBrown.visible = false
          this.selectedBodyGreen.visible = false
          this.selectedBodyGrey.visible = false
          this.selectedBodyLightGrey.visible = false
          this.selectedBodyOrange.visible = false
          this.selectedBodyPink.visible = false
          this.selectedBodyRed.visible = false
          this.selectedBodyWhite.visible = false
          this.selectedBodyYellow.visible = false
        }
        if(this.colourPart=="face"){
          faceId = 0
          this.selectedFaceNoSelection.visible = false
          this.selectedFaceBlack.visible = true
          this.selectedFaceBlue.visible = false
          this.selectedFaceBrown.visible = false
          this.selectedFaceGreen.visible = false
          this.selectedFaceGrey.visible = false
          this.selectedFaceLightGrey.visible = false
          this.selectedFaceOrange.visible = false
          this.selectedFacePink.visible = false
          this.selectedFaceRed.visible = false
          this.selectedFaceWhite.visible = false
          this.selectedFaceYellow.visible = false
        }

        if(this.colourPart=="border"){
          borderId = 0
          this.selectedBorderNoSelection.visible = false
          this.selectedBorderBlack.visible = true
          this.selectedBorderBlue.visible = false
          this.selectedBorderBrown.visible = false
          this.selectedBorderGreen.visible = false
          this.selectedBorderGrey.visible = false
          this.selectedBorderLightGrey.visible = false
          this.selectedBorderOrange.visible = false
          this.selectedBorderPink.visible = false
          this.selectedBorderRed.visible = false
          this.selectedBorderWhite.visible = false
          this.selectedBorderYellow.visible = false
        }
        this.menuBodyColour.visible = false
    })
     
    this.bodyBlue = new UIImage(this.menuBodyColour, resources.images.blue)
    this.bodyBlue.sourceHeight = 20
    this.bodyBlue.sourceWidth = 41      
    this.bodyBlue.height = 15 // Compensate by 11.1% for aspect ratio issue
    this.bodyBlue.width = 25
    this.bodyBlue.positionX = 0
    this.bodyBlue.positionY = 50
    this.bodyBlue.isPointerBlocker = true
    this.bodyBlue.onClick = new OnPointerDown(()=>{
      
      if(this.colourPart=="body"){
        bodyId = 1
        log('body '+bodyId)
        this.selectedBodyNoSelection.visible = false
        this.selectedBodyBlack.visible = false
        this.selectedBodyBlue.visible = true
        this.selectedBodyBrown.visible = false
        this.selectedBodyGreen.visible = false
        this.selectedBodyGrey.visible = false
        this.selectedBodyLightGrey.visible = false
        this.selectedBodyOrange.visible = false
        this.selectedBodyPink.visible = false
        this.selectedBodyRed.visible = false
        this.selectedBodyWhite.visible = false
        this.selectedBodyYellow.visible = false
      }
      if(this.colourPart=="face"){
        faceId = 1
        this.selectedFaceNoSelection.visible = false
        this.selectedFaceBlack.visible = false
        this.selectedFaceBlue.visible = true
        this.selectedFaceBrown.visible = false
        this.selectedFaceGreen.visible = false
        this.selectedFaceGrey.visible = false
        this.selectedFaceLightGrey.visible = false
        this.selectedFaceOrange.visible = false
        this.selectedFacePink.visible = false
        this.selectedFaceRed.visible = false
        this.selectedFaceWhite.visible = false
        this.selectedFaceYellow.visible = false
      }
      if(this.colourPart=="border"){
        borderId = 1
        this.selectedBorderNoSelection.visible = false
        this.selectedBorderBlack.visible = false
        this.selectedBorderBlue.visible = true
        this.selectedBorderBrown.visible = false
        this.selectedBorderGreen.visible = false
        this.selectedBorderGrey.visible = false
        this.selectedBorderLightGrey.visible = false
        this.selectedBorderOrange.visible = false
        this.selectedBorderPink.visible = false
        this.selectedBorderRed.visible = false
        this.selectedBorderWhite.visible = false
        this.selectedBorderYellow.visible = false
      }

      this.menuBodyColour.visible = false
    })

    
    this.bodyBrown = new UIImage(this.menuBodyColour, resources.images.brown)
    this.bodyBrown.sourceHeight = 20
    this.bodyBrown.sourceWidth = 41      
    this.bodyBrown.height = 15 // Compensate by 11.1% for aspect ratio issue
    this.bodyBrown.width = 25
    this.bodyBrown.positionX = 0
    this.bodyBrown.positionY = 35
    this.bodyBrown.isPointerBlocker = true
    this.bodyBrown.onClick = new OnPointerDown(()=>{

      if(this.colourPart=="body"){
        bodyId = 2
        this.selectedBodyNoSelection.visible = false
        this.selectedBodyBlack.visible = false
        this.selectedBodyBlue.visible = false
        this.selectedBodyBrown.visible = true
        this.selectedBodyGreen.visible = false
        this.selectedBodyGrey.visible = false
        this.selectedBodyLightGrey.visible = false
        this.selectedBodyOrange.visible = false
        this.selectedBodyPink.visible = false
        this.selectedBodyRed.visible = false
        this.selectedBodyWhite.visible = false
        this.selectedBodyYellow.visible = false
      
      }
      if(this.colourPart=="face"){
        faceId = 2
        this.selectedFaceNoSelection.visible = false
        this.selectedFaceBlack.visible = false
        this.selectedFaceBlue.visible = false
        this.selectedFaceBrown.visible = true
        this.selectedFaceGreen.visible = false
        this.selectedFaceGrey.visible = false
        this.selectedFaceLightGrey.visible = false
        this.selectedFaceOrange.visible = false
        this.selectedFacePink.visible = false
        this.selectedFaceRed.visible = false
        this.selectedFaceWhite.visible = false
        this.selectedFaceYellow.visible = false
      
      }
      if(this.colourPart=="border"){
        borderId = 2
        this.selectedBorderNoSelection.visible = false
        this.selectedBorderBlack.visible = false
        this.selectedBorderBlue.visible = false
        this.selectedBorderBrown.visible = true
        this.selectedBorderGreen.visible = false
        this.selectedBorderGrey.visible = false
        this.selectedBorderLightGrey.visible = false
        this.selectedBorderOrange.visible = false
        this.selectedBorderPink.visible = false
        this.selectedBorderRed.visible = false
        this.selectedBorderWhite.visible = false
        this.selectedBorderYellow.visible = false
      }

      this.menuBodyColour.visible = false

    })


    this.bodyGreen = new UIImage(this.menuBodyColour, resources.images.green)
    this.bodyGreen.sourceHeight = 20
    this.bodyGreen.sourceWidth = 41      
    this.bodyGreen.height = 15 // Compensate by 11.1% for aspect ratio issue
    this.bodyGreen.width = 25
    this.bodyGreen.positionX = 0
    this.bodyGreen.positionY = 20
    this.bodyGreen.isPointerBlocker = true
    this.bodyGreen.onClick = new OnPointerDown(()=>{
      
      if(this.colourPart=="body"){
        bodyId = 3
        this.selectedBodyNoSelection.visible = false
        this.selectedBodyBlack.visible = false
        this.selectedBodyBlue.visible = false
        this.selectedBodyBrown.visible = false
        this.selectedBodyGreen.visible = true
        this.selectedBodyGrey.visible = false
        this.selectedBodyLightGrey.visible = false
        this.selectedBodyOrange.visible = false
        this.selectedBodyPink.visible = false
        this.selectedBodyRed.visible = false
        this.selectedBodyWhite.visible = false
        this.selectedBodyYellow.visible = false
       
      }

      if(this.colourPart=="face"){
        faceId = 3
        this.selectedFaceNoSelection.visible = false
        this.selectedFaceBlack.visible = false
        this.selectedFaceBlue.visible = false
        this.selectedFaceBrown.visible = false
        this.selectedFaceGreen.visible = true
        this.selectedFaceGrey.visible = false
        this.selectedFaceLightGrey.visible = false
        this.selectedFaceOrange.visible = false
        this.selectedFacePink.visible = false
        this.selectedFaceRed.visible = false
        this.selectedFaceWhite.visible = false
        this.selectedFaceYellow.visible = false

      }
      if(this.colourPart=="border"){
        borderId = 3
        this.selectedBorderNoSelection.visible = false
        this.selectedBorderBlack.visible = false
        this.selectedBorderBlue.visible = false
        this.selectedBorderBrown.visible = false
        this.selectedBorderGreen.visible = true
        this.selectedBorderGrey.visible = false
        this.selectedBorderLightGrey.visible = false
        this.selectedBorderOrange.visible = false
        this.selectedBorderPink.visible = false
        this.selectedBorderRed.visible = false
        this.selectedBorderWhite.visible = false
        this.selectedBorderYellow.visible = false
      }
      this.menuBodyColour.visible = false
    })


    this.bodyGrey= new UIImage(this.menuBodyColour, resources.images.grey)
    this.bodyGrey.sourceHeight = 20
    this.bodyGrey.sourceWidth = 41      
    this.bodyGrey.height = 15 // Compensate by 11.1% for aspect ratio issue
    this.bodyGrey.width = 25
    this.bodyGrey.positionX = 0
    this.bodyGrey.positionY = 5
    this.bodyGrey.isPointerBlocker = true
    this.bodyGrey.onClick = new OnPointerDown(()=>{
      
      if(this.colourPart=="body"){
        bodyId = 4
        this.selectedBodyNoSelection.visible = false
        this.selectedBodyBlack.visible = false
        this.selectedBodyBlue.visible = false
        this.selectedBodyBrown.visible = false
        this.selectedBodyGreen.visible = false
        this.selectedBodyGrey.visible = true
        this.selectedBodyLightGrey.visible = false
        this.selectedBodyOrange.visible = false
        this.selectedBodyPink.visible = false
        this.selectedBodyRed.visible = false
        this.selectedBodyWhite.visible = false
        this.selectedBodyYellow.visible = false
      }

      if(this.colourPart=="face"){
        faceId = 4
        this.selectedFaceNoSelection.visible = false
        this.selectedFaceBlack.visible = false
        this.selectedFaceBlue.visible = false
        this.selectedFaceBrown.visible = false
        this.selectedFaceGreen.visible = false
        this.selectedFaceGrey.visible = true
        this.selectedFaceLightGrey.visible = false
        this.selectedFaceOrange.visible = false
        this.selectedFacePink.visible = false
        this.selectedFaceRed.visible = false
        this.selectedFaceWhite.visible = false
        this.selectedFaceYellow.visible = false
      }
      if(this.colourPart=="border"){
        borderId = 4
        this.selectedBorderNoSelection.visible = false
        this.selectedBorderBlack.visible = false
        this.selectedBorderBlue.visible = false
        this.selectedBorderBrown.visible = false
        this.selectedBorderGreen.visible = false
        this.selectedBorderGrey.visible = true
        this.selectedBorderLightGrey.visible = false
        this.selectedBorderOrange.visible = false
        this.selectedBorderPink.visible = false
        this.selectedBorderRed.visible = false
        this.selectedBorderWhite.visible = false
        this.selectedBorderYellow.visible = false
      }
      this.menuBodyColour.visible = false
    })


    this.bodyLightGrey= new UIImage(this.menuBodyColour, resources.images.lightGrey)
    this.bodyLightGrey.sourceHeight = 20
    this.bodyLightGrey.sourceWidth = 41      
    this.bodyLightGrey.height = 15 // Compensate by 11.1% for aspect ratio issue
    this.bodyLightGrey.width = 25
    this.bodyLightGrey.positionX = 0
    this.bodyLightGrey.positionY = -10
    this.bodyLightGrey.isPointerBlocker = true
    this.bodyLightGrey.onClick = new OnPointerDown(()=>{
      
      if(this.colourPart=="body"){
        bodyId = 5
        this.selectedBodyNoSelection.visible = false
        this.selectedBodyBlack.visible = false
        this.selectedBodyBlue.visible = false
        this.selectedBodyBrown.visible = false
        this.selectedBodyGreen.visible = false
        this.selectedBodyGrey.visible = false
        this.selectedBodyLightGrey.visible = true
        this.selectedBodyOrange.visible = false
        this.selectedBodyPink.visible = false
        this.selectedBodyRed.visible = false
        this.selectedBodyWhite.visible = false
        this.selectedBodyYellow.visible = false
        
      }
      if(this.colourPart=="face"){
        faceId = 5
        this.selectedFaceNoSelection.visible = false
        this.selectedFaceBlack.visible = false
        this.selectedFaceBlue.visible = false
        this.selectedFaceBrown.visible = false
        this.selectedFaceGreen.visible = false
        this.selectedFaceGrey.visible = false
        this.selectedFaceLightGrey.visible = true
        this.selectedFaceOrange.visible = false
        this.selectedFacePink.visible = false
        this.selectedFaceRed.visible = false
        this.selectedFaceWhite.visible = false
        this.selectedFaceYellow.visible = false

      }
      if(this.colourPart=="border"){
        borderId = 5
        this.selectedBorderNoSelection.visible = false
        this.selectedBorderBlack.visible = false
        this.selectedBorderBlue.visible = false
        this.selectedBorderBrown.visible = false
        this.selectedBorderGreen.visible = false
        this.selectedBorderGrey.visible = false
        this.selectedBorderLightGrey.visible = true
        this.selectedBorderOrange.visible = false
        this.selectedBorderPink.visible = false
        this.selectedBorderRed.visible = false
        this.selectedBorderWhite.visible = false
        this.selectedBorderYellow.visible = false
      }
      this.menuBodyColour.visible = false
    })

    
    this.bodyOrange= new UIImage(this.menuBodyColour, resources.images.orange)
    this.bodyOrange.sourceHeight = 20
    this.bodyOrange.sourceWidth = 41      
    this.bodyOrange.height = 15 // Compensate by 11.1% for aspect ratio issue
    this.bodyOrange.width = 25
    this.bodyOrange.positionX = 0
    this.bodyOrange.positionY = -25
    this.bodyOrange.isPointerBlocker = true
    this.bodyOrange.onClick = new OnPointerDown(()=>{
      if(this.colourPart=="body"){
        bodyId = 6
        this.selectedBodyNoSelection.visible = false
        this.selectedBodyBlack.visible = false
        this.selectedBodyBlue.visible = false
        this.selectedBodyBrown.visible = false
        this.selectedBodyGreen.visible = false
        this.selectedBodyGrey.visible = false
        this.selectedBodyLightGrey.visible = false
        this.selectedBodyOrange.visible = true
        this.selectedBodyPink.visible = false
        this.selectedBodyRed.visible = false
        this.selectedBodyWhite.visible = false
        this.selectedBodyYellow.visible = false
        
      }

      if(this.colourPart=="face"){
        faceId = 6
        this.selectedFaceNoSelection.visible = false
        this.selectedFaceBlack.visible = false
        this.selectedFaceBlue.visible = false
        this.selectedFaceBrown.visible = false
        this.selectedFaceGreen.visible = false
        this.selectedFaceGrey.visible = false
        this.selectedFaceLightGrey.visible = false
        this.selectedFaceOrange.visible = true
        this.selectedFacePink.visible = false
        this.selectedFaceRed.visible = false
        this.selectedFaceWhite.visible = false
        this.selectedFaceYellow.visible = false
        
      }
      if(this.colourPart=="border"){
        borderId = 6
        this.selectedBorderNoSelection.visible = false
        this.selectedBorderBlack.visible = false
        this.selectedBorderBlue.visible = false
        this.selectedBorderBrown.visible = false
        this.selectedBorderGreen.visible = false
        this.selectedBorderGrey.visible = false
        this.selectedBorderLightGrey.visible = false
        this.selectedBorderOrange.visible = true
        this.selectedBorderPink.visible = false
        this.selectedBorderRed.visible = false
        this.selectedBorderWhite.visible = false
        this.selectedBorderYellow.visible = false
      }
      this.menuBodyColour.visible = false
    })

    this.bodyPink= new UIImage(this.menuBodyColour, resources.images.pink)
    this.bodyPink.sourceHeight = 20
    this.bodyPink.sourceWidth = 41      
    this.bodyPink.height = 15 // Compensate by 11.1% for aspect ratio issue
    this.bodyPink.width = 25
    this.bodyPink.positionX = 0
    this.bodyPink.positionY = -40
    this.bodyPink.isPointerBlocker = true
    this.bodyPink.onClick = new OnPointerDown(()=>{
      if(this.colourPart=="body"){
        bodyId = 7
          this.selectedBodyNoSelection.visible = false
          this.selectedBodyBlack.visible = false
          this.selectedBodyBlue.visible = false
          this.selectedBodyBrown.visible = false
          this.selectedBodyGreen.visible = false
          this.selectedBodyGrey.visible = false
          this.selectedBodyLightGrey.visible = false
          this.selectedBodyOrange.visible = false
          this.selectedBodyPink.visible = true
          this.selectedBodyRed.visible = false
          this.selectedBodyWhite.visible = false
          this.selectedBodyYellow.visible = false
      }
      if(this.colourPart=="face"){
        faceId = 7
        this.selectedFaceNoSelection.visible = false
        this.selectedFaceBlack.visible = false
        this.selectedFaceBlue.visible = false
        this.selectedFaceBrown.visible = false
        this.selectedFaceGreen.visible = false
        this.selectedFaceGrey.visible = false
        this.selectedFaceLightGrey.visible = false
        this.selectedFaceOrange.visible = false
        this.selectedFacePink.visible = true
        this.selectedFaceRed.visible = false
        this.selectedFaceWhite.visible = false
        this.selectedFaceYellow.visible = false
    }
    if(this.colourPart=="border"){
      borderId = 7

      this.selectedBorderNoSelection.visible = false
        this.selectedBorderBlack.visible = false
        this.selectedBorderBlue.visible = false
        this.selectedBorderBrown.visible = false
        this.selectedBorderGreen.visible = false
        this.selectedBorderGrey.visible = false
        this.selectedBorderLightGrey.visible = false
        this.selectedBorderOrange.visible = false
        this.selectedBorderPink.visible = true
        this.selectedBorderRed.visible = false
        this.selectedBorderWhite.visible = false
        this.selectedBorderYellow.visible = false
    }
      this.menuBodyColour.visible = false
    })
    

    this.bodyYellow= new UIImage(this.menuBodyColour, resources.images.yellow)
    this.bodyYellow.sourceHeight = 20
    this.bodyYellow.sourceWidth = 41      
    this.bodyYellow.height = 15 // Compensate by 11.1% for aspect ratio issue
    this.bodyYellow.width = 25
    this.bodyYellow.positionX = 0
    this.bodyYellow.positionY = -55
    this.bodyYellow.isPointerBlocker = true
    this.bodyYellow.onClick = new OnPointerDown(()=>{
      if(this.colourPart=="body"){
        bodyId = 10
        this.selectedBodyNoSelection.visible = false
        this.selectedBodyBlack.visible = false
        this.selectedBodyBlue.visible = false
        this.selectedBodyBrown.visible = false
        this.selectedBodyGreen.visible = false
        this.selectedBodyGrey.visible = false
        this.selectedBodyLightGrey.visible = false
        this.selectedBodyOrange.visible = false
        this.selectedBodyPink.visible = false
        this.selectedBodyRed.visible = false
        this.selectedBodyWhite.visible = false
        this.selectedBodyYellow.visible = true
      }
      if(this.colourPart=="face"){
        faceId = 10
        this.selectedFaceNoSelection.visible = false
        this.selectedFaceBlack.visible = false
        this.selectedFaceBlue.visible = false
        this.selectedFaceBrown.visible = false
        this.selectedFaceGreen.visible = false
        this.selectedFaceGrey.visible = false
        this.selectedFaceLightGrey.visible = false
        this.selectedFaceOrange.visible = false
        this.selectedFacePink.visible = false
        this.selectedFaceRed.visible = false
        this.selectedFaceWhite.visible = false
        this.selectedFaceYellow.visible = true
      }
      if(this.colourPart=="border"){
        borderId = 10
        this.selectedBorderNoSelection.visible = false
        this.selectedBorderBlack.visible = false
        this.selectedBorderBlue.visible = false
        this.selectedBorderBrown.visible = false
        this.selectedBorderGreen.visible = false
        this.selectedBorderGrey.visible = false
        this.selectedBorderLightGrey.visible = false
        this.selectedBorderOrange.visible = false
        this.selectedBorderPink.visible = false
        this.selectedBorderRed.visible = false
        this.selectedBorderWhite.visible = false
        this.selectedBorderYellow.visible = true
      }
        this.menuBodyColour.visible = false
    })
    
    this.bodyRed= new UIImage(this.menuBodyColour, resources.images.red)
    this.bodyRed.sourceHeight = 20
    this.bodyRed.sourceWidth = 41      
    this.bodyRed.height = 15 // Compensate by 11.1% for aspect ratio issue
    this.bodyRed.width = 25
    this.bodyRed.positionX = 0
    this.bodyRed.positionY = -70
    this.bodyRed.isPointerBlocker = true
    this.bodyRed.onClick = new OnPointerDown(()=>{
      if(this.colourPart=="body"){
        bodyId = 8
        this.selectedBodyNoSelection.visible = false
        this.selectedBodyBlack.visible = false
        this.selectedBodyBlue.visible = false
        this.selectedBodyBrown.visible = false
        this.selectedBodyGreen.visible = false
        this.selectedBodyGrey.visible = false
        this.selectedBodyLightGrey.visible = false
        this.selectedBodyOrange.visible = false
        this.selectedBodyPink.visible = false
        this.selectedBodyRed.visible = true
        this.selectedBodyWhite.visible = false
        this.selectedBodyYellow.visible = false
      }
      if(this.colourPart=="face"){
        faceId = 8
        this.selectedFaceNoSelection.visible = false
        this.selectedFaceBlack.visible = false
        this.selectedFaceBlue.visible = false
        this.selectedFaceBrown.visible = false
        this.selectedFaceGreen.visible = false
        this.selectedFaceGrey.visible = false
        this.selectedFaceLightGrey.visible = false
        this.selectedFaceOrange.visible = false
        this.selectedFacePink.visible = false
        this.selectedFaceRed.visible = true
        this.selectedFaceWhite.visible = false
        this.selectedFaceYellow.visible = false
      }
      if(this.colourPart=="border"){
        borderId = 8
        this.selectedBorderNoSelection.visible = false
        this.selectedBorderBlack.visible = false
        this.selectedBorderBlue.visible = false
        this.selectedBorderBrown.visible = false
        this.selectedBorderGreen.visible = false
        this.selectedBorderGrey.visible = false
        this.selectedBorderLightGrey.visible = false
        this.selectedBorderOrange.visible = false
        this.selectedBorderPink.visible = false
        this.selectedBorderRed.visible = true
        this.selectedBorderWhite.visible = false
        this.selectedBorderYellow.visible = false
      }

      this.menuBodyColour.visible = false
    })
    

    this.bodyWhite= new UIImage(this.menuBodyColour, resources.images.white)
    this.bodyWhite.sourceHeight = 20
    this.bodyWhite.sourceWidth = 41      
    this.bodyWhite.height = 15 // Compensate by 11.1% for aspect ratio issue
    this.bodyWhite.width = 25
    this.bodyWhite.positionX = 0
    this.bodyWhite.positionY = -85
    this.bodyWhite.isPointerBlocker = true
    this.bodyWhite.onClick = new OnPointerDown(()=>{
      if(this.colourPart=="body"){
        bodyId = 9
        this.selectedBodyNoSelection.visible = false
        this.selectedBodyBlack.visible = false
        this.selectedBodyBlue.visible = false
        this.selectedBodyBrown.visible = false
        this.selectedBodyGreen.visible = false
        this.selectedBodyGrey.visible = false
        this.selectedBodyLightGrey.visible = false
        this.selectedBodyOrange.visible = false
        this.selectedBodyPink.visible = false
        this.selectedBodyRed.visible = false
        this.selectedBodyWhite.visible = true
        this.selectedBodyYellow.visible = false
      }
      if(this.colourPart=="face"){
        faceId = 9
        this.selectedFaceNoSelection.visible = false
        this.selectedFaceBlack.visible = false
        this.selectedFaceBlue.visible = false
        this.selectedFaceBrown.visible = false
        this.selectedFaceGreen.visible = false
        this.selectedFaceGrey.visible = false
        this.selectedFaceLightGrey.visible = false
        this.selectedFaceOrange.visible = false
        this.selectedFacePink.visible = false
        this.selectedFaceRed.visible = false
        this.selectedFaceWhite.visible = true
        this.selectedFaceYellow.visible = false
      }
      if(this.colourPart=="border"){
        borderId = 9
        this.selectedBorderNoSelection.visible = false
        this.selectedBorderBlack.visible = false
        this.selectedBorderBlue.visible = false
        this.selectedBorderBrown.visible = false
        this.selectedBorderGreen.visible = false
        this.selectedBorderGrey.visible = false
        this.selectedBorderLightGrey.visible = false
        this.selectedBorderOrange.visible = false
        this.selectedBorderPink.visible = false
        this.selectedBorderRed.visible = false
        this.selectedBorderWhite.visible = true
        this.selectedBorderYellow.visible = false
      }
      this.menuBodyColour.visible = false
      
    })
    









// /////////////////////////////////////////////////////////////////////////////////

///////////////////////////////////
//Save json btn

this.fileContainer = new UIContainerRect(canvas)
this.fileContainer.width = 85
this.fileContainer.height = 120
this.fileContainer.positionX = -50
this.fileContainer.positionY = 0
this.fileContainer.color = Color4.Black()
this.fileContainer.vAlign = 'top'
this.fileContainer.hAlign = 'right'
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


  public logJSON(arr: blockData[] ){

    log(JSON.stringify(modelData))
    
    
  }
 
  public switchModeIcon(mode: Mode): void {
    switch (mode) {
      case Mode.blockAdd:
        // this.addIcon.visible = true
        // this.subtractIcon.visible = false
        // this.eyeDropIcon.visible = false
        // this.yrotateIcon.visible = false
        // this.xrotateIcon.visible = false
        // this.zrotateIcon.visible = false
        this.uiEditSelector.positionX = 16
        break
      case Mode.Subtract:
        //this.addIcon.visible = false
        // this.subtractIcon.visible = true
        // this.eyeDropIcon.visible = false
        // this.yrotateIcon.visible = false
        // this.xrotateIcon.visible = false
        // this.zrotateIcon.visible = false
        this.uiEditSelector.positionX = 42
        break
      case Mode.EyeDrop:
        // this.addIcon.visible = false
        // this.subtractIcon.visible = false
        // this.eyeDropIcon.visible = true
        // this.yrotateIcon.visible = false
        // this.xrotateIcon.visible = false
        // this.zrotateIcon.visible = false
        this.uiEditSelector.positionX = 67
        break
      case Mode.Yrotate:
        // this.addIcon.visible = false
        // this.subtractIcon.visible = false
        // this.eyeDropIcon.visible = false
        // this.yrotateIcon.visible = true
        // this.xrotateIcon.visible = false
        // this.zrotateIcon.visible = false
        this.uiEditSelector.positionX = 92
        break
      case Mode.Xrotate:
        // this.addIcon.visible = false
        // this.subtractIcon.visible = false
        // this.eyeDropIcon.visible = false
        // this.yrotateIcon.visible = false
        // this.xrotateIcon.visible = true
        // this.zrotateIcon.visible = false
        this.uiEditSelector.positionX = 117
        break
      case Mode.Zrotate:
        // this.addIcon.visible = false
        // this.subtractIcon.visible = false
        // this.eyeDropIcon.visible = false
        // this.yrotateIcon.visible = false
        // this.xrotateIcon.visible = false
        // this.zrotateIcon.visible = true
        this.uiEditSelector.positionX = 141
        break
      // case Mode.foundationAdd:
      //   this.addIcon.visible = false
      //   this.subtractIcon.visible = false
      //   this.eyeDropIcon.visible = false
      //   this.yrotateIcon.visible = false
      //   this.xrotateIcon.visible = false
      //   this.zrotateIcon.visible = false
      //   this.foundationAddIcon.visible = true
      //   break
      default:
        break
    }
  }

  public addFoundation(index:number): void {
        
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
        foundation.building[index].block_type,
        foundation.building[index].body_colour_id,
        foundation.building[index].face_colour_id,
        foundation.building[index].border_colour_id,
        foundation.building[index].blockData
      )
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
