import React, { createContext, useReducer } from 'react'

const initialState = {
  ingredients: {},
  ingredientPrice: {},
  total: 0
}
const store = createContext(initialState)
const { Provider } = store

const reducer = (state, action) => {
  switch (action.type) {
    case 'SetIngredients':
      return { ...state, ...action.payload }
    case 'ResetIngredients':
      const reset = { ...state }
      Object.keys(reset.ingredients).forEach((x) => {
        reset.ingredients[x] = 0
      })
      reset.total = 0
      return { ...state, ...reset }
    case 'AddIngredients':
      const add = state.ingredients[action.payload] + 1
      const addState = { ...state }
      addState.ingredients[action.payload] = add
      addState.total = Object.keys(addState.ingredients)
        .reduce((sum, cur) => sum + addState.ingredients[cur] * addState.ingredientPrice[cur], 0)
        .toFixed(2)
      return { ...state, ...addState }
    case 'RemoveIngredients':
      const remove =
        state.ingredients[action.payload] !== 0 ? state.ingredients[action.payload] - 1 : 0
      const removeState = { ...state }
      removeState.ingredients[action.payload] = remove
      removeState.total = Object.keys(removeState.ingredients)
        .reduce(
          (sum, cur) => sum + removeState.ingredients[cur] * removeState.ingredientPrice[cur],
          0
        )
        .toFixed(2)
      return { ...state, ...removeState }
    default:
      throw new Error()
  }
}

const StateProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)
  return <Provider value={{ state, dispatch }}>{children}</Provider>
}

export { store, StateProvider }
