import { Dash_TriggerZone, Dash_Ease } from 'dcldash'
import {Dash_AnimationQueue} from 'dcldash'




export class ParcelAnimation extends Entity{

    private tileTexture:Texture = new Texture("https://gtrgit.github.io/dcl_image_store/images/parcelGrid05.png",{wrap: 1, samplingMode: 0 })
    private tileMaterial:Material = new Material
    private animContainer:Entity = new Entity('AnimContainer')
    private tileShape:PlaneShape = new PlaneShape()
    private floorAnim1x1 = new Entity('floorAnim1x1')
    private floorAnim1x1Trans = new Transform({
                                                position: new Vector3(0,.05,0),
                                                rotation: Quaternion.Euler(90, 0, 0),
                                                scale: new Vector3(2,2,2)
                                              })
    private wallAnimWest1x1 = new Entity('wallAnimWest1x1')

    private wallAnimWest1x1Trans = new Transform({
                                                position: new Vector3(0,7,0),
                                                rotation: Quaternion.Euler(0, 90, 90),
                                                scale: new Vector3(2,2,2)
                                              })                       
    

    private wallAnimEast1x1 = new Entity('wallAnimEast1x1')

    private wallAnimEast1x1Trans = new Transform({
                                                position: new Vector3(0,7,0),
                                                rotation: Quaternion.Euler(0, 90, 90),
                                                scale: new Vector3(2,2,2)
                                              })                                                            
    private wallAnimNorth1x1 = new Entity('wallAnimNorth1x1')

    private wallAnimNorth1x1Trans = new Transform({
                                                position: new Vector3(0,7,0),
                                                rotation: Quaternion.Euler(0, 0, 90),
                                                scale: new Vector3(2,2,2)
                                              })

    private wallAnimSouth1x1 = new Entity('wallAnimSouth1x1')

    private wallAnimSouth1x1Trans = new Transform({
                                                position: new Vector3(0,7,0),
                                                rotation: Quaternion.Euler(0, 0, 90),
                                                scale: new Vector3(2,2,2)
                                              })

   
    
    private heightStartScale:number = 0
    private heightEndScale:number = 0
    private widthStartScale:number = 0
    private widthEndScale:number = 0
    private eastWestScale:number = 0
    private northSouthScale:number = 0
    private uvStartScale:number = 0
    private uvEndScale:number = 0
    private uvEastWestScale:number = 0
    private uvNorthSouthScale:number = 0
    private xOffset:number = 0
    private zOffset:number = 0
    private wallRotation = 0
    private wallOffset = 0                           
    private floorRotationX = 0
    private floorRotationZ = 0

    private northSouthWallRotation = 0
    private eastWestWallRotationX = 0      
    private eastWestWallRotationY = 0      
    private eastWestWallRotationZ = 0      

            
    private eastWestWallOffset = 0                                          
    constructor(
      xpos: number,
      ypos: number//,
      //parcelType: string
              )
    {
    super()

    engine.addEntity(this)

    this.animContainer.addComponent(new Transform({position: new Vector3(xpos,0,ypos)}))
    this.animContainer.setParent(this)

    this.tileMaterial.albedoTexture = this.tileTexture//resources.images.aetheriaMap
    this.tileMaterial.emissiveTexture = this.tileTexture
    this.tileMaterial.emissiveIntensity = 12
    this.tileMaterial.transparencyMode = 1
    this.tileMaterial.emissiveColor = Color3.Teal() //FromHexString('#f5900c')
    this.tileMaterial.metallic = .1
    this.tileMaterial.roughness = 0.1
      
    //  const tileShape = new PlaneShape()
    this.tileShape.uvs = this.setUVs(1, 1)
    this.floorAnim1x1.addComponent(this.floorAnim1x1Trans)
    this.floorAnim1x1.addComponent(this.tileShape)
    this.floorAnim1x1.addComponent(this.tileMaterial)

    this.wallAnimWest1x1.addComponent(this.wallAnimWest1x1Trans)
    this.wallAnimWest1x1.addComponent(this.tileMaterial)
    this.wallAnimWest1x1.addComponent(this.tileShape)

    this.wallAnimEast1x1.addComponent(this.wallAnimEast1x1Trans)
    this.wallAnimEast1x1.addComponent(this.tileMaterial)
    this.wallAnimEast1x1.addComponent(this.tileShape)

    //WallAnimNorth

    this.wallAnimNorth1x1.addComponent(this.wallAnimNorth1x1Trans)
    this.wallAnimNorth1x1.addComponent(this.tileMaterial)
    this.wallAnimNorth1x1.addComponent(this.tileShape)

    //WallAnimSouth
    this.wallAnimSouth1x1.addComponent(this.wallAnimSouth1x1Trans)
    this.wallAnimSouth1x1.addComponent(this.tileMaterial)
    this.wallAnimSouth1x1.addComponent(this.tileShape)

    this.wallAnimSouth1x1.setParent(this.animContainer)
    this.wallAnimNorth1x1.setParent(this.animContainer)
    this.wallAnimEast1x1.setParent(this.animContainer)
    this.wallAnimWest1x1.setParent(this.animContainer)
    this.floorAnim1x1.setParent(this.animContainer)


  }   
 
