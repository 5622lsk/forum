import { connectDB } from "/util/database.js";

export default async function Write() {
  const db = (await connectDB).db("next-study");
  let result = await db.collection("post").find().toArray();
  console.log(result);

  return (
    <div className="p-20">
      <h4>글작성</h4>
      <form action="/api/post/new" method="POST">
        <input name="title" placeholder="글제목" />
        <input name="content" placeholder="글내용" />
        <button type="submit">저장</button>
      </form>
    </div>
  );
}
