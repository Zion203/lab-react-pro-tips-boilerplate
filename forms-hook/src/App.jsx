import './App.css'
import React from 'react'
import Forms from './Component/Forms'
import { BrowserRouter } from 'react-router-dom'
import Navbar from './Component/Navbar'
import AllRoutes from './AllRoutes'

function App() {

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <AllRoutes />
      </BrowserRouter>
    </>
  )
}

export default App
