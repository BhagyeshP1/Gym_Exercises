import { Box, Button, Stack, TextField, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react'; //useState helps us keep track of changes inside our React components

const SearchExercises = () => {
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
            value=''
            onChange={(e) => {}}
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
        >
            Search
        </Button>

    </Box>
    </Stack>
  )
}

export default SearchExercises