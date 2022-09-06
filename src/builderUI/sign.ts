const sceneMessageBus = new MessageBus()

export type signLayerData = {
    signPositionData:Transform
    imageTextData:imageTextLayer[]
}

export type imageTextLayer = {
    layerId:string
    layerName: string
    uiLayerName:string
    imageUrlLink:string
    texture: string
    sourceWidth:number
    sourceHeight:number
    imageHeight:number
    imageWidth:number
    materialTransparencyMode: number
    materialAlphaTest: number
    materialEmissiveColor: string
    materialEmissiveIntensity: number
    imageTransform:Transform
    textUrlLink:string
    width: number
    height: number
    textValue: string
    font?: string
    fontSize: number
    color: string
    opacity: number
    textTransform:Transform
    hAlign?: string
    vAlign?: string
    visible:boolean
}

export class Sign extends Entity {
    private seperationDistance: number = 0.1
    private signTransform: Transform = new Transform()
    //private layersMeta:Layer[] = []
    private layersImageEnt:Entity[] = []
    private layersTxtEnt:Entity[] = []

    constructor(signName:string,signLayerData: signLayerData){
        super()
        engine.addEntity(this)
        this.name = signName
        
        this.signTransform = signLayerData.signPositionData
        this.addComponent(this.signTransform)
                
            for(let i = 0; i < signLayerData.imageTextData.length; i++){
                  
                const ent = new Entity(signLayerData.imageTextData[i].layerId)   
                
                const plane = new PlaneShape()
                const material = new Material()
                const imageTransform = new Transform()
                imageTransform.position = signLayerData.imageTextData[i].imageTransform.position 
                imageTransform.rotation = signLayerData.imageTextData[i].imageTransform.rotation
                imageTransform.scale = signLayerData.imageTextData[i].imageTransform.scale
                ent.addComponent(imageTransform)
                ent.addComponent(plane)

                material.transparencyMode = signLayerData.imageTextData[i].materialTransparencyMode
                material.emissiveColor = Color3.FromHexString(signLayerData.imageTextData[i].materialEmissiveColor)
                
                const texture:Texture = new Texture(signLayerData.imageTextData[i].texture)
                
                material.albedoTexture = texture
                material.alphaTexture = texture
                material.emissiveIntensity = signLayerData.imageTextData[i].materialEmissiveIntensity

                ent.addComponent(material)
                ent.setParent(this)
        
                this.layersImageEnt.push(ent)
                
                // //Text Layer
                const textEnt = new Entity(signLayerData.imageTextData[i].layerId)   
                    const txt = new TextShape()
                    const textTransform = new Transform()
                    textTransform.position = signLayerData.imageTextData[i].textTransform.position
                    textTransform.rotation = signLayerData.imageTextData[i].textTransform.rotation
                    textTransform.scale = signLayerData.imageTextData[i].textTransform.scale   
                    txt.value = signLayerData.imageTextData[i].textValue
                    txt.font = new Font(signLayerData.imageTextData[i].font)
                    txt.fontSize = signLayerData.imageTextData[i].fontSize
                    txt.color = Color3.FromHexString(signLayerData.imageTextData[i].color)
                    txt.opacity = signLayerData.imageTextData[i].opacity
                    textEnt.addComponent(txt)
                    textEnt.addComponent(textTransform)
                    textEnt.setParent(this)
                 this.layersTxtEnt.push(textEnt)
            }

             
        sceneMessageBus.on("addSignLayer", (e) => {
           
                
                for (let i = 0; i <this.layersImageEnt.length;i++){
                    
                    if(this.layersImageEnt[i].name == e.signLayerId){
                        log('layers names..... '+this.layersImageEnt[i].uuid)

                    // log(this.layersImageEnt[i].name)
                    log('addSignLayer emit received '+ e.signLayerId)
                    const ent = new Entity(e.signLayerId)   
                    const plane = new PlaneShape()
                    let material = new Material()
                    const imageTransform = new Transform()

                    log('pos '+e.position+'  '+e.position.x)
                    log('scale '+e.scale)
                    log('rot '+e.rotation)

                    log('x normal'+ e.normal.x )
                    let x = e.position.x + e.normal.x 
                    let y = e.position.y + e.normal.y 
                    let z = e.position.z + e.normal.z 
                        // debugger
                   

                    imageTransform.scale.setAll(2)

                    if (e.normal.x > 0) {
                        imageTransform.position.x = x + .05 * (i+1)
                        imageTransform.position.y = y
                        imageTransform.position.z = z
                        imageTransform.rotation = Quaternion.Euler(0, 90, 0)
                    }
                    if (e.normal.x < 0) {
                        imageTransform.position.x = x - .05*(i+1)
                        imageTransform.position.y = y
                        imageTransform.position.z = z
                        imageTransform.rotation = Quaternion.Euler(0, 90, 0)
                    }
                    
                    if (e.normal.y > 0) {
                        imageTransform.position.x = x 
                        imageTransform.position.y = y + .05 * (i+1)
                        imageTransform.position.z = z
                        imageTransform.rotation = Quaternion.Euler(90, 0, 0)
                    }
                    if (e.normal.y < 0) {
                        imageTransform.position.x = x 
                        imageTransform.position.y = y - .05 * (i+1)
                        imageTransform.position.z = z
                        imageTransform.rotation = Quaternion.Euler(90, 0, 0)
                    }
                    if (e.normal.z > 0) {
                        imageTransform.position.x = x 
                        imageTransform.position.y = y 
                        imageTransform.position.z = z + .05 * (i+1)
                        imageTransform.rotation = Quaternion.Euler(0, 0, 90)
                    }
                    if (e.normal.z < 0) {
                        imageTransform.position.x = x 
                        imageTransform.position.y = y 
                        imageTransform.position.z = z - .05 * (i+1)
                        imageTransform.rotation = Quaternion.Euler(0, 0, 90)
                    }
                    
                        if (this.layersImageEnt[i].uuid){
                            // const texture:string = engine.entities[this.layersImageEnt[i].uuid].getComponent(Material).albedoColor
                            // log(texture)
                            // log(engine.entities[this.layersImageEnt[i].uuid].getComponent(Material).albedoTexture)
                            // const textureStr: string = engine.entities[this.layersImageEnt[i].uuid].getComponent(Material).alphaTexture
                            //  const texture:Texture = new Texture()
                            material = engine.entities[this.layersImageEnt[i].uuid].getComponent(Material)
                            material.albedoTexture = engine.entities[this.layersImageEnt[i].uuid].getComponent(Material).alphaTexture

                            // // material.albedoTexture = engine.entities[this.layersImageEnt[i].uuid].getComponent(Material).albedoTexture 
                            // // material.alphaTexture = engine.entities[this.layersImageEnt[i].uuid].getComponent(Material).alphaTexture
                      
                            ent.addComponent(imageTransform)
                            ent.addComponent(plane)
                            ent.addComponent(material)
                            ent.setParent(engine.entities[e.parentId])
                            engine.addEntity(ent)
                        }

                        
                    }
                }
                


               
            })

        sceneMessageBus.on("textSubmitted", (info: UIImage ) => {
        log('emit received '+ info.name)
                 if (info.name){
                    let name:string  = info.name
                    this.moveImage(name)
                }
        })
        
        sceneMessageBus.on("textValueChange", (info: UIInputText ) => {
            log('emit received '+ info.name)
                     if (info.name){
                        let name:string  = info.name
                        let value:string = info.value
                       this.changeTextValue(name,value)
                    }
            })
            sceneMessageBus.on("fontSizeChange", (info: UIInputText ) => {
                         if (info.name){
                            let name:string  = info.name
                            let value:number = +info.value
                           this.changeFontSize(name,value)
                        }
                })
                sceneMessageBus.on("fontColorChange", (info: UIInputText ) => {
                    log('emit received '+ info.name)
                             if (info.name){
                                let name:string  = info.name
                                let value:string = info.value
                               this.changeFontColor(name,value)
                            }
                    })
                
        sceneMessageBus.on("imageChange", (info: UIInputText ) => {
                     if (info.name){
                        let name:string  = info.name
                        this.changeImage(info.name,  new Texture(info.value))
                    }
            })
        sceneMessageBus.on("scaleHeight", (info: UIInputText ) => {
                        if (info.name){
                        let name:string  = info.name
                        let value:number = +info.value
                        this.changeImageScaleHeight(name,  value)
                    }
            })
        sceneMessageBus.on("scaleWidth", (info: UIInputText ) => {
            if (info.name){
                let name:string  = info.name
                let value:number = +info.value
                this.changeImageScaleWidth(name,  value)
            }
           })
        sceneMessageBus.on("xPositionInput", (info: UIInputText ) => {
        if (info.name){
            let name:string  = info.name
            let value:number = +info.value
            this.changeImageXPos(name,  value)
        }
        })
        sceneMessageBus.on("yPositionInput", (info: UIInputText ) => {
            if (info.name){
                let name:string  = info.name
                let value:number = +info.value
                this.changeImageYPos(name,  value)
            }
            })   
        sceneMessageBus.on("zPositionInput", (info: UIInputText ) => {
            if (info.name){
                let name:string  = info.name
                let value:number = +info.value
                this.changeImageZPos(name,  value)
            }
            })  
        sceneMessageBus.on("emissiveColor", (info: UIInputText ) => {
            if (info.name){
                let name:string  = info.name
                let value:string = info.value
                this.changeEmissiveColor(name,  value)
            }
            })    
        sceneMessageBus.on("emissiveIntensity", (info: UIInputText ) => {
            if (info.name){
                let name:string  = info.name
                let value:number = +info.value
                this.changeEmissiveIntensity(name,  value)
            }
            })   

    }
    addSignLayerToScene(layerId:string){

    }
    changeFontColor(layerName:string, value:string){
        
        for (let i = 0;i < this.layersTxtEnt.length; i++){
    
            if(this.layersTxtEnt[i].name == layerName){
                log('changeFontColor '+layerName+' '+value)
                     engine.entities[this.layersTxtEnt[i].uuid].getComponent(TextShape).color =  Color3.FromHexString(value)
            }
        }
    }
    changeFontSize(layerName:string, value:number){
        
        for (let i = 0;i < this.layersTxtEnt.length; i++){
    
            if(this.layersTxtEnt[i].name == layerName){
                     engine.entities[this.layersTxtEnt[i].uuid].getComponent(TextShape).fontSize = value
            }
        }
    }
    changeTextValue(layerName:string, value:string){
        for (let i = 0;i < this.layersTxtEnt.length; i++){
            if(this.layersTxtEnt[i].name == layerName){
                     const newText = new TextShape(value)
                     newText.fontSize = 2
                     engine.entities[this.layersTxtEnt[i].uuid].addComponentOrReplace(newText)
            }
        }
    }

