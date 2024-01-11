import { connect } from '@/dbConfig/dbConfig'
import markedClass from '@/models/markedClassModel'
import { NextRequest, NextResponse } from 'next/server'

connect()

export async function POST(request: NextRequest){
  try{
    const reqBody = await request.json()
    console.log("Received request body:", reqBody);
    const { username, course, date, startTime } = reqBody;

    console.log(reqBody)

    const newMarkedClass = new markedClass({
      username,
      course,
      date,
      startTime,
  })

  const savedMarkedClass = await newMarkedClass.save()
  console.log(savedMarkedClass)

  return NextResponse.json({
    message: "Marked Class entered successfully",
    success: true,
    savedMarkedClass
})

  }catch (error: any) {
    return NextResponse.json({ error: error.message },
        { status: 500 }
    )
}
}