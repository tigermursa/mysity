import { NextResponse } from "next/server";
import connectMongoDB from "../../../../libs/mongodb";
import Site from "../../../../models/SiteModel";
export async function POST(request) {
  const { name, image, category, link } = await request.json();
  await connectMongoDB();
  await Site.create({ name, image, category, link });
  return NextResponse.json(
    { message: "Website added successfully" },
    { status: 201 }
  );
}
