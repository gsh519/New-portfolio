import React, {useState, useCallback} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import Button from '@material-ui/core/Button';
import {ClosableDrawer} from './ClosableDrawer'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
    color: '#50AFBF',
    fontWeight: 'bold',
    cursor: 'pointer',
    [theme.breakpoints.down('sm')]: {
      color: '#50AFBF',
      display: 'flex',
      justifyContent: 'center',
      fontSize: 32,
      alignItems: 'center',
    }
  },
  header: {
    background: theme.palette.background.paper,
  },
  toolbar: {
    paddingRight: 72,
    paddingLeft: 72,
    '@media screen and (max-width: 679px)': {
      padding: 0
    }
  },
  btn: {
    color: '#50AFBF',
    fontWeight: 'bold',
    fontSize: 18,
    '&:hover': {
      textDecoration: 'none',
      backgroundColor: '#50AFBF',
      color: '#fff',
    },
    '@media screen and (max-width: 679px)': {
      display: 'none'
    }
  },
  menu: {
    position: 'fixed',
    right: 0,
    display: 'none',
    '@media screen and (max-width: 679px)': {
      display: 'block'
    }
  }
}));


export const Header = (props) => {

  const classes = useStyles();

  const {setProfile, setPortfolio, setSkill, setContact} = props;

  
  const toggleProfile = () => {
    setProfile(true)
    setPortfolio(false)
    setSkill(false)
    setContact(false)
  }

  const togglePortfolio = () => {
    setPortfolio(true)
    setProfile(false)
    setSkill(false)
    setContact(false)
  }

  const toggleSkill = () => {
    setSkill(true)
    setProfile(false)
    setPortfolio(false)
    setContact(false)
  }

  const toggleContact = () => {
    setContact(true)
    setProfile(false)
    setPortfolio(false)
    setSkill(false)
  }

  const [open, setOpen] = useState(false)

  const handleDrawerToggle = useCallback((event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setOpen(!open)
  }, [setOpen, open])

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.header}>
        <Toolbar className={classes.toolbar}>
          <Typography variant="h4" className={classes.title} onClick={toggleProfile}>
            Portfolio
          </Typography>
          <Button className={classes.btn} onClick={toggleProfile}>プロフィール</Button>
          <Button className={classes.btn} onClick={togglePortfolio}>ポートフォリオ</Button>
          <Button className={classes.btn} onClick={toggleSkill}>スキル</Button>
          <Button className={classes.btn} onClick={toggleContact}>お問い合わせ</Button>
          <IconButton onClick={(event) => handleDrawerToggle(event)} className={classes.menu}>
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <ClosableDrawer 
        open={open} 
        onClose={handleDrawerToggle}
        toggleProfile={toggleProfile} 
        togglePortfolio={togglePortfolio} 
        toggleSkill={toggleSkill} 
        toggleContact={toggleContact}
      />
    </div>
  )
}

export default Header