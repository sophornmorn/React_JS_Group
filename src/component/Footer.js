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
        padding:'30px'
    },
    topFooter: {
        backgroundColor:'rgb(0, 51, 157)',
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
                    <Grid item sm={12} xs={12} md={4}>
                        <Typography paragraph>
                            This site is compliant with the Payment Card Industry and Data Security Standard. Read more about Stripe security <Link href="https://stripe.com/docs/security/stripe" target="_blank" alt="Stripe">here</Link>.
                        </Typography>
                    </Grid>
                    <Grid item sm={12} xs={11} md={4}>
                        <Typography paragraph>
                        This site is compliant with the Payment Card Industry and Data Security Standard. Read more about Stripe security
                        </Typography>
                    </Grid>
                    <Grid item sm={12} xs={11} md={4}>
                        <Typography paragraph>
                        This site is compliant with the Payment Card Industry and Data Security Standard. Read more about Stripe security
                        </Typography>
                    </Grid>
                </Grid>

                {/* <Toolbar style={{ justifyContent: "center" }}>
                    <Typography variant="caption">©2020</Typography>
                </Toolbar> */}
            </AppBar>
        </div>
    )
}