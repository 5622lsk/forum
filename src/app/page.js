import { connectDB } from "/util/database.js";

export default async function Home() {
  const db = (await connectDB).db("next-study");
  let result = await db.collection("post").find().toArray();
  console.log(result);

  return <>하이</>;
}
