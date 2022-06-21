import React, { useContext } from 'react';
import { MenuCategorieContext } from '../store/MenuCategorieStore';

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
            <button onClick={handleClick}>{menuCategorieState.open===true?'<':'>'}</button>
        </div>
    );
};

export default PlusButton;