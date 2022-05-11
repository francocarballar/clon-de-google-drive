import React, { useState } from 'react'
import './App.css'
import { Header } from './header'
import { Sidebar } from './sidebar'

function App () {
  const [stateSidebar, setStateSidebar] = useState(false)
  return (
    <>
      <Header
        state={stateSidebar}
        setState={setStateSidebar}
      />
      <Sidebar
        state={stateSidebar}
        setState={setStateSidebar}
      />
      <h1>Hello Google Drive Clone</h1>
    </>
  )
}

export { App }
