import React from 'react';
// import './Icon.css'

const Icon = (props) => {
    let buttonImg;
    if (props.icon === 'cart') {
        buttonImg = <img src={require('../images/cart_2.png')} alt="Cart" /> 
    } else if (props.icon === 'heart') {
        buttonImg = <img src={require('../images/hearts.png')} alt="Heart" />
    }

    return (
        <div>
            {buttonImg}
        </div>
    )//return
}//Icon

export default Icon