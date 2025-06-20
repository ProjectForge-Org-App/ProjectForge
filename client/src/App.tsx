import './App.css';
import { Routes, Route } from 'react-router-dom';
import Login from './components/login/login';
import Navbar from './components/navbar/navbar.tsx';
import NewProjectForm from './components/newProjectPage/newProjectPage.tsx';
import HeroPage from './components/heroPage/heroPage.tsx';
import Documentation from './components/documentation/documentation.tsx';
import ResumeBullets from './components/resumebullet/resumebullet.tsx';
import Home from './components/home/home.tsx';
import ProjectSummaryPage from './components/projectsummarypage/projectdata.tsx';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HeroPage />} />
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Login />} />
        <Route path="/projects/new" element={<NewProjectForm />} />
        <Route path="/docs/new" element={<Documentation />} />
        <Route path="/resume-bullets/new" element={<ResumeBullets />} />
        <Route path="/project/:projectName" element={<ProjectSummaryPage />} />
      </Routes>
    </>
  );
}

export default App;
