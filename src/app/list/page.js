import { connectDB } from "/util/database.js";

export default async function List() {
  const db = (await connectDB).db("next-study");
  let result = await db.collection("post").find().toArray();
  console.log(result);

  return (
    <div className="list-bg">
      {result.map((item, index) => (
        <div key={index} className="list-item">
          <div>{item.title}</div>
          <div>{item.content}</div>
        </div>
      ))}
    </div>
  );
}
