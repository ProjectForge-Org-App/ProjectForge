import mongoose, { Schema } from 'mongoose';
import type { ProjectForm } from '../types.js';

const ProjectSchema = new Schema<ProjectForm>({
  projectName: { type: String, required: true },
  language: { type: String },
  frontend: { type: String },
  backend: { type: String },
  database: { type: String },
  styling: { type: String },
  mvpGoals: [{ type: String }],
  stretchGoals: [{ type: String }],
  timeline: {
    startDate: { type: Date },
    endDate: { type: Date },
  },
});

const Project = mongoose.model<ProjectForm>('Project', ProjectSchema);

export default Project;
