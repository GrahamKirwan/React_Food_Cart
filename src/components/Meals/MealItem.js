import React from 'react'
import MealItemForm from './MealItemForm';

import classes from './MealItem.module.css';


const MealItem = (props) => {

    const price = `$${props.data.price.toFixed(2)}`

    return (
        <li className={classes.meal}>
            <div>
                <h3>{props.data.name}</h3>
                <p className={classes.description}>{props.data.description}</p>
                <p className={classes.price}>{price}</p>
            </div>
            <div>
                <MealItemForm></MealItemForm>
            </div>
        </li>
    )
}

export default MealItem
