import React, {useReducer} from 'react'

import CartContext from './cart-context';

const defaultCartState = {
    items: [],
    totalAmount: 0
}

const cartReducer = (state, action) => {
    if (action.type === 'ADD') {
        
        const updatedTotalAmount = state.totalAmount + action.item.price * action.item.amount;

        const exisitingCartItemIndex = state.items.findIndex(
            (item) => item.id === action.item.id
        );
        const existingCartItem = state.items[exisitingCartItemIndex];
        let updatedItems;

        if(existingCartItem) {
            const updatedItem = {
                ...existingCartItem,
                amount: existingCartItem.amount + action.item.amount
            };
            updatedItems = [...state.items];
            updatedItems[exisitingCartItemIndex] = updatedItem;
        } else {
            updatedItems = state.items.concat(action.item);
        }

        
        return {
            items: updatedItems,
            totalAmount: updatedTotalAmount
        };
    }
    else if (action.type === 'REMOVE') {

        // find the state item corresponding to the action.id
        const exisitingCartItemIndex = state.items.findIndex(
            (item) => item.id === action.id
        );

        const existingItem = state.items[exisitingCartItemIndex];
        const updatedTotalAmount = state.totalAmount - existingItem.price;

        if(existingItem.amount <= 1){
            // remove item completely
            state.items.splice(exisitingCartItemIndex, 1);
        }
        //Remove 1 form existingItems amount
        existingItem.amount = existingItem.amount - 1;



        return {
            items: state.items,
            totalAmount: updatedTotalAmount
        };
    }

    return defaultCartState;
}

const CartProvider = (props) => {
    const [cartState, dispatchCartAction] = useReducer(cartReducer, defaultCartState);

    const addItemToCartHandler = item => {
        dispatchCartAction({type: 'ADD', item: item})
    };

    const removeItemToCartHandler = id => {
        dispatchCartAction({type: 'REMOVE', id: id})
    };

    const cartContext = {
        items: cartState.items,
        totalAmount: cartState.totalAmount,
        addItem: addItemToCartHandler,
        removeItem:removeItemToCartHandler
    }

    return (
        <CartContext.Provider value={cartContext}>
            {props.children}
        </CartContext.Provider>
    )
}

export default CartProvider
