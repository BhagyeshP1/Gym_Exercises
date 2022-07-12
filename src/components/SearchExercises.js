import { Box, Button, Stack, TextField, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';

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
    <Box posito="relative" mb='72px'>
        <TextField 
            height='76px'
            value=''
            onChange={(e) => {}}
            placeholder='Search Exercises'
            type='text'
        />

    </Box>
    </Stack>
  )
}

export default SearchExercises