import mongoose, { Schema } from 'mongoose';
import { ResumeBulletType } from '../types.js';

const ResumeBulletSchema = new Schema<ResumeBulletType>({
  resumeBullet: { type: String, required: true },
});

const ResumeBullet = mongoose.model<ResumeBulletType>('resumebullet', ResumeBulletSchema);

export default ResumeBullet;
