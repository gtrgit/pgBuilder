import resources from "../resources_2";
import {canvas} from "./canvas";
import {Sign,signLayerData,imageTextLayer } from "./sign"
import { loadFloorTiles } from "../floorTile";
import { Manager, Mode } from '../manager'
import { changeMaterial} from '../modules/modelPicker'


//NOTE: call
//    https://www.uuidtools.com/api/generate/v4
//    to manually get a uuid

const sceneMessageBus = new MessageBus()

export let bodyId: number = 0
export let faceId: number = 0
export let borderId: number = 0
export let modelNumber: number = 0

export let sceneSignData2:imageTextLayer[] = []
export let loadedSignData2:imageTextLayer[] = []

export type itemContainer = {
    containerId:string
    width:string | number
    height:string | number
    color:Color4
    opacity:number
    itemName:string
    posX:number
    posY:number
    vAlign:string
    hAlign:string
    imageLayers:imageLayer[]
    itemText:itemText[]
    inputText:inputText[]
    visible:boolean

}

export type imageLayer = {
    containerId:string
    imageName:string
    imageType:string
    imageId:string
    imageLocation:string
    eventType:string
    eventTarget:string
    urlLink:string
    requireUV:boolean
    imageHeight:number
    imageWidth:number
    sourceTop:number
    sourceLeft:number
    sourceWidth:number
    sourceHeight:number
    posX:string | number
    posY:string | number
    visible:boolean
}

export type itemText = {
    containerId:string
    textId:string
    width:number
    height:number
    font?:string
    value:string
    positionX:number
    positionY:number
    color:Color4
    fontSize:number
    adaptWidth:boolean
    textWrapping:boolean

}

export type inputText = {
    containerId:string
    inputId:string
    width:string| number
    height:string| number
    vAlign:string
    hAlign:string
    fontSize:number
    placeholder:string
    color:Color4
    positionY:string | number
    positionX:string | number
    isPointerBlocker:boolean
   
}



//https://bobbyhadz.com/blog/typescript-access-object-property-dynamically

export class UiMenuContainer {
    private rect = new UIContainerRect(canvas)
    private header = new UIText(this.rect)
    private itemContainers:itemContainer[] = [] 
    private iconContainers:itemContainer[] = []
    private blockOptionContainer:itemContainer[] = []
    private imageArray:imageLayer[] = []
    private textArray:itemText[] = []
    private inputArray:inputText[] = []
    private containerList:UIContainerRect[] = []
    private imageList:UIImage[] = []
    private bodyColour:string = 'white'
    private faceColour:string = 'yellow'
    private cellColour:string = 'black'
    private currentColorBtn:string = 'body'
    private colourArray:string[] = ['black','blue','brown','green','grey','light_grey','orange','pink','red','white','yellow']
    private bodyImageList:UIImage[] = []
    private faceImageList:UIImage[] = []
    private cellImageList:UIImage[] = []
    private modelNameFace:string = ''
    private modelNameBody:string = ''
    private modelNameCell:string = ''
    // private imagePath:string = 'https://gtrgit.github.io/dcl_image_store/images/polyGraphICON.png'
    private imagePath:string = 'images/'
    private blockPath:string = 'images/blocks/'
    private uiBlockIcons:UIImage[] = []
    // private signName:string[] = []
    private sceneSignData:imageTextLayer[] = []
    private loadedSignData:imageTextLayer[] = []
    private inputTextItem:UIInputText[] = []
    private signLayerId:string = ''
    private currentLayerNumber:number = 0
    private currentCellName:string = ''
    // private blockPath:string = 'https://gtrgit.github.io/dcl_image_store/images/blocks/'
    // constructor(itemContainer:itemContainer) {
    constructor() {

        // this.rect.width = itemContainer.width
        // this.rect.height = itemContainer.height
        // this.rect.color = itemContainer.color
        // this.rect.opacity = itemContainer.opacity
        this.rect.hAlign = "left"
        this.rect.vAlign = "top"
        // this.rect.positionX = itemContainer.posX
        // this.rect.positionY = itemContainer.posY

        // this.header.value = itemContainer.itemName

        // this.header.fontSize = 10
        // this.header.positionX = -130
        // this.header.positionY = 0
        // this.header.color = Color4.White()
        
        
    }
    
    generateUUID() {
                
        const callUrl:string = 'https://www.uuidtools.com/api/generate/v4'

        executeTask(async () => {
            try {callUrl
            let response = await fetch(callUrl)
            let json = await response.json()
            let uuidString:string = json.toString()
            return uuidString
            } catch {
            log("failed to reach URL")
            }
        })
  
    }

    newItemContainer(itemContainer:itemContainer){
        this.itemContainers.push(itemContainer)
        // this.generateUiItems()

    }
    newContainerImages(image:imageLayer,containerId:string){
        for (let i = 0;i<this.itemContainers.length; i++){
            if(this.itemContainers[i].containerId == containerId){
                this.itemContainers[i].imageLayers.push(image)
            }
        }
    }

    changeContainerImage(imageId:any,containerId:string,newImage:string,xpos:string | number,ypos:string | number){
          log(imageId+' '+containerId+' '+newImage+' '+xpos+' '+ypos)
        for (let i = 0;i<this.iconContainers.length; i++){
            if(this.iconContainers[i].containerId == containerId){
                
                for (let j = 0;j<this.iconContainers[i].imageLayers.length; j++){
                    let posXPx:string = this.iconContainers[i].imageLayers[j].posX+'px'
                    let posYPx:string = this.iconContainers[i].imageLayers[j].posY+'px'

                    if(this.iconContainers[i].imageLayers[j].imageName == imageId && 
                        posXPx == xpos && posYPx == ypos )
                        {
                            log('--')
                         if(this.iconContainers[i].imageLayers[j].posX == xpos){
                             log(xpos)
                         }
                            if(this.iconContainers[i].imageLayers[j].posY == ypos){
                                log(ypos)
                            }
                        
                        this.iconContainers[i].imageLayers[j].imageLocation = newImage
                        
                        
                        for(let i = 0;i<this.imageList.length;i++){
                           
                            if(this.imageList[i].name == imageId &&
                                this.imageList[i].positionX == xpos &&
                                this.imageList[i].positionY == ypos){
                                log('image name '+this.imageList[i].name)
                                let texture = new Texture(newImage)
                                this.imageList[i].source = texture
                            }
                           
                        }
                      
                    }
                }
            }
        }

    }
    moveSignLayer(layerName:string){
        //note: the uiLayer and the signLayer need to have the same name done at new layer creation

    }
    genContainer(item:itemContainer){
        const containerRect = new UIContainerRect(canvas)
        containerRect.width = item.width
        containerRect.height = item.height
        containerRect.positionX = item.posX 
        containerRect.positionY = item.posY
        containerRect.opacity = item.opacity
        containerRect.color = item.color
        containerRect.vAlign = item.vAlign
        containerRect.hAlign = item.hAlign
        containerRect.name = item.itemName

        this.containerList.push(containerRect)

        for(let i = 0; i < item.imageLayers.length;i++){
            this.genImage(containerRect,item.imageLayers[i])
        }
    }
    genImage(containerRect:UIContainerRect,image:imageLayer){
        const containerImage = new Texture(image.imageLocation)
        const itemButton = new UIImage(containerRect,containerImage)
        itemButton.sourceLeft = image.sourceLeft
        itemButton.sourceTop = image.sourceTop
        itemButton.sourceWidth = image.sourceWidth
        itemButton.sourceHeight = image.sourceHeight
        itemButton.positionX = image.posX 
        itemButton.positionY = image.posY 
        itemButton.width = image.imageWidth
        itemButton.height = image.imageHeight
        itemButton.name = image.imageId
        itemButton.visible = image.visible
        this.imageList.push(itemButton)
    }
    genText(containerRect: UIContainerRect,containerId:number,textId:number){
        const containerText = new UIText(containerRect)
        containerText.value = this.itemContainers[containerId].itemText[textId].value
        
        containerText.font = new Font(this.itemContainers[containerId].itemText[textId].font)
        containerText.color = this.itemContainers[containerId].itemText[textId].color
        containerText.fontSize = this.itemContainers[containerId].itemText[textId].fontSize
        containerText.textWrapping = this.itemContainers[containerId].itemText[textId].textWrapping
        containerText.positionX = this.itemContainers[containerId].itemText[textId].positionX
        containerText.positionY = this.itemContainers[containerId].itemText[textId].positionY
    }
    genInput(containerRect: UIContainerRect,containerId:number,inputId:number){
        const containerInput = new UIInputText(containerRect)
        containerInput.width = this.itemContainers[containerId].inputText[inputId].width
        containerInput.height = this.itemContainers[containerId].inputText[inputId].height
        containerInput.vAlign = this.itemContainers[containerId].inputText[inputId].vAlign
        containerInput.hAlign = this.itemContainers[containerId].inputText[inputId].hAlign
        containerInput.fontSize = this.itemContainers[containerId].inputText[inputId].fontSize
        containerInput.placeholder = this.itemContainers[containerId].inputText[inputId].placeholder
        containerInput.color = this.itemContainers[containerId].inputText[inputId].color
        containerInput.positionY = this.itemContainers[containerId].inputText[inputId].positionY
        containerInput.positionX = this.itemContainers[containerId].inputText[inputId].positionX
        containerInput.isPointerBlocker = this.itemContainers[containerId].inputText[inputId].isPointerBlocker
        containerInput.name = this.itemContainers[containerId].inputText[inputId].inputId
        containerInput.onTextSubmit = new OnTextSubmit((x) => {
            const text = new UIText(containerInput)
            text.value = x.text
            text.width = "20%"
            text.height = "25px"
            text.vAlign = "bottom"
            text.hAlign = "center"
           
         if(containerInput.name == 'inputTest'){
            sceneMessageBus.emit("textSubmitted", {name: containerInput.name})
         }
        })
    }
    uiShowHideContainer(name:string, flag:boolean){
        for(var i = 0; i < this.containerList.length; i++){
            
            if (this.containerList[i].name == name){
                this.containerList[i].visible = flag
                
            }
        }
    }
    uiShowHideImage(name:string, flag:boolean){
        for(var i = 0; i < this.imageList.length; i++){
            
            if (this.imageList[i].name == name){
                this.imageList[i].visible = flag
                
            }
        }
    }


