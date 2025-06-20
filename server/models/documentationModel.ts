import mongoose, { Schema } from 'mongoose';
import type { DocumentationType } from '../types.js';

const DocumentationSchema = new Schema<DocumentationType>({
  projectName: { type: String, required: true },
  docLink: { type: String, required: true },
  docUrl: { type: String, required: true },
});

const Documentation = mongoose.model<DocumentationType>('documentation', DocumentationSchema);

export default Documentation;
