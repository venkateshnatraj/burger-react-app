
import React, {createContext, useReducer} from 'react';

const initialState = {
    ingredients: {},
    ingredientPrice : {},
    total : 0
};
const store = createContext(initialState);
const { Provider } = store;

const StateProvider = ( { children } ) => {
  const [state, dispatch] = useReducer((state, action) => {
    switch(action.type) {
      case 'SetIngredients':
        const newState = {...state, ...action.payload}
        return newState;
      case 'AddIngredients':
           let add = state.ingredients[action.payload] + 1
           let  addState =  { ...state }
           addState.ingredients[action.payload] = add
           addState.total = Object.keys(addState.ingredients).reduce((sum, cur)=>{
               return sum + (addState.ingredients[cur] * addState.ingredientPrice[cur])
              },0).toFixed(2)
           return { ...state, ...addState }
      case 'RemoveIngredients':
            let remove = state.ingredients[action.payload] !== 0 ? state.ingredients[action.payload] - 1 : 0
            let removeState=  { ...state }
            removeState.ingredients[action.payload] = remove
            removeState.total = Object.keys(removeState.ingredients).reduce((sum, cur)=>{
              return sum + (removeState.ingredients[cur] * removeState.ingredientPrice[cur])
             },0).toFixed(2)
           return { ...state, ...removeState}
      default:
        throw new Error();
    };
  }, initialState);

  return <Provider value={{ state, dispatch }}>{children}</Provider>;
};

export { store, StateProvider }