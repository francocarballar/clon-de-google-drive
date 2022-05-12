import React, { useState } from 'react';
import './App.css';
import { Header, Sidebar, Main } from '../';

function App () {
  const [stateSidebar, setStateSidebar] = useState(false)
  return (
    <>
      <Header state={stateSidebar} setState={setStateSidebar} />
      <Sidebar state={stateSidebar} setState={setStateSidebar} />
      <Main />
    </>
  )
}

export { App }
