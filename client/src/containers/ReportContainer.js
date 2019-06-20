import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import { AllUsersQuery } from '../queries/User'
import { Paper } from '../components/common'

class ReportContainer extends Component {
  componentDidMount() {

  }

  render() {
    return (
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper>
            <Typography variant="h3" component="h1">
              Mission Beach
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper>
            Chart
          </Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper>
            <AllUsersQuery />
          </Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper>xs=6</Paper>
        </Grid>
      </Grid>
    )
  }
}

export default ReportContainer
