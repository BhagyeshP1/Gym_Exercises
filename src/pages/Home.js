import React, { useState } from 'react'
import { Box } from '@mui/material';

import Exercises from '../components/Exercises';
import SearchExercises from '../components/SearchExercises';
import HeroBanner from '../components/HeroBanner';


const Home = () => {
  return (
    <Box>
      <HeroBanner />            {/* This will be our Banner with text on Front Page*/}
      <SearchExercises />       {/* This will be our search bar */}
      <Exercises />             {/* This will show off the erercises */}
    </Box>
  )
}

export default Home