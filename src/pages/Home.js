import React, { useState } from 'react'
import { Box } from '@mui/material';

import Exercises from '../components/Exercises';
import SearchExercises from '../components/SearchExercises';
import HeroBanner from '../components/HeroBanner';


const Home = () => {
  const [bodyPart, setBodyPart] = useState('all')     // The reason why we need these on our home pages is because the changes in these states will be disaplyed all cross our pages. 
  const [exercises, setExercises] = useState([])      // This useState will help us dispaly the exercises on the page
  
  return (
    <Box>
      <HeroBanner />                                  {/* This will be our Banner with text on Front Page*/}
      <SearchExercises 
      setExercises={setExercises}                     // More prop passing       
      bodyPart={bodyPart}
      setBodyPart={setBodyPart} 
      />
      <Exercises                                      // This will show off the erercises 
      setExercises={setExercises}                     // SearchExercises and Excerises components have same props because they both share the same state
      bodyPart={bodyPart}
      setBodyPart={setBodyPart}
      />
    </Box>
  )
}

export default Home