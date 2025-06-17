import mongoose, { Schema } from 'mongoose';
import type { ProjectForm } from '../types';

const ProjectSchema = new Schema<ProjectForm>({});

const Project = mongoose.model<ProjectForm>('Project', ProjectSchema);

export default Project;
