import React from 'react'
import PropTypes from 'prop-types'
import { styled } from '@material-ui/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import { Button } from '../common'

const StyledAppBar = styled(AppBar)(({ theme }) => ({
  zIndex: theme.zIndex.drawer + 1,
}))

const StyledToolbar = styled(Toolbar)({
  display: `flex`,
  flexDirection: `column`,
  justifyContent: `center`,
})

const TopNav = (props) => {
  const { handleLogin, ...rest } = props
  return (
    <StyledAppBar position="fixed" {...rest}>
      <StyledToolbar>
        <Button
          color="inherit"
          style={{ alignSelf: `flex-end` }}
          onClick={() => handleLogin()}
        >
      LOGIN
        </Button>
      </StyledToolbar>
    </StyledAppBar>
  )
}

TopNav.propTypes = {

}

export default TopNav
