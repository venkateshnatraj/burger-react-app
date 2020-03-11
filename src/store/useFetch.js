import { useReducer } from 'react'
import 'whatwg-fetch'

const REQUEST_STARTED = 'REQUEST_STARTED'
const REQUEST_SUCCESSFUL = 'REQUEST_SUCCESSFUL'
const REQUEST_FAILED = 'REQUEST_FAILED'
const REQUEST_RESET = 'REQUEST_RESET'

const reducer = (state, action) => {
  // we check the type of each action and return an updated state object accordingly
  switch (action.type) {
    case REQUEST_STARTED:
      return {
        ...state,
        isLoading: true
      }
    case REQUEST_SUCCESSFUL:
      return {
        ...state,
        isLoading: false,
        error: null,
        data: action.data
      }
    case REQUEST_FAILED:
      return {
        ...state,
        isLoading: false,
        error: action.error
      }
    case REQUEST_RESET:
      return {
        ...state,
        isLoading: false,
        data: null,
        error: null
      }

    // usually I ignore the action if its `type` is not matched here, some people prefer throwing errors here - it's really up to you.
    default:
      return state
  }
}

const useFetch = (url, options) => {
  const [orderState, dispatch] = useReducer(reducer, {
    isLoading: false,
    data: null,
    error: null
  })

  const fetchData = async () => {
    dispatch({ type: REQUEST_STARTED })
    try {
      const response = await fetch(url, options)

      if (!response.ok) {
        throw new Error(`${response.status} ${response.statusText}`)
      }
      const data = await response.json()
      dispatch({ type: REQUEST_SUCCESSFUL, data })
    } catch (e) {
      dispatch({ type: REQUEST_FAILED, error: e.message })
    }
  }
  const resetFetch = () => {
    dispatch({ type: REQUEST_RESET })
  }

  return { orderState, fetchData, resetFetch }
}

export default useFetch
