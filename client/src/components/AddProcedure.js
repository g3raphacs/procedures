import React, { useContext } from 'react';
import { ModalProcedureContext } from '../store/ModalProcedureStore';
import Editor from './Editor';
import ValidateButton from './ValidateButton';
import CancelButton from './CancelButton';
import ChooseCategorie from './ChooseCategorie';
import Close from '../image/close.svg';

const AddProcedure = () => {
    const [modalProcedureState, modalProcedureDispatch] = useContext(ModalProcedureContext);
    
    if(modalProcedureState.open===true){
        return (
            <div className='ModalWindow'>
                <div className='ModalBackground' onClick={()=>{modalProcedureDispatch({type: 'click',payload: false})}}/>
                <div className='Modal'>
                    <div className='ModalHeader'>
                        <h1>Ajouter une nouvelle procédure</h1>
                        <ChooseCategorie />
                        <div className='DecisionButton'>
                            <ValidateButton />
                            <CancelButton />
                        </div>
                        <img src={Close} onClick={()=>{modalProcedureDispatch({type: 'click',payload: false})}}></img>
                    </div>
                    <div className='ModalBody'>
                        <div className='Editor'>
                            <Editor />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
};

export default AddProcedure;