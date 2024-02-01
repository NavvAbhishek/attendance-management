// pages/api/verifyRole.ts
import jwt from 'jsonwebtoken';
import User from "@/models/userModel"; // Adjust the path as needed
import {connect} from '@/dbConfig/dbConfig'; // Adjust the path as needed
import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    await connect();
    const token = req.headers.authorization?.split(' ')[1];
    if (!token) return res.status(401).json({ message: 'No token provided' });

    // Assuming the decoded token will have an 'id' property. Adjust as per your token structure
    interface DecodedToken {
      id: string;
      // include other properties from the token as needed
    }

    const decoded: DecodedToken = jwt.verify(token, process.env.TOKEN_SECRET!) as DecodedToken;
    const user = await User.findById(decoded.id);
    if (!user) return res.status(404).json({ message: 'User not found' });

    res.status(200).json({ role: user.role });
  } catch (error: any) {
    res.status(500).json({ message: error.message || 'Server error' });
  }
}
