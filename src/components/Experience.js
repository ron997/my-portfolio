import React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

const experiences = [
  {
    role: 'Machine Learning Engineer Intern',
    company: 'Lynchval Systems',
    description: 'Enhanced predictive analytics by optimizing SQL database queries, reducing data interval times by 15%.'
  },
  {
    role: 'Project Assistant',
    company: 'UMass Boston',
    description: 'Automated the extraction and summarization of medical research articles using Gensim and BERT, increasing content accessibility.'
  }
  // Add more experiences here
];

const Experience = () => {
  return (
    <Container id="experience">
      <Typography variant="h4" component="h2" gutterBottom>
        Experience
      </Typography>
      <Grid container spacing={4}>
        {experiences.map((experience, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card style={{ height: '100%' }}>
              <CardContent>
                <Typography variant="h5" component="h3">
                  {experience.role}
                </Typography>
                <Typography variant="subtitle1" component="p">
                  {experience.company}
                </Typography>
                <Typography variant="body2" component="p">
                  {experience.description}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Experience;
