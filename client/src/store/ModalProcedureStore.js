import React, { useReducer, createContext } from "react";

const initialState = {
    open: false,
};

const ModalProcedureReducer = (state,action) => {
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

export const ModalProcedureContext = createContext(initialState);

const ModalProcedureContextProvider = ({ children }) => {
    const [ModalProcedureState, ModalProcedureDispatch] = useReducer(ModalProcedureReducer, initialState);

    return(
        <ModalProcedureContext.Provider value={[ModalProcedureState, ModalProcedureDispatch]}>
            { children }
        </ModalProcedureContext.Provider>
    )
}

export default ModalProcedureContextProvider