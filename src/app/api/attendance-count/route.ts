import { connect } from "@/dbConfig/dbConfig";
import MarkedClass from "@/models/markedClassModel";
import { NextRequest, NextResponse } from "next/server";

connect();

export async function GET(request: NextRequest) {
  try {
    const attendanceCount = await MarkedClass.countDocuments();
    return NextResponse.json({ attendanceCount });

  } catch (error: any) {
    // Handle any errors and send an appropriate response
    return NextResponse.json({ error: error.message }, { status: 400 });
  }
}

