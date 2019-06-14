import {
  MODAL_OPEN,
  MODAL_CLOSE,
} from './types'


export const toggleModal = modalType => (dispatch, getState) => {
  if (getState().modal.modalOpen) {
    return dispatch({
      type: MODAL_CLOSE,
    })
  }

  return dispatch({
    type: MODAL_OPEN,
    payload: modalType,
  })
}
