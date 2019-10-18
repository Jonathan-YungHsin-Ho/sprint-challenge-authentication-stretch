import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { axiosWithAuth } from '../utils/axiosWithAuth';

export default function Signup(props) {
  const [credentials, setCredentials] = useState({
    username: '',
    password: '',
  });
  const [error, setError] = useState('');

  const handleChange = e => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    // console.log(credentials);
    axiosWithAuth()
      .post('/auth/register', credentials)
      .then(res => {
        // console.log(res);
        localStorage.setItem('token', res.data.token);
        props.history.push('/jokes');
      })
      .catch(err => {
        console.log(err);
        setError('Error registering!');
      });
  };

  return (
    <div>
      <div className='nav'>
        <NavLink to='/signin'>Signin</NavLink>
      </div>
      <div className='box'>
        <h2>Sign Up Below:</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor='username'>Username: </label>
            <input
              type='text'
              id='username'
              name='username'
              placeholder='...username'
              value={credentials.username}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor='password'>Password: </label>
            <input
              type='password'
              id='password'
              name='password'
              placeholder='...password'
              value={credentials.password}
              onChange={handleChange}
            />
          </div>
          <button className='btn'>Sign Up</button>
          <div className='error'>{error}</div>
        </form>
      </div>
    </div>
  );
}
