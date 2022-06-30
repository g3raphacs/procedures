import React, { useReducer, createContext } from "react";

const initialState = {
    categories: []
};

const CategorieReducer = (state, action) => {
    switch(action.type){
        case 'init':
            return{
                ...state,
                categories: action.setCategories
            }
            default:
                return state;
    }
}

export const CategorieContext = createContext(initialState);

const CategorieContextProvider = ({ children }) => {
    const [categorieState, categorieDispatch] = useReducer(CategorieReducer, initialState);

    return(
        <CategorieContext.Provider value={[categorieState, categorieDispatch]}>
            { children }
        </CategorieContext.Provider>
    )
}

export default CategorieContextProvider;