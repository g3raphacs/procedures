import React, { useContext, useEffect, useState } from 'react';
import { ShowProcedureContext } from '../store/ShowProcedureStore';
import axios from 'axios';

const ShowProcedure = () => {
    const token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyIjoidGVzdCBsb2dpbiAyIiwiaWF0IjoxNjU1OTEyNzgyLCJleHAiOjE2NTU5OTkxODJ9.vje_6Z1y0xw8JLOzdvwmJmrZXmKsMHGD8rxOZZjnFKI';
    const query = 'http://localhost:8000/articleReq/getArticleById.php'
    const [showProcedureState, showProcedureDispatch] = useContext(ShowProcedureContext);

    const [proceduresById,setProceduresById] = useState();

    const getProceduresById = async () =>{
        const response = await axios
        .post(query,
        {id:showProcedureState.id},
        {headers:{Authorization: `Bearer ${token}`}})
        setProceduresById(response.data)
    }
    getProceduresById();

    if(showProcedureState.id != null){
        return(
            <div className='ModalWindow'>
                <div className='ModalBackground' onClick={()=>{showProcedureDispatch({type: 'click',payload: null})}}/>
                <div className='Modal'>
                    <div className='ModalHeader'>
                        <h1>Procédure</h1>
                    </div>
                    <div className='ModalBody'>
                        
                    </div>
                </div>
            </div>
        )
    }
}

export default ShowProcedure;