import mongoose, { Schema } from 'mongoose';
import type { DocumentationType } from '../types.js';

const DocumentationSchema = new Schema<DocumentationType>({
  docLink: { type: String, required: true },
  docUrl: { type: String, required: true },
});

const Documenation = mongoose.model<DocumentationType>('documentation', DocumentationSchema);

export default Documenation;
