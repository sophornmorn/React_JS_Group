import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Header from '../../component/Header';
import { Card, Typography, CardContent, CardHeader, Container, Grid, Button, Box } from '@material-ui/core';
import Footer from '../Footer';


const useStyles = makeStyles(theme => ({
    gridItem: {
    },
    mainGrid: {
        marginTop: '15px'
    },
    mainImage: {
        width: '100%',
        height: '140px'
    },
    button: {
        background: 'blue',
        color: 'white'
    },
    detailButton: {
        display: 'flex',
        justifyContent: 'end'
    },
    mainHead: {
        display: 'flex',
        justifyContent: 'space-between'
    }
}));
export default function About() {
    const classes = useStyles();
    const image1 = require("../../images/image1.png")
    const image2 = require("../../images/image2.PNG")
    const image3 = require("../../images/image3.PNG")
    const image4 = require("../../images/image4.PNG")
    const image5 = require("../../images/image5.PNG")
    const image6 = require("../../images/image6.PNG")
    const image7 = require("../../images/image7.PNG")
    const image8 = require("../../images/image8.PNG")

    return (
        <div><Header />
            <Container>
                <Grid container spacing={4} className={classes.mainGrid} >
                    <Grid item xs={12} md={3} className={classes.gridItem}>
                        <Card>
                            <CardContent>
                                <Box className={classes.mainHead}>
                                    <Typography variant='h5'>Rolex</Typography>
                                    <Button variant="contained" size="small" className={classes.button}>
                                        Detail
                                    </Button>
                                </Box>
                                <CardContent>

                                    <img src={image1} className={classes.mainImage} />
                                    <Typography variant="body2" color="text.secondary">
                                        This impressive paella is a perfect party dish and a fun meal to cook
                                        together with your guests. Add 1 cup of frozen peas along with the mussels,
                                        if you like.
                                    </Typography>
                                </CardContent>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={12} md={3} className={classes.gridItem}>
                        <Card>
                            <CardContent>
                                <Box className={classes.mainHead}>
                                    <Typography variant='h5'>Rolex</Typography>
                                    <Button variant="contained" size="small" className={classes.button}>
                                        Detail
                                    </Button>
                                </Box>
                                <CardContent>
                                    <img src={image2} className={classes.mainImage} />

                                    <Typography variant="body2" color="text.secondary">
                                        This impressive paella is a perfect party dish and a fun meal to cook
                                        together with your guests. Add 1 cup of frozen peas along with the mussels,
                                        if you like.
                                    </Typography>
                                </CardContent>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={12} md={3} className={classes.gridItem}>
                        <Card>
                            <CardContent>
                                <Box className={classes.mainHead}>
                                    <Typography variant='h5'>Rolex</Typography>
                                    <Button variant="contained" size="small" className={classes.button}>
                                        Detail
                                    </Button>
                                </Box>
                                <CardContent>
                                    <img src={image3} className={classes.mainImage} />
                                    <Typography variant="body2" color="text.secondary">
                                        This impressive paella is a perfect party dish and a fun meal to cook
                                        together with your guests. Add 1 cup of frozen peas along with the mussels,
                                        if you like.
                                    </Typography>
                                </CardContent>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={12} md={3} className={classes.gridItem}>
                        <Card>
                            <CardContent>
                                <Box className={classes.mainHead}>
                                    <Typography variant='h5'>Rolex</Typography>
                                    <Button variant="contained" size="small" className={classes.button}>
                                        Detail
                                    </Button>
                                </Box>
                                <CardContent>
                                    <img src={image4} className={classes.mainImage} />

                                    <Typography variant="body2" color="text.secondary">
                                        This impressive paella is a perfect party dish and a fun meal to cook
                                        together with your guests. Add 1 cup of frozen peas along with the mussels,
                                        if you like.
                                    </Typography>
                                </CardContent>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
                <Grid container spacing={4} className={classes.mainGrid} >
                    <Grid item xs={12} md={3} className={classes.gridItem}>
                        <Card>
                            <CardContent>
                                <Box className={classes.mainHead}>
                                    <Typography variant='h5'>Rolex</Typography>
                                    <Button variant="contained" size="small" className={classes.button}>
                                        Detail
                                    </Button>
                                </Box>
                                <CardContent>
                                    <img src={image5} className={classes.mainImage} />
                                    <Typography variant="body2" color="text.secondary">
                                        This impressive paella is a perfect party dish and a fun meal to cook
                                        together with your guests. Add 1 cup of frozen peas along with the mussels,
                                        if you like.
                                    </Typography>
                                </CardContent>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={12} md={3} className={classes.gridItem}>
                        <Card>
                            <CardContent>
                                <Box className={classes.mainHead}>
                                    <Typography variant='h5'>Rolex</Typography>
                                    <Button variant="contained" size="small" className={classes.button}>
                                        Detail
                                    </Button>
                                </Box>
                                <CardContent>
                                    <img src={image6} className={classes.mainImage} />
                                    <Typography variant="body2" color="text.secondary">
                                        This impressive paella is a perfect party dish and a fun meal to cook
                                        together with your guests. Add 1 cup of frozen peas along with the mussels,
                                        if you like.
                                    </Typography>
                                </CardContent>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={12} md={3} className={classes.gridItem}>
                        <Card>
                            <CardContent>
                                <Box className={classes.mainHead}>
                                    <Typography variant='h5'>Rolex</Typography>
                                    <Button variant="contained" size="small" className={classes.button}>
                                        Detail
                                    </Button>
                                </Box>
                                <CardContent>
                                    <img src={image7} className={classes.mainImage} />
                                    <Typography variant="body2" color="text.secondary">
                                        This impressive paella is a perfect party dish and a fun meal to cook
                                        together with your guests. Add 1 cup of frozen peas along with the mussels,
                                        if you like.
                                    </Typography>
                                </CardContent>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={12} md={3} className={classes.gridItem}>
                        <Card>
                            <CardContent>
                                <Box className={classes.mainHead}>
                                    <Typography variant='h5'>Rolex</Typography>
                                    <Button variant="contained" size="small" className={classes.button}>
                                        Detail
                                    </Button>
                                </Box>
                                <CardContent>
                                    <img src={image8} className={classes.mainImage} />
                                    <Typography variant="body2" color="text.secondary">
                                        This impressive paella is a perfect party dish and a fun meal to cook
                                        together with your guests. Add 1 cup of frozen peas along with the mussels,
                                        if you like.
                                    </Typography>
                                </CardContent>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>

            </Container>
            <Footer />

        </div>
    );
}