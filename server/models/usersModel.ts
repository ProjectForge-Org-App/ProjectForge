import mongoose, { Schema } from 'mongoose';
import type { UserType } from '../types.js';

const UserSchema = new Schema<UserType>({
  username: { type: String, required: true },
  password: { type: String, required: true },
});

const User = mongoose.model<UserType>('users', UserSchema);

export default User;
