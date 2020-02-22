import React, { useContext, useState, useEffect } from 'react'
import { Button } from 'reactstrap'
import classes from './BuildControls.module.css'
import BuildControl from '../BuildControl/BuildControl'
import { store } from '../../../store/store'
import Ordermodal from '../../UI/Ordermodal'
import useIngredients from '../../../store/useIngredients'

const controls = [
  { label: 'Salad', type: 'Salad' },
  { label: 'Bacon', type: 'Bacon' },
  { label: 'Cheese', type: 'Cheese' },
  { label: 'Meat', type: 'Meat' }
]
const BuildControls = () => {
  const globalState = useContext(store)
  const { state } = globalState

  const [modal, setModal] = useState(false)
  const [disableOrder, setdisableOrder] = useState(true)
  const [total, setTotal] = useState(0)

  const { add, remove, reset } = useIngredients()

  const addIngredients = (type) => add(type)

  const removeIngredients = (type) => remove(type)

  useEffect(() => {
    setTotal(state.total)
    setdisableOrder(!(state.total > 0))
  }, [state.total])

  const cancelHandler = () => {
    reset()
    setModal(!modal)
  }
  const continueHandler = () => {
    setModal(!modal)
  }

  return (
    <div className={classes.BuildControls}>
      <Ordermodal modal={modal} cancel={cancelHandler} continueNext={continueHandler} />
      <p>Current Price : {total} </p>
      {controls.map((ctrl) => (
        <BuildControl
          key={ctrl.label}
          label={ctrl.label}
          type={ctrl.type}
          disableCtrl={state.ingredients[ctrl] === 0}
          add={addIngredients}
          remove={removeIngredients}
        />
      ))}
      <Button disabled={disableOrder} color="primary" size="lg" onClick={() => setModal(!modal)}>
        Order
      </Button>
    </div>
  )
}

export default BuildControls
