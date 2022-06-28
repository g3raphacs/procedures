import React, { useReducer, createContext } from 'react';

const initialState = {
    categorie: null
};

const ChooseCategorieReducer = (state, action) => {
    switch(action.type){
        case 'click':
            return{
                ...state,
                categorie: action.payload
            }
            default:
                return state;
    }
}

export const ChooseCategorieContext = createContext(initialState);

const ChooseCategorieContextProvider = ({ children }) => {
    const [chooseCategorieState, chooseCategorieDispatch] = useReducer(ChooseCategorieReducer, initialState);

    return(
        <ChooseCategorieContext.Provider value={[chooseCategorieState, chooseCategorieDispatch]}>
            { children }
        </ChooseCategorieContext.Provider>
    )
}

export default ChooseCategorieContextProvider;