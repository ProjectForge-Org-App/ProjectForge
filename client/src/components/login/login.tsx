import React, { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import type { FormEvent } from 'react';
import styles from './login.module.css';
import logo from '/logo.png';

const Login: React.FC = () => {
  const [action, setAction] = useState('Login');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    setAction(location.pathname === '/signup' ? 'Sign Up' : 'Login');
  }, [location.pathname]);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const url = action === 'Login' ? 'http://localhost:3000/login' : 'http://localhost:3000/signup';
    const body = { username, password };

    try {
      const res = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
      });

      if (!res.ok) throw new Error(`${action} failed!`);

      const data = await res.json();
      alert('You have successfully logged in.');
      console.log(`${action} success!`, data);
      navigate('/');
    } catch (err) {
      console.error(`Error in ${action}`, err);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <img src={logo} alt="App Logo" className={styles.logo} />
        <h1 className={styles.heading}>{action} for Access</h1>

        <form onSubmit={handleSubmit} className={styles.form}>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className={styles.input}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className={styles.input}
          />
          <button type="submit" className={styles.button}>
            {action}
          </button>
          <div>
            {action === 'Sign Up' ? (
              <p className={styles.text}>
                Already have an account?{' '}
                <button className={styles.btn} type="button" onClick={() => navigate('/login')}>
                  Log In
                </button>
              </p>
            ) : (
              <p className={styles.text}>
                New here?{' '}
                <button className={styles.btn} type="button" onClick={() => navigate('/signup')}>
                  Sign Up
                </button>
              </p>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
