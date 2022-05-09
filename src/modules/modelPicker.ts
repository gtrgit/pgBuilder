//import { Manager, colors, Mode } from '../manager'
//import { BlockName, MODEL_SIZE, } from 'src/model'
import resources from 'src/resources_2'
//import { selectorUUID } from 'src/game'
//import { BuildingFoundation } from './buildingFoundation'
//import { uiActiveStatus } from './hud'
//import { SelectedBlockName } from './baseGrid' //selectorId
import { SelectedBlockUUID, selectorUUID } from './selector'
//import resources from 'src/resources'
//import { ModelEnt } from 'src/modelEntity'
//import { modelArray, ModelManager } from 'src/modelManager'
import {  AnchorComponent } from '../anchorPoint'
import { LandUiComponent } from './landUI'


const MODEL_SIZE = 1

// Picker
export const picker = new Entity()
export let blockId : string
//need to swap plane for select model
picker.addComponent(new PlaneShape())
//picker.addComponent(resources.models.r1c4)
picker.addComponent(
  new Transform({
    position: new Vector3(0, 0, 0),
    scale: new Vector3(MODEL_SIZE*2, MODEL_SIZE*2, MODEL_SIZE*2),
  })
)



// const addMaterial = new BasicMaterial()
export const addMaterial = new Material()

let currentTexture = resources.images.addImage

// addMaterial.albedoTexture = addTexture 
addMaterial.alphaTexture = currentTexture
addMaterial.castShadows = false
addMaterial.emissiveIntensity = 5
addMaterial.transparencyMode = 4



export function changeMaterial(material:Texture, colour:Color3){
  addMaterial.emissiveColor = colour
  addMaterial.alphaTexture = material
}



picker.addComponent(addMaterial)

picker.getComponent(PlaneShape).withCollisions = false
picker.getComponent(Transform).scale.setAll(0)
engine.addEntity(picker)



// // Material
// export const pickerMaterial = new Material()
// pickerMaterial.albedoColor = colors[Manager.colorIndex]
// pickerMaterial.roughness = 1.0
// picker.addComponent(pickerMaterial)

export let pickedModelID: string

let menuSelected: string = ''

let childId: string 
let parentID: any
let marketId: string
let buildId: string
let rentId: string
let mapId: string
let landRentalId: string
let selected1x1RentId: string
let selected2x1EastId: string
let selected2x1NorthId: string
let selected2x1SouthId: string
let selected2x1westId: string
let selected2x2NorthEastId: string
let selected2x2NorthWestId: string
let selected2x2SouthEastId: string
let selected2x2SouthWestId: string



