import React from 'react'
import { Outlet } from 'react-router-dom'
import { Header } from '../components'
const Layout = () => {
  return (
    <>
    
    <Header/>
    <main className='App'>
        <Outlet/>
    </main>
    </>
  )
}

export default Layout