    updatePickedColor(surface:string,color:string){


        for (var i = 0; i < this.colourArray.length; i++){
            log(color)
            if(this.colourArray[i] == color){
                log('color index == '+i+' '+this.colourArray[i])
                if (surface == 'face'){
                    faceId = i
                }
                if (surface == 'body'){
                    bodyId = i
                }
                if (surface == 'cell'){
                    borderId = i
                }
            }
        }

        if (surface == 'face'){
        
            this.faceColour = color
            for (var i = 0; i < this.faceImageList.length; i++){

                
                if(this.faceImageList[i].name){
                let name = this.faceImageList[i].name
                let xpos: string | number = this.faceImageList[i].positionX
                let ypos: string | number = this.faceImageList[i].positionY
                
                let newValue:string = this.blockPath+this.faceImageList[i].name + color +'.png'
                let texture = new Texture(newValue)
                this.faceImageList[i].source = texture
               
                }
            }
            let pickerColourPath:string = this.imagePath+color+'.png'
            this.changeContainerImage('faceColorPicker','f22cdcde-301e-4a65-a1a7-78c1c2e6a06c',pickerColourPath,'3px','-3px')

            let iconValue:string = this.blockPath+this.modelNameFace+this.faceColour +'.png'
            this.changeUiModelImage('blockOptionUiFace','f22cdcde-301e-4a65-a1a7-78c1c2e6a06c',iconValue)
            
        }
        if (surface == 'body'){
            
            this.bodyColour = color
            for (var i = 0; i < this.bodyImageList.length; i++){

                if(this.bodyImageList[i].name){
                let name = this.bodyImageList[i].name
                let xpos: string | number = this.bodyImageList[i].positionX
                let ypos: string | number = this.bodyImageList[i].positionY
                
                let newValue:string = this.blockPath+this.bodyImageList[i].name + color +'.png'
                let texture = new Texture(newValue)
                this.bodyImageList[i].source = texture
        
                }
                
            }
            
            //change colour ColorPicker
            let pickerColourPath:string = this.imagePath+color+'.png'
            this.changeContainerImage('bodyColorPicker','f22cdcde-301e-4a65-a1a7-78c1c2e6a06c',pickerColourPath,'3px','11px')
            let iconValue:string = this.blockPath+this.modelNameBody+this.bodyColour +'.png'
            this.changeUiModelImage('blockOptionUiBody','f22cdcde-301e-4a65-a1a7-78c1c2e6a06c',iconValue)
        }
        if (surface == 'cell'){
            
            this.cellColour = color
            for (var i = 0; i < this.cellImageList.length; i++){

                if(this.cellImageList[i].name){
                let name = this.cellImageList[i].name
                let xpos: string | number = this.cellImageList[i].positionX
                let ypos: string | number = this.cellImageList[i].positionY
               
                let cellValue:string = this.blockPath+this.cellImageList[i].name + color +'.png'
                let texture = new Texture(cellValue)
                this.cellImageList[i].source = texture
              
                }
            }
            let pickerColourPath:string = this.imagePath + color +'.png'
            this.changeContainerImage('cellColorPicker','f22cdcde-301e-4a65-a1a7-78c1c2e6a06c',pickerColourPath,'3px','-17px')
            let iconValue:string = this.blockPath+this.modelNameCell+this.cellColour +'.png'
            this.changeUiModelImage('blockIconCell','f22cdcde-301e-4a65-a1a7-78c1c2e6a06c',iconValue)
        }
    }
    
    changeUiSignIconImage(image:string,texture:string) {


        for (let i = 0; i < this.imageList.length; i++){
            
            if(this.imageList[i].name == image){
                this.imageList[i].source = new Texture(texture)
            }
        }

    }

    changeUiModelImage(imageId:any,containerId:string,newImage:string){
        // log('changeUiModelImage: '+ imageId+' '+containerId+' '+newImage+' '+this.blockOptionContainer.length)
      for (let i = 0;i<this.blockOptionContainer.length; i++){
          if(this.blockOptionContainer[i].containerId == containerId){
              
              for (let j = 0;j<this.blockOptionContainer[i].imageLayers.length; j++){
                
                    if(this.blockOptionContainer[i].imageLayers[j].imageType == imageId )
                        {
                        
                        let currentName = this.blockOptionContainer[i].imageLayers[j].imageName
                        // this.blockOptionContainer[i].imageLayers[j].imageLocation = newImage
                        
                        for(let i = 0;i<this.uiBlockIcons.length;i++){
                            if(this.uiBlockIcons[i]){
                                
                                if(this.uiBlockIcons[i].name == currentName){
                                    
                                    let texture = new Texture(newImage)
                                    this.uiBlockIcons[i].source = texture
                                }
                            }
                        }
                        
                    }
                }
            }
        }
        }
        

    //uses regex to pick rows that contain eg.. m10
    matchModelName(targetString:string){
        const rExp2 : RegExp = /m[0-9]+/g
        // const rExp_f_ : RegExp = /_f_/g
        // const rExp_b_ : RegExp = /_b_/g
        let fhModelName = targetString.match(rExp2)
        
        let faceString:string = ''
        let bodyString:string = ''
        
       
        if(fhModelName){
                           
            // modelName = fhModelName + '_f_'
            faceString = this.blockPath + fhModelName+ '_f_'+ this.faceColour+'.png'
        
            this.modelNameFace = fhModelName+ '_f_'
            this.modelNameBody = fhModelName+ '_b_'
            
            // modelName = fhModelName + '_b_'
            bodyString = this.blockPath+ targetString + this.bodyColour+'.png'
            log('------------')
            log('faceString '+faceString)
            log('bodyString '+bodyString)
            
            this.changeUiModelImage('blockOptionUiFace','f22cdcde-301e-4a65-a1a7-78c1c2e6a06c',faceString)
            this.changeUiModelImage('blockOptionUiBody','f22cdcde-301e-4a65-a1a7-78c1c2e6a06c',bodyString)

        }

    }

