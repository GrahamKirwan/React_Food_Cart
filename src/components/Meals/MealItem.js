import React, {useContext} from 'react'
import MealItemForm from './MealItemForm';
import CartContext from '../../store/cart-context';

import classes from './MealItem.module.css';


const MealItem = (props) => {
    const cartCtx = useContext(CartContext);

    const price = `$${props.data.price.toFixed(2)}`

    const addToCartHandler = amount => {
        cartCtx.addItem({
            id: props.id,
            name: props.name,
            amount: amount,
            price: props.price
        })
    };

    return (
        <li className={classes.meal}>
            <div>
                <h3>{props.data.name}</h3>
                <p className={classes.description}>{props.data.description}</p>
                <p className={classes.price}>{price}</p>
            </div>
            <div>
                <MealItemForm onAddToCart={addToCartHandler}></MealItemForm>
            </div>
        </li>
    )
}

export default MealItem
