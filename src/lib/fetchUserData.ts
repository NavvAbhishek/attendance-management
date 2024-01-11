// Assuming User is a Mongoose model, the import might look something like this:
import User from '@/models/userModel';
import { IUser } from '@/models/userModelTypes'; // Import the IUser interface

const fetchUserData = async (userId: string): Promise<IUser | null> => {
    try {
        const user = await User.findById(userId);
        return user;
    } catch (error: any) {
        throw new Error(error.message);
    }
}

export default fetchUserData;