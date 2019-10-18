import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import './App.css';

import Signin from './components/Signin';
import Signup from './components/Signup';
import Jokes from './components/Jokes';
import PrivateRoute from './components/PrivateRoute';

function App() {
  return (
    <div className='App'>
      <h1>Dad Jokes!</h1>
      <Route exact path='/'>
        <Redirect to='/signin' />
      </Route>
      <Route path='/signin' component={Signin} />
      <Route path='/signup' component={Signup} />
      <PrivateRoute path='/jokes' component={Jokes} />
    </div>
  );
}

export default App;
