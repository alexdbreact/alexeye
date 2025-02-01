import dbConnect from "@/lib/dbConnect";
import Idea from "@/models/Ideas";
import { NextResponse } from "next/server";

/*  Ideas functions */

export async function GET() {
    await dbConnect();
    const ideas = await Idea.find();
    return NextResponse.json({ ideas });
}
 

export async function POST(request) {
    const {name, idy, mob, job, details} = await request.json();
    await dbConnect();
    await Idea.create({name, idy, mob, job, details});
    return NextResponse.json({ message: "idea Created" }, { status: 201 });
}

 

