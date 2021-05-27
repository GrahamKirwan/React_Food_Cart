import React from 'react'
import HeaderCartButton from './HeaderCartButton';

import mealsImage from '../../assets/meals.jpeg'
import classes from './Header.module.css';

export default function Header(props) {

    return (
        <React.Fragment>
            <header className={classes.header}>
                <h1>ReactMeals</h1>
                <HeaderCartButton cartButtonClicked={props.onShowCart}/>
            </header>
            <div className={classes['main-image']}>
                <img src={mealsImage} alt="Table of food"></img>
            </div>
        </React.Fragment>
    )
}
