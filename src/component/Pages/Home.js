import React from 'react';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';
import Header from '../../component/Header';

const useStyles = makeStyles({
})
export default function Home({open}) {
const classes = useStyles();
 


//   

  return (
    <div><Header/>
    <Box>Hello World</Box>
    </div>
  );
}