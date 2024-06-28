import React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

const Home = () => {
  return (
    <Container id="home">
      <Box my={4}>
        <Typography variant="h3" component="h1" gutterBottom>
          Welcome to my Portfolio
        </Typography>
        <Typography variant="h5" component="h2">
          I am a Full Stack Developer and Machine Learning Engineer.
        </Typography>
      </Box>
    </Container>
  );
};

export default Home;
