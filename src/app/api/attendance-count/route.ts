// Updated route.ts
import { connect } from "@/dbConfig/dbConfig";
import MarkedClass from "@/models/markedClassModel";
import { NextRequest, NextResponse } from "next/server";

connect();

export async function GET(request: NextRequest) {
  try {
    // Get today's date at midnight
    const startOfDay = new Date();
    startOfDay.setHours(0, 0, 0, 0);

    // Get the current date at 23:59:59
    const endOfDay = new Date();
    endOfDay.setHours(23, 59, 59, 999);

    const attendanceCount = await MarkedClass.countDocuments({
      // Use the markedAt field to filter attendances for today
      markedAt: {
        $gte: startOfDay,
        $lt: endOfDay,
      },
    });
    
    return NextResponse.json({ attendanceCount });
  } catch (error: any) {
    // Handle any errors and send an appropriate response
    return NextResponse.json({ error: error.message }, { status: 400 });
  }
}
