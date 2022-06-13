import React, {useState} from 'react';
import './scss/Button.scss';

const Button=(props)=>{
    return(
        <button onClick={props.page}>{props.content}</button>
    )
}

export default Button;