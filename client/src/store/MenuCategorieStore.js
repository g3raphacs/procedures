import React, { useReducer, createContext } from "react";

const initialState = {
    open: false,
};

const MenuCategorieReducer = (state,action) => {
    switch(action.type){
        case 'click':
            return{
                ...state,
                open: action.payload,
            }
        default:
            return state;
    }
}

export const MenuCategorieContext = createContext(initialState);

const MenuCategorieContextProvider = ({ children }) => {
    const [menuCategorieState, menuCategorieDispatch] = useReducer(MenuCategorieReducer, initialState);

    return(
        <MenuCategorieContext.Provider value={[menuCategorieState, menuCategorieDispatch]}>
            { children }
        </MenuCategorieContext.Provider>
    )
}

export default MenuCategorieContextProvider