export default async function getAllData() {
  try {
    const response = await fetch("http://localhost:3000/api/websites", {
      cache: "no-cache",
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch data. Status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching data:", error.message);
    throw error; // Re-throw the error to allow the calling code to handle it
  }
}
