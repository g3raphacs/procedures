import React, { useContext } from 'react';
import Close from '../image/close.svg';
import { ProcedureContext } from '../store/ProcedureStore';

const ShowProcedure = (props) => {
    if(props.toggle === true){
        return(
            <div className='ModalWindowProcedure'>
                <div className='ModalBackgroundProcedure' onClick={() => {props.toggleView(false)}}/>
                    <div className='ModalProcedure'>
                        <div className='ModalHeaderProcedure'>
                            <h1>{props.procedure.nom}</h1>
                            <img src={Close} onClick={() => {props.toggleView(false)}}></img>
                        </div>
                        <div className='ModalBodyProcedure'>
                            <p>{props.procedure.texte}</p>
                        </div>
                    </div>
            </div>
        )
    }
    return null;
}

export default ShowProcedure;