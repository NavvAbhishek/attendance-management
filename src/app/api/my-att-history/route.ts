import { NextRequest, NextResponse } from "next/server";
import getDataFromToken from "@/helpers/getDataFromToken";
import { connect } from "@/dbConfig/dbConfig";
import MarkedClass from "@/models/markedClassModel"

connect();

export async function GET(request: NextRequest) {
  try {
    const { userId } = getDataFromToken(request);
    const markedClass = await MarkedClass.find({ studentId: userId })
    return NextResponse.json({ success: true, markedClass })
  } catch (error: any) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}