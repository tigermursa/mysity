import { NextResponse } from "next/server";
import connectMongoDB from "../../../../libs/mongodb";
import Site from "../../../../models/SiteModel";

//POST API
export async function POST(request) {
  // 1. Parse request body (assuming JSON format)
  try {
    const { name, image, category, link } = await request.json();

    // 2. Input validation (optional but recommended)
    // You can add checks here to ensure required fields are present and data is valid

    // 3. Connect to MongoDB (replace with your actual connection logic)
    await connectMongoDB();

    // 4. Create website entry
    const newSite = await Site.create({ name, image, category, link });

    // 5. Return successful response with the created site data (optional)
    return NextResponse.json(
      {
        message: "Website added successfully",
        data: newSite, // Add created site data
      },
      {
        status: 201,
      }
    );
  } catch (error) {
    // 6. Handle errors gracefully
    console.error(error);
    return NextResponse.json(
      { message: "Error adding website" },
      { status: 400 }
    );
  }
}

//GET API
export async function GET() {
  await connectMongoDB();

  try {
    const sites = await Site.find();
    return NextResponse.json({ sites });
  } catch (error) {
    console.error("error fetching users:", error);
    return NextResponse.json({ message: error }, { status: 500 });
  }
}