let firstPickedID: string
let prevVoxelId: string
// System that casts the rays to generate picker
export class ModelSystem implements ISystem {
  update(dt: number) {

          
      // if (uiActiveStatus) {

      //   selectorEntity.getComponent(GLTFShape).visible = true
      //   } else { 
      //     selectorEntity.getComponent(GLTFShape).visible = false
      //   }

    // Ray from camera
    const rayFromCamera: Ray = PhysicsCast.instance.getRayFromCamera(1000)

    // For the camera ray, we cast a hit all
    PhysicsCast.instance.hitFirst(rayFromCamera, (raycastHitEntity) => {

      if (raycastHitEntity.didHit) {
        
        
        // Check entity exists i.e. not been deleted
        if (engine.entities[raycastHitEntity.entity.entityId]) {
         
          log(raycastHitEntity.entity.meshName)
          //MENU 
          if (raycastHitEntity.entity.meshName == 'marketBtn_collider') {

            menuSelected = 'market'

            parentID =  engine.entities[raycastHitEntity.entity.entityId].getParent()?.uuid
            marketId = engine.entities[parentID].getComponent(LandUiComponent).marketUiId 
            landRentalId = engine.entities[parentID].getComponent(LandUiComponent).landRentalOptionsId
            
            engine.entities[marketId].getComponent(GLTFShape).visible = true
            if (buildId){
              engine.entities[buildId].getComponent(GLTFShape).visible = false
            }
            if (rentId){
              engine.entities[rentId].getComponent(GLTFShape).visible = false
            }
            if (mapId){
              engine.entities[mapId].getComponent(GLTFShape).visible = false
            }
            if (landRentalId) {
              engine.entities[landRentalId].getComponent(GLTFShape).visible = false
              }
              ///////////////////
              if (selected1x1RentId) {
                engine.entities[selected1x1RentId].getComponent(GLTFShape).visible = false
               }
               if (selected2x1NorthId) {
               engine.entities[selected2x1NorthId].getComponent(GLTFShape).visible = false
               }
               
               if (selected2x1EastId) {
                 engine.entities[selected2x1EastId].getComponent(GLTFShape).visible = false
               }
                 
             if (selected2x1SouthId) {
               engine.entities[selected2x1SouthId].getComponent(GLTFShape).visible = false
             }
             if (selected2x2NorthWestId) {
               engine.entities[selected2x2NorthWestId].getComponent(GLTFShape).visible = false
             }
             if (selected2x2NorthEastId) {
               engine.entities[selected2x2NorthEastId].getComponent(GLTFShape).visible = false
             }
             
             if (selected2x2SouthWestId) {
               engine.entities[selected2x2SouthWestId].getComponent(GLTFShape).visible = false
             }
             if (selected2x2SouthEastId) {
               engine.entities[selected2x2SouthEastId].getComponent(GLTFShape).visible = false
             }
              

          } 

          if (raycastHitEntity.entity.meshName == 'buildBtn_collider') {
            menuSelected = 'build'

            parentID =  engine.entities[raycastHitEntity.entity.entityId].getParent()?.uuid
            landRentalId = engine.entities[parentID].getComponent(LandUiComponent).landRentalOptionsId
            buildId = engine.entities[parentID].getComponent(LandUiComponent).buildUiId 
            engine.entities[buildId].getComponent(GLTFShape).visible = true
            if (marketId){
              engine.entities[marketId].getComponent(GLTFShape).visible = false
            }
            if (rentId){
              engine.entities[rentId].getComponent(GLTFShape).visible = false
            }
            if (mapId){
              engine.entities[mapId].getComponent(GLTFShape).visible = false
            }
            if (landRentalId) {
              engine.entities[landRentalId].getComponent(GLTFShape).visible = false
              }
              //
              if (selected1x1RentId) {
                engine.entities[selected1x1RentId].getComponent(GLTFShape).visible = false
               }
               if (selected2x1NorthId) {
               engine.entities[selected2x1NorthId].getComponent(GLTFShape).visible = false
               }
               
               if (selected2x1EastId) {
                 engine.entities[selected2x1EastId].getComponent(GLTFShape).visible = false
               }
                 
             if (selected2x1SouthId) {
               engine.entities[selected2x1SouthId].getComponent(GLTFShape).visible = false
             }
             if (selected2x2NorthWestId) {
               engine.entities[selected2x2NorthWestId].getComponent(GLTFShape).visible = false
             }
             if (selected2x2NorthEastId) {
               engine.entities[selected2x2NorthEastId].getComponent(GLTFShape).visible = false
             }
             
             if (selected2x2SouthWestId) {
               engine.entities[selected2x2SouthWestId].getComponent(GLTFShape).visible = false
             }
             if (selected2x2SouthEastId) {
               engine.entities[selected2x2SouthEastId].getComponent(GLTFShape).visible = false
             }
          } 

          if (raycastHitEntity.entity.meshName == 'rentBtn_Collider') {
            menuSelected = 'rent'

            parentID =  engine.entities[raycastHitEntity.entity.entityId].getParent()?.uuid
            rentId = engine.entities[parentID].getComponent(LandUiComponent).rentUiId 
            marketId = engine.entities[parentID].getComponent(LandUiComponent).marketUiId
            buildId = engine.entities[parentID].getComponent(LandUiComponent).buildUiId
            mapId = engine.entities[parentID].getComponent(LandUiComponent).mapUiId

            engine.entities[rentId].getComponent(GLTFShape).visible = true

            landRentalId = engine.entities[parentID].getComponent(LandUiComponent).landRentalOptionsId
            engine.entities[landRentalId].getComponent(GLTFShape).visible = true

            if (marketId){
              engine.entities[marketId].getComponent(GLTFShape).visible = false
            } 
            if (buildId){
              engine.entities[buildId].getComponent(GLTFShape).visible = false
            }
            if (mapId){
              engine.entities[mapId].getComponent(GLTFShape).visible = false
            }

          

          } 

          if (raycastHitEntity.entity.meshName == 'mapBtn_collider') {
            menuSelected = 'map'

            parentID =  engine.entities[raycastHitEntity.entity.entityId].getParent()?.uuid
            mapId = engine.entities[parentID].getComponent(LandUiComponent).mapUiId 
            landRentalId = engine.entities[parentID].getComponent(LandUiComponent).landRentalOptionsId
           
            engine.entities[mapId].getComponent(GLTFShape).visible = true
            if (marketId){
              engine.entities[marketId].getComponent(GLTFShape).visible = false
            } 
            if (buildId){
              engine.entities[buildId].getComponent(GLTFShape).visible = false
            }
            if (rentId){
              engine.entities[rentId].getComponent(GLTFShape).visible = false
            }
            if (landRentalId) {
            engine.entities[landRentalId].getComponent(GLTFShape).visible = false
            }
           
            if (selected1x1RentId) {
              engine.entities[selected1x1RentId].getComponent(GLTFShape).visible = false
            }
            if (selected2x1NorthId) {
            engine.entities[selected2x1NorthId].getComponent(GLTFShape).visible = false
            }
            if (selected2x1westId) {
            engine.entities[selected2x1westId].getComponent(GLTFShape).visible = false
            }
            
            if (selected2x1EastId) {
              engine.entities[selected2x1EastId].getComponent(GLTFShape).visible = false
            }
              
            if (selected2x1SouthId) {
              engine.entities[selected2x1SouthId].getComponent(GLTFShape).visible = false
            }
            if (selected2x2NorthWestId) {
              engine.entities[selected2x2NorthWestId].getComponent(GLTFShape).visible = false
            }
            if (selected2x2NorthEastId) {
              engine.entities[selected2x2NorthEastId].getComponent(GLTFShape).visible = false
            }
            
            if (selected2x2SouthWestId) {
              engine.entities[selected2x2SouthWestId].getComponent(GLTFShape).visible = false
            }
            if (selected2x2SouthEastId) {
              engine.entities[selected2x2SouthEastId].getComponent(GLTFShape).visible = false
            }
          } 


          //Rental Options
          if (menuSelected == 'rent') {

                if (raycastHitEntity.entity.meshName == '1x1_Collider.001') {
                    parentID =  engine.entities[raycastHitEntity.entity.entityId].getParent()?.uuid
                    landRentalId = engine.entities[parentID].getComponent(LandUiComponent).landRentalOptionsId
                  
                    selected1x1RentId = engine.entities[parentID].getComponent(LandUiComponent).selected1x1RentId 
                    engine.entities[selected1x1RentId].getComponent(GLTFShape).visible = true
                    if (marketId){
                      engine.entities[marketId].getComponent(GLTFShape).visible = false
                    } 
                    if (buildId){
                      engine.entities[buildId].getComponent(GLTFShape).visible = false
                    }
                    if (rentId){
                      engine.entities[rentId].getComponent(GLTFShape).visible = false
                    }
                    if (selected2x1westId) {
                      engine.entities[selected2x1westId].getComponent(GLTFShape).visible = false
                      }
                    if (selected2x1NorthId) {
                      engine.entities[selected2x1NorthId].getComponent(GLTFShape).visible = false
                    } 
                    
                    if (selected2x1EastId) {
                      engine.entities[selected2x1EastId].getComponent(GLTFShape).visible = false
                    }
                      
                if (selected2x1SouthId) {
                  engine.entities[selected2x1SouthId].getComponent(GLTFShape).visible = false
                }
                if (selected2x2NorthWestId) {
                  engine.entities[selected2x2NorthWestId].getComponent(GLTFShape).visible = false
                }
                if (selected2x2NorthEastId) {
                  engine.entities[selected2x2NorthEastId].getComponent(GLTFShape).visible = false
                }
                
                if (selected2x2SouthWestId) {
                  engine.entities[selected2x2SouthWestId].getComponent(GLTFShape).visible = false
                }
                if (selected2x2SouthEastId) {
                  engine.entities[selected2x2SouthEastId].getComponent(GLTFShape).visible = false
                }
                } 

              //Rental Options
              if (raycastHitEntity.entity.meshName == '2x1_west_Collider') {
                  
                  parentID =  engine.entities[raycastHitEntity.entity.entityId].getParent()?.uuid
                  landRentalId = engine.entities[parentID].getComponent(LandUiComponent).landRentalOptionsId
                  
                  selected2x1westId = engine.entities[parentID].getComponent(LandUiComponent).selected2x1westId 
                  engine.entities[selected2x1westId].getComponent(GLTFShape).visible = true

                  if (marketId){
                    engine.entities[marketId].getComponent(GLTFShape).visible = false
                  } 
                  if (buildId){
                    engine.entities[buildId].getComponent(GLTFShape).visible = false
                  }
                  if (rentId){
                    engine.entities[rentId].getComponent(GLTFShape).visible = false
                  }
                   if (selected1x1RentId) {
                   engine.entities[selected1x1RentId].getComponent(GLTFShape).visible = false
                  }
                  if (selected2x1NorthId) {
                  engine.entities[selected2x1NorthId].getComponent(GLTFShape).visible = false
                  }
                  
                  if (selected2x1EastId) {
                    engine.entities[selected2x1EastId].getComponent(GLTFShape).visible = false
                  }
                    
                if (selected2x1SouthId) {
                  engine.entities[selected2x1SouthId].getComponent(GLTFShape).visible = false
                }
                if (selected2x2NorthWestId) {
                  engine.entities[selected2x2NorthWestId].getComponent(GLTFShape).visible = false
                }
                if (selected2x2NorthEastId) {
                  engine.entities[selected2x2NorthEastId].getComponent(GLTFShape).visible = false
                }
                
                if (selected2x2SouthWestId) {
                  engine.entities[selected2x2SouthWestId].getComponent(GLTFShape).visible = false
                }
                if (selected2x2SouthEastId) {
                  engine.entities[selected2x2SouthEastId].getComponent(GLTFShape).visible = false
                }
              } 
            
            //Rental Options
            if (raycastHitEntity.entity.meshName == '2x1_north_Collider') {
                          
                  parentID =  engine.entities[raycastHitEntity.entity.entityId].getParent()?.uuid
                  landRentalId = engine.entities[parentID].getComponent(LandUiComponent).landRentalOptionsId
                  
                  selected2x1NorthId = engine.entities[parentID].getComponent(LandUiComponent).selected2x1NorthId 
                  engine.entities[selected2x1NorthId].getComponent(GLTFShape).visible = true
                  if (marketId){
                    engine.entities[marketId].getComponent(GLTFShape).visible = false
                  } 
                  if (buildId){
                    engine.entities[buildId].getComponent(GLTFShape).visible = false
                  }
                  if (rentId){
                    engine.entities[rentId].getComponent(GLTFShape).visible = false
                  }
                  // if (landRentalId) {
                  // engine.entities[landRentalId].getComponent(GLTFShape).visible = false
                  // }
                  if (selected1x1RentId) {
                  engine.entities[selected1x1RentId].getComponent(GLTFShape).visible = false
                  }
                  if (selected2x1westId) {
                  engine.entities[selected2x1westId].getComponent(GLTFShape).visible = false
                  }
                  
                  if (selected2x1EastId) {
                    engine.entities[selected2x1EastId].getComponent(GLTFShape).visible = false
                  }
                    
                if (selected2x1SouthId) {
                  engine.entities[selected2x1SouthId].getComponent(GLTFShape).visible = false
                }
                if (selected2x2NorthWestId) {
                  engine.entities[selected2x2NorthWestId].getComponent(GLTFShape).visible = false
                }
                if (selected2x2NorthEastId) {
                  engine.entities[selected2x2NorthEastId].getComponent(GLTFShape).visible = false
                }
                
                if (selected2x2SouthWestId) {
                  engine.entities[selected2x2SouthWestId].getComponent(GLTFShape).visible = false
                }
                if (selected2x2SouthEastId) {
                  engine.entities[selected2x2SouthEastId].getComponent(GLTFShape).visible = false
                }
              }

              if (raycastHitEntity.entity.meshName == '2x1_east_Collider') {
                          
                parentID =  engine.entities[raycastHitEntity.entity.entityId].getParent()?.uuid
                landRentalId = engine.entities[parentID].getComponent(LandUiComponent).landRentalOptionsId
                
                selected2x1EastId = engine.entities[parentID].getComponent(LandUiComponent).selected2x1EastId 
                engine.entities[selected2x1EastId].getComponent(GLTFShape).visible = true
                if (marketId){
                  engine.entities[marketId].getComponent(GLTFShape).visible = false
                } 
                if (buildId){
                  engine.entities[buildId].getComponent(GLTFShape).visible = false
                }
                if (rentId){
                  engine.entities[rentId].getComponent(GLTFShape).visible = false
                }
                // if (landRentalId) {
                // engine.entities[landRentalId].getComponent(GLTFShape).visible = false
                // }
                if (selected1x1RentId) {
                engine.entities[selected1x1RentId].getComponent(GLTFShape).visible = false
                }
                if (selected2x1westId) {
                engine.entities[selected2x1westId].getComponent(GLTFShape).visible = false
                }
                
                if (selected2x1NorthId) {
                  engine.entities[selected2x1NorthId].getComponent(GLTFShape).visible = false
                }
                  
                if (selected2x1SouthId) {
                  engine.entities[selected2x1SouthId].getComponent(GLTFShape).visible = false
                }
                if (selected2x2NorthWestId) {
                  engine.entities[selected2x2NorthWestId].getComponent(GLTFShape).visible = false
                }
                if (selected2x2NorthEastId) {
                  engine.entities[selected2x2NorthEastId].getComponent(GLTFShape).visible = false
                }
                
                if (selected2x2SouthWestId) {
                  engine.entities[selected2x2SouthWestId].getComponent(GLTFShape).visible = false
                }
                if (selected2x2SouthEastId) {
                  engine.entities[selected2x2SouthEastId].getComponent(GLTFShape).visible = false
                }
            }

          if (raycastHitEntity.entity.meshName == '2x1_south_Collider') { //south
                        
              parentID =  engine.entities[raycastHitEntity.entity.entityId].getParent()?.uuid
              landRentalId = engine.entities[parentID].getComponent(LandUiComponent).landRentalOptionsId
              
              selected2x1SouthId = engine.entities[parentID].getComponent(LandUiComponent).selected2x1SouthId 
              engine.entities[selected2x1SouthId].getComponent(GLTFShape).visible = true
              if (marketId){
                engine.entities[marketId].getComponent(GLTFShape).visible = false
              } 
              if (buildId){
                engine.entities[buildId].getComponent(GLTFShape).visible = false
              }
              if (rentId){
                engine.entities[rentId].getComponent(GLTFShape).visible = false
              }
              // if (landRentalId) {
              // engine.entities[landRentalId].getComponent(GLTFShape).visible = false
              // }
              if (selected1x1RentId) {
              engine.entities[selected1x1RentId].getComponent(GLTFShape).visible = false
              }
              if (selected2x1westId) {
              engine.entities[selected2x1westId].getComponent(GLTFShape).visible = false
              }
              
              if (selected2x1NorthId) {
                engine.entities[selected2x1NorthId].getComponent(GLTFShape).visible = false
              }
                
              if (selected2x1EastId) {
                engine.entities[selected2x1EastId].getComponent(GLTFShape).visible = false
              }
              
              if (selected2x2NorthWestId) {
                engine.entities[selected2x2NorthWestId].getComponent(GLTFShape).visible = false
              }
              if (selected2x2NorthEastId) {
                engine.entities[selected2x2NorthEastId].getComponent(GLTFShape).visible = false
              }
              
              if (selected2x2SouthWestId) {
                engine.entities[selected2x2SouthWestId].getComponent(GLTFShape).visible = false
              }
              if (selected2x2SouthEastId) {
                engine.entities[selected2x2SouthEastId].getComponent(GLTFShape).visible = false
              }

          }


          if (raycastHitEntity.entity.meshName == '2x2_Collider') { //south
                        
            parentID =  engine.entities[raycastHitEntity.entity.entityId].getParent()?.uuid
            landRentalId = engine.entities[parentID].getComponent(LandUiComponent).landRentalOptionsId
            
            selected2x2NorthWestId = engine.entities[parentID].getComponent(LandUiComponent).selected2x2NorthWestId 
            engine.entities[selected2x2NorthWestId].getComponent(GLTFShape).visible = true
            if (marketId){
              engine.entities[marketId].getComponent(GLTFShape).visible = false
            } 
            if (buildId){
              engine.entities[buildId].getComponent(GLTFShape).visible = false
            }
            if (rentId){
              engine.entities[rentId].getComponent(GLTFShape).visible = false
            }
            // if (landRentalId) {
            // engine.entities[landRentalId].getComponent(GLTFShape).visible = false
            // }
            if (selected1x1RentId) {
            engine.entities[selected1x1RentId].getComponent(GLTFShape).visible = false
            }
            if (selected2x1westId) {
            engine.entities[selected2x1westId].getComponent(GLTFShape).visible = false
            }
            
            if (selected2x1NorthId) {
              engine.entities[selected2x1NorthId].getComponent(GLTFShape).visible = false
            }
              
            if (selected2x1EastId) {
              engine.entities[selected2x1EastId].getComponent(GLTFShape).visible = false
            }
            
            if (selected2x1SouthId) {
              engine.entities[selected2x1SouthId].getComponent(GLTFShape).visible = false
            }
            
            if (selected2x2NorthEastId) {
              engine.entities[selected2x2NorthEastId].getComponent(GLTFShape).visible = false
            }
            
            if (selected2x2SouthWestId) {
              engine.entities[selected2x2SouthWestId].getComponent(GLTFShape).visible = false
            }
            if (selected2x2SouthEastId) {
              engine.entities[selected2x2SouthEastId].getComponent(GLTFShape).visible = false
            }
        }
        

        if (raycastHitEntity.entity.meshName == '2x2_Collider.002') { //south
                  
          parentID =  engine.entities[raycastHitEntity.entity.entityId].getParent()?.uuid
          landRentalId = engine.entities[parentID].getComponent(LandUiComponent).landRentalOptionsId
          
          selected2x2NorthEastId = engine.entities[parentID].getComponent(LandUiComponent).selected2x2NorthEastId 
          engine.entities[selected2x2NorthEastId].getComponent(GLTFShape).visible = true
          if (marketId){
            engine.entities[marketId].getComponent(GLTFShape).visible = false
          } 
          if (buildId){
            engine.entities[buildId].getComponent(GLTFShape).visible = false
          }
          if (rentId){
            engine.entities[rentId].getComponent(GLTFShape).visible = false
          }
          // if (landRentalId) {
          // engine.entities[landRentalId].getComponent(GLTFShape).visible = false
          // }
          if (selected1x1RentId) {
          engine.entities[selected1x1RentId].getComponent(GLTFShape).visible = false
          }
          if (selected2x1westId) {
          engine.entities[selected2x1westId].getComponent(GLTFShape).visible = false
          }
          
          if (selected2x1NorthId) {
            engine.entities[selected2x1NorthId].getComponent(GLTFShape).visible = false
          }
            
          if (selected2x1EastId) {
            engine.entities[selected2x1EastId].getComponent(GLTFShape).visible = false
          }
          
          if (selected2x1SouthId) {
            engine.entities[selected2x1SouthId].getComponent(GLTFShape).visible = false
          }
          if (selected2x2NorthWestId) {
            engine.entities[selected2x2NorthWestId].getComponent(GLTFShape).visible = false
          }
           
          if (selected2x2SouthWestId) {
            engine.entities[selected2x2SouthWestId].getComponent(GLTFShape).visible = false
          }
          if (selected2x2SouthEastId) {
            engine.entities[selected2x2SouthEastId].getComponent(GLTFShape).visible = false
          }
      }

      
      if (raycastHitEntity.entity.meshName == '2x2_Collider.003') { //south
                  
        parentID =  engine.entities[raycastHitEntity.entity.entityId].getParent()?.uuid
        landRentalId = engine.entities[parentID].getComponent(LandUiComponent).landRentalOptionsId
        
        selected2x2SouthEastId = engine.entities[parentID].getComponent(LandUiComponent).selected2x2SouthEastId 
        engine.entities[selected2x2SouthEastId].getComponent(GLTFShape).visible = true
        if (marketId){
          engine.entities[marketId].getComponent(GLTFShape).visible = false
        } 
        if (buildId){
          engine.entities[buildId].getComponent(GLTFShape).visible = false
        }
        if (rentId){
          engine.entities[rentId].getComponent(GLTFShape).visible = false
        }
        // if (landRentalId) {
        // engine.entities[landRentalId].getComponent(GLTFShape).visible = false
        // }
        if (selected1x1RentId) {
        engine.entities[selected1x1RentId].getComponent(GLTFShape).visible = false
        }
        if (selected2x1westId) {
        engine.entities[selected2x1westId].getComponent(GLTFShape).visible = false
        }
        
        if (selected2x1NorthId) {
          engine.entities[selected2x1NorthId].getComponent(GLTFShape).visible = false
        }
          
        if (selected2x1EastId) {
          engine.entities[selected2x1EastId].getComponent(GLTFShape).visible = false
        }
        
        if (selected2x1SouthId) {
          engine.entities[selected2x1SouthId].getComponent(GLTFShape).visible = false
        }
        if (selected2x2NorthWestId) {
          engine.entities[selected2x2NorthWestId].getComponent(GLTFShape).visible = false
        }
        
        if (selected2x2NorthEastId) {
          engine.entities[selected2x2NorthEastId].getComponent(GLTFShape).visible = false
        }
        
        if (selected2x2SouthWestId) {
          engine.entities[selected2x2SouthWestId].getComponent(GLTFShape).visible = false
        }
    }

    if (raycastHitEntity.entity.meshName == '2x2_Collider.004') { //south
                  
      parentID =  engine.entities[raycastHitEntity.entity.entityId].getParent()?.uuid
      landRentalId = engine.entities[parentID].getComponent(LandUiComponent).landRentalOptionsId
      
      selected2x2SouthWestId = engine.entities[parentID].getComponent(LandUiComponent).selected2x2SouthWestId 
      engine.entities[selected2x2SouthWestId].getComponent(GLTFShape).visible = true
      if (marketId){
        engine.entities[marketId].getComponent(GLTFShape).visible = false
      } 
      if (buildId){
        engine.entities[buildId].getComponent(GLTFShape).visible = false
      }
      if (rentId){
        engine.entities[rentId].getComponent(GLTFShape).visible = false
      }
      // if (landRentalId) {
      // engine.entities[landRentalId].getComponent(GLTFShape).visible = false
      // }
      if (selected1x1RentId) {
      engine.entities[selected1x1RentId].getComponent(GLTFShape).visible = false
      }
      if (selected2x1westId) {
      engine.entities[selected2x1westId].getComponent(GLTFShape).visible = false
      }
      
      if (selected2x1NorthId) {
        engine.entities[selected2x1NorthId].getComponent(GLTFShape).visible = false
      }
        
      if (selected2x1EastId) {
        engine.entities[selected2x1EastId].getComponent(GLTFShape).visible = false
      }
      
      if (selected2x1SouthId) {
        engine.entities[selected2x1SouthId].getComponent(GLTFShape).visible = false
      }
      if (selected2x2NorthWestId) {
        engine.entities[selected2x2NorthWestId].getComponent(GLTFShape).visible = false
      }
      
      if (selected2x2NorthEastId) {
        engine.entities[selected2x2NorthEastId].getComponent(GLTFShape).visible = false
      }
      
      if (selected2x2SouthEastId) {
        engine.entities[selected2x2SouthEastId].getComponent(GLTFShape).visible = false
      }
  }


        } //hit
//TODO on ray hit 16mFloor_collider move the menu to that xy loc

          //if not the base
          
          if (raycastHitEntity.entity.meshName != '16mFloor_collider') {
          if (raycastHitEntity.entity.meshName != 'base_collider') {
            
                  if (raycastHitEntity.entity.meshName != 'Cube_collider') {

                    if (raycastHitEntity.entity.meshName != 'anchor_collider') {

                      //hide anchorUI
                      if(engine.entities[childId]) {
                      //  engine.entities[childPlane].getComponent(PlaneShape).visible = false
                      // engine.entities[childPlane].getComponent(GLTFShape).visible = false
                      }
                    

                    
                  if (engine.entities[selectorUUID].uuid != raycastHitEntity.entity.entityId){
                    
                    pickedModelID = raycastHitEntity.entity.entityId
                  
                        if (engine.entities[pickedModelID]){
                            // engine.entities[selectorUUID].getComponent(Transform).scale.setAll(1.05)

                            engine.entities[selectorUUID].getComponent(Transform).scale.x = engine.entities[pickedModelID].getComponent(Transform).scale.x+.001
                            engine.entities[selectorUUID].getComponent(Transform).scale.y = engine.entities[pickedModelID].getComponent(Transform).scale.y+.001
                            engine.entities[selectorUUID].getComponent(Transform).scale.z = engine.entities[pickedModelID].getComponent(Transform).scale.z+.001

                            engine.entities[selectorUUID].getComponent(Transform).position = engine.entities[pickedModelID].getComponent(Transform).position
                        }
                    }

              
                  
                  }
          }

            if (engine.entities[pickedModelID]){
            engine.entities[selectorUUID].getComponent(SelectedBlockUUID).selectedBlockUUID = pickedModelID
  
              pickerFace(engine.entities[pickedModelID], raycastHitEntity)  
          }
      
          } else {
            pickerBase(raycastHitEntity)
          } 
        }
      }
      } else {

        if (childId) {
          log('childPlane '+childId)
          engine.entities[marketId].getComponent(GLTFShape).visible = false
          engine.entities[buildId].getComponent(GLTFShape).visible = false
          childId = ''
        }
        //Hide Picker
        picker.getComponent(Transform).scale.setAll(0)
      }
      if (prevVoxelId != pickedModelID){
      }
    })

    
  } 

  
 }

