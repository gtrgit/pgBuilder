import { Sign, signLayerData, imageTextLayer } from "./sign"
import {default as signData} from "./signData.json"

export type sceneUiSignMapping = {
    signPositionData:Transform
    imageTextData:imageTextLayer[]
}

//todo MOVE ALL JSON LOADS TO HERE

export function loadSignData(){ 
    let imgTxtDataArray:imageTextLayer[] = []
    
    let layerTransform:Transform = new Transform()
    let imageTransform:Transform = new Transform()
    let textTransform:Transform = new Transform()

    let signName:string
    log('this sign length is '+signData.signs.length)
        for (let i = 0; i < signData.signs.length; i++) {

            signName = signData.signs[i].signName

            
            for (let j = 0; j < signData.signs[i].signData.length; j++) {
                layerTransform = new Transform(
                    {
                            position: new Vector3(
                                signData.signs[i].signPosition[0].x,
                                signData.signs[i].signPosition[0].y,
                                signData.signs[i].signPosition[0].x,
                            ),
                            scale: new Vector3(
                                signData.signs[i].signPosition[1].x,
                                signData.signs[i].signPosition[1].y,
                                signData.signs[i].signPosition[1].z,
                                ),
                            rotation: Quaternion.Euler(
                                signData.signs[i].signPosition[2].x,
                                signData.signs[i].signPosition[2].y,
                                signData.signs[i].signPosition[2].z,
                            )
                    })     
            }
            for(let k = 0; k < signData.signs[i].signData.length; k++){

              
                    imageTransform = new Transform(
                        {
                                position: new Vector3(
                                    signData.signs[i].signData[k].imageTransform[0].x,
                                    signData.signs[i].signData[k].imageTransform[0].y,
                                    signData.signs[i].signData[k].imageTransform[0].z,
                                ),
                                scale: new Vector3(
                                    signData.signs[i].signData[k].imageTransform[1].x,
                                    signData.signs[i].signData[k].imageTransform[1].y,
                                    signData.signs[i].signData[k].imageTransform[1].z

                                    ),
                                rotation: Quaternion.Euler(
                                    signData.signs[i].signData[k].imageTransform[2].x,
                                    signData.signs[i].signData[k].imageTransform[2].y,
                                    signData.signs[i].signData[k].imageTransform[2].z,
                                )
                        })     
                
               
                    textTransform = new Transform(
                        {
                            position: new Vector3(
                                signData.signs[i].signData[k].textTransform[0].x,
                                signData.signs[i].signData[k].textTransform[0].y,
                                signData.signs[i].signData[k].textTransform[0].z,
                            ),
                            scale: new Vector3(
                                signData.signs[i].signData[k].textTransform[1].x,
                                signData.signs[i].signData[k].textTransform[1].y,
                                signData.signs[i].signData[k].textTransform[1].z

                                ),
                            rotation: Quaternion.Euler(
                                signData.signs[i].signData[k].textTransform[2].x,
                                signData.signs[i].signData[k].textTransform[2].y,
                                signData.signs[i].signData[k].textTransform[2].z,
                            )
                        })     
                

                const imgTxtData:imageTextLayer = 
                    {
                        layerId: signData.signs[i].signData[k].layerId,
                        layerName: signData.signs[i].signData[k].layerName,
                        uiLayerName: '',
                        imageUrlLink: signData.signs[i].signData[k].imageUrlLink,
                        texture: signData.signs[i].signData[k].texture,
                        sourceWidth: signData.signs[i].signData[k].sourceWidth,
                        sourceHeight: signData.signs[i].signData[k].sourceHeight,
                        imageHeight: signData.signs[i].signData[k].imageHeight,
                        imageWidth: signData.signs[i].signData[k].imageWidth,
                        materialTransparencyMode: signData.signs[i].signData[k].materialTransparencyMode,
                        materialAlphaTest: signData.signs[i].signData[k].materialAlphaTest,
                        materialEmissiveColor: signData.signs[i].signData[k].materialEmissiveColor,
                        materialEmissiveIntensity: signData.signs[i].signData[k].materialEmissiveIntensity,
                        imageTransform:imageTransform,
                        textUrlLink: signData.signs[i].signData[k].textUrlLink,
                        width: signData.signs[i].signData[k].width,
                        height: signData.signs[i].signData[k].height,
                        textValue: signData.signs[i].signData[k].textValue,
                        font: signData.signs[i].signData[k].font,
                        fontSize: signData.signs[i].signData[k].fontSize,
                        color: signData.signs[i].signData[k].color,
                        opacity: signData.signs[i].signData[k].opacity,
                        textTransform:textTransform,
                        hAlign: signData.signs[i].signData[k].hAlign,
                        vAlign: signData.signs[i].signData[k].vAlign,
                        visible: signData.signs[i].signData[k].visible
                    }
                imgTxtDataArray.push(imgTxtData)
            }      
           const signLayerData:signLayerData = {signPositionData:layerTransform,imageTextData:imgTxtDataArray}
           new Sign(signName,signLayerData)
           imgTxtDataArray = []
        }

}

