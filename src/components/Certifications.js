import React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

const certifications = [
  {
    title: 'Machine Learning Specialization',
    issuer: 'Coursera',
    description: 'Completed a comprehensive specialization in Machine Learning, covering various algorithms and practical implementations.'
  },
  {
    title: 'Foundations of Data Science',
    issuer: 'Coursera',
    description: 'Gained expertise in PACE workflow.'
  }
  // Add more certifications here
];

const Certifications = () => {
  return (
    <Container id="certifications">
      <Typography variant="h4" component="h2" gutterBottom>
        Certifications
      </Typography>
      <Grid container spacing={4}>
        {certifications.map((certification, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card style={{ height: '100%' }}>
              <CardContent>
                <Typography variant="h5" component="h3">
                  {certification.title}
                </Typography>
                <Typography variant="subtitle1" component="p">
                  {certification.issuer}
                </Typography>
                <Typography variant="body2" component="p">
                  {certification.description}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Certifications;
