import mongoose, { Document } from 'mongoose';
import { IUser } from './user';
import { IPost } from './post';


// Define comment schema
const commentSchema = new mongoose.Schema({
  content: {
    type: String,
    required: true,
  },
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  post: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Post',
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

// Define IComment interface
interface IComment extends Document {
  content: string;
  author: string | IUser;
  post: string | IPost;
  createdAt: Date;
}

// Create comment model
const Comment = mongoose.model<IComment>('Comment', commentSchema);

// Export comment model and IComment interface
export { Comment, IComment };