   scale1x1(){
          log('1x1 triggered')
          this.heightStartScale = 2
          this.heightEndScale = 14
          this.widthStartScale = 2
          this.widthEndScale = 14
          // eastWestScale = 30 //todo: this
          // northSouthScale = 30//todo: this
          this.uvStartScale = 1
          this.uvEndScale = 7//2m increments of parcel size
          this.uvEastWestScale = 16   //todo: this
          this.uvNorthSouthScale = 15 //todo: this
          this.xOffset = 7
          this.zOffset = 7
          this.wallRotation = 90
          this.wallOffset = -7
          this.floorRotationX = 90
          this.floorRotationZ = 90

          this.eastWestWallRotationX = 0
          this.eastWestWallRotationY = 90
          this.eastWestWallRotationZ = 90


          this.eastWestWallOffset = 7
          this.animation()
   }

   scale2x1North(){
    this.animContainer.getComponent(Transform).position.z = 8
    this.heightStartScale = 2
    this.heightEndScale = 14
    this.widthStartScale = 2
    this.widthEndScale = 30
    this.eastWestScale = 14
    this.northSouthScale = 30
    this.uvStartScale = 1
    this.uvEndScale = 15 //2m increments of parcel size
    this.uvEastWestScale = 16
    this.uvNorthSouthScale = 15
    this.xOffset = 7
    this.zOffset = 15
    this.wallRotation = 180
    this.wallOffset = 1

    this.floorRotationX = 90
    this.floorRotationZ = 0

    this.eastWestWallRotationX = 0
    this.eastWestWallRotationY = 90
    this.eastWestWallRotationZ = 90

    this.eastWestWallOffset = 7

    this.animation()
   }

   scale2x1South(){
    this.animContainer.getComponent(Transform).position.z = -8
    this.heightStartScale = 2
    this.heightEndScale = 14
    this.widthStartScale = 2
    this.widthEndScale = 30
    this.eastWestScale = 14
    this.northSouthScale = 30
    this.uvStartScale = 1
    this.uvEndScale = 15 //2m increments of parcel size
    this.uvEastWestScale = 16
    this.uvNorthSouthScale = 15
    this.xOffset = 7
    this.zOffset = 15
    this.wallRotation = 180
    this.wallOffset = 1

    this.floorRotationX = 90
    this.floorRotationZ = 0

    this.eastWestWallRotationX = 0
    this.eastWestWallRotationY = 90
    this.eastWestWallRotationZ = 90

    this.eastWestWallOffset = 7

    this.animation()
   }


   
   scale2x1East(){
    
    //offset animContaier to the east
    this.animContainer.getComponent(Transform).position.x = 8
    this.heightStartScale = 2
    this.heightEndScale = 14
    this.widthStartScale = 2
    this.widthEndScale = 30
    this.eastWestScale = 14
    this.northSouthScale = 30
    this.uvStartScale = 1
    this.uvEndScale = 15 //2m increments of parcel size
    this.uvEastWestScale = 16
    this.uvNorthSouthScale = 15
    this.xOffset = 15
    this.zOffset = 7
    this.wallRotation = 90
    this.wallOffset = -7

    this.floorRotationX = 90
    this.floorRotationZ = 90
    
    this.eastWestWallRotationY = 90

    this.eastWestWallOffset = -1
    this.animation()
   }

