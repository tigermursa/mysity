export default async function getAllData() {
  const result = await fetch("http://localhost:3000/api/websites");

  return result.json();
}
