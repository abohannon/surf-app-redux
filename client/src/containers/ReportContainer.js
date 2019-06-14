import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { styled } from '@material-ui/styles'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'

// TODO: Temporary
const StyledPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(2),
}))

class ReportContainer extends Component {
  render() {
    return (
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <StyledPaper>xs=12</StyledPaper>
        </Grid>
        <Grid item xs={6}>
          <StyledPaper>xs=6</StyledPaper>
        </Grid>
        <Grid item xs={6}>
          <StyledPaper>xs=6</StyledPaper>
        </Grid>
        <Grid item xs={3}>
          <StyledPaper>xs=3</StyledPaper>
        </Grid>
        <Grid item xs={3}>
          <StyledPaper>xs=3</StyledPaper>
        </Grid>
        <Grid item xs={3}>
          <StyledPaper>xs=3</StyledPaper>
        </Grid>
        <Grid item xs={3}>
          <StyledPaper>xs=3</StyledPaper>
        </Grid>
      </Grid>
    )
  }
}

export default ReportContainer
