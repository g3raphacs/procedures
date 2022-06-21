import React, { useContext } from 'react';
import { ModalProcedureContext } from '../store/ModalProcedureStore';

const CancelButton = () => {
    const [modalProcedureState, modalProcedureDispatch] = useContext(ModalProcedureContext);

    return (
        <div>
            <div className='CancelButton'>
                <button onClick={()=>{modalProcedureDispatch({type: 'click', payload: false})}}>Annuler</button>
            </div>
        </div>
    );
};

export default CancelButton;