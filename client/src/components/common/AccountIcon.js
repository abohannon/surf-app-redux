import React from 'react'
import PropTypes from 'prop-types'
import AccountCircle from '@material-ui/icons/AccountCircleTwoTone'
import { styled } from '@material-ui/styles'

const IconContainer = styled(`div`)(({ theme }) => ({
  margin: theme.spacing(1),
  display: `flex`,
  justifyContent: `center`,
  alignItems: `center`,
}))

const AccountIcon = ({ style, size }) => (
  <IconContainer style={style}>
    <AccountCircle fontSize={size} />
  </IconContainer>
)

AccountIcon.propTypes = {
  size: PropTypes.string,
  style: PropTypes.objectOf(PropTypes.string),
}

AccountIcon.defaultProps = {
  size: `default`,
}

export default AccountIcon
