import { connect } from '@/dbConfig/dbConfig'
import Class from '@/models/classModel'
import { NextRequest, NextResponse } from 'next/server'

connect()

export async function POST(request: NextRequest) {
    try {
        const reqBody = await request.json()
        console.log("Received request body:", reqBody);
        const { year, semester, course, date, startTime, finishTime } = reqBody

        console.log(reqBody)

        const newClass = new Class({
            year,
            semester,
            course,
            date,
            startTime,
            finishTime
        })

        const savedClass = await newClass.save()
        console.log(savedClass)

        return NextResponse.json({
            message: "Class created successfully",
            success: true,
            savedClass
        })
    } catch (error: any) {
        return NextResponse.json({ error: error.message },
            { status: 500 }
        )
    }
}