const { MongoClient } = require("mongodb");

const uri = process.env.MONGO_URI || ''
const client = new MongoClient(uri);

async function connectDB() {
  try {
    await client.connect();
    console.log("Hooray! 🎉🎉 Connected to Database.");
  }catch(error){
    console.log(error);
    
  }
}

export default connectDB