import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './documentation.module.css';
import { fetchAllProjects } from '../../api';
import type { HomeTypes } from '../../../types';

const Documentation: React.FC = () => {
  const [projects, setProjects] = useState<HomeTypes[]>([]);
  const [selectedProject, setSelectedProject] = useState('');
  const [docUrl, setDocUrl] = useState('');
  const [linkName, setLinkName] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const loadProjects = async () => {
      try {
        const data = await fetchAllProjects(); //* using helper from api.ts
        setProjects(data); //* data is expected to be an array of strings
      } catch (err) {
        console.error('Failed to fetch projects', err);
      }
    };

    loadProjects();
  }, []);

  const handleSearch = () => {
    if (selectedProject && docUrl && linkName) {
      console.log(`🎃🎃🎃 Selected Project: ${selectedProject}`);
      console.log(`🪱🪱🪱 Doc URL: ${docUrl}`);
      console.log(`🎤🎤🎤 Link Name: ${linkName}`);
      navigate(`/project/${encodeURIComponent(selectedProject)}`);
    } else {
      alert('Please fill out all fields.');
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.formCard}>
        <h1 className={styles.title}>Add Documentation Links</h1>
        <h3 className={styles.subtitle}>
          These can be used as a bookmark for your documentation on projects.
        </h3>

        <div>
          <label>
            <select
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
          </label>
        </div>

        <div className={styles.textBox}>
          <input
            type='text'
            placeholder='Document URL'
            value={docUrl}
            onChange={(e) => setDocUrl(e.target.value)}
          />
          <span>/</span>
          <input
            type='text'
            placeholder='Hyperlink Name'
            value={linkName}
            onChange={(e) => setLinkName(e.target.value)}
          />
        </div>

        <div className={styles.button}>
          <button onClick={handleSearch}>Add Documentation</button>
        </div>
      </div>
    </div>
  );
};

export default Documentation;
