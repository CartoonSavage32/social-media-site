import mongoose, { Document } from 'mongoose';

// Define user schema
const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

// Define IUser interface
interface IUser extends Document {
  username: string;
  email: string;
  password: string;
  createdAt: Date;
}

// Create user model
const User = mongoose.model<IUser>('User', userSchema);

// Export user model and IUser interface
export { User, IUser };
