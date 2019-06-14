import React from 'react'
import PropTypes from 'prop-types'
import { styled } from '@material-ui/styles'
import Drawer from '@material-ui/core/Drawer'

const drawerWidth = 240

const StyledDrawer = styled(Drawer)(({
  width: drawerWidth,
  flexShrink: 0,
}))

const paperProps = {
  style: {
    width: drawerWidth,
  },
}

const SideNav = props => (
  <StyledDrawer
    variant="permanent"
    PaperProps={paperProps}
    {...props}
  >
    SideBar
  </StyledDrawer>
)

SideNav.propTypes = {

}

export default SideNav
