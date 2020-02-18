import React, { useContext } from 'react'
import classes from './Burger.module.css'
import BurgerIngredient from './BurgerIngredient/BurgerIngredient'
import { store } from '../../store/store'

const Burger = () => {
  const { state } = useContext(store)
  const { ingredients } = state
  let items = Object.keys(ingredients)
    .map((igkey) =>
      [...Array(ingredients[igkey])].map((_, i) => (
        <BurgerIngredient key={igkey + i} type={igkey} />
      ))
    )
    .reduce((acc, cur) => [...acc, ...cur], [])

  if (items.length === 0) {
    items = <p>Please add some ingredients!</p>
  }
  return (
    <div className={classes.Burger}>
      <BurgerIngredient type="BreadTop" />
      {items}
      <BurgerIngredient type="BreadBottom" />
    </div>
  )
}

export default Burger
