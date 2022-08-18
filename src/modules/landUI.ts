import resources from '../resources_2'
import {ParcelAnimation} from '../modules/parcelAnimation'


@Component("landUiComponent")
export class LandUiComponent {
  //marketBtnVisible: boolean = false
  menuUIContainerId:string = ''
  marketUiId: string = ''
  buildUiId: string = ''
  rentUiId: string = ''
  parentId: string = ''
  chidPlaneId: string = ''
  landRentalOptionsId: string = ''
  menuSelectorID: string = ''
  rentSelectorID: string = ''
  rentContainerID: string = ''
  /////// map 
  mapUiContainerId: string = ''
  mapDCLbgID: string = ''
  mapUIAetheriaId: string = ''
  parcel1x1Id: string = ''
  parcel2x1Id: string = ''
  parcel2x2Id: string = ''
  landMenuId: string = ''
  parcelAnimationId: string = ''
}



export class LandUI extends Entity {
  
    
    private wallUi = new Entity()
    private wallUiModel: GLTFShape = resources.models.btnRent1x1
    
    private paContainer = new ParcelAnimation(0,0)


    private menuSelector = new Entity()
    private menuSelectorModel: GLTFShape = resources.models.menuSelector
    
    private rentSelector = new Entity()
    private rentSelectorModel: GLTFShape = resources.models.rentSelector
    
    
    // private uiBoderModel: GLTFShape = resources.models.uiBorder

    private builderMenu = new Entity()
    private builderMenuModel: GLTFShape = resources.models.builderMenu

    // //MENU 
    // ////////////////////////////////////////////////////////////////
    private menuMarket = new Entity()
    private menuMarketModel: GLTFShape = resources.models.menuMarket

    private menuBuild = new Entity()
    private menuBuildModel: GLTFShape = resources.models.menuBuild

    private menuRent = new Entity()
    private menuRentModel: GLTFShape = resources.models.menuRent

    private menuMap = new Entity('mapMenu')
    private menuMapModel: GLTFShape = resources.models.menuMap

    ////////////////////////////////////////////
    //Map UI

    private mapDCLTxt = new Entity('mapDCLTxt')
    private mapAetheriaTxt = new Entity('mapAetheriaTxt')
    private mapAetheriaBg = new Entity('mapAetheriaBg')
    private mapTxtBg = new Entity('mapDecentraland')

    private mapDCL = new Entity('mapDCL')
    private mapDCLModel: GLTFShape = resources.models.dclMap

    private mapAetheriaMAP = new Entity('mapAetheriaMAP')
    
    ////////////////////////////////////////////
    //Land rental buttons
    private rentMenuBackground = new Entity()
    private rentMenuBackgroundModel: GLTFShape = resources.models.rentMenuBackground

    private mapMenuBackground = new Entity()
    private mapMenuBackgroundModel: GLTFShape = resources.models.rentMenuBackground

    private parcel1x1 = new Entity()
    private parcel1x1Model: GLTFShape = resources.models.parcel1x1

    private parcel2x1 = new Entity()
    private parcel2x1Model: GLTFShape = resources.models.parcel2x1

    private parcel2x2 = new Entity()
    private parcel2x2Model: GLTFShape = resources.models.parcel2x2NE

    private btnRent1x1 = new Entity('rent1x1')
    private btnRent1x1Model: GLTFShape = resources.models.btnRent1x1

    private btnRent2x1North = new Entity()
    private btnRent2x1NorthModel: GLTFShape = resources.models.btnRent2x1North

    private btnRent2x1East = new Entity()
    private btnRent2x1EastModel: GLTFShape = resources.models.btnRent2x1East

    private btnRent2x1South = new Entity()
    private btnRent2x1SouthModel: GLTFShape = resources.models.btnRent2x1South

    private btnRent2x1West = new Entity()
    private btnRent2x1WestModel: GLTFShape = resources.models.btnRent2x1West

    private btnRent2x2NorthEast = new Entity()
    private btnRent2x2NorthEastModel: GLTFShape = resources.models.btnRent2x2NorthEast

    private btnRent2x2NorthWest = new Entity()
    private btnRent2x2NorthWestModel: GLTFShape = resources.models.btnRent2x2NorthWest
    
    private btnRent2x2SouthEast = new Entity()
    private btnRent2x2SouthEastModel: GLTFShape = resources.models.btnRent2x2SouthEast
    
    private btnRent2x2SouthWest = new Entity()
    private btnRent2x2SouthWestModel: GLTFShape = resources.models.btnRent2x2SouthWest
   


