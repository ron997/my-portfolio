import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Link } from 'react-scroll';

const Navbar = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" style={{ flexGrow: 1 }}>
          Rounak Burman
        </Typography>
        <Button color="inherit">
          <Link to="home" smooth={true}>Home</Link>
        </Button>
        <Button color="inherit">
          <Link to="projects" smooth={true}>Projects</Link>
        </Button>
        <Button color="inherit">
          <Link to="experience" smooth={true}>Experience</Link>
        </Button>
        <Button color="inherit">
          <Link to="certifications" smooth={true}>Certifications</Link>
        </Button>
        <Button color="inherit">
          <Link to="about" smooth={true}>About</Link>
        </Button>
        <Button color="inherit">
          <Link to="contact" smooth={true}>Contact</Link>
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
