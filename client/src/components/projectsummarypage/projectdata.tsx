import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import styles from './project.module.css';
import { fetchProjectByName } from '../../api'; //
import type { ProjectTemplate, DocumentationTemplate, ResumeTemplate } from '../../../types';

const ProjectSummaryPage: React.FC = () => {
  const { projectName } = useParams();
  const navigate = useNavigate();

  const [project, setProject] = useState<ProjectTemplate | null>(null);
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
        console.log('Documentation:', data.documentation);
        console.log('Resume Bullets:', data.resumeBullets);
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
      {/* PROJECT SECTION */}
      <div className={styles.formCard}>
        <h2 className={styles.title}>Project</h2>
        {!isEditingProject ? (
          <>
            <div className={styles.projectDetailsGrid}>
              <div className={styles.detailCard}>
                <span className={styles.detailLabel}>Project Name:</span>
                <span className={styles.detailValue}>{project.projectName}</span>
              </div>
              <div className={styles.detailCard}>
                <span className={styles.detailLabel}>Language:</span>
                <span className={styles.detailValue}>{project.language}</span>
              </div>
              <div className={styles.detailCard}>
                <span className={styles.detailLabel}>Frontend:</span>
                <span className={styles.detailValue}>{project.frontend}</span>
              </div>
              <div className={styles.detailCard}>
                <span className={styles.detailLabel}>Backend:</span>
                <span className={styles.detailValue}>{project.backend}</span>
              </div>
              <div className={styles.detailCard}>
                <span className={styles.detailLabel}>Database:</span>
                <span className={styles.detailValue}>{project.database}</span>
              </div>
              <div className={styles.detailCard}>
                <span className={styles.detailLabel}>Styling:</span>
                <span className={styles.detailValue}>{project.styling}</span>
              </div>
              <div className={styles.detailCard}>
                <span className={styles.detailLabel}>MVP Goals:</span>
                <ul className={styles.detailList}>
                  {project.mvpGoals.map((goal, i) => (
                    <li key={i}>{goal}</li>
                  ))}
                </ul>
              </div>
              <div className={styles.detailCard}>
                <span className={styles.detailLabel}>Stretch Goals:</span>
                <ul className={styles.detailList}>
                  {project.stretchGoals.map((goal, i) => (
                    <li key={i}>{goal}</li>
                  ))}
                </ul>
              </div>
              <div className={styles.detailCard}>
                <span className={styles.detailLabel}>Timeline:</span>
                <span className={styles.detailValue}>
                  {project.timeline?.startDate ? new Date(project.timeline.startDate).toLocaleDateString() : ''} –{' '}
                  {project.timeline?.endDate ? new Date(project.timeline.endDate).toLocaleDateString() : ''}
                </span>
              </div>
            </div>
            <div className={styles.button}>
              <button onClick={() => setIsEditingProject(true)}>Edit Project</button>
            </div>
          </>
        ) : (
          <>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                // handle save here!
                setIsEditingProject(false);
              }}
            >
              <div className={styles.projectDetailsGrid}>
                <div className={styles.detailCard}>
                  <span className={styles.detailLabel}>Project Name:</span>
                  <input
                    type="text"
                    defaultValue={project.projectName}
                    className={styles.inputField}
                    // onChange={...}
                  />
                </div>
                <div className={styles.detailCard}>
                  <span className={styles.detailLabel}>Language:</span>
                  <input
                    type="text"
                    defaultValue={project.language}
                    className={styles.inputField}
                    // onChange={...}
                  />
                </div>
                <div className={styles.detailCard}>
                  <span className={styles.detailLabel}>Frontend:</span>
                  <input
                    type="text"
                    defaultValue={project.frontend}
                    className={styles.inputField}
                    // onChange={...}
                  />
                </div>
                <div className={styles.detailCard}>
                  <span className={styles.detailLabel}>Backend:</span>
                  <input
                    type="text"
                    defaultValue={project.backend}
                    className={styles.inputField}
                    // onChange={...}
                  />
                </div>
                <div className={styles.detailCard}>
                  <span className={styles.detailLabel}>Database:</span>
                  <input
                    type="text"
                    defaultValue={project.database}
                    className={styles.inputField}
                    // onChange={...}
                  />
                </div>
                <div className={styles.detailCard}>
                  <span className={styles.detailLabel}>Styling:</span>
                  <input
                    type="text"
                    defaultValue={project.styling}
                    className={styles.inputField}
                    // onChange={...}
                  />
                </div>
                <div className={styles.detailCard}>
                  <span className={styles.detailLabel}>MVP Goals:</span>
                  <textarea
                    defaultValue={project.mvpGoals.join('\n')}
                    className={styles.inputField}
                    rows={4}
                    // onChange={...}
                  />
                </div>
                <div className={styles.detailCard}>
                  <span className={styles.detailLabel}>Stretch Goals:</span>
                  <textarea
                    defaultValue={project.stretchGoals.join('\n')}
                    className={styles.inputField}
                    rows={4}
                    // onChange={...}
                  />
                </div>
                <div className={styles.detailCard}>
                  <span className={styles.detailLabel}>Timeline:</span>
                  <div style={{ display: 'flex', gap: '8px' }}>
                    <input
                      type="date"
                      defaultValue={
                        project.timeline?.startDate
                          ? new Date(project.timeline.startDate).toISOString().split('T')[0]
                          : ''
                      }
                      className={styles.inputField}
                      // onChange={...}
                    />
                    <span>/</span>
                    <input
                      type="date"
                      defaultValue={
                        project.timeline?.endDate ? new Date(project.timeline.endDate).toISOString().split('T')[0] : ''
                      }
                      className={styles.inputField}
                      // onChange={...}
                    />
                  </div>
                </div>
              </div>
              <div className={styles.button}>
                <button type="submit">Save Project</button>
              </div>
            </form>
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
