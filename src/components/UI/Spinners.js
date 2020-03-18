import React from 'react'
import { Spinner } from 'reactstrap'
import classes from './Spinners.module.css'
import Backdrop from './Backdrop'

const Spinners = ({ show }) => {
  const myclass = show ? classes.Spinner : classes.Block
  return (
    <div className={myclass}>
      {/* <div className ={classes.Loader }>Loading..</div> */}
      <Backdrop show={show} />
      <Spinner animation="grow" size="lg">
        Loading...
      </Spinner>
    </div>
  )
}
export default Spinners
