import React, { useContext, useEffect, useState } from 'react';
import { ShowProcedureContext } from '../store/ShowProcedureStore';
import { ChooseCategorieContext } from '../store/ChooseCategorieStore';
import File from '../image/procedure.svg';
import axios from 'axios';

const Procedure = () => {
    const token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyIjoidGVzdCBsb2dpbiAyIiwiaWF0IjoxNjU2MDU0MTgxLCJleHAiOjE2NTYxNDA1ODF9.CCUBNOJaljXYogPko6fmk8QshobDbAtiu5y6ssjMXlM';
    let query = 'http://localhost:8000/articleReq/getAllArticle.php';
    const [chooseCategorieState, chooseCategorieDispatch] = useContext(ChooseCategorieContext);
    const [showProcedureState, showProcedureDispatch] = useContext(ShowProcedureContext);

    if (chooseCategorieState === 2){
        query = 'http://localhost:8000/articleReq/getArticleByCategorie.php'
        console.log(chooseCategorieState);
        console.log('test');
    }

    const [procedures,setProcedures] = useState();
    useEffect(() => {
        const getProcedures = async () =>{
            const response = await axios
            .post(query,
            {id:chooseCategorieState},
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