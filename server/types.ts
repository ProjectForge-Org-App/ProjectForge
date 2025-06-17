export interface Project extends Document {
  projectId: number;
  projectName: string;
}

export interface ProjectForm extends Document {
  projectId: number;
  projectName: string;
  techStack: string;
  mVPGoals: Record<string, string | null>;
  stretchGoals: Record<string, string | null>;
  startDate: string;
  endDate: string;
}
