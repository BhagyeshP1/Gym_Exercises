import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Box } from '@mui/material'       //Box just has some shading and colors

import './App.css';
import ExerciseDetails from './pages/ExerciseDetails';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

const App = () => {
  return (
    <Box width='400px' sx={{ width: { xl: '1488px'}}} m="auto">   {/* This helps make the webpage responsive on larger devices , m = margin auto */}
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />             {/* Routes to help swap different tabs*/}
        <Route path="/exercise/:id" element={<ExerciseDetails />} />
      </Routes>
      <Footer />
    </Box>
  )
}

export default App