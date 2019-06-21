import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { graphql, withApollo } from 'react-apollo'
import { ThemeProvider, styled } from '@material-ui/styles'
import CssBaseline from '@material-ui/core/CssBaseline'
import { connect } from 'react-redux'
import ReportContainer from './ReportContainer'
import ModalRoot from './ModalRoot'
import { TopNav } from '../components/TopNav'
import { SideNavLeft } from '../components/SideNavLeft'
import { SideNavRight } from '../components/SideNavRight'
import { mainTheme } from '../style/theme'

import { fetchBuoyData } from '../actions/buoyData'
import { toggleModal } from '../actions/modal'

import { AuthQuery } from '../queries/User'

const RootContainer = styled(`div`)({
  display: `flex`,
})

const ContentContainer = styled(`main`)(({ theme }) => ({
  flexGrow: 1,
  padding: theme.spacing(3),
}))

const NavPaddingDiv = styled(`div`)(({ theme }) => theme.mixins.toolbar)

class AppContainer extends Component {
  static propTypes = {
    dispatch: PropTypes.func,
  }

  state = {
    sideNavRightOpen: false,
  }

  componentDidMount() {
    const { dispatch } = this.props

    dispatch(fetchBuoyData())
  }

  handleLogout = (callback) => {
    const { client } = this.props

    localStorage.removeItem(`token`)
    client.resetStore()

    if (callback) {
      callback()
    }
  }

  handleModal = (type) => {
    const { dispatch } = this.props

    const modalProps = {
      onClose: () => dispatch(toggleModal()),
      onLogin: data => this.handleLogin(data),
    }

    dispatch(toggleModal(type, modalProps))
  }

  handleSideNavRight = () => {
    this.setState(currState => ({
      sideNavRightOpen: !currState.sideNavRightOpen,
    }))
  }

  render() {
    const { authQuery, client } = this.props
    const { sideNavRightOpen } = this.state

    return (
      <ThemeProvider theme={mainTheme}>
        <CssBaseline />
        <RootContainer>
          <TopNav
            loading={authQuery.loading}
            user={authQuery.currentUser}
            handleModal={this.handleModal}
            handleLogin={this.handleLogin}
            toggleSideNavRight={this.handleSideNavRight}
          />
          <SideNavLeft />
          <SideNavRight
            open={sideNavRightOpen}
            toggleDrawer={this.handleSideNavRight}
            handleLogout={this.handleLogout}
          />
          <ContentContainer>
            <NavPaddingDiv />
            <ReportContainer />
          </ContentContainer>
        </RootContainer>
        <ModalRoot />
      </ThemeProvider>
    )
  }
}


const mapStateToProps = ({ buoyData, modal }) => ({
  buoyData,
  modal,
})

const graphqlConfig = {
  name: `authQuery`,
}

export default withApollo(graphql(AuthQuery, graphqlConfig)(connect(mapStateToProps)(AppContainer)))
