import React, { useContext, useEffect, useState } from 'react';
import { ShowProcedureContext } from '../store/ShowProcedureStore';
import { ChooseCategorieContext } from '../store/ChooseCategorieStore';
import File from '../image/procedure.svg';
import axios from 'axios';

const Procedure = () => {
    const token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyIjoiYWxleGlzIiwiaWF0IjoxNjU2MzMyNzkyLCJleHAiOjE2NTY0MTkxOTJ9.MhxEoTYAf066L_RRHdGUBThzEEytDDnUzKAFrQ4Cd7Q';
    const [chooseCategorieState, chooseCategorieDispatch] = useContext(ChooseCategorieContext);
    const [showProcedureState, showProcedureDispatch] = useContext(ShowProcedureContext);

    const [procedures,setProcedures] = useState();
    
    useEffect(() => {
        const getProcedures = async () =>{
            var formData = new FormData();
            formData.append("categorie", JSON.stringify({"categorie": chooseCategorieState.categorie}));
            const response = await axios
            .post('http://localhost:8000/articleReq/getArticleByCategorie.php',
            formData,
            {headers:{Authorization: `Bearer ${token}`}})
            setProcedures(response.data)
        }
        getProcedures();
    },[chooseCategorieState.categorie])

        
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