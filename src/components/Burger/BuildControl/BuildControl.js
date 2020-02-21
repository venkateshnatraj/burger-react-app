import React from 'react'
import { Button } from 'reactstrap'
import classes from './BuildControl.module.css'

const BuildControl = ({ label, type, disableCtrl, add, remove }) => {
  return (
    <div className={classes.BuildControl}>
      <div className={classes.Label}>{label}</div>
      <Button color="light" onClick={() => add(type)}>
        More
      </Button>
      <Button color="secondary" disabled={disableCtrl} onClick={() => remove(type)}>
        Less
      </Button>
    </div>
  )
}

export default BuildControl
