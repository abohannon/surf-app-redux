import React from 'react'
import PropTypes from 'prop-types'
import { styled } from '@material-ui/styles'
import MuiPaper from '@material-ui/core/Paper'

const StyledPaper = styled(MuiPaper)(({ theme }) => ({
  padding: theme.spacing(2),
}))

const Paper = ({ children }) => (
  <StyledPaper>
    {children}
  </StyledPaper>
)

Paper.propTypes = {
  children: PropTypes.any,
}

export default Paper
