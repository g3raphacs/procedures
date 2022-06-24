import React, { useContext, useEffect, useState } from 'react';
import { ShowProcedureContext } from '../store/ShowProcedureStore';
import Close from '../image/close.svg';
import query from '../utils/query';
import axios from 'axios';

const ShowProcedure = () => {
    const [showProcedureState, showProcedureDispatch] = useContext(ShowProcedureContext);

    const [proceduresById,setProceduresById] = useState();
    useEffect(() => {
        const procedures = query.article(showProcedureState.id);
        setProceduresById(procedures);
    },[])

    if(showProcedureState.id != null){
        return(
            <div className='ModalWindowProcedure'>
                <div className='ModalBackgroundProcedure' onClick={()=>{showProcedureDispatch({type: 'click',payload: null})}}/>
                    <div className='ModalProcedure'>
                        <div className='ModalHeaderProcedure'>
                            <h1>{showProcedureState.nom}</h1>
                            <img src={Close} onClick={()=>{showProcedureDispatch({type: 'click',payload: null})}}></img>
                        </div>
                        <div className='ModalBodyProcedure'>
                            <p>{showProcedureState.texte}</p>
                        </div>
                    </div>
            </div>
        )
    }
}

export default ShowProcedure;