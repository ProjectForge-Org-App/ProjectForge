import React, { useState } from 'react';
import styles from './newProjectPage.module.css';
import Navbar from '../navbar/navbar';


export default function NewProjectForm() {
    const [projectName, setProjectName] = useState("");
    const [language, setLanguage] = useState("");
    const [frontend, setFrontend] = useState("");
    const [backend, setBackend] = useState("");
    const [database, setDatabase] = useState("");
    const [styling, setStyling] = useState("");
    const [mvpTasks, setMvpTasks] = useState<string[]>(["", "", ""]);
    const [stretchTasks, setStretchTasks] = useState<string[]>(["", "", ""]);
    const [startDate, setStartDate] = useState("");
    const [endDate, setEndDate] = useState("");
  
    const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      const formData = {
        projectName,
        mvpTasks,
        stretchTasks,
        timeline: { startDate, endDate },
      };
      console.log("Submitted Data:", formData);
    };
  
    const updateTask = (type: "mvp" | "stretch", index: number, value: string) => {
      const setter = type === "mvp" ? setMvpTasks : setStretchTasks;
      const tasks = type === "mvp" ? [...mvpTasks] : [...stretchTasks];
      tasks[index] = value;
      setter(tasks);
    };
  
    return (
      <div className={styles.background}>
        <Navbar />
        <form onSubmit={handleSubmit} className={styles.formContainer}>
          <h1 className={styles.formTitle}>Enter New Project Details</h1>
  
          <div className={styles.background}>
            <label>Name:</label>
            <input
              type="text"
              value={projectName}
              onChange={(e) => setProjectName(e.target.value)}
              className={styles.inputField}
            />
          </div>
  
          <div>
            <label>Language:</label>
            <div>
            <input
              type="text"
              value={language}
              onChange={(e) => setLanguage(e.target.value)}
              className={styles.inputField}
            />
            </div>
          </div>
  
          <div>
            <label>Frontend:</label>
            <div>
            <input
              type="text"
              value={frontend}
              onChange={(e) => setFrontend(e.target.value)}
              className={styles.inputField}
            />
            </div>
          </div>

          <div>
            <label>Backend:</label>
            <div>
            <input
              type="text"
              value={backend}
              onChange={(e) => setBackend(e.target.value)}
              className={styles.inputField}
            />
            </div>
          </div>

          <div>
            <label>Database:</label>
            <div>
            <input
              type="text"
              value={database}
              onChange={(e) => setDatabase(e.target.value)}
              className={styles.inputField}
            />
            </div>
          </div>

          <div>
            <label>Styling:</label>
            <div>
            <input
              type="text"
              value={styling}
              onChange={(e) => setStyling(e.target.value)}
              className={styles.inputField}
            />
            </div>
          </div>

          <div>
            <label>MVP Goals:</label>
            {mvpTasks.map((task, i) => (
              <input
                key={i}
                type="text"
                value={task}
                onChange={(e) => updateTask("mvp", i, e.target.value)}
                className={styles.inputField}
              />
            ))}
          </div>
  
          <div>
            <label>Stretch Goals:</label>
            {stretchTasks.map((task, i) => (
              <input
                key={i}
                type="text"
                value={task}
                onChange={(e) => updateTask("stretch", i, e.target.value)}
                className={styles.inputField}
              />
            ))}
          </div>
  
          <div>
            <label>Timeline:</label>
            <div className={styles.timelineContainer}>
              <input
                type="date"
                value={startDate}
                onChange={(e) => setStartDate(e.target.value)}
                className={styles.inputField}
              />
              <span>/</span>
              <input
                type="date"
                value={endDate}
                onChange={(e) => setEndDate(e.target.value)}
                className={styles.inputField}
              />
            </div>
          </div>
  
          <div className={styles.actionButtons}>
            <button type="submit" className={styles.actionButton}>
                Submit Form
            </button>
            <button type="button" className={styles.actionButton}>
                Cancel
            </button>
          </div>
        </form>
      </div>
    );
  }
  