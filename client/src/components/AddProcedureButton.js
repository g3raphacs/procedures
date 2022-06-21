import React, { useContext } from 'react';
import { ModalProcedureContext } from '../store/ModalProcedureStore';

const AddProcedureButton = () => {
    const [modalProcedureState, modalProcedureDispatch] = useContext(ModalProcedureContext);

    function handleClick(){
        modalProcedureDispatch({
            type: 'click',
            payload: !modalProcedureState.open
        });
    }

    return (
        <button onClick={handleClick}>Ajouter Procedure</button>
    );
};

export default AddProcedureButton;