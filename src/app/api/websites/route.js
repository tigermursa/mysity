import { NextResponse } from "next/server";
import connectMongoDB from "../../../../libs/mongodb";
import Site from "../../../../models/SiteModel";

//POST API
export async function POST(request) {
  try {
    const { name, image, category, link } = await request.json();
    console.log("Received data:", name, image, category, link);
    const newData = await Site.create({ name, image, category, link });
    return NextResponse.json({ newData });
  } catch (error) {
    console.error("error creating users:", error);
    return NextResponse.json({ message: error }, { status: 500 });
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
