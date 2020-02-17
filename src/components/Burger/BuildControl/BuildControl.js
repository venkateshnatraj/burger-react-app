import React, {useContext, useEffect } from 'react'
import classes from './BuildControl.module.css'
import { store } from '../../../store/store' 



const BuildControl = (props) => {
    const globalState = useContext(store)
    const { state, dispatch } = globalState

    const disableCtrl = state.ingredients[props.type]===0 ? true :false
    

    const addIngredients =(type)=> {
        dispatch({ type: 'AddIngredients', payload : type })
    }
    const removeIngredients =(type)=> {
        dispatch({ type: 'RemoveIngredients', payload : type })
    }

     return(
        <div  className ={classes.BuildControl} >
            <div className ={classes.Label}>{props.label}</div>
            <button  className ={classes.More} onClick={()=>addIngredients(props.type)}>More</button>
            <button  className ={classes.Less} onClick={()=>removeIngredients(props.type)} disabled={disableCtrl}>Less</button>
        </div>
     )
}

 export default BuildControl