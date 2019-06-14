import React from 'react'
import PropTypes from 'prop-types'
import Dialog from '@material-ui/core/Dialog'
import withMobileDialog from '@material-ui/core/withMobileDialog'
import Login from './Login'

const LoginModal = ({ open, onClose }) => (
  <Dialog
    open={open}
    onClose={onClose}
    fullscreen
  >
    <Login />
  </Dialog>
)

LoginModal.propTypes = {
  open: PropTypes.bool,
  onClose: PropTypes.func,
}

LoginModal.defaultProps = {
  open: false,
  onClose: () => {},
}

export default withMobileDialog()(LoginModal)
