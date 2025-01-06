import { connectDB } from "/util/database.js";

export default async function handler2(요청, 응답) {
  const db = (await connectDB).db("next-study");
  let result = await db.collection("post").find().toArray();
  응답.status(200).json(result);
}
