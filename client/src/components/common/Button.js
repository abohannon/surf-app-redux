import React from 'react'
import PropTypes from 'prop-types'
import MuiButton from '@material-ui/core/Button'

const Button = ({ children, ...rest }) => (
  <MuiButton {...rest}>
    {children}
  </MuiButton>
)

Button.propTypes = {
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.array]).isRequired,
}

export default Button