// Adds systems to the engine
engine.addSystem(new ModelSystem())

let fixedRayEntity = new Entity()
fixedRayEntity.addComponent(
  new Transform({
    position: new Vector3(0, 0, 0),
  })
)
engine.addEntity(fixedRayEntity)

// Snaps the picker plane to discrete points on or halfway between the grid lines
function pickerBase(raycastHitEntity: RaycastHitEntity) {
  picker.getComponent(Transform).rotation = Quaternion.Euler(90, 0, 0)
  let x: number = Math.round(raycastHitEntity.hitPoint.x * 8) / 8
  let z: number = Math.round(raycastHitEntity.hitPoint.z * 8) / 8
  picker.getComponent(Transform).position.set(x, 0.4, z)
  picker.getComponent(Transform).scale.setAll(MODEL_SIZE)
}

function pickerFace(entity: IEntity, raycastHitEntity: RaycastHitEntity) {
  let transform = entity.getComponent(Transform).position.clone() // Clone position of the voxel
  
  picker.getComponent(Transform).position = transform // Set picker transform to match the voxel
  picker.getComponent(Transform).scale.setAll(MODEL_SIZE)
  let pickerRotation = picker.getComponent(Transform).rotation
  if (raycastHitEntity.hitNormal.x != 0) {
    

    pickerRotation = Quaternion.Euler(0, 90, 0)
    
    raycastHitEntity.hitNormal.x > 0  
      ? (picker.getComponent(Transform).position.x =
          transform.x + MODEL_SIZE + .1)//1.50) // Offset from voxel center with slight offset
      : (picker.getComponent(Transform).position.x =
          transform.x - MODEL_SIZE -.1)
  }
  if (raycastHitEntity.hitNormal.y != 0) {
    

    pickerRotation = Quaternion.Euler(90, 0, 0)
    raycastHitEntity.hitNormal.y > 0
      ? (picker.getComponent(Transform).position.y =
          transform.y + MODEL_SIZE+ .1)
      : (picker.getComponent(Transform).position.y =
          transform.y - MODEL_SIZE- .1)
  }
  if (raycastHitEntity.hitNormal.z != 0) {
 
    pickerRotation = Quaternion.Euler(0, 0, 90)
    raycastHitEntity.hitNormal.z > 0
      ? (picker.getComponent(Transform).position.z =
          transform.z + MODEL_SIZE+ .1)
      : (picker.getComponent(Transform).position.z =
          transform.z - MODEL_SIZE - .1)
  }
  picker.getComponent(Transform).rotation = pickerRotation
}