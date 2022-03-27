import React from "react";
import {
    AppBar,
    Toolbar,
    Typography,
    Grid,
    Link,
    Box
} from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    mainFooter: {
        background: 'gray',
        // position: 'absolute',
        // top: '150px'
        padding:'30px'
    },
    topFooter: {
        backgroundColor:'blue',
        color:'white',
        padding:'5px'
    }
}));
export default function Footer() {
    const classes = useStyles();
    return (
        <div>
            <Box className={classes.topFooter}>Get In Touch</Box>
            <AppBar position="static" elevation={0} component="footer" className={classes.mainFooter}>
                <Grid container item justify="space-between">
                    <Grid item sm={5} xs={12} md={4}>
                        <Typography paragraph>
                            This site is compliant with the Payment Card Industry and Data Security Standard. Read more about Stripe security <Link href="https://stripe.com/docs/security/stripe" target="_blank" alt="Stripe">here</Link>.
                        </Typography>
                    </Grid>
                    <Grid item sm={5} xs={11} md={4}>
                        <Typography paragraph>
                            This Web App is fully responsive <Link href="https://material-ui.com" target="_blank">Material-UI</Link> and <Link href="https://stripe.com/docs/stripe-js/react" target="_blank">React Stripe</Link>. It's given free of use by <Link href="https://angeloron.com" target="_blank">Ange loron</Link>. react-material-ui-stripe-payment is under the MIT license and can be dowloaded <Link href="https://gitlab.com/angeloron/react-material-ui-stripe-payment" target="_blank">here</Link>.
                        </Typography>
                    </Grid>
                    <Grid item sm={5} xs={11} md={4}>
                        <Typography paragraph>
                            This Web App is fully responsive <Link href="https://material-ui.com" target="_blank">Material-UI</Link> and <Link href="https://stripe.com/docs/stripe-js/react" target="_blank">React Stripe</Link>. It's given free of use by <Link href="https://angeloron.com" target="_blank">Ange loron</Link>. react-material-ui-stripe-payment is under the MIT license and can be dowloaded <Link href="https://gitlab.com/angeloron/react-material-ui-stripe-payment" target="_blank">here</Link>.
                        </Typography>
                    </Grid>
                </Grid>

                <Toolbar style={{ justifyContent: "center" }}>
                    <Typography variant="caption">©2020</Typography>
                </Toolbar>
            </AppBar>
        </div>
    )
}