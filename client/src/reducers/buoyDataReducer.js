import {
  BUOY_DATA_PENDING,
  BUOY_DATA_RESOLVED,
  BUOY_DATA_REJECTED,
} from '../actions/types'

const INITIAL_STATE = {
  data: null,
  dummy: {},
}

const buoyDataReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case BUOY_DATA_PENDING: {
      const newState = {
        action: action.type,
      }

      return { ...state, ...newState }
    }
    case BUOY_DATA_RESOLVED: {
      const newState = {
        data: action.payload,
      }

      return { ...state, ...newState }
    }
    case BUOY_DATA_REJECTED: {
      const newState = {
        data: null,
        action: action.type,
      }

      return { ...state, ...newState }
    }
    default:
      return state
  }
}

export default buoyDataReducer
