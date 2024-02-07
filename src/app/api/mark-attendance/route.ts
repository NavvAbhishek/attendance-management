import { connect } from '@/dbConfig/dbConfig'
import markedClass from '@/models/markedClassModel'
import getDataFromToken from '@/helpers/getDataFromToken'; 
import { NextRequest, NextResponse } from 'next/server'

connect()

export async function POST(request: NextRequest){
  try{
    const reqBody = await request.json()
    console.log("Received request body:", reqBody);

    // Extract student ID from the token
    const {userId} = getDataFromToken(request);
    console.log("Extracted User ID:", userId);

    const { username, course, date, startTime } = reqBody;
    console.log(reqBody)

    // Ensure userId is not null or undefined
    if (!userId) {
      throw new Error("User ID is missing");
    }

    const newMarkedClass = new markedClass({
      studentId: userId,
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