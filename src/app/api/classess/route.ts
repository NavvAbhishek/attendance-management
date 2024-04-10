import { NextRequest, NextResponse } from "next/server";
import { connect } from '@/dbConfig/dbConfig'; 
import Class from '@/models/classModel'; 
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

// Handler for the DELETE request
export async function DELETE(request: NextRequest) {
  try {
    // Extract the class ID from the request URL
    const url = new URL(request.url);
    const classId = url.searchParams.get('id');
    if (!classId) {
      return NextResponse.json({ error: "Class ID is required" }, { status: 400 });
    }

    // Delete the class from the database
    await Class.findByIdAndDelete(classId);

    return NextResponse.json({ message: "Class deleted successfully" });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}