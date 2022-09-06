import { loadSignData } from "./dataLoader"
import { UiMenuContainer, itemContainer, imageLayer, itemText, inputText } from "./uiMenu"

import {default as uiData} from "./uiData.json"
import {default as signData} from "./signData.json"



export class LoadUi {
    private imageArray:imageLayer[] = []
    private textArray:itemText[] = []
    private inputArray:inputText[] = []
    constructor(){
            loadSignData()
            log(Math.floor(19/10)+1)
            let uiManager:UiMenuContainer = new UiMenuContainer()
            for (let i = 0; i < uiData.ui.length; i++) {
            for (let j = 0; j < uiData.ui[i].imageLayers.length; j++) {
                const image:imageLayer = {
                    imageId:uiData.ui[i].imageLayers[j].imageId,
                    imageName:uiData.ui[i].imageLayers[j].imageName,
                    imageType:uiData.ui[i].imageLayers[j].imageType,
                    containerId:uiData.ui[i].imageLayers[j].containerId,
                    imageLocation:uiData.ui[i].imageLayers[j].imageLocation,
                    eventType:uiData.ui[i].imageLayers[j].eventType,
                    eventTarget:uiData.ui[i].imageLayers[j].eventTarget,
                    urlLink:uiData.ui[i].imageLayers[j].urlLink,
                    requireUV:uiData.ui[i].imageLayers[j].requireUV,
                    imageHeight:uiData.ui[i].imageLayers[j].imageHeight,
                    imageWidth:uiData.ui[i].imageLayers[j].imageWidth,
                    sourceTop:uiData.ui[i].imageLayers[j].sourceTop,
                    sourceLeft:uiData.ui[i].imageLayers[j].sourceLeft,
                    sourceWidth:uiData.ui[i].imageLayers[j].sourceWidth,
                    sourceHeight:uiData.ui[i].imageLayers[j].sourceHeight,
                    posX:uiData.ui[i].imageLayers[j].posX,
                    posY:uiData.ui[i].imageLayers[j].posY,
                    visible:uiData.ui[i].imageLayers[j].visible
                    }
                this.imageArray.push(image)
            }

            for (let k = 0; k < uiData.ui[i].itemText.length; k++) {
                const text:itemText = {
                    textId:uiData.ui[i].itemText[k].textId,
                    containerId:uiData.ui[i].itemText[k].containerId,
                    width:uiData.ui[i].itemText[k].width,
                    height:uiData.ui[i].itemText[k].height,
                    font:uiData.ui[i].itemText[k].font,
                    value:uiData.ui[i].itemText[k].value,
                    positionX:uiData.ui[i].itemText[k].positionX,
                    positionY:uiData.ui[i].itemText[k].positionY,
                    color: new Color4 (
                    uiData.ui[i].itemText[k].color.r,
                    uiData.ui[i].itemText[k].color.g,
                    uiData.ui[i].itemText[k].color.b,
                    uiData.ui[i].itemText[k].color.a
                    ),
                    fontSize:uiData.ui[i].itemText[k].fontSize,
                    adaptWidth:uiData.ui[i].itemText[k].adaptWidth,
                    textWrapping:uiData.ui[i].itemText[k].textWrapping
                }
                this.textArray.push(text)
            }

            for (let l = 0; l < uiData.ui[i].inputText.length; l++) {
                const input:inputText = {
                    inputId:uiData.ui[i].inputText[l].inputId,
                    containerId:uiData.ui[i].inputText[l].containerId,
                    width:uiData.ui[i].inputText[l].width,
                    height:uiData.ui[i].inputText[l].height,
                    vAlign:uiData.ui[i].inputText[l].vAlign,
                    hAlign:uiData.ui[i].inputText[l].hAlign,
                    fontSize:uiData.ui[i].inputText[l].fontSize,
                    placeholder:uiData.ui[i].inputText[l].placeholder,
                    color:
                    new Color4 (
                    uiData.ui[i].inputText[l].color.r,
                    uiData.ui[i].inputText[l].color.g,
                    uiData.ui[i].inputText[l].color.b,
                    uiData.ui[i].inputText[l].color.a
                    ),
                    positionY:uiData.ui[i].inputText[l].positionY,
                    positionX:uiData.ui[i].inputText[l].positionX,
                    isPointerBlocker:uiData.ui[i].inputText[l].isPointerBlocker
                }
            this.inputArray.push(input)
            } 

            const item:itemContainer =  {
                containerId:uiData.ui[i].containerId,
                width:uiData.ui[i].width,
                height:uiData.ui[i].height,
                color:new Color4(
                uiData.ui[i].color.r,
                    uiData.ui[i].color.g,
                    uiData.ui[i].color.b,
                    uiData.ui[i].color.a
                ),
                opacity:uiData.ui[i].opacity,
                itemName:uiData.ui[i].itemName,
                posX:uiData.ui[i].posX,
                posY:uiData.ui[i].posY,
                vAlign:uiData.ui[i].vAlign,
                hAlign:uiData.ui[i].hAligh,
                visible:uiData.ui[i].visible,
                imageLayers:this.imageArray,
                itemText:this.textArray,
                inputText:this.inputArray
            }
                uiManager.newItemContainer(item)
                uiManager.generateUiItems()
            }

            let signName:string
            let pageNumber:number
            let rowNumber:number
            let columnNumber:number
            for (let j = 0; j < signData.signs.length; j++) {

            pageNumber = Math.floor(j/10.001)+1
            rowNumber = Math.floor(j/5.001)+1
            columnNumber = j + (Math.floor(j/5.001)*-5) + 1
            signName = 'p'+pageNumber+'r'+rowNumber+'c'+columnNumber+'l1'
            sendSignData(uiManager,signData.signs[j].signData[0],signName)
            signName = 'p'+pageNumber+'r'+rowNumber+'c'+columnNumber+'l2'
            sendSignData(uiManager,signData.signs[j].signData[1],signName)
            signName = 'p'+pageNumber+'r'+rowNumber+'c'+columnNumber+'l3'
            sendSignData(uiManager,signData.signs[j].signData[2],signName)
            signName = 'p'+pageNumber+'r'+rowNumber+'c'+columnNumber+'l4'
            sendSignData(uiManager,signData.signs[j].signData[3],signName)
            }

            function sendSignData(uiManager:UiMenuContainer, layer:any,signName:string){
            layer.uiLayerName = signName
            uiManager.setUiSignImage(layer)
            }
            // clear array once loaded
            uiData.ui = []
            
    }
}