    constructor(){
        super()
        //rotate the UI

        //const faceNorth = new Transform({rotation: Quaternion.Euler(0,0,0)})
        //this.addComponent(new Transform())
        // this.addComponent(this.uiBoderModel)

        this.addComponent(new LandUiComponent())

        // this.addComponent(
        //   new Transform(
        //     {position: new Vector3(-6,0,6)}
        //     )
        // )

        this.wallUi.addComponent(this.wallUiModel)
        this.wallUi.addComponent(new Transform)
        this.wallUi.setParent(this)

        this.paContainer.addComponent(new Transform({position: new Vector3(0,1,0)}))

        //TODO remove menuSelector and make a new compoment for this uuid only
        this.menuSelector.addComponent(this.menuSelectorModel)
        // this.menuSelector.addComponent(new Billboard)
        this.menuSelector.addComponent(new Transform())
        
        this.menuSelector.setParent(this)
        
        this.getComponent(LandUiComponent).parcelAnimationId = this.paContainer.uuid
        this.getComponent(LandUiComponent).menuSelectorID = this.menuSelector.uuid
      

      

      log('land ui ms comp '+  this.getComponent(LandUiComponent).menuSelectorID)
        this.builderMenu.addComponent(this.builderMenuModel)
        this.builderMenu.addComponent(new Transform())
        this.builderMenu.setParent(this)
        this.getComponent(LandUiComponent).landMenuId =  this.builderMenu.uuid
        
        

    // //     ////////////////////////////////
    // //     //MENU
        this.menuMarket.addComponent(this.menuMarketModel)
        this.menuMarket.addComponent(new Transform({
          position: new Vector3(0, 1.43, -.54)}))
        this.menuMarket.setParent(this.builderMenu)

        this.menuBuild.addComponent(this.menuBuildModel)
        this.menuBuild.addComponent(new Transform({
          position: new Vector3(0, 1.43, -.19)}))
        this.menuBuild.setParent(this.builderMenu)

        
        this.menuRent.addComponent(this.menuRentModel)
        this.menuRent.addComponent(new Transform({
          position: new Vector3(0, 1.43, .16)}))
        this.menuRent.setParent(this.builderMenu)
        
        this.menuMap.addComponent(this.menuMapModel)
        this.menuMap.addComponent(new Transform({
          position: new Vector3(0, 1.43, 0.51)}))
        this.menuMap.setParent(this.builderMenu)



        ////////////////////
        //RENT         

        this.rentMenuBackground.addComponent(this.rentMenuBackgroundModel)
        this.rentMenuBackground.addComponent(new Transform)
        this.rentMenuBackground.setParent(this.wallUi)
        this.rentMenuBackground.getComponent(Transform).scale.setAll(0)
        this.getComponent(LandUiComponent).rentContainerID = this.rentMenuBackground.uuid

        
        this.parcel1x1.addComponent(this.parcel1x1Model)
        this.parcel1x1.addComponent(new Transform)
        this.parcel1x1.setParent(this.builderMenu)
        //this.parcel1x1.getComponent(Transform).scale.setAll(0)

        this.getComponent(LandUiComponent).parcel1x1Id = this.parcel1x1.uuid

        
        this.parcel2x1.addComponent(this.parcel2x1Model)
        this.parcel2x1.addComponent(new Transform)
        this.parcel2x1.setParent(this.builderMenu)
        this.parcel2x1.getComponent(Transform).scale.setAll(0)

        this.getComponent(LandUiComponent).parcel2x1Id = this.parcel2x1.uuid

        this.parcel2x2.addComponent(this.parcel2x2Model)
        this.parcel2x2.addComponent(new Transform)
        this.parcel2x2.setParent(this.builderMenu)
        this.parcel2x2.getComponent(Transform).scale.setAll(0)

        this.getComponent(LandUiComponent).parcel2x2Id = this.parcel2x2.uuid


          //TODO remove menuSelector and make a new compoment for this uuid only
          this.rentSelector.addComponent(this.rentSelectorModel)
          this.rentSelector.addComponent(new Transform())
          this.rentSelector.setParent(this.rentMenuBackground)
          //this.rentSelectorModel.visible = false
          this.getComponent(LandUiComponent).rentSelectorID = this.rentSelector.uuid
        

          
        this.btnRent1x1.addComponent(this.btnRent1x1Model)
        this.btnRent1x1.addComponent(new Transform(
          {
          position: new Vector3(0,1.28,.59)
          }
        ))
        this.btnRent1x1.setParent(this.rentMenuBackground)
        this.btnRent1x1.addComponent(new OnPointerDown(
          (e) => {
           log(' 1x1 clicked')
           this.paContainer.getComponent(Transform).position = this.getComponent(Transform).position
           this.paContainer.scale1x1()
           this.parcel1x1.getComponent(Transform).scale.setAll(1)
           this.parcel2x1.getComponent(Transform).scale.setAll(0)
           this.parcel2x2.getComponent(Transform).scale.setAll(0)
          },
    //      { hoverText: "Decentraland Map" }
        ))


        this.btnRent2x1North.addComponent(this.btnRent2x1NorthModel)
        this.btnRent2x1North.addComponent(new Transform(
          {
          position: new Vector3(0,1.28,.44)
          }
        ))
        this.btnRent2x1North.setParent(this.rentMenuBackground)
        this.btnRent2x1North.addComponent(new OnPointerDown(
          (e) => {
            this.paContainer.getComponent(Transform).position = this.getComponent(Transform).position
            this.paContainer.scale2x1North()
           this.parcel1x1.getComponent(Transform).scale.setAll(0)
           this.parcel2x1.getComponent(Transform).scale.setAll(1)
           this.parcel2x2.getComponent(Transform).scale.setAll(0)
          },
    //      { hoverText: "Decentraland Map" }
        ))
        
        this.btnRent2x1East.addComponent(this.btnRent2x1EastModel)
        this.btnRent2x1East.addComponent(new Transform(
          {
          position: new Vector3(0,1.135,.44)
          }
        ))
        this.btnRent2x1East.setParent(this.rentMenuBackground)
        this.btnRent2x1East.addComponent(new OnPointerDown(
          (e) => {
            this.paContainer.getComponent(Transform).position = this.getComponent(Transform).position
          
            this.paContainer.scale2x1East()
           this.parcel1x1.getComponent(Transform).scale.setAll(0)
           this.parcel2x1.getComponent(Transform).scale.setAll(1)
           this.parcel2x2.getComponent(Transform).scale.setAll(0)
          },
    //      { hoverText: "Decentraland Map" }
        ))
        
        this.btnRent2x1South.addComponent(this.btnRent2x1SouthModel)
        this.btnRent2x1South.addComponent(new Transform(
          {
          position: new Vector3(0,.99,.44)
          }
        ))
        this.btnRent2x1South.setParent(this.rentMenuBackground)
        this.btnRent2x1South.addComponent(new OnPointerDown(
          (e) => {
            this.paContainer.getComponent(Transform).position = this.getComponent(Transform).position
          
            this.paContainer.scale2x1South()
           this.parcel1x1.getComponent(Transform).scale.setAll(0)
           this.parcel2x1.getComponent(Transform).scale.setAll(1)
           this.parcel2x2.getComponent(Transform).scale.setAll(0)
          },
    //      { hoverText: "Decentraland Map" }
        ))

        this.btnRent2x1West.addComponent(this.btnRent2x1WestModel)
        this.btnRent2x1West.addComponent(new Transform(
          {
          position: new Vector3(0,.845,.44)
          }
        ))
        this.btnRent2x1West.setParent(this.rentMenuBackground)
        this.btnRent2x1West.addComponent(new OnPointerDown(
          (e) => {
            this.paContainer.getComponent(Transform).position = this.getComponent(Transform).position    
            this.paContainer.scale2x1West()

           this.parcel1x1.getComponent(Transform).scale.setAll(0)
           this.parcel2x1.getComponent(Transform).scale.setAll(1)
           this.parcel2x2.getComponent(Transform).scale.setAll(0)
          },
    //      { hoverText: "Decentraland Map" }
        ))
        this.btnRent2x2NorthEast.addComponent(this.btnRent2x2NorthEastModel)
        this.btnRent2x2NorthEast.addComponent(new Transform(
          {
          position: new Vector3(0,1.28,.29)
          }
        ))
        this.btnRent2x2NorthEast.setParent(this.rentMenuBackground)
        this.btnRent2x2NorthEast.addComponent(new OnPointerDown(
          (e) => {
            this.paContainer.getComponent(Transform).position = this.getComponent(Transform).position    
            this.paContainer.scale2x2NorthEast()
        
           this.parcel1x1.getComponent(Transform).scale.setAll(0)
           this.parcel2x1.getComponent(Transform).scale.setAll(0)
           this.parcel2x2.getComponent(Transform).scale.setAll(1)
          },
    //      { hoverText: "Decentraland Map" }
        ))

        this.btnRent2x2NorthWest.addComponent(this.btnRent2x2NorthWestModel)
        this.btnRent2x2NorthWest.addComponent(new Transform(
          {
          position: new Vector3(0,1.135,.29)
          }
        ))
        this.btnRent2x2NorthWest.setParent(this.rentMenuBackground)
        this.btnRent2x2NorthWest.addComponent(new OnPointerDown(
          (e) => {
            this.paContainer.getComponent(Transform).position = this.getComponent(Transform).position    
            this.paContainer.scale2x2NorthWest()
        
           this.parcel1x1.getComponent(Transform).scale.setAll(0)
           this.parcel2x1.getComponent(Transform).scale.setAll(0)
           this.parcel2x2.getComponent(Transform).scale.setAll(1)
          },
    //      { hoverText: "Decentraland Map" }
        ))

        this.btnRent2x2SouthEast.addComponent(this.btnRent2x2SouthEastModel)
        this.btnRent2x2SouthEast.addComponent(new Transform(
          {
          position: new Vector3(0,.99,.29)
          }
        ))
        this.btnRent2x2SouthEast.setParent(this.rentMenuBackground)
        this.btnRent2x2SouthEast.addComponent(new OnPointerDown(
          (e) => {
            this.paContainer.getComponent(Transform).position = this.getComponent(Transform).position    
            this.paContainer.scale2x2SouthEast()
        
           this.parcel1x1.getComponent(Transform).scale.setAll(0)
           this.parcel2x1.getComponent(Transform).scale.setAll(0)
           this.parcel2x2.getComponent(Transform).scale.setAll(1)
          },
    //      { hoverText: "Decentraland Map" }
        ))



        this.btnRent2x2SouthWest.addComponent(this.btnRent2x2SouthWestModel)
        this.btnRent2x2SouthWest.addComponent(new Transform(
          {
          position: new Vector3(0,.845,.29)
          }
        ))
        this.btnRent2x2SouthWest.setParent(this.rentMenuBackground)
        this.btnRent2x2SouthWest.addComponent(new OnPointerDown(
          (e) => {
            this.paContainer.getComponent(Transform).position = this.getComponent(Transform).position    
            this.paContainer.scale2x2SouthWest()
        
           this.parcel1x1.getComponent(Transform).scale.setAll(0)
           this.parcel2x1.getComponent(Transform).scale.setAll(0)
           this.parcel2x2.getComponent(Transform).scale.setAll(1)
          },
    //      { hoverText: "Decentraland Map" }
        ))

        this.getComponent(LandUiComponent).landRentalOptionsId = this.rentMenuBackground.uuid
        this.addComponent(new Transform({position: new Vector3(0,0,0)}))
        

        //////////////////
        //MAP

        const blackMaterial = new Material()
        blackMaterial.albedoColor = new Color4(.1,.1,.1, .3)
        // blackMaterial.albedoColor = Color3.Black()

        // blackMaterial.alphaTest = 0
        

        this.mapMenuBackground.addComponent(this.mapMenuBackgroundModel)
        this.mapMenuBackground.addComponent(new Transform)
        this.mapMenuBackground.setParent(this.wallUi)
        this.mapMenuBackground.getComponent(Transform).scale.setAll(0)
        this.getComponent(LandUiComponent).mapUiContainerId = this.mapMenuBackground.uuid
       

        //Decentraland Btn
        const dclTxt = new TextShape('Decentraland')
        const dclTxtTrans = new Transform({
          position: new Vector3(-.01,1.3,.4),
          rotation: Quaternion.Euler(0, 90, 0),
          scale: new Vector3(.07,.07,.07)
        })
        this.mapDCLTxt.addComponent(dclTxtTrans)
        this.mapDCLTxt.addComponent(dclTxt)
        this.mapDCLTxt.setParent(this.mapMenuBackground)
        
        
        this.mapTxtBg.addComponent(blackMaterial)
        

        const mapTxtBgShape = new PlaneShape
        this.mapTxtBg.addComponent(mapTxtBgShape)
        const mapTxtBgTrans = new Transform({
          position: new Vector3(0,1.3,.4),
          rotation: Quaternion.Euler(0, 90, 0),
          scale: new Vector3(.5,.07,.6)
        })
        this.mapTxtBg.addComponent(mapTxtBgTrans)
        this.getComponent(LandUiComponent).mapDCLbgID = this.mapTxtBg.uuid
        this.mapTxtBg.setParent(this.mapMenuBackground)
        this.mapTxtBg.addComponent(new OnPointerDown(
          (e) => {
            log('DCL Map Click!')
            this.mapDCL.getComponent(Transform).scale.setAll(.7)
            this.mapAetheriaMAP.getComponent(Transform).scale.setAll(0)
          },

          { hoverText: "Decentraland Map" }
        ))

        //DCL MAP INFO
        this.mapDCL.addComponent(this.mapDCLModel)
        this.mapDCL.addComponent(new Transform(
          {
          position: new Vector3(0,.3,0),
          scale: new Vector3(0,0,0),
          rotation: Quaternion.Euler(0,180,0)
          }
        ))
        this.mapDCL.setParent(this.mapMenuBackground)



        //Aetheria 
        //Btn Text
        const AetheriaTxt = new TextShape('Aetheria')
        const AetheriaTxtTrans = new Transform({
          position: new Vector3(-.01,1.1,.4),
          rotation: Quaternion.Euler(0, 90, 0),
          scale: new Vector3(.07,.07,.07)
        })
        this.mapAetheriaTxt.addComponent(AetheriaTxtTrans)
        this.mapAetheriaTxt.addComponent(AetheriaTxt)
        this.mapAetheriaTxt.setParent(this.mapMenuBackground)
        //this.getComponent(LandUiComponent).mapUiContainerId = this.mapMenuBackground.uuid
        

        //Aetheria btn background
        this.mapAetheriaBg.addComponent(blackMaterial)

        const mapAetheriaBgShape = new PlaneShape
        this.mapAetheriaBg.addComponent(mapAetheriaBgShape)
        const AetheriaBgTrans = new Transform({
          position: new Vector3(0,1.1,.4),
          rotation: Quaternion.Euler(0, 90, 0),
          scale: new Vector3(.5,.07,.6)
        })
        this.mapAetheriaBg.addComponent(AetheriaBgTrans)
        this.getComponent(LandUiComponent).mapUIAetheriaId = this.mapAetheriaBg.uuid
        this.mapAetheriaBg.setParent(this.mapMenuBackground)
        this.mapAetheriaBg.addComponent(new OnPointerDown(
          (e) => {
            
            this.mapDCL.getComponent(Transform).scale.setAll(0)
            this.mapAetheriaMAP.getComponent(Transform).scale.setAll(10)
          },
    //      { hoverText: "Decentraland Map" }
        ))
        
     // Aetheria map image
        const mapAetheriaMapShape = new PlaneShape()
        const AetheriaMapTrans = new Transform({
          position: new Vector3(0,.1,0),
          rotation: Quaternion.Euler(90, 0, 0),
          scale: new Vector3(0,0,0)
        })
        this.mapAetheriaMAP.addComponent(AetheriaMapTrans)
        const aetheriaMapMaterial = new Material()
        const myTexture = new Texture("https://gtrgit.github.io/dcl_image_store/images/aetheriaMap.png",{wrap: 1, samplingMode: 0 })

        
         aetheriaMapMaterial.albedoTexture = myTexture//resources.images.aetheriaMap
         aetheriaMapMaterial.emissiveTexture = myTexture
         aetheriaMapMaterial.emissiveIntensity = 1
         aetheriaMapMaterial.transparencyMode = 1
          aetheriaMapMaterial.emissiveColor = Color3.White() //FromHexString('#f5900c')
         aetheriaMapMaterial.metallic = .1
         aetheriaMapMaterial.roughness = 0.1
          
          
          // map the texture to each of the four corners of the plane
        
            mapAetheriaMapShape.uvs = setUVs(1, 1)

            function setUVs(rows: number, cols: number) {
              return [
                // North side of unrortated plane
                0, //lower-left corner
                0,
            
                cols, //lower-right corner
                0,
            
                cols, //upper-right corner
                rows,
            
                0, //upper left-corner
                rows,
            
                // South side of unrortated plane
                cols, // lower-right corner
                0,
            
                0, // lower-left corner
                0,
            
                0, // upper-left corner
                rows,
            
                cols, // upper-right corner
                rows,
              ]
            }

        this.mapAetheriaMAP.addComponent(mapAetheriaMapShape)
         this.mapAetheriaMAP.addComponent(aetheriaMapMaterial)
  
         this.mapAetheriaMAP.setParent(this.mapMenuBackground)

        engine.addEntity(this)
    }
}