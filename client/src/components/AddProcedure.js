import React, { useContext } from 'react';
import { ModalProcedureContext } from '../store/ModalProcedureStore';
import Editor from './Editor';
import ValidateButton from './ValidateButton';
import CancelButton from './CancelButton';
import ChooseCategorie from './ChooseCategorie';

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
                        <div className='ChooseCategorie'>
                            <ChooseCategorie />
                        </div>
                        <div className='Editor'>
                            <Editor />
                        </div>
                        <div className='DecisionButton'>
                            <ValidateButton />
                            <CancelButton />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
};

export default AddProcedure;