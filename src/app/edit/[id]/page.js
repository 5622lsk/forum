import { ObjectId } from "mongodb";
import { connectDB } from "../../../../util/database";

export default async function Edit(props) {
  console.log(props);
  let db = (await connectDB).db("next-study");
  let result = await db
    .collection("post")
    .findOne({ _id: new ObjectId(props.params.id) });

  return (
    <div className="p-20">
      <h4>수정페이지</h4>
      <form action="/api/post/edit" method="POST">
        <input name="title" defaultValue={result.title} />
        <input name="content" defaultValue={result.content} />
        <input name="_id" defaultValue={result._id.toString()} />
        <button type="submit">수정</button>
      </form>
    </div>
  );
}
