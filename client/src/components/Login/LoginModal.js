import React from 'react'
import PropTypes from 'prop-types'
import Dialog from '@material-ui/core/Dialog'
import DialogContent from '@material-ui/core/DialogContent'
import DialogActions from '@material-ui/core/DialogActions'
import withMobileDialog from '@material-ui/core/withMobileDialog'
import { DialogTitle, Button } from '../common'
import Login from './Login'
import { LoginMutation } from '../../mutations/User'

const LoginModal = ({ fullScreen, open, modalProps }) => {
  const { onClose, onLogin } = modalProps

  const [values, setValues] = React.useState({})

  const handleChange = (event) => {
    const { value, name } = event.target

    setValues(currValues => ({ ...currValues, [name]: value }))
  }

  return (
    <LoginMutation>
      { login => (
        <Dialog
          open={open}
          onClose={onClose}
          fullScreen={fullScreen}
        >
          <DialogTitle onClose={onClose}>Please login</DialogTitle>
          <DialogContent>
            <Login updateParentState={handleChange} />
          </DialogContent>
          <DialogActions>
            <Button color="secondary">Register</Button>
            <Button color="primary" onClick={() => login({ variables: { ...values } })}>Login</Button>
          </DialogActions>
        </Dialog>
      )}
    </LoginMutation>
  )
}

LoginModal.propTypes = {
  open: PropTypes.bool,
  fullScreen: PropTypes.bool,
  modalProps: PropTypes.objectOf(PropTypes.any),
}

LoginModal.defaultProps = {
  open: false,
  fullScreen: false,
  modalProps: {
    onClose: () => console.warn(`You forgot to pass an onClose handler`),
    onLogin: () => console.warn(`You forgot to pass an onLogin handler`),
  },
}

export default withMobileDialog({ breakpoint: `xs` })(LoginModal)
