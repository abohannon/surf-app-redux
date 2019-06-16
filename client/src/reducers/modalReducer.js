import {
  MODAL_OPEN,
  MODAL_CLOSE,
} from '../actions/types'

const INITIAL_STATE = {
  modelOpen: false,
  modalType: null,
  modalProps: {},
}

const modalReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case MODAL_OPEN:
      return {
        modalOpen: true,
        modalType: action.payload,
        modalProps: action.modalProps,
      }
    case MODAL_CLOSE:
      return INITIAL_STATE
    default:
      return state
  }
}

export default modalReducer
