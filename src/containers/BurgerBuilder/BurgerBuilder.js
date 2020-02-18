import React, { useContext, useEffect, Fragment } from 'react'
import Burger from '../../components/Burger/Burger'
import { store } from '../../store/store'
import BuildControls from '../../components/Burger/BuildControls/BuildControls'

function BurgerBuilder() {
  const items = {
    ingredients: {
      Salad: 0,
      Bacon: 0,
      Cheese: 0,
      Meat: 0
    },
    ingredientPrice: {
      Salad: 0.5,
      Bacon: 1.0,
      Cheese: 0.35,
      Meat: 1.2
    },
    Total: 0
  }
  const globalState = useContext(store)
  const { dispatch } = globalState

  useEffect(() => {
    dispatch({ type: 'SetIngredients', payload: items })
    // eslint-disable-next-line
  }, [])

  return (
    <Fragment>
      <Burger />
      <BuildControls />
    </Fragment>
  )
}

export default BurgerBuilder
