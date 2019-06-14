import React, { Component } from 'react'
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

import { LOGIN_USER } from '../actions/types'

const RootContainer = styled(`div`)({
  display: `flex`,
})

const ContentContainer = styled(`main`)(({ theme }) => ({
  flexGrow: 1,
  padding: theme.spacing(3),
}))

const NavPaddingDiv = styled(`div`)(({ theme }) => theme.mixins.toolbar)

class App extends Component {
  componentDidMount() {
    const data = { stationId: 46258 }
    this.props.dispatch(fetchBuoyData(data))
  }

  handleLogin = () => {
    this.props.dispatch(toggleModal(LOGIN_USER))
  }

  render() {
    console.log(this.props)
    return (
      <ThemeProvider theme={mainTheme}>
        <CssBaseline />
        <RootContainer>
          <TopNav handleLogin={this.handleLogin} />
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
