import React, { useContext } from 'react'
import classes from './BuildControls.module.css'
import BuildControl from '../BuildControl/BuildControl'
import { store } from '../../../store/store'

const controls = [
  { label: 'Salad', type: 'Salad' },
  { label: 'Bacon', type: 'Bacon' },
  { label: 'Cheese', type: 'Cheese' },
  { label: 'Meat', type: 'Meat' }
]
const BuildControls = () => {
  const { state } = useContext(store)
  const { total } = state
  return (
    <div className={classes.BuildControls}>
      <p>Current Price :{total}</p>
      {controls.map((ctrl) => (
        <BuildControl key={ctrl.label} label={ctrl.label} type={ctrl.type} />
      ))}
    </div>
  )
}

export default BuildControls
