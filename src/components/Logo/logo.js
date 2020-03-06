import React from 'react'
import burgerLogo from '../../assests/images/burger-logo.png'
import classes from './logo.module.css'

const Logo = () => (
  <div className={classes.Logo}>
    <img src={burgerLogo} alt="MyBurger" />
  </div>
)

export default Logo
