import React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';

const projects = [
  {
    title: 'iConcern',
    description: 'Webapp to help people with diabetes related issues. People can ask questions and get answers from chatbot which is trained on diabetes related data.',
    link: 'http://3.91.243.88:8080/home'
  },
  {
    title: 'Project 2',
    description: 'Description of Project 2',
    link: '#'
  }
  // Add more projects here
];

const Projects = () => {
  return (
    <Container id="projects">
      <Typography variant="h4" component="h2" gutterBottom>
        Projects
      </Typography>
      <Grid container spacing={4}>
        {projects.map((project, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card style={{ height: '100%' }}>
              <CardContent>
                <Typography variant="h5" component="h3">
                  {project.title}
                </Typography>
                <Typography variant="body2" component="p">
                  {project.description}
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small" href={project.link}>
                  View Project
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Projects;
