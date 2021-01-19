import React from 'react'
import Divider from '@material-ui/core/Divider'
import Drawer from '@material-ui/core/Drawer'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import {makeStyles} from '@material-ui/styles'

const useStyles = makeStyles((theme) => ({
  drawer: {
    '@media screen and (max-width: 679px)': {
      flexShrink: 0,
      width: 256
    }
  },
  // toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: 160
  },
  searchField: {
    alignItems: 'center',
    display: 'flex',
    marginLeft: 32
  },
}))

export const ClosableDrawer = (props) => {
  const classes = useStyles();
  const {toggleProfile, togglePortfolio, toggleSkill, toggleContact, container} = props;

  const menus = [
    { label: 'プロフィール', id: 'profile', func: toggleProfile},
    { label: 'ポートフォリオ', id: 'portfolio', func: togglePortfolio},
    { label: 'スキル', id: 'skill', func: toggleSkill},
    { label: 'お問い合わせ', id: 'contact', func: toggleContact},
  ]


  return (
    <nav className={classes.drawer}>
      <Drawer
        container={container}
        variant='temporary'
        anchor='right'
        open={props.open}
        onClose={(e) => props.onClose(e)}
        classes={{paper: classes.drawerPaper}}
        ModalProps={{keepMounted: true}}
      >
        <div
          onClose={(e) => props.onClise(e)}
          onKeyDown={(e) => props.onClise(e)}
        >
          <Divider />
          <List>
            {menus.map((menu) => {
              return (
                <ListItem button key={menu.id} onClick={menu.func}>
                  <ListItemText primary={menu.label} />
                </ListItem>
              )
            })}
          </List>
        </div>
      </Drawer>
    </nav>
  )
}

export default ClosableDrawer