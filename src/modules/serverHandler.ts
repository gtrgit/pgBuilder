
// import { blockData } from './buildingBlock'
// import { voxelData, VoxelData } from './voxel'
// import { setRealm, playerRealm } from './realmData'
// import * as utils from '@dcl/ecs-scene-utils'

// export let awsServer = 'https://soho-plaza.s3.us-east-2.amazonaws.com/'
// export let fireBaseServer =
//   'https://us-central1-soho-plaza.cloudfunctions.net/app/'


  
// export type ModelData = {
//   id: number
//   posx: number
//   posy: number
//   posz: number
//   posZ: number,
//   rotX: number,
//   rotY: number,
//   rotZ: number

// }

// const uri =  "mongodb+srv://Aetheria:Aetheria@aetheria.d5gai.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

  
// export async function getVoxelJSON(url: string): Promise<ModelData[]> {
//   try {
//     let response = await fetch(url).then()
//     let json = await response.json()
//     log(JSON.stringify(json))
//     return json.tiles
//   } catch {
//     log('error fetching from Mongodb server')
//     log('url used: ', url)
//     return []
//   }
// }

// // // get lastest mural state
// // export async function getVoxels(): Promise<VoxelData[]> {
// //   try {
// //     if (!playerRealm) {
// //       await setRealm()
// //     }
// //     let url = awsServer + 'voxels/' + playerRealm + '/voxels.json'
// //     let response = await fetch(url).then()
// //     let json = await response.json()
// //     return json.tiles
// //   } catch {
// //     log('error fetching from AWS server')
// //   }
// // }

// // // update mural
// // export async function changeVoxels() {
// //   if (!playerRealm) {
// //     await setRealm()
// //   }
// //   voxelChanger.addComponentOrReplace(
// //     // Only send request if no more changes come over the next second
// //     new utils.Delay(1000, async function () {
// //       try {
// //         let url = fireBaseServer + 'update-voxels?realm=' + playerRealm
// //         let body = JSON.stringify({ voxels: voxelData })
// //         let headers = {}
// //         let response = await fetch(url, {
// //           method: 'POST',
// //           headers: { 'Content-Type': 'application/json' },
// //           body: body,
// //         })
// //         return response.json()
// //       } catch {
// //         log('error fetching from AWS server')
// //       }
// //     })
// //   )
// // }

// // // dummy entity to throttle the sending of change requests
// // export let voxelChanger = new Entity()
// // engine.addEntity(voxelChanger)
