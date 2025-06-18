import React, { useEffect, useState } from 'react';
import NewProjectForm from '../newProjectPage/newProjectPage';
import Documentation from '../documentation/documentation';
import ResumeBullets from '../resumebullet/resumebullet';
import styles from './project.module.css';

const ProjectPage: React.FC = () => {
  const [projectData, setProjectPage] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const data = await getProjectData(selectedProject);
      setProjectPage(data);
    }
    fetchData();
  }, []);

  if (!projectData) return <div>Loading...</div>;

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>DevAI</h1>
      <p className={styles.subtitle}>Project Overview File</p>

      <NewProjectForm data={projectData.project} />
      <Documentation data={projectData.documentation} />
      <ResumeBullets data={projectData.resumeBullets} />

      <button className={styles.deleteButton}>Delete project</button>
    </div>
  );
};

export default ProjectPage;
