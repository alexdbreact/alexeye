import dbConnect from "@/lib/dbConnect";
import Bool from "@/models/Bool";
import { NextResponse } from "next/server";

/*  Ideas functions */
{/* export async function GET() {
    await dbConnect();
    const Bool = await Idea.find();
    return NextResponse.json({ ideas });
} */}




export async function POST(request) {
    const {place, know, near, price, service,comment,mob } = await request.json();
    await dbConnect();
    await Bool.create({place, know, near, price, service,comment,mob});
    return NextResponse.json({ message: "bool Created" }, { status: 201 });
}