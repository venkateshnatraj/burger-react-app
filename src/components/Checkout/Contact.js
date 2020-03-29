import React, { Fragment, useContext, useRef } from 'react'
import { Button } from 'reactstrap'
import classes from './Contact.module.css'
import useFetch from '../../store/useFetch'
import config from '../../config'
import Spinners from '../UI/Spinners'
import { store } from '../../store/store'

const Contact = () => {
  const name = useRef()
  const email = useRef()
  const street = useRef()
  const postalCode = useRef()

  const globalState = useContext(store)
  const { state } = globalState
  const { orderState, startFetch } = useFetch(
    `${config.baseApiUrl}order2.json`,
    'POST',
    null,
    false
  )
  const { message } = orderState

  const orderHandler = () => {
    const finalOrderDetails = {
      Ingredients: state.ingredients,
      ContactDetails: {
        name: name.current.value,
        email: email.current.value,
        address: {
          street: street.current.value,
          postalCode: postalCode.current.value
        }
      },
      TotalPrice: state.total
    }
    startFetch(finalOrderDetails)
    // event.preventDefault()
  }
  return (
    <Fragment>
      <div className={classes.Contact}>
        <Spinners show={orderState.isLoading} />
        <h4>Enter your Contact details</h4>
        <form>
          <input
            className={classes.Input}
            type="text"
            name="name"
            placeholder="Your Name"
            ref={name}
          />
          <input
            className={classes.Input}
            type="email"
            name="email"
            placeholder="Your EMail"
            ref={email}
          />
          <input
            className={classes.Input}
            type="text"
            name="street"
            placeholder="Street"
            ref={street}
          />
          <input
            className={classes.Input}
            type="text"
            name="postal"
            placeholder="Postal Code"
            ref={postalCode}
          />
          <Button color="success" onClick={() => orderHandler()}>
            ORDER
          </Button>
          <p>{message}</p>
        </form>
      </div>
    </Fragment>
  )
}

export default Contact
