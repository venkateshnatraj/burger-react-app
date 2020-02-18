import React, { createContext, useReducer } from 'react'

const initialState = {
  ingredients: {},
  ingredientPrice: {},
  total: 0
}
const store = createContext(initialState)
const { Provider } = store

const StateProvider = ({ children }) => {
  const [state, dispatch] = useReducer((storeReducer, action) => {
    switch (action.type) {
      case 'SetIngredients':
        return { ...storeReducer, ...action.payload }
      case 'AddIngredients':
        const add = storeReducer.ingredients[action.payload] + 1
        const addState = { ...storeReducer }
        addState.ingredients[action.payload] = add
        addState.total = Object.keys(addState.ingredients)
          .reduce((sum, cur) => sum + addState.ingredients[cur] * addState.ingredientPrice[cur], 0)
          .toFixed(2)
        return { ...storeReducer, ...addState }
      case 'RemoveIngredients':
        const remove =
          storeReducer.ingredients[action.payload] !== 0
            ? storeReducer.ingredients[action.payload] - 1
            : 0
        const removeState = { ...storeReducer }
        removeState.ingredients[action.payload] = remove
        removeState.total = Object.keys(removeState.ingredients)
          .reduce(
            (sum, cur) => sum + removeState.ingredients[cur] * removeState.ingredientPrice[cur],
            0
          )
          .toFixed(2)
        return { ...storeReducer, ...removeState }
      default:
        throw new Error()
    }
  }, initialState)

  return <Provider value={{ state, dispatch }}>{children}</Provider>
}

export { store, StateProvider }
