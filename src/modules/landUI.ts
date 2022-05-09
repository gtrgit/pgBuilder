import resources from '../resources_2'



@Component("landUiComponent")
export class LandUiComponent {
  marketBtnVisible: boolean = false
  marketUiId: string = ''
  buildUiId: string = ''
  rentUiId: string = ''
  mapUiId: string = ''
  parentId: string = ''
  chidPlaneId: string = ''
  landRentalOptionsId: string = ''
  selected1x1RentId: string = ''
  selected2x1EastId: string = ''
  selected2x1NorthId: string = ''
  selected2x1SouthId: string = ''
  selected2x1westId: string = ''
  selected2x2NorthEastId: string = ''
  selected2x2NorthWestId: string = ''
  selected2x2SouthEastId: string = ''
  selected2x2SouthWestId: string = ''
}



export class LandUI extends Entity {
  
    private wallUi = new Entity()
    private wallUiModel: GLTFShape = resources.models.blankFloor
    
    // private uiBoderModel: GLTFShape = resources.models.uiBorder

    private builderMenu = new Entity()
    private builderMenuModel: GLTFShape = resources.models.builderMenu

    private selected_market = new Entity()
    private selected_marketModel: GLTFShape = resources.models.selected_market

    private marketBnt_collider = new Entity()
    private marketBnt_colliderModel: GLTFShape = resources.models.marketBnt_collider

    private selected_build = new Entity()
    private selected_buildModel: GLTFShape = resources.models.selected_build

    private selected_rent = new Entity()
    private selected_rentModel: GLTFShape = resources.models.selected_rent

    private selected_map = new Entity()
    private selected_mapModel: GLTFShape = resources.models.selected_map

    private landRentalOptions = new Entity()
    private landRentalOptionsModel: GLTFShape = resources.models.landRentalOptions

    private selected1x1Rent = new Entity()
    private selected1x1RentModel: GLTFShape = resources.models.selected1x1Rent

    private selected2x1East = new Entity()
    private selected2x1EastModel: GLTFShape = resources.models.selected2x1East

    private selected2x1North = new Entity()
    private selected2x1NorthModel: GLTFShape = resources.models.selected2x1North

    private selected2x1South = new Entity()
    private selected2x1SouthModel: GLTFShape = resources.models.selected2x1South

    private selected2x1west = new Entity()
    private selected2x1westModel: GLTFShape = resources.models.selected2x1west

    private selected2x2NorthEast = new Entity()
    private selected2x2NorthEastModel: GLTFShape = resources.models.selected2x2NorthEast

    private selected2x2NorthWest = new Entity()
    private selected2x2NorthWestModel: GLTFShape = resources.models.selected2x2NorthWest

    private selected2x2SouthEast = new Entity()
    private selected2x2SouthEastModel: GLTFShape = resources.models.selected2x2SouthEast

    private selected2x2SouthWest = new Entity()
    private selected2x2SouthWestModel: GLTFShape = resources.models.selected2x2SouthWest






