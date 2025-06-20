//* props for dropdown menu:
export interface DropdownItem {
  label: string;
  path: string;
}

export interface ProjectTemplate {
  projectName: string;
  language: string;
  frontend: string;
  backend: string;
  database: string;
  styling: string;
  mvpGoals: string[];
  stretchGoals: string[];
  timeline: {
    startDate: Date;
    endDate: Date;
  };
}

export interface DocumentationTemplate {
  docUrl: string;
  docLink: string;
}

export interface ResumeTemplate {
  resumeBullet: string;
}

export interface ProjectSummaryPageProps {
  projects: ProjectTemplate[];
  documentation: DocumentationTemplate[];
  resumeBullets: ResumeTemplate[];
}
