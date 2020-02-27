import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import PrivateRoute from './utils/PrivateRoute';
import Tabs from './components/Tabs';
import UserList from './UserList';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <PrivateRoute 
            path="/users" 
            component={UserList} 
          />
          <Route path="/" component={Tabs} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
