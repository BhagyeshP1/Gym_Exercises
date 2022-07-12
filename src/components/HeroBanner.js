import React from 'react'
import { Box, Stack, Typography, Button } from '@mui/material'; 

import HeroBannerImage from '../assets/images/banner.png'

const HeroBanner = () => {
  return (
    <Box sx={{
        mt: {lg: '212px', xs:'70px'},           // This helps us style the boxes on speific sizes devices //
        ml: {sm: '50px'}
    }} position='relative' p='20px' >
        <Typography color="#3CAEA3"
        fontWeight='600'
        fontSize='26px' >
            Fitness Club
        </Typography>
        <Typography fontWeight={700}
        sx={{ fontSize: { lg: '45px', xs: '41px'}
        }}
        mb="23px" mt="30px"
        >
            Sweat, Smile <br /> and Repeat
        </Typography>
        <Typography fontSize='22px' lineHeight='35px' mb={4} >
            Check out the most effective exercises
        </Typography>
        <Button variant='contained' color='error' href='#exercises'   // This href will scroll down the page //
        sx={{ backgroundColor: '#3CAEA3'
            
        }}
         >  
            Explore Exercises
        </Button>
        <Typography fontWeight={600}
        color="#3CAEA3"
        sx={{
            opacity: 0.15,
            display: { lg: 'block', xs: 'none'}
        }}
        fontSize="200px"
        >
            Exercise
        </Typography>
        <img src={HeroBannerImage} alt="banner" className="hero-banner-img" />
    </Box>
  )
}

export default HeroBanner