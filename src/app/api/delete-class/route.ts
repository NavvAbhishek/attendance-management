import { NextApiRequest } from 'next';
import { NextResponse } from 'next/server';
import { connect } from '@/dbConfig/dbConfig'; // Your DB connection utility
import Class from '@/models/classModel'; // Your Mongoose model

connect();

export async function DELETE(req: NextApiRequest) {
  const { classId } = req.body;
  try {
    await Class.deleteOne({ _id: classId });
    return new NextResponse(JSON.stringify({ message: 'Class deleted successfully' }), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  } catch (error: any) {
    return new NextResponse(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }
}
