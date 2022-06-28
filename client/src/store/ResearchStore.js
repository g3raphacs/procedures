import React, { useReducer, createContext } from 'react';

const initialState = {
    search: false
};

const ResearchReducer = (state, action) => {
    switch(action.type){
        case 'click':
            return{
                ...state,
                search: action.search
            }
        default:
            return state;
    }
}

export const ResearchContext = createContext(initialState);

const ResearchContextProvider = ({ children }) => {
    const [researchState, researchDispatch] = useReducer(ResearchReducer, initialState);

    return(
        <ResearchContext.Provider value={[researchState, researchDispatch]}>
            { children }
        </ResearchContext.Provider>
    )
}

export default ResearchContextProvider;