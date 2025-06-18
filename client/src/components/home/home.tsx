import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const [projects, setProjects] = useState([]);
  const [selectedProject, setSelectedProject] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const res = await fetch('/api/project');
        const data = await res.json();
        setProjects(data); //  data = ['Project A', 'Project B', ...]
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
    <div>
      <label>Select Project:</label>
      <select id="project-select" value={selectedProject} onChange={(e) => setSelectedProject(e.target.value)}>
        <option value="">--Select a project--</option>
        {projects.map((name) => (
          <option key={name} value={name}>
            {name}
          </option>
        ))}
      </select>

      <button onClick={handleSearch} disabled={!selectedProject}>
        Search
      </button>
    </div>
  );
};

export default Home;
