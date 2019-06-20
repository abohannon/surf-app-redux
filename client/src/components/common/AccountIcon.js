import React from 'react'
import PropTypes from 'prop-types'
import AccountCircle from '@material-ui/icons/AccountCircleTwoTone'
import { styled } from '@material-ui/styles'

const IconContainer = styled(
  ({ isButton, ...rest }) => <div {...rest} />,
)(({ theme, isButton }) => ({
  margin: theme.spacing(1),
  display: `flex`,
  justifyContent: `center`,
  alignItems: `center`,
  cursor: isButton ? `pointer` : `unset`,
  transition: `all .2s`,
  '&:hover': {
    filter: isButton ? `brightness(80%)` : `unset`,
  },
}))

const AccountIcon = ({
  style, size, onClick, button,
}) => (
  <IconContainer style={style} onClick={onClick} isButton={button}>
    <AccountCircle fontSize={size} />
  </IconContainer>
)

AccountIcon.propTypes = {
  size: PropTypes.string,
  style: PropTypes.objectOf(PropTypes.string),
  onClick: PropTypes.func,
  button: PropTypes.bool,
}

AccountIcon.defaultProps = {
  size: `default`,
  button: false,
  style: {},
  onClick: () => {},
}

export default AccountIcon
