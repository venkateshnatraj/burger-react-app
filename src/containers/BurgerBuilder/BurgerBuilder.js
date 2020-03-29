import React, { useContext, useEffect, Fragment } from 'react'
import Burger from '../../components/Burger/Burger'
import { store } from '../../store/store'
import BuildControls from '../../components/Burger/BuildControls/BuildControls'
import useFetch from '../../store/useFetch'
import config from '../../config'

function BurgerBuilder() {
  const globalState = useContext(store)
  const { dispatch, state } = globalState

  const isLoading = !(Object.keys(state.ingredients).length > 0)
  const ingredients = useFetch(`${config.baseApiUrl}ingredients.json`, 'GET', null, isLoading)
  const ingredientsPrice = useFetch(
    `${config.baseApiUrl}ingredientPrice.json`,
    'GET',
    null,
    isLoading
  )

  useEffect(() => {
    if (ingredients.orderState.data && ingredientsPrice.orderState.data) {
      const items = {
        ingredients: ingredients.orderState.data[Object.keys(ingredients.orderState.data)],
        ingredientPrice:
          ingredientsPrice.orderState.data[Object.keys(ingredientsPrice.orderState.data)],
        Total: 0
      }
      dispatch({ type: 'SetIngredients', payload: items })
    }
    // eslint-disable-next-line
  },[ingredients.orderState.data, ingredientsPrice.orderState.data])

  return (
    <Fragment>
      <Burger />
      <BuildControls />
    </Fragment>
  )
}

export default BurgerBuilder
