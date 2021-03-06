import fetch from 'isomorphic-fetch'
import {
  BUOY_DATA_PENDING,
  BUOY_DATA_RESOLVED,
  BUOY_DATA_REJECTED,
} from './types'

// TODO: For testing
import { buoyData } from '../dummy'

export const fetchBuoyData = () => async (dispatch) => {
  dispatch({
    type: BUOY_DATA_PENDING,
  })

  try {
    // const endpoint = `https://jsonplaceholder.typicode.com/todos/1`
    // const options = {
    //   method: `GET`,
    //   mode: `no-cors`,
    //   headers: {
    //     'Content-Type': `text/plain`,
    //   },
    // }

    // const response = await fetch(endpoint)
    // const payload = await response.json()

    dispatch({
      type: BUOY_DATA_RESOLVED,
      payload: buoyData,
    })
  } catch (error) {
    dispatch({
      type: BUOY_DATA_REJECTED,
    })
  }
}

export const foo = () => {}
