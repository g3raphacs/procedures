import React, { useContext } from 'react';
import Editor from './Editor';
import ValidateButton from './ValidateButton';
import ChooseCategorie from './ChooseCategorie';
import Close from '../image/close.svg';

const AddProcedure = (props) => {
    if(props.toggle === true){
        return (
            <div className='ModalWindow'>
                <div className='ModalBackground' onClick={() => {props.toggleView(false)}}/>
                <div className='Modal'>
                    <div className='ModalHeader'>
                        <h1>Ajouter une nouvelle procédure</h1>
                        <ChooseCategorie />
                        <div className='DecisionButton'>
                            <ValidateButton />
                            <img src={Close} onClick={() => {props.toggleView(false)}}></img>
                        </div>
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