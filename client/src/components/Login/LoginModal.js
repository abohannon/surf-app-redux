import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'react-apollo'
import Dialog from '@material-ui/core/Dialog'
import DialogContent from '@material-ui/core/DialogContent'
import DialogActions from '@material-ui/core/DialogActions'
import withMobileDialog from '@material-ui/core/withMobileDialog'
import { DialogTitle, Button } from '../common'
import Login from './Login'
import { LoginMutation } from '../../mutations/User'
import { AuthQuery } from '../../queries/User'

const LoginModal = ({
  fullScreen, open, modalProps, loginMutation,
}) => {
  const { onClose, onLogin } = modalProps

  const [values, setValues] = React.useState({})

  const handleChange = (event) => {
    const { value, name } = event.target

    setValues(currValues => ({ ...currValues, [name]: value }))
  }

  const handleLogin = () => {
    localStorage.removeItem(`token`)
    loginMutation({ variables: { ...values } })
  }

  return (
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
        <Button
          color="primary"
          onClick={handleLogin}
        >
        Login
        </Button>
      </DialogActions>
    </Dialog>
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

const LoginModalWithMobileDialog = withMobileDialog({ breakpoint: `xs` })(LoginModal)

export default graphql(LoginMutation, {
  name: `loginMutation`,
  options: {
    onCompleted: data => localStorage.setItem(`token`, data.login.token),
    onError: error => console.log(`Error logging in.`, error),
  },
})(LoginModalWithMobileDialog)
