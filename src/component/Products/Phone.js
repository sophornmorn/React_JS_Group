import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Header from '../../component/Header';
import { Card, Typography, CardContent, CardHeader, Container, Grid, Button, Box } from '@material-ui/core';
import Footer from '../Footer';
import { useNavigate, useParams } from 'react-router-dom';



const useStyles = makeStyles(theme => ({
    mainGrid: {
        marginTop: '15px',
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
export default function Computer() {
    const classes = useStyles();
    const navigate = useNavigate();
    const datas = [
        {
            id: 1,
            name: "Phone1",
            Price: "1000$",
            image: require("../../images/phone1.PNG"),
            description: "This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like."
        },
        {
            id: 2,
            name: "Phon2",
            Price: "1000$",
            image: require("../../images/phone2.PNG"),
            description: "This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like."

        },
        {
            id: 3,
            name: "Phone3",
            Price: "1000$",
            image: require("../../images/phone3.PNG"),
            description: "This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like."

        },
        {
            id: 4,
            name: "Phone4",
            Price: "1000$",
            image: require("../../images/phone4.PNG"),
            description: "This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like."

        },
        {
            id: 5,
            name: "Phone5",
            Price: "1000$",
            image: require("../../images/phone5.PNG"),
            description: "This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like."

        },
        {
            id: 6,
            name: "Phone6",
            Price: "1000$",
            image: require("../../images/phone6.PNG"),
            description: "This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like."

        },
        {
            id: 7,
            name: "Phone7",
            Price: "1000$",
            image: require("../../images/phone7.PNG"),
            description: "This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like."

        },
        {
            id: 8,
            name: "Phone8",
            Price: "1000$",
            image: require("../../images/phone8.PNG"),
            description: "This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like."

        }
    ];
    const ondetailPhone = (item) => {
        console.log('item',item);
        navigate(`/detailPhone/${item.id}`);

    };
    return (
        <div><Header />
            <Container>
                <Grid container spacing={1} className={classes.mainGrid} >
                    {datas.map(item => (

                        <Grid item xs={12} sm={3}>

                            <Card>
                                <CardContent>
                                    <Box className={classes.mainHead}>
                                        <Typography variant='h5'>{item.name}</Typography>
                                        <Button variant="contained" size="small" className={classes.button} onClick={() => ondetailPhone(item)}>
                                            Detail
                                        </Button>
                                    </Box>
                                    <CardContent>

                                        <img src={item.image} className={classes.mainImage} />
                                        <Typography variant="body2" color="text.secondary">
                                            {item.description}
                                        </Typography>
                                    </CardContent>
                                </CardContent>
                            </Card>
                        </Grid>
                    ))}

                </Grid>

            </Container>

            <Footer />

        </div>
    );
}