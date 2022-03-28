import React from 'react';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';
import Header from '../../component/Header';
import Footer from '../Footer';

const useStyles = makeStyles({
})
export default function Home({open}) {
const classes = useStyles();
 


//   

  return (
    <div><Header/>
    <Box>Hellow World</Box>
    <Footer/>
    </div>
  );
}