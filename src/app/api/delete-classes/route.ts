import { NextRequest, NextResponse } from 'next/server';
import { connect } from '@/dbConfig/dbConfig';
import Class from '@/models/classModel';
import getDataFromToken from '@/helpers/getDataFromToken'; // Assuming you might need this for auth

// Connect to the database
connect();

export async function DELETE(request: NextRequest) {
    try {
        // Assuming you're sending the classId as a URL param or in some other way accessible via request
        // You may need to adjust based on how you're actually sending the classId
        const url = new URL(request.url);
        const classId = url.searchParams.get('classId'); // Example: "/api/delete-class?classId=value"

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