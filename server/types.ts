export interface Project extends Document {
  projectId: number;
  projectName: string;
}

export interface ProjectForm {
  projectId: number;
  projectName: string;
  language: string;
  frontend: string;
  backend: string;
  database: string;
  styling: string;
  mvpGoals: string[];
  stretchGoals: string[];
  timeline: {
    startDate: string;
    endDate: string;
  };
}

export interface UserType extends Document {
  username: string;
  password: string;
}

export interface DocumentationType {
  docUrl: string;
  docLink: string;
}
