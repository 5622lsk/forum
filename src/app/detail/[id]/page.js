import { ObjectId } from "mongodb";
import { connectDB } from "../../../../util/database";

export default async function Detail(props) {
  let db = (await connectDB).db("next-study");
  let result = await db
    .collection("post")
    .findOne({ _id: new ObjectId(props.params.id) });
  console.log(props);
  return (
    <div>
      <h4>상세페이지임</h4>
      <h4>{result.title}</h4>
      <p>{result.content}</p>
    </div>
  );
}
