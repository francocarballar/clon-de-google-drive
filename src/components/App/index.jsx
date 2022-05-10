import React, {useState} from 'react';
import './App.css';
import {Header} from './header';
import {Sidebar} from './sidebar';

function App () {
  const [stateSidebar, setStateSidebar] = useState(false);
  return (
    <React.Fragment>
      <Header
        state={stateSidebar}
        setState={setStateSidebar}
      />
      <Sidebar 
        state={stateSidebar}
        setState={setStateSidebar}
      />
      <h1>Hello Google Drive Clone</h1>
    </React.Fragment>
  );
}

export { App }
