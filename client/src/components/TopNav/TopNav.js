import React from 'react'
import PropTypes from 'prop-types'
import isEmpty from 'lodash/isEmpty'
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
  console.log(`TopNav Props`, props)
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
    if (loading) {
      return null
    }

    if (!isEmpty(user)) {
      return (
        <AccountIcon
          onClick={toggleSideNavRight}
          style={{ alignSelf: `flex-end` }}
          button
        />
      )
    }

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
  user: PropTypes.objectOf(PropTypes.string),
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
