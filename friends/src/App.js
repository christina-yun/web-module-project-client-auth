import React from 'react';
import { Route, Link, Switch} from 'react-router-dom';

import Login from './components/Login';
import Logout from './components/Logout';
import Friends from './components/Friends';



function App() {
  return (
    <div className="App">
      <nav>
        <Link to='/login'>Login</Link>
        <Link to='/logout'>Logout</Link>
      </nav>

      <Switch>
        <Route path='/login' component={Login} />
        <Route path='/logout' component={Logout}/>
        <Route path='/friends' component={Friends}/>
        <Route path='/' />
      </Switch>

    </div>
  );
}

export default App;
