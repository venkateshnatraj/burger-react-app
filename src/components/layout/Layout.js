import React, { Fragment, useState } from 'react'
import classes from './Layout.module.css'
import Toolbar from '../Navigation/toolbar'
import SideDrawer from '../Navigation/SideDrawer'

const Layout = (props) => {
  const [showSideDrawer, setShowSideDrawer] = useState(false)

  const sideDrawerCloseHandler = () => {
    setShowSideDrawer(false)
  }

  const sideDrawerOpenHandler = () => {
    setShowSideDrawer(true)
  }

  return (
    <Fragment>
      <Toolbar open={sideDrawerOpenHandler} />
      <SideDrawer open={showSideDrawer} closed={sideDrawerCloseHandler} />
      <main className={classes.Content}>{props.children}</main>
    </Fragment>
  )
}

export default Layout
