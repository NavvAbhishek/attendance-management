import { NextRequest, NextResponse } from "next/server";
import { connect } from '@/dbConfig/dbConfig'; // Your DB connection utility
import Class from '@/models/classModel'; // Your Mongoose model

connect();

export async function GET(request: NextRequest) {
  try {
    const classesData = await Class.find({});
    return NextResponse.json({
      messsage: "Classes Data Found",
      data: classesData
    })
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 400 })
  }
}
