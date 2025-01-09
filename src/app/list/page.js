import { connectDB } from "/util/database.js";
import Link from "next/link";

export default async function List() {
  const db = (await connectDB).db("next-study");
  let result = await db.collection("post").find().toArray();
  console.log(result);

  return (
    <div className="list-bg">
      {result.map((item, i) => (
        <div key={i} className="list-item">
          <Link href={"/detail/" + result[i]._id}>{result[i].title}</Link>

          <Link href={"/detail/" + result[i]._id}>{result[i].content}</Link>
          <Link href={"/edit/" + result[i]._id} className="list-btn">
            ✏️
          </Link>
        </div>
      ))}
    </div>
  );
}
