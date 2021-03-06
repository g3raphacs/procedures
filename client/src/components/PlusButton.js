import React, { useContext } from 'react';
import { MenuCategorieContext } from '../store/MenuCategorieStore';
import RightArrow from '../image/arrowrightempty.svg';
import LeftArrow from '../image/arrowleftempty.svg';

const PlusButton = () => {
    const [menuCategorieState, menuCategorieDispatch] = useContext(MenuCategorieContext);

    function handleClick(){
        menuCategorieDispatch({
            type: 'click',
            payload: !menuCategorieState.open
        });
    }

    return (
        <div className='PlusButton'>
            <button onClick={handleClick}>{menuCategorieState.open===true?<img src={LeftArrow}/>:<img src={RightArrow}/>}</button>
        </div>
    );
};

export default PlusButton;