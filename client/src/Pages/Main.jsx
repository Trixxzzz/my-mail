import React, { Suspense, useState } from 'react'
import Header from '../Component/Header'
import SideBar from '../Component/SideBar'
import { Outlet } from 'react-router-dom';
import SuspenseLoader from '../Component/Common/SuspenseLoader'
import { Box } from '@mui/material';

const Main = () => {
  const [openDrawer, setOpenDrawer] = useState(true);

  const toggleDrawer=()=>{
    setOpenDrawer(prevState=>!prevState)
  }
  return (
    <>
        <Header toggleDrawer={toggleDrawer}/>
        <Box>
          <SideBar toggleDrawer={toggleDrawer} openDrawer={openDrawer}/>
          <Suspense fallback={<SuspenseLoader/>}>
            <Outlet context={{openDrawer}}/>
          </Suspense>
        </Box>

    </>
  )
}

export default Main