import React, { Fragment, useState } from 'react'
import { Button } from 'reactstrap'
import { useHistory } from 'react-router-dom'
import Burger from '../Burger/Burger'
import classes from './CheckoutSummary.module.css'

const CheckoutSummary = () => {
  const history = useHistory()
  const [disable, setDisable] = useState(false)
  const continueNext = () => {
    setDisable(true)
    history.replace('checkout/contact-data')
  }

  const cancel = () => {
    history.goBack()
  }

  let buttons = ''
  if (!disable) {
    buttons = (
      <div>
        <Button color="primary" onClick={() => continueNext()}>
          CONTINUE
        </Button>
        <Button color="danger" onClick={() => cancel()}>
          CANCEL
        </Button>
      </div>
    )
  } else {
    buttons = null
  }

  return (
    <Fragment>
      <div className={classes.CheckoutSummary}>
        <h3>We hope it tastes well!</h3>
        <div style={{ width: '100%', margin: 'auto' }}>
          <Burger />
        </div>
        {buttons}
      </div>
    </Fragment>
  )
}

export default CheckoutSummary
