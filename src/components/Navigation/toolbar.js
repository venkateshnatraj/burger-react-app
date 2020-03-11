import React, { Fragment } from 'react'
import Logo from '../Logo/logo'
import NavigationItems from './NavigationItems'
import classes from './SideDrawer.module.css'
import DrawerToggle from './DrawerToggle'

const Toolbar = (props) => (
  <Fragment>
    <nav style={{ backgroundColor: 'burlywood' }} className="navbar navbar-dark">
      <DrawerToggle open={props.open} />
      <Logo />
      <nav className={classes.DesktopOnly}>
        <NavigationItems />
      </nav>
    </nav>
  </Fragment>
)

export default Toolbar
