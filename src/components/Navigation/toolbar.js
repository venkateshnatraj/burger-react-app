import React, { Fragment } from 'react'
import Logo from '../Logo/logo'

const Toolbar = () => (
  <Fragment>
    <nav className="navbar navbar-dark bg-primary">
      <div>Menu</div>
      <Logo />
      {/* <div>...</div> */}
      <nav>...</nav>
    </nav>
  </Fragment>
)

export default Toolbar
