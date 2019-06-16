import {
  MODAL_OPEN,
  MODAL_CLOSE,
} from './types'

/**
 * Action creator for opening a modal.
 * @param {string} modalType - The type of modal to toggle
 * @param {Object} modalProps - An object with additional props to be passed into the modal
 */

export const toggleModal = (modalType, modalProps) => (dispatch, getState) => {
  if (getState().modal.modalOpen) {
    return dispatch({
      type: MODAL_CLOSE,
    })
  }
  console.log(modalProps)
  return dispatch({
    type: MODAL_OPEN,
    payload: modalType,
    modalProps,
  })
}
