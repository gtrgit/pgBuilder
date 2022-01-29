//const functions = require('firebase-functions')
const express = require('express')
const cors = require('cors')
const app = express()
app.use(cors({ origin: true }))
const mongoose = require("mongoose");
const {MongoClient} = require('mongodb');
const ModelData = require("./model");
require("dotenv").config();
app.use(express.json());

const port = 3001;
const uri = process.env.DB_CONN_STRING;
const uri2 =  "mongodb+srv://Aetheria:Aetheria@aetheria.d5gai.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const client = new MongoClient(uri);

mongoose.connect(uri, {
    useNewUrlParser: true, 
    useUnifiedTopology: true,
});

const connection = mongoose.connection;
connection.once("open", () => {
    console.log("MongoDB database connection establised successfully.");
});

app.listen(port, () => {
  console.log(`App is listening at http://localhost${port}`);
})


export enum Mode {
  Add = 0,
  Subtract = 1,
  EyeDrop = 2,
}

export type ModelData = {
  id: number
  posx: number
  posy: number
  posz: number
  posZ: number,
  rotX: number,
  rotY: number,
  rotZ: number

}


//New Stuff -- Get Current Model Data list

app.get("/polygonlist", async (req: any, res: any) => {
  const result = await ModelData.find({});
      await client.connect();
      console.log("polygon from db: ", result);
      res.send(result);
      let url = 'mongodb+srv://Aetheria:Aetheria@aetheria.d5gai.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
      let currentVoxels: ModelData[] = await getVoxelJSON(url)
  
    return res.status(200).json({ tiles: currentVoxels })
  });


  /*app.get('/voxels', async (req: any, res: any) => {
    let realm = req.query.realm
    let url =
      'https://soho-plaza.s3.us-east-2.amazonaws.com/voxels' +
      realm +
      '/voxels.json'
  
    let currentVoxels: VoxelData[] = await getVoxelJSON(url)
  
    return res.status(200).json({ tiles: currentVoxels })
  })
  */

  app.post("/polygon", async (req:any, res:any) => {
  try {
      console.log("req.body: ", req.body);
      await client.connect(); // Connect to client

       const newPolygon = new ModelData ({
          id: req.body.id,
          posX: req.body.posX,
          posY: req.body.posY,
          posZ: req.body.posZ,
          rotX: req.body.rotX,
          rotY: req.body.rotY,
          rotZ: req.body.rotZ

      });

      await ModelData.create(newPolygon);

      res.send("New Polygon Created");

  } catch (err){
      console.log("error", err);
}
});

app.post('/update-polygons', async (req: any, res: any) => {
  await client.connect();
  let realm = req.query.realm
  let modelData = req.body.modelData
  updateVoxelJSON(client, modelData, realm)

  return res.status(200).send('Updated polygons')
})


app.post('/reset-voxels', async (req: any, res: any) => {
  await client.connect()
  let realm = req.query.realm
  let tiles: ModelData[] = []

  updateVoxelJSON(client, tiles, realm)

  return res.status(200).send('Updated Voxels')
})


/*
app.post('/update-voxels', async (req: any, res: any) => {
  let realm = req.query.realm
  let voxels = req.body.voxels

  updateVoxelJSON(voxels, realm)

  return res.status(200).send('Updated Voxels')
})

app.listen(port, () => {
  console.log(`App is listening at http://localhost${port}`);
})*/

// Original 
/*app.get('/hello-world', (req: any, res: any) => {
  return res.status(200).send('Hello World!')
})

app.get('/voxels', async (req: any, res: any) => {
  let realm = req.query.realm
  let url =
    'https://soho-plaza.s3.us-east-2.amazonaws.com/voxels' +
    realm +`
    '/voxels.json'
`
  let currentVoxels: ModelData[] = await getVoxelJSON(url)

  
  return res.status(200).json({ tiles: currentVoxels })
})

app.post('/update-voxels', async (req: any, res: any) => {
  let realm = req.query.realm
  let voxels = req.body.voxels

  updateVoxelJSON(voxels, realm)

  return res.status(200).send('Updated Voxels')
})

app.post('/reset-voxels', async (req: any, res: any) => {
  let realm = req.query.realm
  let tiles: ModelData[] = []

  updateVoxelJSON(tiles, realm)

  return res.status(200).send('Updated Voxels')
})
*/
//// AWS
/*const AWS = require('aws-sdk')

const AWSconfig = require('../keys/aws-key.json')

// You will need your own amazon key to handle this authentication step
AWS.config.setPromisesDependency()
AWS.config.update({
  accessKeyId: AWSconfig.AWSAccessKeyId,
  secretAccessKey: AWSconfig.AWSSecretKey,
  region: 'us-east-2',
})*/

// hrrrmm .env file.


export async function updateVoxelJSON(client: { db: (arg0: string) => { (): any; new(): any; collection: { (arg0: string): any; new(): any; }; }; }, tiles: ModelData[], realm: string) {
  const result = await client.db("Aetheria_Test").collection("Polygon_Model_Test");

  if (result) {
      console.log (`Found id in collection with the id '$ {id} '`);
      console.log(result);
  } else {
      console.log(`Found id in collection with the id '$ {id} '`);
  }

}


export async function getVoxelJSON(url: string): Promise<ModelData[]> {
  try {
    let response = await fetch(url).then()
    let json = await response.json()
    return json.tiles
  } catch {
    console.log('error fetching from Mongodb server')
    console.log('url used: ', url)
    return []
  }
}
/*
export async function updateVoxelJSON(tiles: ModelData[], realm: string) {
  var upload = new AWS.S3.ManagedUpload({
    params: {
      Bucket: 'soho-plaza',
      Key: 'voxels/' + realm + '/voxels.json',
      Body: JSON.stringify({ tiles: tiles }),
      ACL: 'public-read',
      ContentType: 'application/json; charset=utf-8',
    },
  })

  var promise = upload.promise()

  promise.then(
    function (data: any) {
      console.log('Successfully uploaded voxel JSON')
    },
    function (err: any) {
      console.log('There was an error uploading voxel json file: ', err.message)
    }
  )
}

export async function getVoxelJSON(url: string): Promise<ModelData[]> {
  try {
    let response = await fetch(url).then()
    let json = await response.json()
    return json.tiles
  } catch {
    console.log('error fetching from AWS server')
    console.log('url used: ', url)
    return []
  }
}
*/
//exports.app = functions.https.onRequest(app)
