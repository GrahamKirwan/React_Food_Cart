import React, {useContext, useEffect, useState} from 'react';
import CartIcon from '../Cart/CartIcon';

import CartContext from '../../store/cart-context';

import classes from './HeaderCartButton.module.css';

export default function HeaderCartButton(props) {

    const [btnIsHighlighted, setbtnIsHighlighted] = useState(false);
    const cartCtx = useContext(CartContext);
    
    const numberOfCartItems = cartCtx.items.reduce((curNumber, item) => {
        return curNumber + item.amount;
    }, 0);

    const btnClasses = `${classes.button} ${btnIsHighlighted ? classes.bump : ''}`

    const {items} = cartCtx;

    useEffect(() => {
        if(items.length === 0){
            return;
        }
        setbtnIsHighlighted(true);
        setTimeout(() => {
            setbtnIsHighlighted(false);
        }, 300)
    }, [items])

    return (
        <button className={btnClasses} onClick={props.cartButtonClicked}>
            <span className={classes.icon}>
                <CartIcon />
            </span>
            <span>Your Cart</span>
            <span className={classes.badge}>
                {numberOfCartItems}
            </span>
        </button>
    )
}