    setUiSignImage(imageTextLayer:imageTextLayer) {
        //does sceneSignData need to be cleared?

        for (var i = 0; i < this.imageList.length; i++){
            
            if (this.imageList[i].name == imageTextLayer.uiLayerName){
               
                this.imageList[i].source = new Texture(imageTextLayer.texture)
                this.imageList[i].sourceWidth = imageTextLayer.sourceWidth
                this.imageList[i].sourceHeight = imageTextLayer.sourceHeight
                this.imageList[i].width = imageTextLayer.imageWidth
                this.imageList[i].height = imageTextLayer.imageHeight

                this.sceneSignData.push(imageTextLayer)
                sceneSignData2.push(imageTextLayer)

                
            }

        }
        
    }
    getSignLayerData(layerName:string){
        for (var i = 0; i < this.imageList.length; i++){
           
            if (this.imageList[i].name == layerName){
                
                this.imageList[i].source
                this.imageList[i].sourceHeight
                this.imageList[i].sourceWidth
                this.imageList[i].height
                this.imageList[i].width
            }
        }
    }

    loadSelectedSign(signData:imageTextLayer){
        this.currentCellName = signData.uiLayerName.substring(0,6)
        
        let largeSignLayers = 'sign1Layer'+signData.uiLayerName.substring(7,8)
        let signIconLayers = 'uiIconlayer'+signData.uiLayerName.substring(7,8)

        let sourceData //no datatype for source
        let srcHeight:number = 0
        let srcWidth:number = 0
       
        let imgHeight:number|string = 0
        let imgWidth:number|string = 0
        let transFormItterator:number = 0

        for (var i = 0; i < this.imageList.length; i++){
       

            if (this.imageList[i].name == signData.uiLayerName){
                
                if (this.imageList[i].source) {

                 sourceData = this.imageList[i].source
                 srcHeight = this.imageList[i].sourceHeight
                 srcWidth = this.imageList[i].sourceWidth
                 imgHeight = parseInt(this.imageList[i].height) * 1.7
                 imgWidth = parseInt(this.imageList[i].width) * 1.7
                
                }
            }
        }

        for (var i = 0; i < this.imageList.length; i++){
           
            if (this.imageList[i].name == largeSignLayers){
                
                this.imageList[i].source = sourceData
                this.imageList[i].sourceHeight = srcHeight
                this.imageList[i].sourceWidth = srcWidth
                this.imageList[i].height = imgHeight/ 1.2
                this.imageList[i].width = imgWidth/ 1.2
            }
            if (this.imageList[i].name == signIconLayers){
                
                this.imageList[i].source = sourceData
                this.imageList[i].sourceHeight = srcHeight
                this.imageList[i].sourceWidth = srcWidth
                this.imageList[i].height = imgHeight / 1.7
                this.imageList[i].width = imgWidth / 1.7
            }
        }
        
    }

    setLayerTextValues(layerNumber:number){

        this.inputTextItem.forEach((item) => {
            
            if (item.name == 'imageName'){
               
                item.placeholder = this.loadedSignData[layerNumber].layerName
                // item.placeholder = this.loadedSignData[0].layerName
                // this.signLayerId = signData.layerId
               
            }
            if (item.name == 'texture'){
                item.placeholder = this.loadedSignData[layerNumber].texture
                this.signLayerId = this.loadedSignData[layerNumber].layerId
            }
            if (item.name == 'emissiveColor'){
                item.placeholder = this.loadedSignData[layerNumber].materialEmissiveColor
                this.signLayerId = this.loadedSignData[layerNumber].layerId
            }
            if (item.name == 'emissiveIntensity'){
                item.placeholder = this.loadedSignData[layerNumber].materialEmissiveIntensity.toString()
                this.signLayerId = this.loadedSignData[layerNumber].layerId
            }
            if (item.name == 'imageUrlLink'){
                item.placeholder = this.loadedSignData[layerNumber].imageUrlLink
                
            }
            if (item.name == 'scaleHeight'){
                
                item.placeholder = this.loadedSignData[layerNumber].imageTransform[1].y.toString()
              
            }
            if (item.name == 'scaleWidth'){
                item.placeholder = this.loadedSignData[layerNumber].imageTransform[1].x.toString()
              
            }
             if (item.name == 'xPositionInput'){
                item.placeholder = this.loadedSignData[layerNumber].imageTransform[0].x.toString()
                 }

            if (item.name == 'yPositionInput'){
            item.placeholder = this.loadedSignData[layerNumber].imageTransform[0].y.toString()
                }
            if (item.name == 'zPositionInput'){
                item.placeholder = this.loadedSignData[layerNumber].imageTransform[0].z.toString()
            }
            if (item.name == 'textValue'){
                item.placeholder = this.loadedSignData[layerNumber].textValue
            }
            if (item.name == 'hyperLink'){
                item.placeholder = this.loadedSignData[layerNumber].textUrlLink
            }
            if (item.name == 'textHeight'){
                item.placeholder = this.loadedSignData[layerNumber].height.toString()
            }
            if (item.name == 'textWidth'){
                item.placeholder = this.loadedSignData[layerNumber].width.toString()
            }
            if (item.name == 'fontInput'){
                item.placeholder = this.loadedSignData[layerNumber].font!
            }
            if (item.name == 'fontSizeInput'){
                item.placeholder = this.loadedSignData[layerNumber].fontSize.toString()
            }
            if (item.name == 'xPosInput'){
                item.placeholder = this.loadedSignData[layerNumber].textTransform[0].x.toString()
            }
            if (item.name == 'yPosInput'){
                item.placeholder = this.loadedSignData[layerNumber].textTransform[0].y.toString()
            }
            if (item.name == 'zPosInput'){
                item.placeholder = this.loadedSignData[layerNumber].textTransform[0].z.toString()
            }
            if (item.name == 'colorInput'){
                item.placeholder = this.loadedSignData[layerNumber].color
            }
            if (item.name == 'opacityInput'){
                item.placeholder = this.loadedSignData[layerNumber].opacity.toString()
            }

          });
    }

    signNameTest(name:string){
        //TODO fix. currently the name of the layer1 tab etc.

       const rExp2 : RegExp = /[0-9]+/g
       let numberValue = name.match(rExp2)
    //    log('selected icon numbner : '+numberValue)

       if (numberValue){
         modelNumber = +numberValue
         log("model id :"+modelNumber)
       }

        let returnValue:string = ''
        for (var i = 0; i < this.sceneSignData.length; i++){
          //removes the last 2 characters from the name as the remaing should match eg. p1r1c1[removed]
            if (this.sceneSignData[i].uiLayerName.substring(0,6) == name.substring(0,6)){
                
                
                this.loadSelectedSign(this.sceneSignData[i])
                // returnValue = this.sceneSignData[i].uiLayerName

                if(this.loadedSignData.length > 3){
                    this.loadedSignData = []
                    loadedSignData2 = []

                }

                this.loadedSignData.push(this.sceneSignData[i])
                loadedSignData2.push(this.sceneSignData[i])
                
            } else {
                returnValue =  'noMatch'
            }
        }
        //send the first layer
        if(this.loadedSignData.length > 0){
            this.setLayerTextValues(0)

        }
       return returnValue
    }
    
