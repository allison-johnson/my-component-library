import React from 'react';
import './Button.css'
import Icon from '../Icon/Icon.js'

const Button = (props) => {
    let classList = [];
    let types = ['primary', 'danger', 'success', 'warning', 'default']

    if (props.outline) {
        classList.push(`button-${props.type}-outline`)
    } else if (types.includes(props.type)) {
        classList.push(`button-${props.type}`)
    }

    if (props.muted) {
        classList.push(`button-${props.type}-muted`)
    }

    if (props.size === "medium") {
        classList.push(`button-medium`)
    } else if (props.size === "large") {
        classList.push(`button-large`)
    } 

    let icon;
    if (props.icon) {
        if (props.icon === 'cart') {
            icon = <Icon icon={'cart'} />
        } else if (props.icon === 'heart') {
            icon = <Icon icon={'heart'} />
        }
    }//outer if

    let msg;
    if (props.text) {
        msg = <div className="msg">{props.text}</div>
    }

    return(
      <button className={classList.join(' ')}>
        {icon}
        {msg}
      </button>
    )
}//Button

export default Button; 

{/* <img src={require('../images/cart_2.png')} alt='A cart' /> */}

{/* <div className="msg">{props.text ? props.text : null}</div> */}