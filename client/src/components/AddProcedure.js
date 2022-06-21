import React, { useContext } from 'react';
import { ModalProcedureContext } from '../store/ModalProcedureStore';

const AddProcedure = () => {
    const [modalProcedureState, modalProcedureDispatch] = useContext(ModalProcedureContext);
    
    if(modalProcedureState.open===true){
        return (
            <div className='ModalWindow'>
                <div className='ModalBackground' onClick={()=>{modalProcedureDispatch({type: 'click',payload: false})}}/>
                <div className='Modal'>
                    <div className='ModalHeader'>
                        <h1>Ajouter une nouvelle procédure</h1>
                    </div>
                    <div className='ModalBody'>
                        <p>Body Modal</p>
                    </div>
                </div>
            </div>
        );
    }
};

export default AddProcedure;