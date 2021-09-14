import React from 'react';
import { Route, Link, Switch} from 'react-router-dom';

import PrivateRoute from './components/PrivateRoute';

import Login from './components/Login';
import Logout from './components/Logout';
import FriendList from './components/FriendList';



function App() {
  return (
    <div className="App">
      <nav>
        <Link to='/login'>Login</Link>
        <Link to='/logout'>Logout</Link>
      </nav>

      <Switch>
        <Route path='/login' component={Login}/>
        <PrivateRoute path='/logout' component={Logout}/>
        <PrivateRoute path='/friends' component={FriendList}/>
        <Route path='/' component={Login}/>
      </Switch>

    </div>
  );
}

export default App;
