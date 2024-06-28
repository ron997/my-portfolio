import React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

const Contact = () => {
  return (
    <Container id="contact">
      <Box my={4}>
        <Typography variant="h4" component="h2" gutterBottom>
          Contact
        </Typography>
        <form noValidate autoComplete="off">
          <TextField
            id="name"
            label="Name"
            variant="outlined"
            fullWidth
            margin="normal"
            InputLabelProps={{ style: { color: '#f0f0f0' } }} // Light label color
            InputProps={{
              style: {
                color: '#f0f0f0', // Light input text color
                background: 'rgba(255, 255, 255, 0.1)', // Slightly transparent background
                borderColor: '#f0f0f0', // Light border color
              },
            }}
          />
          <TextField
            id="email"
            label="Email"
            variant="outlined"
            fullWidth
            margin="normal"
            InputLabelProps={{ style: { color: '#f0f0f0' } }} // Light label color
            InputProps={{
              style: {
                color: '#f0f0f0', // Light input text color
                background: 'rgba(255, 255, 255, 0.1)', // Slightly transparent background
                borderColor: '#f0f0f0', // Light border color
              },
            }}
          />
          <TextField
            id="message"
            label="Message"
            variant="outlined"
            fullWidth
            margin="normal"
            multiline
            rows={4}
            InputLabelProps={{ style: { color: '#f0f0f0' } }} // Light label color
            InputProps={{
              style: {
                color: '#f0f0f0', // Light input text color
                background: 'rgba(255, 255, 255, 0.1)', // Slightly transparent background
                borderColor: '#f0f0f0', // Light border color
              },
            }}
          />
          <Button variant="contained" color="primary" type="submit" style={{ backgroundColor: '#333', color: '#f0f0f0' }}>
            Send
          </Button>
        </form>
      </Box>
    </Container>
  );
};

export default Contact;
