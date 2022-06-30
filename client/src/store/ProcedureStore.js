import React, { useReducer, createContext } from 'react';

const initialState = {
    procedures: []
};

const ProcedureReducer = (state, action) => {
    switch(action.type){
        case 'init':
            return{
                ...state,
                procedures: action.setProcedures
            }
            default:
                return state;
    }
}

export const ProcedureContext = createContext(initialState);

const ProcedureContextProvider = ({ children }) => {
    const [procedureState, procedureDispatch] = useReducer(ProcedureReducer, initialState);

    return(
        <ProcedureContext.Provider value={[procedureState, procedureDispatch]}>
            { children }
        </ProcedureContext.Provider>
    )
}

export default ProcedureContextProvider;