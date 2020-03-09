import React, { Fragment } from 'react'
import Logo from '../Logo/logo'
import NavigationItems from './NavigationItems'
import classes from './SideDrawer.module.css'
import Backdrop from '../UI/Backdrop'

const sideDrawer = (props)=>{
    let attachedClasses =[classes.SideDrawer,classes.Close]
    if(props.open){
        console.log("testss")
        attachedClasses = [classes.SideDrawer,classes.Open]
    }
    return(
        <Fragment>
            <Backdrop show ={props.open} clicked ={props.closed} />
            <div className = {attachedClasses.join(' ')}>
                <Logo />
                <nav>
                    <NavigationItems/>
                </nav>
            </div>
        </Fragment>
    )
}

export default sideDrawer