   scale2x1West(){
    
    //offset animContaier to the east
    this.animContainer.getComponent(Transform).position.x = -8
    this.heightStartScale = 2
    this.heightEndScale = 14
    this.widthStartScale = 2
    this.widthEndScale = 30
    this.eastWestScale = 14
    this.northSouthScale = 30
    this.uvStartScale = 1
    this.uvEndScale = 15 //2m increments of parcel size
    this.uvEastWestScale = 16
    this.uvNorthSouthScale = 15
    this.xOffset = 15
    this.zOffset = 7
    this.wallRotation = 90
    this.wallOffset = -7

    this.floorRotationX = 90
    this.floorRotationZ = 90
    
    this.eastWestWallRotationY = 90

    this.eastWestWallOffset = -1
    this.animation()
   }

   
   scale2x2NorthEast(){

            this.animContainer.getComponent(Transform).position.x = 8
            this.animContainer.getComponent(Transform).position.z = 8
           //2x2 does not fully work
           this.heightStartScale = 2
           this.heightEndScale = 30
           this.widthStartScale = 2
           this.widthEndScale = 30
           this.eastWestScale = 30 //todo: this
           this.northSouthScale = 30
           this.uvStartScale = 1
           this.uvEndScale = 15 //2m increments of parcel size
           this.uvEastWestScale = 16   //todo: this
           this.uvNorthSouthScale = 15 //todo: this
           this.xOffset = -15
           this.zOffset = -15
           this.wallRotation = 90
           this.wallOffset = 0

           this.floorRotationX = 90
           this.floorRotationZ = 90
           
           this.eastWestWallRotationY = 90
           this.animation()
   }

   scale2x2NorthWest(){

            this.animContainer.getComponent(Transform).position.x = -8
            this.animContainer.getComponent(Transform).position.z = 8
           //2x2 does not fully work
           this.heightStartScale = 2
           this.heightEndScale = 30
           this.widthStartScale = 2
           this.widthEndScale = 30
           this.eastWestScale = 30 //todo: this
           this.northSouthScale = 30
           this.uvStartScale = 1
           this.uvEndScale = 15 //2m increments of parcel size
           this.uvEastWestScale = 16   //todo: this
           this.uvNorthSouthScale = 15 //todo: this
           this.xOffset = -15
           this.zOffset = -15
           this.wallRotation = 90
           this.wallOffset = 0

           this.floorRotationX = 90
           this.floorRotationZ = 90
           
           this.eastWestWallRotationY = 90
           this.animation()
   }


   
   scale2x2SouthEast(){

            this.animContainer.getComponent(Transform).position.x = 8
            this.animContainer.getComponent(Transform).position.z = -8
           //2x2 does not fully work
           this.heightStartScale = 2
           this.heightEndScale = 30
           this.widthStartScale = 2
           this.widthEndScale = 30
           this.eastWestScale = 30 //todo: this
           this.northSouthScale = 30
           this.uvStartScale = 1
           this.uvEndScale = 15 //2m increments of parcel size
           this.uvEastWestScale = 16   //todo: this
           this.uvNorthSouthScale = 15 //todo: this
           this.xOffset = -15
           this.zOffset = -15
           this.wallRotation = 90
           this.wallOffset = 0

           this.floorRotationX = 90
           this.floorRotationZ = 90
           
           this.eastWestWallRotationY = 90
           this.animation()
   }

   scale2x2SouthWest(){

            this.animContainer.getComponent(Transform).position.x = -8
            this.animContainer.getComponent(Transform).position.z = -8
           //2x2 does not fully work
           this.heightStartScale = 2
           this.heightEndScale = 30
           this.widthStartScale = 2
           this.widthEndScale = 30
           this.eastWestScale = 30 //todo: this
           this.northSouthScale = 30
           this.uvStartScale = 1
           this.uvEndScale = 15 //2m increments of parcel size
           this.uvEastWestScale = 16   //todo: this
           this.uvNorthSouthScale = 15 //todo: this
           this.xOffset = -15
           this.zOffset = -15
           this.wallRotation = 90
           this.wallOffset = 0

           this.floorRotationX = 90
           this.floorRotationZ = 90
           
           this.eastWestWallRotationY = 90
           this.animation()
   }
   endScale(){
    
    this.heightStartScale = 14
    this.heightEndScale = 2
    this.widthStartScale = 14
    this.widthEndScale = 2
    // eastWestScale = 30 //todo: this
    this.uvStartScale = 1
    this.uvEndScale = 1 //2m in
    this.uvStartScale = 1
    this.uvEndScale = 1//2m increments of parcel size
   

  
    this.animation()

   }

