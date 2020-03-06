import React, { Fragment } from 'react'
import classes from './Layout.module.css'
import Toolbar from '../Navigation/toolbar'

const layout = (props) => (
  <Fragment>
    <Toolbar />
    <main className={classes.Content}>{props.children}</main>
  </Fragment>
)

export default layout
