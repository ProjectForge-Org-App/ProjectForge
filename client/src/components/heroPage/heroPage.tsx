import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import Navbar from '../navbar/navbar';
import styles from './heroPage.module.css';

const HeroPage: React.FC = () => {
  const navigate = useNavigate(); // Initialize useNavigate

  return (
    <div className={styles.heroPageContainer}>
      <video autoPlay muted loop className={styles.backgroundVideo}>
        <source src="/BlacksmithBRoll.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <Navbar />
      <div className={styles.heroContent}>
        <h1 className={styles.heroHeader}>Project Forge</h1>
        <img src="/logo.png" alt="Project Forge Logo" className={styles.logo} />
        <div className={styles.buttonContainer}>
          <button type="button" className={styles.login} onClick={() => navigate('/login')}>
            Login
          </button>
          <button type="button" className={styles.signUp} onClick={() => navigate('/signup')}>
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroPage;
