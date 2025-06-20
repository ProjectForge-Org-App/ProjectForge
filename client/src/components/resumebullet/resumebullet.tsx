import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './resumebullet.module.css';
import { fetchAllProjects } from '../../api';

const autoGrow = (event: React.FormEvent<HTMLTextAreaElement>) => {
  const textarea = event.currentTarget;
  textarea.style.height = 'auto';
  textarea.style.height = `${textarea.scrollHeight}px`;
};

const ResumeBullets: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState('');
  const [projects, setProjects] = useState<string[]>([]);
  const [resumePoint, setResumePoint] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const loadProjects = async () => {
      try {
        const data = await fetchAllProjects(); //* Use helper from api.ts
        setProjects(data); //* expects an array
      } catch (err) {
        console.error('Failed to fetch projects', err);
      }
    };

    loadProjects();
  }, []);

  const handleSearch = () => {
    if (selectedProject && resumePoint) {
      console.log(`🎃🎃🎃 Selected Project: ${selectedProject}`);
      console.log(`🪱🪱🪱 Resume Point: ${resumePoint}`);
      navigate(`/project/${encodeURIComponent(selectedProject)}`);
    } else {
      alert('Please fill out all fields.');
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.formCard}>
        <h1 className={styles.title}>Add Resume Reminder Points</h1>
        <h3 className={styles.subtitle}>
          Remember to document information for resume bullet points on specific
          projects.
        </h3>

        <div>
          <label htmlFor='project-select'>Select a project:</label>
          <select
            id='project-select'
            value={selectedProject}
            onChange={(e) => setSelectedProject(e.target.value)}
          >
            <option value=''>-- Select a project --</option>
            {projects.map((project) => (
              <option key={project._id} value={project.projectName}>
                {project.projectName}
              </option>
            ))}
          </select>
        </div>

        <div className={styles.textBox}>
          <textarea
            id='resume-point'
            placeholder='Resume point'
            value={resumePoint}
            onChange={(e) => setResumePoint(e.target.value)}
            onInput={autoGrow}
            rows={1}
          />
        </div>

        <div className={styles.button}>
          <button onClick={handleSearch}>Submit</button>
        </div>
      </div>
    </div>
  );
};

export default ResumeBullets;
