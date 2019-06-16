import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import LoginModal from '../components/Login/LoginModal'

import {
  LOGIN_USER,
} from '../actions/types'


class ModalRoot extends Component {
  static propTypes = {
    modal: PropTypes.object,
    modalProps: PropTypes.object,
  }

  static components = {
    [LOGIN_USER]: LoginModal,
  }

  render() {
    const { modal } = this.props
    const { modalType, modalOpen, modalProps } = modal

    if (!modalType) return null

    const ActiveModal = ModalRoot.components[modalType]

    return (
      <ActiveModal open={modalOpen} modalProps={modalProps} />
    )
  }
}

const mapStateToProps = ({ modal }) => ({ modal })

export default connect(mapStateToProps)(ModalRoot)
