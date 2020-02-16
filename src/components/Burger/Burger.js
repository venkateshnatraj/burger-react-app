import React, { useContext } from 'react'
import classes from './Burger.module.css'
import BurgerIngredient from './BurgerIngredient/BurgerIngredient'
import { store } from '../../store/store'

const Burger =(props) =>{
    const {state} = useContext(store);
    const ingredients = state.ingredients
    console.log('test')
    console.log(ingredients)
    let items = Object.keys(ingredients)
                    .map((igkey)=>{
                        return [...Array(ingredients[igkey])].map((_,i)=>{
                          return  <BurgerIngredient key={igkey+i} type ={igkey} ></BurgerIngredient>        
                        })
                    }).reduce((acc, cur)=>{
                         return  [...acc , ...cur]   
                    },[])

     if(items.length === 0){
            items = <p>Please add some ingredients!</p>
     }             
    console.log(items)
    console.log(ingredients)
    return(
        <div className ={classes.Burger}>
                <BurgerIngredient type ='BreadTop' ></BurgerIngredient>
                {items}
                <BurgerIngredient type ='BreadBottom' ></BurgerIngredient>
            </div>
        )
}

export default Burger