import { NextRequest, NextResponse } from "next/server";
import getDataFromToken from "@/helpers/getDataFromToken";
import {connect} from "@/dbConfig/dbConfig";
import Class from "@/models/classModel";

connect();

export async function GET(request: NextRequest) {
    try {
        const { userId } = getDataFromToken(request);
        const classes = await Class.find({ teacherId: userId });
        return NextResponse.json({ success: true, classes });
    } catch (error: any) {
        return NextResponse.json({ success: false, error: error.message }, { status: 500 });
    }
}
