import React, { Fragment, useEffect, useState } from 'react'
import { useLocation, Route } from 'react-router-dom'
import CheckoutSummary from './CheckoutSummary'
import Contact from './Contact'

const Checkout = () => {
  const location = useLocation()
  const [loc, setloc] = useState()
  useEffect(() => {
    setloc(location.pathname)
  }, [])

  return (
    <Fragment>
      <CheckoutSummary />
      <Route path={`${loc}/contact-data`} component={Contact} />
      {/* way to use render  components with props in the route */}
      {/* <Route path ={loc +"/contact-data"} render = {()=> (<Contact  Ingredients ="test"/>  )} ></Route> */}
    </Fragment>
  )
}

export default Checkout
