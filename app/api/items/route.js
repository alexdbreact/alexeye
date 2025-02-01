import dbConnect from "@/lib/dbConnect";
import Item from "@/models/Items";
import { NextResponse } from "next/server";
/*  items functions */

{/* export async function GET() {
    await dbConnect();
    const items = await Item.find();
    return NextResponse.json({ items });
}  */}

 

export async function POST(request) {
    const {place, sort, image, flag, mob} = await request.json();
    await dbConnect();
    await Item.create({place, sort, image, flag, mob});
    return NextResponse.json({ message: "item Created" }, { status: 201 });
}