    moveImage(imageId:string  ) {
        for (let i = 0;i < this.layersImageEnt.length; i++){
            if (this.layersImageEnt[i].name == imageId){
                this.layersImageEnt[i].getComponent(Transform).position.x = 2
            }
        }
    }
    
    changeImageScaleHeight(layerName:string,  scaleHeight:number ) {
        for (let i = 0;i < this.layersImageEnt.length; i++){
            if(this.layersImageEnt[i].name == layerName){
                    this.layersImageEnt[i].getComponent(Transform).scale.y = scaleHeight
            }
        }
    }
    changeImageScaleWidth(layerName:string,  scaleWidth:number ) {
        for (let i = 0;i < this.layersImageEnt.length; i++){
            if(this.layersImageEnt[i].name == layerName){
                    this.layersImageEnt[i].getComponent(Transform).scale.x = scaleWidth
            }
        }
    }
    changeImageXPos(layerName:string,  xPos:number ) {
        for (let i = 0;i < this.layersImageEnt.length; i++){
            if(this.layersImageEnt[i].name == layerName){
                    this.layersImageEnt[i].getComponent(Transform).position.x = xPos
            }
        }
    }
    changeImageYPos(layerName:string,  yPos:number ) {
        for (let i = 0;i < this.layersImageEnt.length; i++){
            if(this.layersImageEnt[i].name == layerName){
                    this.layersImageEnt[i].getComponent(Transform).position.y = yPos
            }
        }
    }
    changeImageZPos(layerName:string,  zPos:number ) {
        for (let i = 0;i < this.layersImageEnt.length; i++){
            if(this.layersImageEnt[i].name == layerName){
                    this.layersImageEnt[i].getComponent(Transform).position.z = zPos
            }
        }
    }
    
