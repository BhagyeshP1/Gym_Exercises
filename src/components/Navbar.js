import React from 'react';
import { Link } from 'react-router-dom';
import { Stack } from '@mui/material';      //Stack manages layout of childerns on horizontal or vertical axis with optional spacing and/or dividers between each child 

import Logo from '../assets/images/Logo.png';

const Navbar = () => {
  return (
    <Stack direction='row'
    justifyContent='space-around'
    sx={{ gap: { sm:'122px' , xs: '40px'}, mt: { sm: '32px', xs:'20px'},
    justifyContent: 'none'}} px='20px'> {/* This helps us make the page responsive with depending the different sizes of the screen*/}
      <Link to="/">          {/* This will help us redirect back a page when clicked */}
        <img src={Logo} alt="logo" style={{
          width: '48px',
          height: '48px',
          margin: '0 20px' }} />
      </Link>
      <Stack
        direction='row'
        gap='40px'
        fontSize='24px'
        alignItems='flex-end'
      >
        <Link to="/" style={{
          textDecoration: 'none',
          color: '#3A1212',
          borderBottom: '3px solid #33FFBD'}}
          >Home</Link>
          <a href='#exercises' style={{                 // This will help us redirect to our Exercise page //
          textDecoration: 'none',
          color: '#3A1212'}}
          > Exercises </a>
      </Stack>
    </Stack>
  
  )
}


export default Navbar