import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'react-apollo'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import { AllUsersQuery } from '../queries/User'
import { Paper } from '../components/common'

class ReportContainer extends Component {
  static propTypes = {
    allUsersQuery: PropTypes.objectOf(PropTypes.any),
  }

  static defaultProps = {
    allUsersQuery: {},
  }

  componentDidMount() {
  }

  renderUsers = () => {
    const { allUsersQuery: { loading, error, users } } = this.props
    if (loading) return <p>Loading...</p>
    if (error) return <p>{error}</p>

    return users.map(user => <p key={user.id}>{user.name}</p>)
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
            {this.renderUsers()}
          </Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper>xs=6</Paper>
        </Grid>
      </Grid>
    )
  }
}

export default graphql(AllUsersQuery, { name: `allUsersQuery` })(ReportContainer)
