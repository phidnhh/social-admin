import React from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';
import './App.css';
import { PrivateRoute } from './components';
import {Login} from './pages/Account';
import { Admin } from './pages/Admin';

import "./styles/sb-admin-2.min.css";

function App() {
  return (
    <div className="App" id="wrapper">
      <BrowserRouter>
        <Switch>
          <PrivateRoute>
            <Admin/>
          </PrivateRoute>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
