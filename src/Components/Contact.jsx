import { Button, Card, CardActions, CardContent, CardMedia, ThemeProvider, Typography, createTheme } from '@mui/material'
import React, { useState } from 'react'

export default function Contact() {
    const [Name, setName] = useState();
    const [Email, setEmail] = useState();
    const [Message, setMessage] = useState();
    const theme = createTheme({
        palette: {
            mode: "dark",
        },
    });
    return (
        <div className='w-100 d-flex justify-content-center'>
            <ThemeProvider theme={theme}>
                <Card sx={{ width: 'clamp(300px, 50vw,100vw)',marginTop:'2rem' }}>
                    <CardMedia
                        sx={{ height: 180 }}
                        image="contact.jpg"
                        title="contact us"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            Contact us
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            
                            <input type="text" placeholder='your name' className='my-2 form-control' onChange={(e) => setName(e.target.value)}/>
                            <input type="email" placeholder='email' className='my-2 form-control' onChange={(e) => setEmail(e.target.value)}/>
                            <textarea name="" id="" rows={3} placeholder='Message' className='my-2 form-control' onChange={(e) => setMessage(e.target.value)}/>
                        </Typography>
                    </CardContent>
                    <CardActions sx={{justifyContent:'end'}}>
                        <Button variant='outlined' size="large">Send</Button>
                    </CardActions>
                </Card>
            </ThemeProvider>
        </div>
    )
}
