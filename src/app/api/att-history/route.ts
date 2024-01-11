import { NextRequest, NextResponse } from "next/server";
import { connect } from '@/dbConfig/dbConfig';
import MarkedClass from '@/models/markedClassModel'; 

connect();

export async function GET(request: NextRequest) {
    try {
      const classesData = await MarkedClass.find({});
      return NextResponse.json({
        messsage: "Marked Classes Data Found",
        data: classesData
      })
    } catch (error: any) {
      return NextResponse.json({ error: error.message }, { status: 400 })
    }
  }