import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './newProjectPage.module.css';
import Navbar from '../navbar/navbar';
import { createProject } from '../../api';

export default function NewProjectForm() {
  const [projectName, setProjectName] = useState('');
  const [language, setLanguage] = useState('');
  const [frontend, setFrontend] = useState('');
  const [backend, setBackend] = useState('');
  const [database, setDatabase] = useState('');
  const [styling, setStyling] = useState('');
  const [mvpTasks, setMvpTasks] = useState<string[]>(['', '', '']);
  const [stretchTasks, setStretchTasks] = useState<string[]>(['', '', '']);
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      console.log('Submitting formData:', {
        projectName,
        language,
        frontend,
        backend,
        database,
        styling,
        mvpGoals: mvpTasks,
        stretchGoals: stretchTasks,
        timeline: { startDate: new Date(startDate), endDate: new Date(endDate) },
      });
      const result = await createProject({
        projectName,
        language,
        frontend,
        backend,
        database,
        styling,
        mvpGoals: mvpTasks,
        stretchGoals: stretchTasks,
        timeline: { startDate: new Date(startDate), endDate: new Date(endDate) },
      });
      console.log('✅ Project submitted:', result);
      navigate(`/project/${encodeURIComponent(projectName)}`);
    } catch (err) {
      console.error(err);
    }
  };

  const updateTask = (type: 'mvp' | 'stretch', index: number, value: string) => {
    const setter = type === 'mvp' ? setMvpTasks : setStretchTasks;
    const tasks = type === 'mvp' ? [...mvpTasks] : [...stretchTasks];
    tasks[index] = value;
    setter(tasks);
  };

  return (
    <div className={styles.background}>
      <Navbar />
      <div className={styles.gradientContainer}>
        <form onSubmit={handleSubmit} className={styles.formContainer}>
          <h1 className={styles.formTitle}>Enter New Project Details</h1>


          <div className={styles.columns}>
            <div className={styles.leftColumn}>
              <div className={styles.formGroupHorizontal}>
                <label>Project Name:</label>
                <input

        <div className={styles.columns}>
          <div className={styles.leftColumn}>
            <div className={styles.formGroupHorizontal}>
              <label>Project Name:</label>
              <input
              placeholder="Enter Project Name"
                type="text"
                value={projectName}
                onChange={(e) => setProjectName(e.target.value)}
                className={styles.inputField}
              />
            </div>
            <div className={styles.formGroupHorizontal}>
              <label>Language:</label>
              <input
              placeholder="Enter Language"
                type="text"
                value={language}
                onChange={(e) => setLanguage(e.target.value)}
                className={styles.inputField}
              />
            </div>
            <div className={styles.formGroupHorizontal}>
              <label>Frontend:</label>
              <input
              placeholder="Enter Frontend"
                type="text"
                value={frontend}
                onChange={(e) => setFrontend(e.target.value)}
                className={styles.inputField}
              />
            </div>
            <div className={styles.formGroupHorizontal}>
              <label>Backend:</label>
              <input
              placeholder="Enter Backend"
                type="text"
                value={backend}
                onChange={(e) => setBackend(e.target.value)}
                className={styles.inputField}
              />
            </div>
            <div className={styles.formGroupHorizontal}>
              <label>Database:</label>
              <input
              placeholder="Enter Database"
                type="text"
                value={database}
                onChange={(e) => setDatabase(e.target.value)}
                className={styles.inputField}
              />
            </div>
            <div className={styles.formGroupHorizontal}>
              <label>Styling:</label>
              <input
              placeholder="Enter Styling"
                type="text"
                value={styling}
                onChange={(e) => setStyling(e.target.value)}
                className={styles.inputField}
              />
            </div>
          </div>

          <div className={styles.rightColumn}>
            <div className={styles.formGroup}>
              <label className={styles.centeredLabel}>MVP Goals:</label>
              {mvpTasks.map((task, i) => (
                <input
                placeholder="Enter MVP Goals"
                  key={i}
                  type="text"
                  value={projectName}
                  onChange={(e) => setProjectName(e.target.value)}
                  className={styles.inputField}
                />
              </div>
              <div className={styles.formGroupHorizontal}>
                <label>Language:</label>
                <input

                placeholder="Enter Stretch Goals"
                  key={i}
                  type="text"
                  value={language}
                  onChange={(e) => setLanguage(e.target.value)}
                  className={styles.inputField}
                />
              </div>
              <div className={styles.formGroupHorizontal}>
                <label>Frontend:</label>
                <input
                  type="text"
                  value={frontend}
                  onChange={(e) => setFrontend(e.target.value)}
                  className={styles.inputField}
                />
              </div>
              <div className={styles.formGroupHorizontal}>
                <label>Backend:</label>
                <input
                  type="text"
                  value={backend}
                  onChange={(e) => setBackend(e.target.value)}
                  className={styles.inputField}
                />
              </div>
              <div className={styles.formGroupHorizontal}>
                <label>Database:</label>
                <input
                  type="text"
                  value={database}
                  onChange={(e) => setDatabase(e.target.value)}
                  className={styles.inputField}
                />
              </div>
              <div className={styles.formGroupHorizontal}>
                <label>Styling:</label>
                <input
                  type="text"
                  value={styling}
                  onChange={(e) => setStyling(e.target.value)}
                  className={styles.inputField}
                />
              </div>
            </div>

            <div className={styles.rightColumn}>
              <div className={styles.formGroup}>
                <label className={styles.centeredLabel}>MVP Goals:</label>
                {mvpTasks.map((task, i) => (
                  <input
                    key={i}
                    type="text"
                    value={task}
                    onChange={(e) => updateTask('mvp', i, e.target.value)}
                    className={styles.inputField}
                  />
                ))}
              </div>
              <div className={styles.formGroup}>
                <label className={styles.centeredLabel}>Stretch Goals:</label>
                {stretchTasks.map((task, i) => (
                  <input
                    key={i}
                    type="text"
                    value={task}
                    onChange={(e) => updateTask('stretch', i, e.target.value)}
                    className={styles.inputField}
                  />
                ))}
              </div>
              <div className={styles.formGroup}>
                <label className={styles.centeredLabel}>Timeline:</label>
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
            </div>
          </div>

          <div className={styles.centeredButtons}>
            <button type="submit" className={styles.actionButton}>
              Submit Form
            </button>
            <button type="button" className={styles.actionButton}>
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
