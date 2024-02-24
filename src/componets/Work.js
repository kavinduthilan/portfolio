import React from 'react';
import './Work.css';
import work1 from './images/work1.png';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

export default function Work() {
    return (
        <div className='works' id='work'>
            <h1>My Works</h1>
            <Grid container spacing={15} justifyContent="center">
                <Grid item xs={12} sm={6} md={4} lg={3}>
                    <Card sx={{ maxWidth: 345 }}>
                        <CardMedia
                            component="img"
                            height="140"
                            image={work1}
                            alt="work1"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div" color="#081b29">
                                Kingfisher Cafe
                            </Typography>
                            <Typography variant="body2" color="text.primary">
                                Designed and implemented a website to facilitate
                                online orders, showcasing an intuitive user interface and
                                seamless ordering process.
                            </Typography>
                            <Button variant="contained">Go</Button>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} sm={6} md={4} lg={3}>
                    <Card sx={{ maxWidth: 345 }}>
                        <CardMedia
                            component="img"
                            height="140"
                            image={work1}
                            alt="work1"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                Card Title
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                            </Typography>
                            <Button variant="contained">Go</Button>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} sm={6} md={4} lg={3}>
                    <Card sx={{ maxWidth: 345 }}>
                        <CardMedia
                            component="img"
                            height="140"
                            image={work1}
                            alt="work1"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                Card Title
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                            </Typography>
                            <Button variant="contained">Go</Button>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </div>
    );
}
