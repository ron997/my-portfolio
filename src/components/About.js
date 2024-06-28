import React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

const About = () => {
  return (
    <Container id="about">
      <Box my={4}>
        <Typography variant="h4" component="h2" gutterBottom>
          About Me
        </Typography>
        <Typography variant="body1" component="p">
          Here is some information about my background, education, and skills.
        </Typography>
      </Box>
    </Container>
  );
};

export default About;
