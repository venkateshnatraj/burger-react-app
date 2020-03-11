import React from 'react'
import classes from './DrawerToggle.module.css'

const drawerToggle = (props) => {
  return (
    <div className={classes.DrawerToggle} onClick={props.open}>
      <div />
      <div />
      <div />
    </div>
  )
}

export default drawerToggle
