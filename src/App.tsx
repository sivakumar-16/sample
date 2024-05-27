import React from 'react'
import ApexCharts from './components/chart-1';
import ColumnChart from './components/columnChart';
import './App.css'
import Sidebar from './components/slider';
import { useState } from 'react';
import JustifiedExample from './components/nav';

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [openSidebarToggle, setOpenSidebarToggle] = useState(false)

  const OpenSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle)
  }

  return (
    <>
     <JustifiedExample />
    <div className='grid-container'>
     <Sidebar  openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar}/>
     <ColumnChart/>
     <ApexCharts />
     </div>
    </>
  )
}

export default App