    constructor(){
        super()

        // this.addComponent(this.uiBoderModel)

        this.addComponent(new LandUiComponent())

        this.wallUi.addComponent(this.wallUiModel)
        //this.wallUi.addComponent(new Transform())
        this.wallUi.setParent(this)

        this.builderMenu.addComponent(this.builderMenuModel)
        this.builderMenu.addComponent(new Transform())
        this.builderMenu.setParent(this)

        this.selected_market.addComponent(this.selected_marketModel)
        this.selected_market.addComponent(new Transform())
        this.selected_market.setParent(this)
        this.selected_marketModel.visible = false

        this.marketBnt_collider.addComponent(this.marketBnt_colliderModel)
        this.marketBnt_collider.addComponent(new Transform())
        this.marketBnt_collider.setParent(this)

        this.selected_build.addComponent(this.selected_buildModel)
        this.selected_build.addComponent(new Transform())
        this.selected_build.setParent(this)
        this.selected_buildModel.visible = false


        this.selected_rent.addComponent(this.selected_rentModel)
        this.selected_rent.addComponent(new Transform())
        this.selected_rent.setParent(this)
        this.selected_rentModel.visible = false

        
        this.selected_map.addComponent(this.selected_mapModel)
        this.selected_map.addComponent(new Transform())
        this.selected_map.setParent(this)
        this.selected_mapModel.visible = false

        this.landRentalOptions.addComponent(this.landRentalOptionsModel)
        this.landRentalOptions.addComponent(new Transform())
        this.landRentalOptions.setParent(this)
        this.landRentalOptionsModel.visible = false

        
        this.selected1x1Rent.addComponent(this.selected1x1RentModel)
        this.selected1x1Rent.addComponent(new Transform())
        this.selected1x1Rent.setParent(this.landRentalOptions)
        this.selected1x1RentModel.visible = false


        this.selected2x1East.addComponent(this.selected2x1EastModel)
        this.selected2x1East.addComponent(new Transform())
        this.selected2x1East.setParent(this.landRentalOptions)
        this.selected2x1EastModel.visible = false


        this.selected2x1North.addComponent(this.selected2x1NorthModel)
        this.selected2x1North.addComponent(new Transform())
        this.selected2x1North.setParent(this.landRentalOptions)
        this.selected2x1NorthModel.visible = false


        this.selected2x1west.addComponent(this.selected2x1westModel)
        this.selected2x1west.addComponent(new Transform())
        this.selected2x1west.setParent(this.landRentalOptions)
        this.selected2x1westModel.visible = false


        this.selected2x1South.addComponent(this.selected2x1SouthModel)
        this.selected2x1South.addComponent(new Transform())
        this.selected2x1South.setParent(this)
        this.selected2x1SouthModel.visible = false

    
        this.selected2x2NorthEast.addComponent(this.selected2x2NorthEastModel)
        this.selected2x2NorthEast.addComponent(new Transform())
        this.selected2x2NorthEast.setParent(this)
        this.selected2x2NorthEastModel.visible = false
        
    
        this.selected2x2NorthWest.addComponent(this.selected2x2NorthWestModel)
        this.selected2x2NorthWest.addComponent(new Transform())
        this.selected2x2NorthWest.setParent(this)
        this.selected2x2NorthWestModel.visible = false
        
        this.selected2x2SouthEast.addComponent(this.selected2x2SouthEastModel)
        this.selected2x2SouthEast.addComponent(new Transform())
        this.selected2x2SouthEast.setParent(this)
        this.selected2x2SouthEastModel.visible = false
        

        this.selected2x2SouthWest.addComponent(this.selected2x2SouthWestModel)
        this.selected2x2SouthWest.addComponent(new Transform())
        this.selected2x2SouthWest.setParent(this)
        this.selected2x2SouthWestModel.visible = false

        log('---------------')
        log(this.selected_market.uuid)
        //debugger 
        log('---------------')
        this.getComponent(LandUiComponent).buildUiId = this.selected_build.uuid
        this.getComponent(LandUiComponent).marketUiId = this.selected_market.uuid
        this.getComponent(LandUiComponent).rentUiId = this.selected_rent.uuid
        this.getComponent(LandUiComponent).mapUiId = this.selected_map.uuid
        this.getComponent(LandUiComponent).landRentalOptionsId = this.landRentalOptions.uuid
        this.getComponent(LandUiComponent).selected1x1RentId = this.selected1x1Rent.uuid
        this.getComponent(LandUiComponent).selected2x1EastId = this.selected2x1East.uuid
        this.getComponent(LandUiComponent).selected2x1NorthId = this.selected2x1North.uuid
        this.getComponent(LandUiComponent).selected2x1SouthId = this.selected2x1South.uuid
        this.getComponent(LandUiComponent).selected2x1westId = this.selected2x1west.uuid
        this.getComponent(LandUiComponent).selected2x2NorthEastId = this.selected2x2NorthEast.uuid
        this.getComponent(LandUiComponent).selected2x2NorthWestId = this.selected2x2NorthWest.uuid
        this.getComponent(LandUiComponent).selected2x2SouthEastId = this.selected2x2SouthEast.uuid
        this.getComponent(LandUiComponent).selected2x2SouthWestId = this.selected2x2SouthWest.uuid
        
      
        // this.elevatorUpCollider.addComponent(this.elevatorUpColliderModel)
        // this.elevatorUpCollider.addComponent(new Transform())
        // this.elevatorUpCollider.setParent(this)

        // this.elevatorUiDown.addComponent(this.elevatorUiDownModel)
        // this.elevatorUiDown.addComponent(new Transform())
        // this.elevatorUiDown.setParent(this)

        // this.elevatorDownSelected.addComponent(this.elevatorDownSelectedModel)
        // this.elevatorDownSelected.addComponent(new Transform())
        // this.elevatorDownSelected.setParent(this)

        // this.elevatorDownCollider.addComponent(this.elevatorDownColliderModel)
        // this.elevatorDownCollider.addComponent(new Transform())
        // this.elevatorDownCollider.setParent(this)

        // this.menu1Ui.addComponent(this.menu1UiModel)
        // this.menu1Ui.addComponent(new Transform())
        // this.menu1Ui.setParent(this)

        // this.menu1Selected.addComponent(this.menu1SelectedModel)
        // this.menu1Selected.addComponent(new Transform())
        // this.menu1Selected.setParent(this)

        // this.menu1Collider.addComponent(this.menu1ColliderModel)
        // this.menu1Collider.addComponent(new Transform())
        // this.menu1Collider.setParent(this)

        // this.menu2Ui.addComponent(this.menu2UiModel)
        // this.menu2Ui.addComponent(new Transform())
        // this.menu2Ui.setParent(this)

        // this.menu2Selected.addComponent(this.menu2SelectedModel)
        // this.menu2Selected.addComponent(new Transform())
        // this.menu2Selected.setParent(this)

        // this.menu2Collider.addComponent(this.menu2ColliderModel)
        // this.menu2Collider.addComponent(new Transform())
        // this.menu2Collider.setParent(this)


        // this.menu3Ui.addComponent(this.menu3UiModel)
        // this.menu3Ui.addComponent(new Transform())
        // this.menu3Ui.setParent(this)

        // //this.menu3SelectedModel.visible = false
        // this.menu3Selected.addComponent(this.menu3SelectedModel)
        // this.menu3Selected.addComponent(new Transform())
        // this.menu3Selected.setParent(this)

        // this.menu3Collider.addComponent(this.menu3ColliderModel)
        // this.menu3Collider.addComponent(new Transform())
        // this.menu3Collider.setParent(this)

        this.addComponent(new Transform({position: new Vector3(0,0,0)}))
        

        engine.addEntity(this)

    }


}