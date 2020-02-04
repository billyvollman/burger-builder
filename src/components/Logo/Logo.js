import React from 'react'
import burgerLogo from '../../assets/images/burger-logo.png'
import classes from './Logo.module.css'

const logo = (logo) => (
    <div className={classes.Logo}>
        <img src={burgerLogo} alt="Billy's Burger Builder"/>
    </div>
)

export default logo