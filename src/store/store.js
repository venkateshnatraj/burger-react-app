
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
        console.log(state.ingredients)
           let ss = state.ingredients[action.payload] + 1
           let ssd =  { ...state.ingredients }
           ssd[action.payload] = ss
          const newState1 = { ...state.ingredients, ...ssd}
          console.log(newState1)
          return newState1;
      default:
        throw new Error();
    };
  }, initialState);

  return <Provider value={{ state, dispatch }}>{children}</Provider>;
};

export { store, StateProvider }