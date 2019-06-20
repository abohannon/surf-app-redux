import React from 'react'
import PropTypes from 'prop-types'
import { styled } from '@material-ui/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import { Button, AccountIcon } from '../common'
import { LOGIN_USER } from '../../actions/types'

const StyledAppBar = styled(AppBar)(({ theme }) => ({
  zIndex: theme.zIndex.drawer + 1,
}))

const StyledToolbar = styled(Toolbar)({
  display: `flex`,
  flexDirection: `column`,
  justifyContent: `center`,
})

const TopNav = (props) => {
  const {
    loading,
    user,
    handleModal,
    handleLogin,
    handleLogout,
    toggleSideNavRight,
    ...rest
  } = props

  const renderLoginButton = () => {
    console.log(`renderLoginButton`)
    console.log(`loading:`, loading)
    console.log(`user.user:`, user.user)
    if (loading) {
      return null
    }

    if (user.user) {
      return (
        <AccountIcon
          onClick={toggleSideNavRight}
          style={{ alignSelf: `flex-end` }}
          button
        />
      )
    }
    console.log(`render button`)
    return (
      <Button
        color="inherit"
        style={{ alignSelf: `flex-end` }}
        onClick={() => handleModal(LOGIN_USER)}
      >
      LOGIN
      </Button>
    )
  }

  return (
    <StyledAppBar position="fixed" {...rest}>
      <StyledToolbar>
        {renderLoginButton()}
      </StyledToolbar>
    </StyledAppBar>
  )
}

TopNav.propTypes = {
  loading: PropTypes.bool,
  user: PropTypes.objectOf(PropTypes.object),
  handleLogin: PropTypes.func,
  handleLogout: PropTypes.func,
  handleModal: PropTypes.func,
  toggleSideNavRight: PropTypes.func,
}

TopNav.defaultProps = {
  loading: false,
  user: {},
  handleLogin: () => {},
  handleLogout: () => {},
  handleModal: () => {},
  toggleSideNavRight: () => {},
}

export default TopNav
