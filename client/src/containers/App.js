import React, { Component, Fragment } from 'react'
import { ThemeProvider, styled } from '@material-ui/styles'
import CssBaseline from '@material-ui/core/CssBaseline'
import MuiContainer from '@material-ui/core/Container'
import { connect } from 'react-redux'
import ReportContainer from './ReportContainer'
import { TopNav } from '../components/TopNav'
import { SideNav } from '../components/SideNav'
import { mainTheme } from '../style/theme'

import { fetchBuoyData } from '../actions/buoyData'

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

  render() {
    console.log(this.props)
    return (
      <ThemeProvider theme={mainTheme}>
        <CssBaseline />
        <RootContainer>
          <TopNav />
          <SideNav />
          <ContentContainer>
            <NavPaddingDiv />
            <ReportContainer />
          </ContentContainer>
        </RootContainer>
      </ThemeProvider>
    )
  }
}


const mapStateToProps = ({ buoyData }) => ({
  buoyData,
})

export default connect(mapStateToProps)(App)
