import './App.css';
import { Routes, Route } from 'react-router-dom';
import Login from './components/login/login';
import Navbar from './components/navbar/navbar.tsx';
import NewProjectForm from './components/newProjectPage/newProjectPage.tsx';
import HeroPage from './components/heroPage/heroPage.tsx';
import Documentation from './components/documentation/documentation.tsx';
import ResumeBullets from './components/resumebullet/resumebullet.tsx';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HeroPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Login />} />
        <Route path="/projects/new" element={<NewProjectForm />} />
        <Route path="/docs/new" element={<Documentation />} />
        <Route path="/resume-bullets/new" element={<ResumeBullets />} />
      </Routes>
    </>
  );
}

export default App;

{
  /* <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */
}
