export default async function Cabines() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();
  console.log(data);
  return <h2>Wow Cabines!!</h2>;
}
