import { useContext } from 'react'
import { store } from './store'

const useIngredients = () => {
  const state = useContext(store)
  const { dispatch } = state

  const add = (type) => {
    dispatch({ type: 'AddIngredients', payload: type })
  }
  const remove = (type) => {
    dispatch({ type: 'RemoveIngredients', payload: type })
  }
  const reset = () => {
    dispatch({ type: 'ResetIngredients' })
  }
  return { add, remove, reset }
}

export default useIngredients
