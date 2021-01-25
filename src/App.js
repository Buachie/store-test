import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Add from './components/Add';
import Read from './components/Read';
import Home from './components/Home';
import Dashboard from './components/Dashboard';
import LogIn from './components/LogIn';
import SignUp from './components/SignUp';
//import {AuthProvider} from './components/Auth';

const App = () => {

  return (
    
      <Router>
        <Switch>
          <Add/>
          <Read/>
        </Switch>
      </Router>
    
  )
}

export default App
