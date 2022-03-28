import React, { useState } from 'react';
import Link from '@material-ui/core/Link';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import Box from '@material-ui/core/Box';
import MenuItem from '@material-ui/core/MenuItem';
import { makeStyles } from '@material-ui/core/styles';
import { useNavigate } from 'react-router-dom';



const useStyles = makeStyles({
mainMenu: {
   backgroundColor:'rgb(0, 51, 157)',
   padding:'10px',
   marginTop:'0px',
},
buttonItem: {
    color:'white',
    marginRight:'30px',
    cursor:'pointer'
}
})
export default function Header() {
const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [open, setOpen] = React.useState(false);
  const navigate = useNavigate();
  const onDetail = () => {
    navigate("https://www.google.com");
  };
  
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
    <Box className={classes.mainMenu}>
      <Link href="/home" aria-controls="simple-menu" aria-haspopup="true" className={classes.buttonItem} 
      >
        HOME
      </Link>
      <Link href="/about" aria-controls="simple-menu" aria-haspopup="true" className={classes.buttonItem} 
      >
        ABOUT US
      </Link>
      <Link href="" aria-controls="simple-menu" aria-haspopup="true" className={classes.buttonItem} 
      >
        CONTACT US
      </Link>

      <Link aria-controls="simple-menu" aria-haspopup="true" className={classes.buttonItem} onClick={handleClick}
      >
        ALL PRODUCTS
      </Link>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={onDetail}>Computer</MenuItem>
        <MenuItem onClick={handleClose}>Phone</MenuItem>
        <MenuItem onClick={handleClose}>Watch</MenuItem>
      </Menu>
    </Box>
    </>
  );
}