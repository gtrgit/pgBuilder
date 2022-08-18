import resources from './resources_2'
import { LandUI } from './modules/landUI'

@Component("anchorComponent")
export class AnchorComponent {
  anchorUiVisible: boolean = false
  anchorUiId: string = ''
  parentId: string = ''
  chidPlaneId: string = ''
}



export function loadAnchor(){


    function genAnchor(x:number, y:number){


        const ent = new Entity()
        const anchorPointModel = resources.models.anchorPoint
        const anchorTransform = new Transform(
            {
                position: new Vector3(x,.3,y),
                scale: new Vector3(1,1,1)
            }
        )
        ent.addComponent(anchorPointModel)
        ent.addComponent(anchorTransform)
        engine.addEntity(ent)
        
         const landUi = new LandUI()
        //log('map uuid '+landUi.getMapDCLId())
        landUi.setParent(ent)
        
        // const anchorUI1 = new Entity()
        // const anchorUiModel = resources.models.uiBorder
        // const anchorUiTransform = new Transform(
        //     {
        //         position: new Vector3(0,0,0),
        //         rotation: Quaternion.Euler(0,90,0),
        //         scale: new Vector3(1,1,1)
        //     }
        // )
        // anchorUiModel.visible = false
        // anchorUI1.addComponent(anchorUiModel)
        // anchorUI1.addComponent(anchorUiTransform)

        // //


        // // ent.addComponent(new AnchorComponent)
        // //engine.entities[ent.uuid].getComponent(AnchorComponent).parentId = ent.uuid
        


        // const anchorUI = resources.images.anchorUI
        // const anchorMaterial = new Material()

        // anchorMaterial.albedoTexture = anchorUI
        // anchorMaterial.transparencyMode = 1
        // anchorMaterial.alphaTest = 0.3
        // anchorMaterial.emissiveColor = Color3.Green()
        // anchorMaterial.emissiveIntensity = 3

        // const anchorPlane = new Entity()
        // const plane = new PlaneShape()

        // plane.withCollisions = true
        // plane.isPointerBlocker = true
       
        
        // //Add component to track child uuids
        // const anchorPointComp = new AnchorComponent()
        // anchorPointComp.parentId = ent.uuid
        // anchorPointComp.chidPlaneId = anchorPlane.uuid
        // anchorPointComp.anchorUiId = anchorUI1.uuid

        // ent.addComponent(anchorPointComp)

        
        // anchorUI1.setParent(anchorPlane)

        // plane.visible = false
        
        // //engine.entities[ent.uuid].getComponent(AnchorComponent).chidPlaneId = anchorPlane.uuid

        // const anchorUITransform = new Transform(
        //     {
        //         position: new Vector3(0,.7,0),
        //         rotation: Quaternion.Euler(0,0,0),
        //         scale: new Vector3(1.5,1,1.5)
        //     }
        
        // )
        
        // anchorPlane.addComponent(plane)
        // anchorPlane.addComponent(anchorMaterial)
        // anchorPlane.addComponent(anchorUITransform)
        // anchorPlane.addComponent(new Billboard(false, true ,false))

        // //add model to the plane to use the billboard function
        
        // anchorPlane.setParent(ent)
        
    }

    //genAnchor(32,32)
    genAnchor(32,16)
   
    
}