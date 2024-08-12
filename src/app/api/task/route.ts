export const GET = async () => {
  try {
    const data = fetch('http://localhost:3003/tasks').then((res) => res.json());
    return Response.json(data);
  } catch (error) {
    console.log(error);
    return Response.json({ message: 'データ取得時にエラーが発生しました。' });
  }
};
