export default async function handler(요청, 응답) {
  if (요청.method == "POST") {
    if (요청.body.title == "") {
      return 응답.status(500).json("제목은 필수입니다.");
    }
    console.log(요청.body);
    try {
      const db = (await connectDB).db("forum");
      let result = db.collection("post").insertOne(요청.body);
      응답.redirect(302, "/list");
    } catch (error) {
      console.log(error);
    }
  }
}
//insertOne:document 하나 발행
