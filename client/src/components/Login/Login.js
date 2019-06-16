import React from 'react'
import PropTypes from 'prop-types'
import TextField from '@material-ui/core/TextField'
import InputAdornment from '@material-ui/core/InputAdornment'
import IconButton from '@material-ui/core/IconButton'
import Visibility from '@material-ui/icons/Visibility'
import VisibilityOff from '@material-ui/icons/VisibilityOff'


const Login = ({ updateParentState }) => {
  const [values, setValues] = React.useState({})
  const [showPassword, setShowPassword] = React.useState(false)

  const handleChange = (event) => {
    if (updateParentState) {
      updateParentState(event)
    } else {
      const { value, name } = event.target
      setValues(currValues => ({ ...currValues, [name]: value }))
    }
  }

  return (
    <div>
      <TextField
        name="email"
        type="email"
        label="Email"
        values={values.email}
        onChange={handleChange}
        variant="outlined"
        margin="normal"
        fullWidth
        autoFocus
      />
      <TextField
        name="password"
        type={showPassword ? `text` : `password`}
        label="Password"
        values={values.password}
        onChange={handleChange}
        variant="outlined"
        margin="normal"
        fullWidth
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton
                edge="end"
                aria-label="Toggle password visibility"
                onClick={() => setShowPassword(currState => !currState)}
              >
                {showPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          ),
        }}
      />
    </div>
  )
}

Login.propTypes = {
  updateParentState: PropTypes.oneOfType([PropTypes.func, PropTypes.object]),
}

Login.defaultProps = {
  updateParentState: null,
}

export default Login
