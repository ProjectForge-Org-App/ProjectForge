// ProjectSummaryPage.tsx
import React, { useState } from 'react';
import type { ProjectSummaryPageProps } from '../../../types';
import styles from './project.module.css';

const ProjectSummaryPage: React.FC<ProjectSummaryPageProps> = ({ project, documentation, resumeBullets }) => {
  const [isEditingProject, setIsEditingProject] = useState(false);
  const [isEditingDocs, setIsEditingDocs] = useState(false);
  const [isEditingResume, setIsEditingResume] = useState(false);

  const handleUpdateProject = () => {
    console.log('Update project to DB');
    setIsEditingProject(false);
  };

  const handleUpdateDocs = () => {
    console.log('Update docs to DB');
    setIsEditingDocs(false);
  };

  const handleAddResume = () => {
    console.log('Add new resume bullet');
  };

  const handleDeleteProject = () => {
    console.log('Delete project');
  };

  return (
    <div className={styles.container}>
      {/* //* Project Section */}
      <div className={styles.formCard}>
        <h2 className={styles.title}>Project</h2>
        {isEditingProject ? (
          <>
            <div className={styles.cardRow}>
              <div className={styles.textBox}>
                <span>MVP Specs</span>
                <textarea defaultValue={project.mvpGoals.join('\n')} />
              </div>
              <div className={styles.textBox}>
                <span>Stretch Specs</span>
                <textarea defaultValue={project.stretchGoals.join('\n')} />
              </div>
              <div className={styles.textBox}>
                <span>Tech Stack</span>
                <textarea defaultValue={`${project.frontend}, ${project.backend}, ${project.database}`} />
              </div>
            </div>
            <div className={styles.button}>
              <button onClick={handleUpdateProject}>Save Project</button>
            </div>
          </>
        ) : (
          <>
            <div className={styles.cardRow}>
              <div className={styles.textBox}>
                <span>MVP Specs</span>
              </div>
              <div className={styles.textBox}>
                <span>Stretch Specs</span>
              </div>
              <div className={styles.textBox}>
                <span>Tech Stack</span>
              </div>
            </div>
            <div className={styles.button}>
              <button onClick={() => setIsEditingProject(true)}>Edit Project</button>
            </div>
          </>
        )}
      </div>

      {/* //* Documentation Section */}
      <div className={styles.formCard}>
        <h2 className={styles.title}>Documentation</h2>
        {isEditingDocs ? (
          <>
            {documentation.map((doc, i) => (
              <div key={i} className={styles.textBoxRow}>
                <input defaultValue={doc.docLink} />
                <input defaultValue={doc.docUrl} />
                <button>Save</button>
              </div>
            ))}
            <div className={styles.button}>
              <button onClick={handleUpdateDocs}>Save Docs</button>
            </div>
          </>
        ) : (
          <>
            {documentation.map((doc, i) => (
              <div key={i} className={styles.textBoxRow}>
                <span className={styles.flexGrow}>{doc.docLink}</span>
                <button>Edit</button>
                <button>Delete</button>
              </div>
            ))}
            <div className={styles.button}>
              <button onClick={() => setIsEditingDocs(true)}>Edit Docs</button>
            </div>
          </>
        )}
      </div>

      {/* //* Resume Section */}
      <div className={styles.formCard}>
        <h2 className={styles.title}>Resume</h2>
        {isEditingResume ? (
          <>
            {resumeBullets.map((bullet, i) => (
              <div key={i} className={styles.textBoxRow}>
                <textarea defaultValue={bullet.resumeBullet} />
                <button>Save</button>
                <button>Delete</button>
              </div>
            ))}
            <div className={styles.button}>
              <button onClick={() => setIsEditingResume(false)}>Save Resume</button>
            </div>
          </>
        ) : (
          <>
            {resumeBullets.map((bullet, i) => (
              <div key={i} className={styles.textBoxRow}>
                <span className={styles.flexGrow}>{bullet.resumeBullet}</span>
                <button>Edit</button>
                <button>Delete</button>
              </div>
            ))}
            <div className={styles.button}>
              <button onClick={() => setIsEditingResume(true)}>Edit Resume</button>
            </div>
          </>
        )}
        <div className={styles.button}>
          <button onClick={handleAddResume}>Add New Resume Bullet</button>
        </div>
      </div>

      <div className={styles.button} style={{ justifyContent: 'flex-end' }}>
        <button onClick={handleDeleteProject}>Delete Project</button>
      </div>
    </div>
  );
};

export default ProjectSummaryPage;
