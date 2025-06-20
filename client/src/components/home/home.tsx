import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './home.module.css';
import type { HomeTypes } from '../../../types';
import { fetchAllProjects } from '../../api';

const Home = () => {
  const [projects, setProjects] = useState<HomeTypes[]>([]);
  const [selectedProject, setSelectedProject] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const getProjects = async () => {
      try {
        const data = await fetchAllProjects();
        setProjects(data);
        //console.log('projects', data);
      } catch (err) {
        console.error('Error loading projects:', err);
      }
    };
    getProjects();
  }, []);

  const handleSearch = () => {
    if (selectedProject) {
      navigate(`/project/${encodeURIComponent(selectedProject)}`);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.formCard}>
        <h1 className={styles.title}>Select a Project</h1>

        <label htmlFor='project-select'>Project:</label>
        <select
          id='project-select'
          value={selectedProject}
          onChange={(e) => setSelectedProject(e.target.value)}
        >
          <option value=''>-- Select a project --</option>
          {projects.map((project: HomeTypes) => (
            <option key={project._id} value={project.projectName}>
              {project.projectName}
            </option>
          ))}
        </select>

        <div className={styles.button}>
          <button onClick={handleSearch} disabled={!selectedProject}>
            Search
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
