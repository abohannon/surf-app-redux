import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { ThemeProvider, styled } from '@material-ui/styles'
import CssBaseline from '@material-ui/core/CssBaseline'
import { connect } from 'react-redux'
import ReportContainer from './ReportContainer'
import ModalRoot from './ModalRoot'
import { TopNav } from '../components/TopNav'
import { SideNav } from '../components/SideNav'
import { mainTheme } from '../style/theme'

import { fetchBuoyData } from '../actions/buoyData'
import { toggleModal } from '../actions/modal'

const RootContainer = styled(`div`)({
  display: `flex`,
})

const ContentContainer = styled(`main`)(({ theme }) => ({
  flexGrow: 1,
  padding: theme.spacing(3),
}))

const NavPaddingDiv = styled(`div`)(({ theme }) => theme.mixins.toolbar)

class App extends Component {
  static propTypes = {
    dispatch: PropTypes.func,
  }

  componentDidMount() {
    const { dispatch } = this.props
    // const data = { stationId: 46258 }
    // dispatch(fetchBuoyData(data))
  }

  handleLogin = (data) => {
    console.log(data)
  }

  handleModal = (type) => {
    const { dispatch } = this.props

    const modalProps = {
      onClose: () => dispatch(toggleModal()),
      onLogin: data => this.handleLogin(data),
    }

    dispatch(toggleModal(type, modalProps))
  }

  render() {
    return (
      <ThemeProvider theme={mainTheme}>
        <CssBaseline />
        <RootContainer>
          <TopNav
            handleModal={this.handleModal}
            handleLogin={this.handleLogin}
          />
          <SideNav />
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

export default connect(mapStateToProps)(App)
