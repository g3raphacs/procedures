import React, { useReducer, createContext } from "react";

const initialState = {
    id: null
};

const ShowProcedureReducer = (state, action) => {
    switch(action.type){
        case 'click':
            return{
                ...state,
                id: action.id,
                nom: action.nom,
                texte: action.texte
            }
            default:
                return state;
    }
}

export const ShowProcedureContext = createContext(initialState);

const ShowProcedureContextProvider = ({ children }) => {
    const [showProcedureState, showProcedureDispatch] = useReducer(ShowProcedureReducer, initialState);

    return(
        <ShowProcedureContext.Provider value={[showProcedureState, showProcedureDispatch]}>
            { children }
        </ShowProcedureContext.Provider>
    )
}

export default ShowProcedureContextProvider;