export default async function getAllData() {
  const result = await fetch("http://localhost:3000/api/websites", {
    cache: "no-cache",
  });

  return result.json();
}
