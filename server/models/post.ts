import mongoose, { Document } from 'mongoose';
import { IUser } from './user';


// Define post schema
const postSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

// Define IPost interface
interface IPost extends Document {
  title: string;
  content: string;
  author: string | IUser;
  createdAt: Date;
}

// Create post model
const Post = mongoose.model<IPost>('Post', postSchema);

// Export post model and IPost interface
export { Post, IPost };
