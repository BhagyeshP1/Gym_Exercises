import { Box, Button, Stack, TextField, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react'; //useState helps us keep track of changes inside our React components
import { exerciseOptions, fetchData } from '../utils/fetchData';
import HorizontalScrollbar from './HorizontalScrollbar';

const SearchExercises = ({ setExercises, bodyPart, setBodyPart }) => {              // All of theser props are being pulled from Home.js page
    const [search, setSearch] = useState('')                                 
    const [bodyParts, setBodyParts] = useState([])                                  // At start it will be an empty array
    
    useEffect(() => {
        const fetchExercisesData = async () => {                                    // This will help us fetch the catogiries as soon as the page open/start
            const bodyPartsData = await fetchData('https://exercisedb.p.rapidapi.com/exercises/bodyPartList', exerciseOptions);

            setBodyParts(['all', ...bodyPartsData]);                                // Once we get the data we set the BodyParts and disaplay all the body parts that we get
        }
        fetchExercisesData();                                                       // We want to call this function as soon as the app loads
    }, [])                                                                          // Our dependecy array is empty because we want this to render at the start of the page once


    const handleSearch = async () => {                                              //async means that the data will take some time to populate
        if(search) {
            const exercisesData = await fetchData('https://exercisedb.p.rapidapi.com/exercises', exerciseOptions );

            const searchedExercises = exercisesData.filter(                         // We are applying different policies to our search function aka filtering them
                (exercise) => exercise.name.toLowerCase().includes(search)          // This helps with searching for exercises with its name
                || exercise.target.toLowerCase().includes(search)                   // This helps with searching for exercises with its target(what part of the muscul , EX: triceps)
                || exercise.equipment.toLowerCase().includes(search)                // This helps with searching for exercises with its equipment
                || exercise.bodyPart.toLowerCase().includes(search)                 // This helps with searching for exercises with its bodypart
            );

            setSearch('');                                                          // At the refresh/reload the string will be empty
            setExercises(searchedExercises);                                        // After the user inputs/searches for any exercises, it will disaply the specific exercises
        }

    }
  return (
    <Stack alignItems='center' mt='37px'
    justifyContent='center' p='20px'
     >
    <Typography 
    fontWeight={600}
    sx={{
        fontSize: { lg:'44px', xs:'30px' }}}
    mb="50px"
    textAlign='center'
    >
        Awesome Exercises <br /> You Should Know
    </Typography>
    <Box position="relative" mb='72px'>
        <TextField 
            sx={{
                input: { 
                    fontWeight:'700', 
                    border: 'none', 
                    borderRadius: '4px'  },
                width: { lg:'800px', xs:'350px' },
                backgroundColor: '#fff',
                borderRadius: '40px'
            }}
            height='80px'
            value={search}
            onChange={(e) => setSearch(e.target.value.toLowerCase())}      // we want o make sure that our typing is lowercase
            placeholder='Search Exercises'
            type='text'
        />
        <Button className= "search-btn"
        sx={{
            bgcolor: "#00d9da",
            color: '#fff',
            textTransform: 'none',
            width: { lg: '175px', xs: '80px'},
            fontSize: { lg: '20px', xs: '14px'},
            height: '56px',
            position: 'absolute',
            right: '0'
            }}
            onClick={handleSearch}
        >
            Search
        </Button>
    </Box>
    <Box sx={{ position: 'relative', width: '100%', p: '20px'}}>
            <HorizontalScrollbar data={bodyParts} bodyPart={bodyPart} setBodyPart={setBodyPart} />
    </Box>
    </Stack>
  )
}

export default SearchExercises