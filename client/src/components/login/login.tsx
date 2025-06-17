import React, { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import type { FormEvent } from 'react';

const Login: React.FC = () => {
  const [action, setAction] = useState('Login');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === '/signup') {
      setAction('Sign Up');
    } else {
      setAction('Login');
    }
  }, [location.pathname]);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    //*controls which url user goes to by need
    const url = action === 'Login' ? 'http://localhost:3000/login' : 'http://locationhost:3000/signup';
    const body = { username, password };

    try {
      const res = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
      });

      if (!res.ok) {
        throw new Error(`${action} failed!`);
      }

      const data = await res.json();
      window.alert('You have sucessfully logged in.');
      console.log(`${action} success!`, data);

      //! FINISH ROUTE WITH Navigate
      navigate('/');
    } catch (err) {
      console.error(`Error in ${action}`, err);
    }
  };

  return (
    <div>
      <h1>${action} for Access</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
        <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <button type="submit">${action}</button>
      </form>
    </div>
  );
};

export default Login;
