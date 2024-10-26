import { Box, Typography } from '@mui/material';
import React from 'react'
import MovieItems from './Movies/MovieItems';

const Homepage = () => {
  return (
    
    <Box width={'100%'} height={'100%'} margin="auto" marginTop={2} >
     <Box margin={"auto"} width="80%" height="50vh" padding={2} display="flex">
     <img 
          src="https://i.ytimg.com/vi/yEinBUJG2RI/maxresdefault.jpg"
          alt="Rocketry"
          width="100%"
          height="100%"
        />
     </Box>
     <Box padding={5} margin="auto">
        <Typography variant="h4" textAlign={"center"}>
          Latest Releases
        </Typography>
      </Box>
      <Box
        gap={5}
        margin="auto"
        width="80%"
        flexWrap={"wrap"}
        display="flex"
        justifyContent={"center"}
      >
       {[1,2,3,4].map((item) => <MovieItems/>)}
      </Box>
    </Box>
  )
}

export default Homepage;