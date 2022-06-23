import React from 'react';
import Valider from '../image/check.svg';

const ValidateButton = () => {
    return (
        <div>
            <div className='ValidateButton'>
                <img src={Valider}></img>
            </div>
        </div>
    );
};

export default ValidateButton;