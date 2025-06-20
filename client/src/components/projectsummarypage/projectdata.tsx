import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import styles from './project.module.css';
import { fetchProjectByName } from '../../api'; //
import type { HomeTypes, DocumentationTemplate, ResumeTemplate } from '../../../types';

const ProjectSummaryPage: React.FC = () => {
  const { projectName } = useParams();
  const navigate = useNavigate();

  const [project, setProject] = useState<HomeTypes | null>(null);
  const [documentation, setDocumentation] = useState<DocumentationTemplate[]>([]);
  const [resumeBullets, setResumeBullets] = useState<ResumeTemplate[]>([]);

  const [isEditingProject, setIsEditingProject] = useState(false);
  const [isEditingDocs, setIsEditingDocs] = useState(false);
  const [isEditingResume, setIsEditingResume] = useState(false);

  useEffect(() => {
    if (!projectName) {
      navigate('/home');
      return;
    }

    const loadProject = async () => {
      try {
        const data = await fetchProjectByName(decodeURIComponent(projectName));
        console.log('API returned:', data);
        setProject(data);
        setDocumentation(data.documentation || []);
        setResumeBullets(data.resumeBullets || []);
      } catch (err) {
        console.error('Error fetching project:', err);
        navigate('/home');
      }
    };

    loadProject();
  }, [projectName, navigate]);

  if (!project) return <div className={styles.container}>Loading project...</div>;

  return (
    <div className={styles.container}>
      {/* Project Section */}
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
              <button onClick={() => setIsEditingProject(false)}>Save Project</button>
            </div>
          </>
        ) : (
          <>
            <div className={styles.cardRow}>
              <div className={styles.textBox}>
                <span>MVP Specs</span>
                <div>{project.mvpGoals.join(', ')}</div>
              </div>
              <div className={styles.textBox}>
                <span>Stretch Specs</span>
                <div>{project.stretchGoals.join(', ')}</div>
              </div>
              <div className={styles.textBox}>
                <span>Tech Stack</span>
                <div>
                  {project.frontend}, {project.backend}, {project.database}
                </div>
              </div>
            </div>
            <div className={styles.button}>
              <button onClick={() => setIsEditingProject(true)}>Edit Project</button>
            </div>
          </>
        )}
      </div>

      {/* Documentation Section */}
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
              <button onClick={() => setIsEditingDocs(false)}>Save Docs</button>
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

      {/* Resume Section */}
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
          <button onClick={() => console.log('Add new resume bullet')}>Add New Resume Bullet</button>
        </div>
      </div>

      <div className={styles.button} style={{ justifyContent: 'flex-end' }}>
        <button onClick={() => console.log('Delete project')}>Delete Project</button>
      </div>
    </div>
  );
};

export default ProjectSummaryPage;
