import React from 'react'
import PropTypes from 'prop-types'
import { styled } from '@material-ui/styles'
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer'
import List from '@material-ui/core/List'
import Divider from '@material-ui/core/Divider'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'

const NavListContainer = styled(`div`)({
  width: 200,
})

const SideNavRight = ({ open, toggleDrawer, handleLogout }) => {
  const NavList = () => (
    <NavListContainer>
      <List>
        <ListItem button>
          <ListItemText primary="Profile" />
        </ListItem>
        <ListItem button>
          <ListItemText primary="Favorites" />
        </ListItem>
      </List>
      <Divider />
      <List>
        <ListItem button onClick={handleLogout}>
          <ListItemText primary="Logout" />
        </ListItem>
      </List>
    </NavListContainer>
  )

  return (
    <SwipeableDrawer
      anchor="right"
      open={open}
      onClose={toggleDrawer}
      onOpen={toggleDrawer}
    >
      <NavList />
    </SwipeableDrawer>
  )
}

SideNavRight.propTypes = {

}

export default SideNavRight