   switchModeIcon(mode: Mode): void {
    switch (mode) {
      case Mode.blockAdd:
        break
      case Mode.Subtract:
        break
      case Mode.EyeDrop:
        break
      case Mode.Yrotate:
        break
      case Mode.Xrotate:
        break
      case Mode.Zrotate:
        break
      default:
        break
    }
  }

    generateUiItems(){
         for(var i = 0; i < this.itemContainers.length; i++){
             
                const containerRect = new UIContainerRect(canvas)
                containerRect.width = this.itemContainers[i].width
                containerRect.height = this.itemContainers[i].height
                containerRect.positionX = this.itemContainers[i].posX 
                containerRect.positionY = this.itemContainers[i].posY
                containerRect.opacity = this.itemContainers[i].opacity
                containerRect.color = this.itemContainers[i].color 
                containerRect.vAlign = this.itemContainers[i].vAlign 
                containerRect.hAlign = this.itemContainers[i].hAlign
                containerRect.name = this.itemContainers[i].containerId
                containerRect.visible = this.itemContainers[i].visible
                containerRect.isPointerBlocker = true
                
                this.containerList.push(containerRect)
        
                for (var j = 0; j < this.itemContainers[i].imageLayers.length; j++){

                    if(this.itemContainers[i].containerId == this.itemContainers[i].imageLayers[j].containerId) {

                        let surfaceType:string = ''
                        let locationString:string = ''

                        if(this.itemContainers[i].imageLayers[j].imageType == 'blockIconFace'){
                            locationString = this.itemContainers[i].imageLayers[j].imageLocation + this.faceColour+'.png'
                            surfaceType = 'face'
                            this.iconContainers.push(this.itemContainers[i])
                            // this.renderBlockOptionUi(locationString,containerRect,i,j)
                        }
                        if(this.itemContainers[i].imageLayers[j].imageType == 'blockIconBody'){
                            locationString = this.itemContainers[i].imageLayers[j].imageLocation + this.bodyColour+'.png'
                            surfaceType = 'body'
                            this.iconContainers.push(this.itemContainers[i])
                            // this.renderBlockOptionUi(locationString,containerRect,i,j)
                        }
                        if(this.itemContainers[i].imageLayers[j].imageType == 'blockIconCell'){
                            locationString = this.itemContainers[i].imageLayers[j].imageLocation + this.cellColour+'.png'
                            surfaceType = 'cell'
                            this.iconContainers.push(this.itemContainers[i])
                        }
                        if(this.itemContainers[i].imageLayers[j].imageType == 'blockOptionUiFace'){
                            locationString = this.itemContainers[i].imageLayers[j].imageLocation + this.faceColour+'.png'
                            surfaceType = ''
                            this.blockOptionContainer.push(this.itemContainers[i])
                        }
                        if(this.itemContainers[i].imageLayers[j].imageType == 'blockOptionUiBody'){
                            locationString = this.itemContainers[i].imageLayers[j].imageLocation + this.bodyColour+'.png'
                            surfaceType = ''
                            this.blockOptionContainer.push(this.itemContainers[i])
                        }

                        if(this.itemContainers[i].imageLayers[j].imageType != 'blockIconCell' && 
                            this.itemContainers[i].imageLayers[j].imageType != 'blockIconFace' && 
                            this.itemContainers[i].imageLayers[j].imageType != 'blockIconBody' &&
                            this.itemContainers[i].imageLayers[j].imageType != 'blockOptionUiFace' &&
                            this.itemContainers[i].imageLayers[j].imageType != 'blockOptionUiBody'){
                
                            locationString = this.itemContainers[i].imageLayers[j].imageLocation

                        } 

                       
                        const containerImage = new Texture(locationString)
                        const itemButton = new UIImage(containerRect,containerImage)
                        itemButton.sourceLeft = this.itemContainers[i].imageLayers[j].sourceLeft
                        itemButton.sourceTop = this.itemContainers[i].imageLayers[j].sourceTop
                        itemButton.sourceWidth = this.itemContainers[i].imageLayers[j].sourceWidth
                        itemButton.sourceHeight = this.itemContainers[i].imageLayers[j].sourceHeight
                        itemButton.positionX = this.itemContainers[i].imageLayers[j].posX 
                        itemButton.positionY = this.itemContainers[i].imageLayers[j].posY 
                        itemButton.width = this.itemContainers[i].imageLayers[j].imageWidth
                        itemButton.height = this.itemContainers[i].imageLayers[j].imageHeight
                        itemButton.name = this.itemContainers[i].imageLayers[j].imageName
                        itemButton.visible = this.itemContainers[i].imageLayers[j].visible 
                        
                        if (itemButton.name == 'border_front_') {
                            itemButton.isPointerBlocker = false
                        } else {
                            itemButton.isPointerBlocker = true
                        }
                        

                        this.imageList.push(itemButton)
                         
                        if (surfaceType== 'cell'){
                            this.cellImageList.push(itemButton)
                        }
                        
                        if (surfaceType== 'face'){
                            this.faceImageList.push(itemButton)
                        }
                        
                        if (surfaceType == 'body'){
                            this.bodyImageList.push(itemButton)
                        }
                        if (itemButton.name == 'm42_f_' ){
                            this.uiBlockIcons.push(itemButton)
                        }
                        if (itemButton.name == 'm42_b_' ){
                            this.uiBlockIcons.push(itemButton)
                        }
                        
                        
                        //This is track all btns on the UI
                        itemButton.onClick = new OnPointerDown((e) => {
                           
                           if (itemButton.name){
                            //clear the previous signdata array
                            //  this.loadedSignData = []
                                if (itemButton.name == this.signNameTest(itemButton.name))
                                {
                                log('sign is in array '+itemButton.name)
                                } else {
                                log('sign NOT in array '+itemButton.name)
                                }
                           }

                           if (itemButton.name == 'layer1Off'){
                            this.setLayerTextValues(0)
                            this.currentLayerNumber = 0
                            this.uiShowHideImage('layer1On',true)
                            this.uiShowHideImage('layer1Off',false)

                            this.uiShowHideImage('layer2Off',true)
                            this.uiShowHideImage('layer2On',false)

                            this.uiShowHideImage('layer3On',false)
                            this.uiShowHideImage('layer3Off',true)
                            this.uiShowHideImage('layer4Off',true)
                            this.uiShowHideImage('layer4On',false)
                           }
                           if (itemButton.name == 'layer2Off'){
                            this.setLayerTextValues(1)
                            this.currentLayerNumber = 1
                            
                            this.uiShowHideImage('layer1On',false)
                            this.uiShowHideImage('layer1Off',true)

                            this.uiShowHideImage('layer2Off',false)
                            this.uiShowHideImage('layer2On',true)

                            this.uiShowHideImage('layer3On',false)
                            this.uiShowHideImage('layer3Off',true)

                            this.uiShowHideImage('layer4Off',true)
                            this.uiShowHideImage('layer4On',false)
                           }
                           if (itemButton.name == 'layer3Off'){
                            this.setLayerTextValues(2)
                            this.currentLayerNumber = 2
                            
                            this.uiShowHideImage('layer1On',false)
                            this.uiShowHideImage('layer1Off',true)

                            this.uiShowHideImage('layer2Off',true)
                            this.uiShowHideImage('layer2On',false)

                            this.uiShowHideImage('layer3On',true)
                            this.uiShowHideImage('layer3Off',false)

                            this.uiShowHideImage('layer4Off',true)
                            this.uiShowHideImage('layer4On',false)
                           }
                           if (itemButton.name == 'layer4Off'){
                            this.setLayerTextValues(3)
                            this.currentLayerNumber = 3
                            

                            this.uiShowHideImage('layer1On',false)
                            this.uiShowHideImage('layer1Off',true)

                            this.uiShowHideImage('layer2Off',true)
                            this.uiShowHideImage('layer2On',false)

                            this.uiShowHideImage('layer3On',false)
                            this.uiShowHideImage('layer3Off',true)

                            this.uiShowHideImage('layer4Off',false)
                            this.uiShowHideImage('layer4On',true)
                           }

                            if (itemButton.name == 'sign1x1tabOff'){
                                this.uiShowHideImage('sign2x3tabOn',false)
                                this.uiShowHideImage('sign2x3tabOff',true)

                                this.uiShowHideImage('sign2x2tabOn',false)
                                this.uiShowHideImage('sign2x2tabOff',true)

                                this.uiShowHideImage('sign1x1tabOn',true)
                                this.uiShowHideImage('sign1x1tabOff',false)

                                this.uiShowHideImage('sign2x1tabOn',false)
                                this.uiShowHideImage('sign2x1tabOff',true)
                                
                                this.uiShowHideImage('sign3x1tabOn',false)
                                this.uiShowHideImage('sign3x1tabOff',true)

                                //1x1
                                this.uiShowHideContainer('685ace8e-2cd1-41c1-9cf9-204a04ba48c9',true)
                                this.uiShowHideContainer('9e5a27d5-ac35-4719-aa9d-41da13b850c3',true)
                                this.uiShowHideContainer('42d03025-0316-42bb-8d8d-5b2008797538',true)
                                this.uiShowHideContainer('f8a4b7e2-7b17-41be-9487-8979cdaa9442',true)
                                this.uiShowHideContainer('811ee73b-183f-4026-88e4-88b357aaca37',true)
                                this.uiShowHideContainer('103ab09f-de51-4748-a2a8-056fb23cd6ca',true)
                                this.uiShowHideContainer('46158dc4-fb96-4169-9d86-d1a3f9b35c0c',true)
                                this.uiShowHideContainer('c74549bb-cf26-4180-bbe9-567444b67060',true)
                                this.uiShowHideContainer('1bcd747a-7d53-4540-b45c-41549d2a7ff7',true)
                                this.uiShowHideContainer('7a4f36aa-3326-4c83-ab4a-0ca62e2823d4',true)

                                //2x1
                                

                            }
                            if (itemButton.name == 'sign2x1tabOff'){
                                this.uiShowHideImage('sign2x3tabOn',false)
                                this.uiShowHideImage('sign2x3tabOff',true)

                                this.uiShowHideImage('sign2x2tabOn',false)
                                this.uiShowHideImage('sign2x2tabOff',true)

                                this.uiShowHideImage('sign2x1tabOn',true)
                                this.uiShowHideImage('sign2x1tabOff',false)
                                
                                this.uiShowHideImage('sign1x1tabOn',false)
                                this.uiShowHideImage('sign1x1tabOff',true)

                                this.uiShowHideImage('sign3x1tabOn',false)
                                this.uiShowHideImage('sign3x1tabOff',true)

                           
                                this.uiShowHideContainer('685ace8e-2cd1-41c1-9cf9-204a04ba48c9',false)
                                this.uiShowHideContainer('9e5a27d5-ac35-4719-aa9d-41da13b850c3',false)
                                this.uiShowHideContainer('42d03025-0316-42bb-8d8d-5b2008797538',false)
                                this.uiShowHideContainer('f8a4b7e2-7b17-41be-9487-8979cdaa9442',false)
                                this.uiShowHideContainer('811ee73b-183f-4026-88e4-88b357aaca37',false)
                                this.uiShowHideContainer('103ab09f-de51-4748-a2a8-056fb23cd6ca',false)
                                this.uiShowHideContainer('46158dc4-fb96-4169-9d86-d1a3f9b35c0c',false)
                                this.uiShowHideContainer('c74549bb-cf26-4180-bbe9-567444b67060',false)
                                this.uiShowHideContainer('1bcd747a-7d53-4540-b45c-41549d2a7ff7',false)
                                this.uiShowHideContainer('7a4f36aa-3326-4c83-ab4a-0ca62e2823d4',false)
                               
                            }
                            if (itemButton.name == 'sign3x1tabOff'){
                                this.uiShowHideImage('sign2x3tabOn',false)
                                this.uiShowHideImage('sign2x3tabOff',true)

                                this.uiShowHideImage('sign2x2tabOn',false)
                                this.uiShowHideImage('sign2x2tabOff',true)

                                this.uiShowHideImage('sign2x1tabOn',false)
                                this.uiShowHideImage('sign2x1tabOff',true)
                                
                                this.uiShowHideImage('sign1x1tabOn',false)
                                this.uiShowHideImage('sign1x1tabOff',true)

                                this.uiShowHideImage('sign3x1tabOn',true)
                                this.uiShowHideImage('sign3x1tabOff',false)
                           
                                this.uiShowHideContainer('685ace8e-2cd1-41c1-9cf9-204a04ba48c9',false)
                                this.uiShowHideContainer('9e5a27d5-ac35-4719-aa9d-41da13b850c3',false)
                                this.uiShowHideContainer('42d03025-0316-42bb-8d8d-5b2008797538',false)
                                this.uiShowHideContainer('f8a4b7e2-7b17-41be-9487-8979cdaa9442',false)
                                this.uiShowHideContainer('811ee73b-183f-4026-88e4-88b357aaca37',false)
                                this.uiShowHideContainer('103ab09f-de51-4748-a2a8-056fb23cd6ca',false)
                                this.uiShowHideContainer('46158dc4-fb96-4169-9d86-d1a3f9b35c0c',false)
                                this.uiShowHideContainer('c74549bb-cf26-4180-bbe9-567444b67060',false)
                                this.uiShowHideContainer('1bcd747a-7d53-4540-b45c-41549d2a7ff7',false)
                                this.uiShowHideContainer('7a4f36aa-3326-4c83-ab4a-0ca62e2823d4',false)
                            }
                            if (itemButton.name == 'sign2x2tabOff'){
                                this.uiShowHideImage('sign2x3tabOn',false)
                                this.uiShowHideImage('sign2x3tabOff',true)

                                this.uiShowHideImage('sign2x2tabOn',true)
                                this.uiShowHideImage('sign2x2tabOff',false)

                                this.uiShowHideImage('sign2x1tabOn',false)
                                this.uiShowHideImage('sign2x1tabOff',true)
                                
                                this.uiShowHideImage('sign1x1tabOn',false)
                                this.uiShowHideImage('sign1x1tabOff',true)

                                this.uiShowHideImage('sign3x1tabOn',false)
                                this.uiShowHideImage('sign3x1tabOff',true)
                           
                                this.uiShowHideContainer('685ace8e-2cd1-41c1-9cf9-204a04ba48c9',false)
                                this.uiShowHideContainer('9e5a27d5-ac35-4719-aa9d-41da13b850c3',false)
                                this.uiShowHideContainer('42d03025-0316-42bb-8d8d-5b2008797538',false)
                                this.uiShowHideContainer('f8a4b7e2-7b17-41be-9487-8979cdaa9442',false)
                                this.uiShowHideContainer('811ee73b-183f-4026-88e4-88b357aaca37',false)
                                this.uiShowHideContainer('103ab09f-de51-4748-a2a8-056fb23cd6ca',false)
                                this.uiShowHideContainer('46158dc4-fb96-4169-9d86-d1a3f9b35c0c',false)
                                this.uiShowHideContainer('c74549bb-cf26-4180-bbe9-567444b67060',false)
                                this.uiShowHideContainer('1bcd747a-7d53-4540-b45c-41549d2a7ff7',false)
                                this.uiShowHideContainer('7a4f36aa-3326-4c83-ab4a-0ca62e2823d4',false)
                            }
                            if (itemButton.name == 'sign2x3tabOff'){
                                this.uiShowHideImage('sign2x3tabOn',true)
                                this.uiShowHideImage('sign2x3tabOff',false)

                                this.uiShowHideImage('sign2x2tabOn',false)
                                this.uiShowHideImage('sign2x2tabOff',true)

                                this.uiShowHideImage('sign2x1tabOn',false)
                                this.uiShowHideImage('sign2x1tabOff',true)
                                
                                this.uiShowHideImage('sign1x1tabOn',false)
                                this.uiShowHideImage('sign1x1tabOff',true)

                                this.uiShowHideImage('sign3x1tabOn',false)
                                this.uiShowHideImage('sign3x1tabOff',true)
                           
                                this.uiShowHideContainer('685ace8e-2cd1-41c1-9cf9-204a04ba48c9',false)
                                this.uiShowHideContainer('9e5a27d5-ac35-4719-aa9d-41da13b850c3',false)
                                this.uiShowHideContainer('42d03025-0316-42bb-8d8d-5b2008797538',false)
                                this.uiShowHideContainer('f8a4b7e2-7b17-41be-9487-8979cdaa9442',false)
                                this.uiShowHideContainer('811ee73b-183f-4026-88e4-88b357aaca37',false)
                                this.uiShowHideContainer('103ab09f-de51-4748-a2a8-056fb23cd6ca',false)
                                this.uiShowHideContainer('46158dc4-fb96-4169-9d86-d1a3f9b35c0c',false)
                                this.uiShowHideContainer('c74549bb-cf26-4180-bbe9-567444b67060',false)
                                this.uiShowHideContainer('1bcd747a-7d53-4540-b45c-41549d2a7ff7',false)
                                this.uiShowHideContainer('7a4f36aa-3326-4c83-ab4a-0ca62e2823d4',false)
                            }
                            
                            if (itemButton.name == 'imageOptionsOff'){
                             

                                this.uiShowHideContainer('af6bcc69-1948-41b2-8c37-203a2fff7189',false)
                                this.uiShowHideContainer('86d864a4-9114-448c-b898-49a4d8e3369d',true)


                            }
                            if (itemButton.name == 'textOptionsOff'){
                               
                                this.uiShowHideImage('textOptionsOn',true)
                               

                                // this.uiShowHideContainer('86d864a4-9114-448c-b898-49a4d8e3369d',false)
                                this.uiShowHideContainer('af6bcc69-1948-41b2-8c37-203a2fff7189',true)

                            }
                            
                            if (itemButton.name == 'uiClose'){
                           
                                this.uiShowHideContainer('343dccdd-2084-406e-aa37-f3d036886803',false)
                            }
                            if (itemButton.name == 'block_icon_cell'){
                           
                                // this.uiShowHideContainer('343dccdd-2084-406e-aa37-f3d036886803',true)
                                
                                
                            }
                            if (itemButton.name == 'block_icon_face'){
                           
                            //    / this.uiShowHideContainer('343dccdd-2084-406e-aa37-f3d036886803',true)
                                
                               
                                
                            }
                            if (itemButton.name == 'block_icon_body'){
                           
                                // this.uiShowHideContainer('343dccdd-2084-406e-aa37-f3d036886803',true)
                                // this.uiShowHideContainer('685ace8e-2cd1-41c1-9cf9-204a04ba48c9',true)


                                

                            }
                            if (itemButton.name == 'm42_b_'){  //the icon that gets clicked on!

                                Manager.activeMode = Mode.blockAdd

                                this.uiShowHideContainer('343dccdd-2084-406e-aa37-f3d036886803',true)

                                  this.uiShowHideContainer('76b2b403-87ad-44f3-a461-d176f7d50093',false)
                                this.uiShowHideContainer('86d864a4-9114-448c-b898-49a4d8e3369d',false)
                                this.uiShowHideContainer('685ace8e-2cd1-41c1-9cf9-204a04ba48c9',false)
                                this.uiShowHideContainer('9e5a27d5-ac35-4719-aa9d-41da13b850c3',false)
                                this.uiShowHideContainer('42d03025-0316-42bb-8d8d-5b2008797538',false)
                                this.uiShowHideContainer('f8a4b7e2-7b17-41be-9487-8979cdaa9442',false)
                                this.uiShowHideContainer('811ee73b-183f-4026-88e4-88b357aaca37',false)
                                this.uiShowHideContainer('103ab09f-de51-4748-a2a8-056fb23cd6ca',false)
                                this.uiShowHideContainer('46158dc4-fb96-4169-9d86-d1a3f9b35c0c',false)
                                this.uiShowHideContainer('c74549bb-cf26-4180-bbe9-567444b67060',false)
                                this.uiShowHideContainer('1bcd747a-7d53-4540-b45c-41549d2a7ff7',false)
                                this.uiShowHideContainer('7a4f36aa-3326-4c83-ab4a-0ca62e2823d4',false)
                                this.uiShowHideContainer('af6bcc69-1948-41b2-8c37-203a2fff7189',false)

                                
                            }
                            
                            
                            if (itemButton.name == 'imageUiClose'){
                           
                                this.uiShowHideContainer('76b2b403-87ad-44f3-a461-d176f7d50093',false)
                                this.uiShowHideContainer('86d864a4-9114-448c-b898-49a4d8e3369d',false)

                                this.uiShowHideContainer('685ace8e-2cd1-41c1-9cf9-204a04ba48c9',false)
                                this.uiShowHideContainer('9e5a27d5-ac35-4719-aa9d-41da13b850c3',false)
                                this.uiShowHideContainer('42d03025-0316-42bb-8d8d-5b2008797538',false)
                                this.uiShowHideContainer('f8a4b7e2-7b17-41be-9487-8979cdaa9442',false)
                                this.uiShowHideContainer('811ee73b-183f-4026-88e4-88b357aaca37',false)
                                this.uiShowHideContainer('103ab09f-de51-4748-a2a8-056fb23cd6ca',false)
                                this.uiShowHideContainer('46158dc4-fb96-4169-9d86-d1a3f9b35c0c',false)
                                this.uiShowHideContainer('c74549bb-cf26-4180-bbe9-567444b67060',false)
                                this.uiShowHideContainer('1bcd747a-7d53-4540-b45c-41549d2a7ff7',false)
                                this.uiShowHideContainer('7a4f36aa-3326-4c83-ab4a-0ca62e2823d4',false)

                            }
                            if (itemButton.name == 'uiSignIconBtn'){
                                Manager.activeMode = Mode.signAdd


                                this.uiShowHideContainer('76b2b403-87ad-44f3-a461-d176f7d50093',true)
                                this.uiShowHideContainer('86d864a4-9114-448c-b898-49a4d8e3369d',true)
                                
                                this.uiShowHideContainer('343dccdd-2084-406e-aa37-f3d036886803',false) //block option

                                this.uiShowHideContainer('685ace8e-2cd1-41c1-9cf9-204a04ba48c9',true)
                                this.uiShowHideContainer('9e5a27d5-ac35-4719-aa9d-41da13b850c3',true)
                                this.uiShowHideContainer('42d03025-0316-42bb-8d8d-5b2008797538',true)
                                this.uiShowHideContainer('f8a4b7e2-7b17-41be-9487-8979cdaa9442',true)
                                this.uiShowHideContainer('811ee73b-183f-4026-88e4-88b357aaca37',true)
                                this.uiShowHideContainer('103ab09f-de51-4748-a2a8-056fb23cd6ca',true)
                                this.uiShowHideContainer('46158dc4-fb96-4169-9d86-d1a3f9b35c0c',true)
                                this.uiShowHideContainer('c74549bb-cf26-4180-bbe9-567444b67060',true)
                                this.uiShowHideContainer('1bcd747a-7d53-4540-b45c-41549d2a7ff7',true)
                                this.uiShowHideContainer('7a4f36aa-3326-4c83-ab4a-0ca62e2823d4',true)
                                this.uiShowHideContainer('af6bcc69-1948-41b2-8c37-203a2fff7189',false)

                            }
                            

                            if(itemButton.name) {
                                let nameString = itemButton.name.toString()
                                //updates 'block option' icon image
                                 this.matchModelName(nameString)
                            }
                            
                            if (itemButton.name == 'faceColorPicker'){
                                this.currentColorBtn = 'face'
                                this.uiShowHideContainer('e069adf5-f209-4e94-8dbe-291920e9c311',true)
                                this.uiShowHideContainer('db87cdb7-8a9a-4910-8c05-06db7d427999',false)
                                
                                
                            }
                            
                            if (itemButton.name == 'bodyColorPicker'){

                                this.currentColorBtn = 'body'
                                this.uiShowHideContainer('e069adf5-f209-4e94-8dbe-291920e9c311',true)
                                this.uiShowHideContainer('db87cdb7-8a9a-4910-8c05-06db7d427999',false)
                                
                            }
                            if (itemButton.name == 'cellColorPicker'){

                                this.currentColorBtn = 'cell'
                                this.uiShowHideContainer('e069adf5-f209-4e94-8dbe-291920e9c311',true)
                                this.uiShowHideContainer('db87cdb7-8a9a-4910-8c05-06db7d427999',false)
                                
                            }


                            if (itemButton.name == 'cpGrey'){
                               
                                    
                                
                                this.uiShowHideContainer('db87cdb7-8a9a-4910-8c05-06db7d427999',true)
                                this.updatePickedColor(this.currentColorBtn,'grey')
                                
                            }
                            if (itemButton.name == 'cpLightGrey'){
                               
                                this.uiShowHideContainer('db87cdb7-8a9a-4910-8c05-06db7d427999',true)
                                this.updatePickedColor(this.currentColorBtn,'light_grey')
                            }
                            if (itemButton.name == 'cpWhite'){
                               
                                this.uiShowHideContainer('db87cdb7-8a9a-4910-8c05-06db7d427999',true)
                                this.updatePickedColor(this.currentColorBtn,'white')
                            }
                            if (itemButton.name == 'cpBlue'){
                                this.uiShowHideContainer('db87cdb7-8a9a-4910-8c05-06db7d427999',true)
                                this.updatePickedColor(this.currentColorBtn,'blue')
                            }
                            if (itemButton.name == 'cpYellow'){
                                this.uiShowHideContainer('db87cdb7-8a9a-4910-8c05-06db7d427999',true)
                                this.updatePickedColor(this.currentColorBtn,'yellow')
                            }
                            if (itemButton.name == 'cpBrown'){
                                this.uiShowHideContainer('db87cdb7-8a9a-4910-8c05-06db7d427999',true)
                                this.updatePickedColor(this.currentColorBtn,'brown')
                            }
                            if (itemButton.name == 'cpPink'){
                                this.uiShowHideContainer('db87cdb7-8a9a-4910-8c05-06db7d427999',true)
                                this.updatePickedColor(this.currentColorBtn,'pink')
                            }
                            if (itemButton.name == 'cpRed'){
                                this.uiShowHideContainer('db87cdb7-8a9a-4910-8c05-06db7d427999',true)
                                this.updatePickedColor(this.currentColorBtn,'red')
                            }
                            if (itemButton.name == 'cpGreen'){
                                this.uiShowHideContainer('db87cdb7-8a9a-4910-8c05-06db7d427999',true)
                                this.updatePickedColor(this.currentColorBtn,'green')
                            }
                            if (itemButton.name == 'cpBlack'){
                                this.uiShowHideContainer('db87cdb7-8a9a-4910-8c05-06db7d427999',true)
                                this.updatePickedColor(this.currentColorBtn,'black')
                            }
                    
                            if (itemButton.name == 'cpOrange'){
                                this.uiShowHideContainer('db87cdb7-8a9a-4910-8c05-06db7d427999',true)
                                this.updatePickedColor(this.currentColorBtn,'orange')
                            }
                    
                            if (itemButton.name == 'polygraph'){
                                    sceneMessageBus.emit("textSubmitted", {name: itemButton.name})
                                
                            }
                            if (itemButton.name == 'OnOffBtnOff'){
                            
                                this.uiShowHideImage('OnOffBtnOff',false)
                                this.uiShowHideImage('OnOffBtnOn',true)
                                this.uiShowHideContainer('f937c143-3a4d-4023-b208-c3f099620d76',true)

                                this.uiShowHideContainer('76b2b403-87ad-44f3-a461-d176f7d50093',true)
                                this.uiShowHideContainer('86d864a4-9114-448c-b898-49a4d8e3369d',true)
                                this.uiShowHideContainer('685ace8e-2cd1-41c1-9cf9-204a04ba48c9',true)
                                this.uiShowHideContainer('9e5a27d5-ac35-4719-aa9d-41da13b850c3',true)
                                this.uiShowHideContainer('42d03025-0316-42bb-8d8d-5b2008797538',true)
                                this.uiShowHideContainer('f8a4b7e2-7b17-41be-9487-8979cdaa9442',true)
                                this.uiShowHideContainer('811ee73b-183f-4026-88e4-88b357aaca37',true)
                                this.uiShowHideContainer('103ab09f-de51-4748-a2a8-056fb23cd6ca',true)
                                this.uiShowHideContainer('46158dc4-fb96-4169-9d86-d1a3f9b35c0c',true)
                                this.uiShowHideContainer('c74549bb-cf26-4180-bbe9-567444b67060',true)
                                this.uiShowHideContainer('1bcd747a-7d53-4540-b45c-41549d2a7ff7',true)
                                this.uiShowHideContainer('7a4f36aa-3326-4c83-ab4a-0ca62e2823d4',true)
                            }
                            if (itemButton.name == 'OnOffBtnOn'){
                            
                                
                                this.uiShowHideImage('OnOffBtnOff',true)
                                this.uiShowHideImage('OnOffBtnOn',false)
                                this.uiShowHideContainer('f937c143-3a4d-4023-b208-c3f099620d76',false)

                                this.uiShowHideContainer('76b2b403-87ad-44f3-a461-d176f7d50093',false)
                                this.uiShowHideContainer('86d864a4-9114-448c-b898-49a4d8e3369d',false)
                                this.uiShowHideContainer('685ace8e-2cd1-41c1-9cf9-204a04ba48c9',false)
                                this.uiShowHideContainer('9e5a27d5-ac35-4719-aa9d-41da13b850c3',false)
                                this.uiShowHideContainer('42d03025-0316-42bb-8d8d-5b2008797538',false)
                                this.uiShowHideContainer('f8a4b7e2-7b17-41be-9487-8979cdaa9442',false)
                                this.uiShowHideContainer('811ee73b-183f-4026-88e4-88b357aaca37',false)
                                this.uiShowHideContainer('103ab09f-de51-4748-a2a8-056fb23cd6ca',false)
                                this.uiShowHideContainer('46158dc4-fb96-4169-9d86-d1a3f9b35c0c',false)
                                this.uiShowHideContainer('c74549bb-cf26-4180-bbe9-567444b67060',false)
                                this.uiShowHideContainer('1bcd747a-7d53-4540-b45c-41549d2a7ff7',false)
                                this.uiShowHideContainer('7a4f36aa-3326-4c83-ab4a-0ca62e2823d4',false)
                            }
                            if (itemButton.name == 'addIcon'){
            
                                Manager.activeMode = Mode.blockAdd
                                changeMaterial(resources.images.addImage,Color3.Green())

                                this.uiShowHideImage("addSelector",true) 
                                this.uiShowHideImage("subtractSelector",false) 
                                this.uiShowHideImage("eyeDropSelector",false) 
                                this.uiShowHideImage("xSelector",false) 
                                this.uiShowHideImage("ySelector",false) 
                                this.uiShowHideImage("zSelector",false) 

                                

                            }
                            if (itemButton.name == 'subtractIcon'){

                                Manager.activeMode = Mode.Subtract
                                changeMaterial(resources.images.subtractImage,Color3.Red())
                                this.uiShowHideImage("addSelector",false) 
                                this.uiShowHideImage("subtractSelector",true) 
                                this.uiShowHideImage("eyeDropSelector",false) 
                                this.uiShowHideImage("xSelector",false) 
                                this.uiShowHideImage("ySelector",false) 
                                this.uiShowHideImage("zSelector",false) 
                                
                            }
                            if (itemButton.name == 'eyeDropIcon'){
                                Manager.activeMode = Mode.Subtract
                                changeMaterial(resources.images.eyeImage,Color3.Yellow())
                                this.uiShowHideImage("addSelector",false) 
                                this.uiShowHideImage("subtractSelector",false) 
                                this.uiShowHideImage("eyeDropSelector",true) 
                                this.uiShowHideImage("xSelector",false) 
                                this.uiShowHideImage("ySelector",false) 
                                this.uiShowHideImage("zSelector",false) 
                            }
                            if (itemButton.name == 'x_ui_icon'){
                                Manager.activeMode = Mode.Xrotate
                                changeMaterial(resources.images.xrotate,Color3.Red())
                                this.uiShowHideImage("addSelector",false) 
                                this.uiShowHideImage("subtractSelector",false) 
                                this.uiShowHideImage("eyeDropSelector",false) 
                                this.uiShowHideImage("xSelector",true) 
                                this.uiShowHideImage("ySelector",false) 
                                this.uiShowHideImage("zSelector",false) 
                            }
                            if (itemButton.name == 'y_ui_icon'){
                                Manager.activeMode = Mode.Yrotate
                                changeMaterial(resources.images.yrotate,Color3.Green())
                                this.uiShowHideImage("addSelector",false) 
                                this.uiShowHideImage("subtractSelector",false) 
                                this.uiShowHideImage("eyeDropSelector",false) 
                                this.uiShowHideImage("xSelector",false) 
                                this.uiShowHideImage("ySelector",true) 
                                this.uiShowHideImage("zSelector",false) 
                            }
                            if (itemButton.name == 'z_ui_icon'){
                                Manager.activeMode = Mode.Zrotate
                                changeMaterial(resources.images.zrotate,Color3.Blue())
                                this.uiShowHideImage("addSelector",false) 
                                this.uiShowHideImage("subtractSelector",false) 
                                this.uiShowHideImage("eyeDropSelector",false) 
                                this.uiShowHideImage("xSelector",false) 
                                this.uiShowHideImage("ySelector",false) 
                                this.uiShowHideImage("zSelector",true) 
                            }
                        })
                    }
                }
                for (var k = 0; k < this.itemContainers[i].itemText.length; k++){
                    
                    if(this.itemContainers[i].containerId == this.itemContainers[i].itemText[k].containerId) {
                     
                     const containerText = new UIText(containerRect)
                     containerText.value = this.itemContainers[i].itemText[k].value
                     containerText.width = this.itemContainers[i].itemText[k].width
                     containerText.height = this.itemContainers[i].itemText[k].height
                     if (this.itemContainers[i].itemText[k].font){
                         containerText.font = new Font(this.itemContainers[i].itemText[k].font)
                     }
                     containerText.color = this.itemContainers[i].itemText[k].color
                     containerText.fontSize = this.itemContainers[i].itemText[k].fontSize
                     containerText.textWrapping = this.itemContainers[i].itemText[k].textWrapping
                     containerText.positionX = this.itemContainers[i].itemText[k].positionX
                     containerText.positionY = this.itemContainers[i].itemText[k].positionY
                     containerText.isPointerBlocker = false
                     }
                 }

            for (var j = 0; j < this.itemContainers[i].inputText.length; j++){

                if(this.itemContainers[i].containerId == this.itemContainers[i].inputText[j].containerId) {
                const containerInput = new UIInputText(containerRect)
                containerInput.width = this.itemContainers[i].inputText[j].width
                containerInput.height = this.itemContainers[i].inputText[j].height
                containerInput.vAlign = this.itemContainers[i].inputText[j].vAlign
                containerInput.hAlign = this.itemContainers[i].inputText[j].hAlign
                containerInput.fontSize = this.itemContainers[i].inputText[j].fontSize
                containerInput.placeholder = this.itemContainers[i].inputText[j].placeholder
                containerInput.color = this.itemContainers[i].inputText[j].color
                containerInput.positionY = this.itemContainers[i].inputText[j].positionY
                containerInput.positionX = this.itemContainers[i].inputText[j].positionX
                containerInput.isPointerBlocker = this.itemContainers[i].inputText[j].isPointerBlocker
                containerInput.name = this.itemContainers[i].inputText[j].inputId
                containerInput.textWrapping = true
                containerInput.onTextSubmit = new OnTextSubmit((x) => {
                    const text = new UIText(containerInput)
                    text.name = containerInput.name
                    text.value = x.text  //TODO remove previous value 
                    text.width = "10%"
                    text.height = "7px"
                    text.fontSize = 5  
                    text.vAlign = "bottom"
                    text.hAlign = "left"
                    
          //Update Image 
            if(containerInput.name == 'texture'){
                    sceneMessageBus.emit("imageChange", {name: this.signLayerId, value: containerInput.value})
                           
                     if (this.currentLayerNumber == 0){
                        log(this.currentCellName+'l1')
                        this.changeUiSignIconImage(this.currentCellName+'l1',containerInput.value)
                        this.changeUiSignIconImage('sign1Layer1',containerInput.value)
                     }
                     if (this.currentLayerNumber == 1){
                        log(this.currentCellName)
                        this.changeUiSignIconImage(this.currentCellName+'l2',containerInput.value)

                        this.changeUiSignIconImage('sign1Layer2',containerInput.value)
                     }

                     if (this.currentLayerNumber == 2){
                        this.changeUiSignIconImage(this.currentCellName+'l3',containerInput.value)

                        this.changeUiSignIconImage('sign1Layer3',containerInput.value)
                     }
                     if (this.currentLayerNumber == 3){
                        this.changeUiSignIconImage(this.currentCellName+'l4',containerInput.value)

                        this.changeUiSignIconImage('sign1Layer4',containerInput.value)
                     }
                }
                if(containerInput.name == 'scaleHeight'){
                    sceneMessageBus.emit("scaleHeight", {name: this.signLayerId, value: containerInput.value})
                 
                }
                if(containerInput.name == 'scaleWidth'){
                      sceneMessageBus.emit("scaleWidth", {name: this.signLayerId, value: containerInput.value})
                   
                }
                if(containerInput.name == 'xPositionInput'){
                    sceneMessageBus.emit("xPositionInput", {name: this.signLayerId, value: containerInput.value})
                 
                }
                if(containerInput.name == 'yPositionInput'){
                    sceneMessageBus.emit("yPositionInput", {name: this.signLayerId, value: containerInput.value})
                
                }
                if(containerInput.name == 'zPositionInput'){
                    sceneMessageBus.emit("zPositionInput", {name: this.signLayerId, value: containerInput.value})
                
                }
                if(containerInput.name == 'emissiveColor'){
                    sceneMessageBus.emit("emissiveColor", {name: this.signLayerId, value: containerInput.value})
                
                }
                if(containerInput.name == 'emissiveIntensity'){
                    sceneMessageBus.emit("emissiveIntensity", {name: this.signLayerId, value: containerInput.value})
                
                }

            //Update Text
            if(containerInput.name == 'textValue'){
                log('name: '+containerInput.name  + ' value: '+ containerInput.value)
                sceneMessageBus.emit("textValueChange", {name: this.signLayerId, value: containerInput.value})
            }
            if(containerInput.name == 'fontSizeInput'){
                log('name: '+containerInput.name  + ' value: '+ containerInput.value)
                sceneMessageBus.emit("fontSizeChange", {name: this.signLayerId, value: containerInput.value})
                }
            if(containerInput.name == 'colorInput'){   
                log('name: '+containerInput.name  + ' value: '+ containerInput.value)
                sceneMessageBus.emit("fontColorChange", {name: this.signLayerId, value: containerInput.value})
                }
            })
                this.inputTextItem.push(containerInput)
            }  
        }
        }
        //once the array is read clear from memory
        this.itemContainers = []
    }
}