    changeEmissiveColor(layerName:string,  emissiveColor:string ) {
        for (let i = 0;i < this.layersImageEnt.length; i++){
            if(this.layersImageEnt[i].name == layerName){
                if(engine.entities[this.layersImageEnt[i].uuid].getComponent(Material)){
                engine.entities[this.layersImageEnt[i].uuid].getComponent(Material).emissiveColor =  Color3.FromHexString(emissiveColor)
                }
            }
        }
    }
    changeEmissiveIntensity(layerName:string,  emissiveIntensity:number ) {
        for (let i = 0;i < this.layersImageEnt.length; i++){
            if(this.layersImageEnt[i].name == layerName){
                if(engine.entities[this.layersImageEnt[i].uuid].getComponent(Material)){
                engine.entities[this.layersImageEnt[i].uuid].getComponent(Material).emissiveIntensity =  emissiveIntensity
                }
            }
        }
    }
    newLayer(layerData:imageTextLayer){

    }
 
    changeImage(layerName:string,  texture:Texture){
            for (let i = 0;i < this.layersImageEnt.length; i++){
                if(this.layersImageEnt[i].name == layerName){
                    if(engine.entities[this.layersImageEnt[i].uuid].getComponent(Material)){
                        engine.entities[this.layersImageEnt[i].uuid].getComponent(Material).albedoTexture = texture
                    }
                }
            }
    }

