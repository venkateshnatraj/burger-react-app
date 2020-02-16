import React, {useContext, useState, useEffect } from 'react'
import classes from './BuildControl.module.css'
import { store } from '../../../store/store' 



const BuildControl = (props) => {
   
    // const [Ingredients , setIngredients]= useState()
    // const {state} = useContext(store);
    // const ingredients = {...state.ingredients }

    
    const globalState = useContext(store);
    const { dispatch } = globalState;
  
    const addIngredients =(type)=> {
        dispatch({ type: 'AddIngredients', payload : type })
    }

     return(
     <div  className ={classes.BuildControl} >
         <div className ={classes.Label}>{props.label}</div>
         <button  className ={classes.Less} onClick={()=>addIngredients(props.type)}>Less</button>
         <button  className ={classes.More}>More</button>
     </div>
     )
}

 export default BuildControl