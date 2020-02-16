
import React, {createContext, useReducer} from 'react';

const initialState = {
    ingredients: {}
};
const store = createContext(initialState);
const { Provider } = store;

const StateProvider = ( { children } ) => {
  const [state, dispatch] = useReducer((state, action) => {
    switch(action.type) {
      case 'SetIngredients':
        const newState = {...state.ingredients, ...action.payload}
        return newState;
      case 'AddIngredients':
           let add = state.ingredients[action.payload] + 1
           let  addState =  { ...state }
           addState.ingredients[action.payload] = add
           return { ...state.ingredients, ...addState }
      case 'RemoveIngredients':
            let remove = state.ingredients[action.payload] !== 0 ? state.ingredients[action.payload] - 1 : 0
            let removeState=  { ...state }
            removeState.ingredients[action.payload] = remove
           return { ...state.ingredients, ...removeState}
      default:
        throw new Error();
    };
  }, initialState);

  return <Provider value={{ state, dispatch }}>{children}</Provider>;
};

export { store, StateProvider }