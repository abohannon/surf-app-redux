import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/styles'
import MuiDialogTitle from '@material-ui/core/DialogTitle'
import IconButton from '@material-ui/core/IconButton'
import CloseIcon from '@material-ui/icons/Close'
import Typography from '@material-ui/core/Typography'

const styles = theme => ({
  dialogTitleRoot: {
    margin: 0,
    padding: theme.spacing(2),
  },
  closeButton: {
    position: `absolute`,
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
})

const DialogTitle = withStyles(styles)(({ children, classes, onClose }) => (
  <MuiDialogTitle disableTypography>
    <Typography
      variant="h6"
      className={classes.dialogTitleRoot}
    >
      {children}
    </Typography>
    { onClose
    && (
    <IconButton
      aria-label="Close"
      onClick={onClose}
      className={classes.closeButton}
    >
      <CloseIcon />
    </IconButton>
    )
    }
  </MuiDialogTitle>
))

DialogTitle.propTypes = {
  children: PropTypes.string,
  onClose: PropTypes.func,
}

export default DialogTitle
