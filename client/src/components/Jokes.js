import React, { useState, useEffect } from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';

export default function Users(props) {
  const [jokes, setJokes] = useState([]);

  useEffect(() => {
    axiosWithAuth()
      .get('/jokes')
      .then(res => {
        // console.log(res.data);
        setJokes(res.data);
      })
      .catch(err => console.log(err));
  }, []);

  return (
    <div>
      <div className='nav'>
        <button
          className='logout'
          onClick={() => {
            localStorage.removeItem('token');
            props.history.push('/');
          }}>
          Log Out
        </button>
      </div>
      <h2>Jokes!</h2>
      <div className='jokes'>
        {jokes.map(obj => (
          <div className='joke'>
            <p key={obj.id}>{obj.joke}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
