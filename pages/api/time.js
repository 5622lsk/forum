export default async function time(요청, 응답) {
  const now = new Date();
  if (요청.method == "GET") {
    응답.status(200).json(now);
  }
}
