import React from 'react'
import { Container, Typography, Card, CardContent, Grid, createTheme, ThemeProvider } from '@mui/material';

export default function About() {
    const theme = createTheme({
        palette: {
          mode: "dark",
        },
      });
    return (
        
      <ThemeProvider theme={theme}>
        <Container maxWidth="md" sx={{ mt: 5 }}>
          <Typography variant="h3" component="h1" sx={{marginTop:'3rem'}} gutterBottom>
            About Our Task manager App App
          </Typography>
          <Card>
            <CardContent>
              <Typography variant="h5" component="h2" gutterBottom>
                Welcome to the Task manager App App!
              </Typography>
              <Typography variant="body1" paragraph>
                this app is an assigment given by team in On Voice Hub
              </Typography>
              <Typography variant="body1" paragraph>
                Instead of using a fake api, I simply created my own, yes I am crazy like that. but dont fret most of the backend I already did last week as a fun project when i got bored; kind of irronic how destiny works some times
              </Typography>
              <Typography variant="body1" paragraph>
                Our app is designed to help you keep track of your tasks and stay organized. With our user-friendly interface, you can easily add, edit, and delete tasks as needed.
              </Typography>
              <Typography variant="body1" paragraph>
                Whether you're managing your personal errands, work projects, or just daily chores, our Task manager App app is here to make your life easier.
              </Typography>
              <Typography variant="h6" component="h3" gutterBottom>
                Features:
              </Typography>
              <div className='d-flex justify-content-center'>
                 <ul style={{textAlign:'start'}}>
                <li><Typography variant="body1">Add and Edit tasks easily</Typography></li>
                <li><Typography variant="body1">Track your progress</Typography></li>
                <li><Typography variant="body1">Customize</Typography></li>
                <li><Typography variant="body1">and no need to store data locally when you can use my database</Typography></li>
              </ul>
              </div>
             
              <Typography sx={{textAlign:'start'}} variant="h6" component="h3" gutterBottom>
                Best Regards:
              </Typography>
              <Typography sx={{textAlign:'start'}}  variant="h6" component="h3" gutterBottom>
                Noureldin
              </Typography>
              
            </CardContent>
          </Card>
        </Container>
        </ThemeProvider>
      );
}
