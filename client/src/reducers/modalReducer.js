import {
  MODAL_OPEN,
  MODAL_CLOSE,
} from '../actions/types'

const INITIAL_STATE = {
  modelOpen: false,
  modalType: null,
}

const modalReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case MODAL_OPEN:
      return {
        modalOpen: true,
        modalType: action.payload,
      }
    case MODAL_CLOSE:
      return {
        modalOpen: false,
        modalType: null,
      }
    default:
      return state
  }
}

export default modalReducer
