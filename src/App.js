import React from 'react';
import { HashRouter, Switch } from 'react-router-dom';
import "antd/dist/antd.css";
import './App.css';
import Login from './pages/login/login';
import PublicRoute from './utils/PublicRoute';
import PrivateRoute from './utils/PrivateRoute';
import InputScrenn from './pages/inputScreen/inputScrenn';
import DisplayScreen from './pages/displayScreen/displayScreen';

function App() {
  return (
    <div className="App">
        <HashRouter>
            <Switch>
              <PrivateRoute exact path='/input' component={InputScrenn}/>
              <PrivateRoute exact path='/display' component={DisplayScreen}/>
              <PublicRoute path="" component={Login}/>
            </Switch>
        </HashRouter>
    </div>
  );
}

export default App;
