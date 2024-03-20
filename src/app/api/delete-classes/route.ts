import type { NextApiRequest, NextApiResponse } from 'next';
import { connect } from '@/dbConfig/dbConfig'; // Your DB connection utility
import Class from '@/models/classModel'; // Your Mongoose model

connect();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'DELETE') {
    const classId = req.body.classId;

    if (!classId) {
      return res.status(400).json({ message: 'Class ID is required' });
    }

    try {
      const deletedClass = await Class.findByIdAndDelete(classId);
      if (!deletedClass) {
        return res.status(404).json({ message: 'Class not found' });
      }
      return res.status(200).json({ message: 'Class deleted successfully' });
    } catch (error: any) {
      return res.status(500).json({ message: error.message });
    }
  } else {
    res.setHeader('Allow', ['DELETE']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
