import ListItem from "./ListItem";
import { connectDB } from "/util/database.js";

export default async function List() {
  const db = (await connectDB).db("next-study");
  let result = await db.collection("post").find().toArray();
  console.log(result);

  return (
    <div className="list-bg">
      <ListItem result={result} />
    </div>
  );
}
