import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from '../resumebullet/resumebullet.module.css';

const Home = () => {
  const [projects, setProjects] = useState<string[]>([]);
  const [selectedProject, setSelectedProject] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const res = await fetch('/api/project');
        const data = await res.json();
        if (Array.isArray(data)) {
          setProjects(data); //  data = ['Project A', 'Project B', ...]
        }
      } catch (err) {
        console.error('Failed to fetch projects', err);
      }
    };

    fetchProjects();
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

        <label htmlFor="project-select">Project:</label>
        <select id="project-select" value={selectedProject} onChange={(e) => setSelectedProject(e.target.value)}>
          <option value="">-- Select a project --</option>
          {projects.map((name) => (
            <option key={name} value={name}>
              {name}
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