    modifyImage(layerName:string,  texture?:Texture, 
        materialTransparencyMode: number = 1,materialAlphaTest: number = 0, materialEmissiveColor? : Color3,
        materialEmissiveIntensity: number = 1){
            for (let i = 0;i < this.layersImageEnt.length; i++){
    
                if(this.layersImageEnt[i].name == layerName){

                    if(engine.entities[this.layersImageEnt[i].uuid].getComponent(Material)){
                        
                        engine.entities[this.layersImageEnt[i].uuid].getComponent(Material).albedoTexture = texture
                        engine.entities[this.layersImageEnt[i].uuid].getComponent(Material).transparencyMode = materialTransparencyMode
                        engine.entities[this.layersImageEnt[i].uuid].getComponent(Material).alphaTest = materialAlphaTest
                        engine.entities[this.layersImageEnt[i].uuid].getComponent(Material).emissiveColor = materialEmissiveColor
                        engine.entities[this.layersImageEnt[i].uuid].getComponent(Material).emissiveIntensity = materialEmissiveIntensity
                    }
                }
            }
        }
    
    moveLayer(layerName:string,x:number, y:number,z:number,increment:number){
        for (let i = 0;i < this.layersImageEnt.length; i++){
            if(this.layersImageEnt[i].name == layerName){
                if(engine.entities[this.layersImageEnt[i].uuid].getComponent(Transform)){
                    engine.entities[this.layersImageEnt[i].uuid].getComponent(Transform).position.x = x*increment
                    engine.entities[this.layersImageEnt[i].uuid].getComponent(Transform).position.y = y*increment
                    engine.entities[this.layersImageEnt[i].uuid].getComponent(Transform).position.z = z*increment

                }

            }
        
        }
    }

    setLayerScale(lName:string,x:number,y:number,z:number):void{
        for (let i = 0;i < this.layersImageEnt.length; i++){
            if(this.layersImageEnt[i].name == lName){
                engine.entities[this.layersImageEnt[i].uuid].getComponent(Transform).scale.x = x
                engine.entities[this.layersImageEnt[i].uuid].getComponent(Transform).scale.y = y
                engine.entities[this.layersImageEnt[i].uuid].getComponent(Transform).scale.z = z
            }
        }
    }

    deleteLayer(layerId:string):void {
        engine.removeEntity(engine.entities[layerId])
    }

    renameLayer(layerPosition:number, newName:string){
    }

    signRotate(angle:number,direction: string){
        if (direction== 'x'){
        this.signTransform.rotate(new Vector3(1,0,0),angle)
        }
        if (direction== 'y'){
            this.signTransform.rotate(new Vector3(0,1,0),angle)
        }
        if (direction== 'z'){
            this.signTransform.rotate(new Vector3(0,0,1),angle)
        }

    }
}