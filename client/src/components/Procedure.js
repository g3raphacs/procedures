import React, { useContext, useEffect, useState } from 'react';
import { ShowProcedureContext } from '../store/ShowProcedureStore';
import File from '../image/procedure.svg';
import axios from 'axios';

const Procedure = () => {
    const token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyIjoidGVzdCBsb2dpbiAyIiwiaWF0IjoxNjU2MDU0MTgxLCJleHAiOjE2NTYxNDA1ODF9.CCUBNOJaljXYogPko6fmk8QshobDbAtiu5y6ssjMXlM';
    const query = 'http://localhost:8000/articleReq/getAllArticle.php'
    const [showProcedureState, showProcedureDispatch] = useContext(ShowProcedureContext);

    const [procedures,setProcedures] = useState();
    useEffect(() => {
        const getProcedures = async () =>{
            const response = await axios
            .post(query,
            {key:'value'},
            {headers:{Authorization: `Bearer ${token}`}})
            setProcedures(response.data)
        }
        getProcedures();
    },[])

    return (
        <div className='Procedure'>
            {procedures?.map( procedure => 
                <div className='Card' onClick={() => {showProcedureDispatch({type: 'click', id: procedure.id, nom: procedure.nom, texte: procedure.texte})}}>
                    <div className='CardImage'>
                        <img src={File} />
                    </div>
                    <div className='CardTitle'>
                        <p key={procedure.id}>{procedure.nom}</p>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Procedure;