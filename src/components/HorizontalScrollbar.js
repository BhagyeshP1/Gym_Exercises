import React from 'react'
import { Box } from '@mui/material'
import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu'
import BodyPart from './BodyPart'

function HorizontalScrollbar({ data, bodyPart, setBodyPart }) {
  return (
    <ScrollMenu>
        {data.map((item) => (                           // Map means that it will go through all the elements in the arry and do something with it Ex: For each item we want to return a Box      
        <Box
            key = {item.id || item}
            itemId = {item.id || item}
            title = {item.id || item}
            m = '0 40px'
            >
            <BodyPart item={item} bodyPart = {bodyPart} setBodyPart= {setBodyPart}  />           {/* We are passing through props  */}              
        </Box>

        )
        )}
    </ScrollMenu>
  )
}

export default HorizontalScrollbar