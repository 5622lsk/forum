import { MongoClient } from "mongodb";
const url =
  "mongodb+srv://5622lsk:test5622@cluster0.n2zbqbm.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
const options = {};
let connectDB;

if (process.env.NODE_ENV === "development") {
  if (!global._mongo) {
    global._mongo = new MongoClient(url, options).connect();
  }
  connectDB = global._mongo;
} else {
  connectDB = new MongoClient(url, options).connect();
}
export { connectDB };
