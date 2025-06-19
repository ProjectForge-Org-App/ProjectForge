import React, { useEffect, useState } from 'react';
// import { useNavigate } from 'react-router-dom';
import styles from './project.module.css';

const projectData: React.FC = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [bulletText, setBulletText] = useState('');

  return (
    <div>
      <h1 className={styles.title}>Project Sumamry Page</h1>

      <div className={styles.projectName}></div>

      <div className={styles.projectTemplate}>
        <button className={styles.button}>Edit or Update</button>
      </div>

      <div className={styles.documentation}>
        <button className={styles.button}>Edit or Update</button>
      </div>

      <div className={styles.resumebullet}>
        {isEditing ? (
          <textarea
            value={bulletText}
            onChange={(e) => setBulletText(e.target.value)}
            onBlurCapture={() => setIsEditing(false)}
            autoFocus
          />
        ) : (
          <div onClick={() => setIsEditing(true)}>{bulletText}</div>
        )}
        <button className={styles.button} onClick={() => setIsEditing((prev) => !prev)}>
          {isEditing ? 'Save' : 'Edit'}
        </button>
      </div>
    </div>
  );
};

export default projectData;