   animation(){
    
        Dash_AnimationQueue.add({
          duration: .4,
          data: { someval: 'foo' }, // optionally pass along some data that is accessible every frame
          onFrame: (progress, data) => {
              const transform = this.floorAnim1x1.getComponent(Transform)
              transform.rotation =  Quaternion.Euler(this.floorRotationX,0,this.floorRotationZ)

              let wallWesttransform = this.wallAnimWest1x1.getComponent(Transform)
              wallWesttransform.position.x = -this.xOffset
        
              let wallEasttransform = this.wallAnimEast1x1.getComponent(Transform)
              wallEasttransform.position.x = this.xOffset
        
              let wallNorthtransform = this.wallAnimNorth1x1.getComponent(Transform)
              wallNorthtransform.position.z =  this.zOffset
              wallNorthtransform.position.y = -this.wallOffset
              wallNorthtransform.rotation = Quaternion.Euler(0,0,this.wallRotation)
              let wallSouthtransform = this.wallAnimSouth1x1.getComponent(Transform)
              wallSouthtransform.position.z =  - this.zOffset 
              wallSouthtransform.position.y = -this.wallOffset
              wallSouthtransform.rotation = Quaternion.Euler(0,0,this.wallRotation)
        //  debugger
        
              const heightValue = Scalar.Lerp(this.heightStartScale, this.heightEndScale, Dash_Ease.easeInCirc(progress))
              transform.scale.x = heightValue  
              wallWesttransform.scale.x = heightValue
              wallWesttransform.rotation = Quaternion.Euler(this.eastWestWallRotationX,this.eastWestWallRotationY,this.eastWestWallRotationZ)
              wallWesttransform.position.y = this.eastWestWallOffset

              wallEasttransform.scale.x = heightValue
              wallEasttransform.rotation = Quaternion.Euler(this.eastWestWallRotationX,this.eastWestWallRotationY,this.eastWestWallRotationZ)
              wallEasttransform.position.y = this.eastWestWallOffset

              wallNorthtransform.scale.x = heightValue
              wallSouthtransform.scale.x = heightValue
        
              const uvValue = Scalar.Lerp(this.uvStartScale, this.uvEndScale, Dash_Ease.easeInCirc(progress))
              this.tileShape.uvs = this.setUVs(uvValue,uvValue)  
              
          },
              
              onComplete: () => {
                  log('Animation Done!')
                  this.scaleRows()
              }
            })
            

      }

   scaleRows() {
    Dash_AnimationQueue.add({
      duration: .4,
      data: { someval: 'foo' }, // optionally pass along some data that is accessible every frame
      onFrame: (progress, data) => {
          const transform = this.floorAnim1x1.getComponent(Transform)
          const wallWesttransform = this.wallAnimWest1x1.getComponent(Transform)
          const wallEasttransform = this.wallAnimEast1x1.getComponent(Transform)
          const wallNorthtransform = this.wallAnimNorth1x1.getComponent(Transform)
          const wallSouthtransform = this.wallAnimSouth1x1.getComponent(Transform)
 

          const widthValue = Scalar.Lerp(this.widthStartScale, this.widthEndScale, Dash_Ease.easeInCirc(progress))
          transform.scale.y = widthValue  
          wallWesttransform.scale.y = widthValue
          wallEasttransform.scale.y = widthValue
          wallNorthtransform.scale.y = widthValue // /2-1
          wallSouthtransform.scale.y = widthValue // /2-1

          const uvValue = Scalar.Lerp(this.uvStartScale, this.uvEndScale, Dash_Ease.easeInCirc(progress))
          this.tileShape.uvs = this.setUVs(uvValue,uvValue)  
          
      },
      
      onComplete: () => {
          log('Animation Done!')
      }
      })  
    } 

    
     setUVs(rows: number, cols: number) {
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
}

//TODO change class so that the parcelType is changed via a function call


// ////////////////////////////
// let parcelAminCenter = new ParcelAnimation(0,0) 
// const tzCenter = new Dash_TriggerZone()

// tzCenter.addComponent(new Transform({
//   position: new Vector3(24,0,24),
//   scale: new Vector3(1,1,1),
//   }))

// // Make it visible while debugging
// tzCenter.enableDebug()

// // Turn the trigger events on
// tzCenter.enable()

// // Turn the trigger events off
// // testTriggerZone.disable()
// parcelAminCenter.setParent(tzCenter)

// tzCenter.onEnter = () => {
//     log('User has entered the zone')
    
//     // parcelAminCenter.scale1x1()
//     //  parcelAminCenter.scale2x2SouthWest()
//     //  parcelAminCenter.scale2x2SouthEast()
//     // parcelAminCenter.scale2x2NorthWest()

//     // parcelAminCenter.scale2x1North()
//     // parcelAminCenter.scale2x1South()

//     //parcelAminCenter.scale2x1East()
//     parcelAminCenter.scale2x1West()
// }

// tzCenter.onExit = () => {
//   parcelAminCenter.endScale()
// }

