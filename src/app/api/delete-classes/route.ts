import { NextRequest, NextResponse } from 'next/server';
import { connect } from '@/dbConfig/dbConfig';
import Class from '@/models/classModel';

// Connect to the database
connect();

export async function DELETE(request: NextRequest) {
    try {
        const url = new URL(request.url);
        const classId = url.searchParams.get('classId');

        if (!classId) {
            return new NextResponse(JSON.stringify({ message: 'Class ID is required' }), { status: 400 });
        }

        const deletedClass = await Class.findByIdAndDelete(classId);
        if (!deletedClass) {
            return new NextResponse(JSON.stringify({ message: 'Class not found' }), { status: 404 });
        }

        return new NextResponse(JSON.stringify({ message: 'Class deleted successfully' }), { status: 200 });
    } catch (error: any) {
        return new NextResponse(JSON.stringify({ message: error.message }), { status: 500 });
    }
}