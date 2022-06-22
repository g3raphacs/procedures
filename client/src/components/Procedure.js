import React, { useContext, useEffect, useState } from 'react';
import File from '../image/procedure.svg';
import axios from 'axios';

const Procedure = () => {
    const token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyIjoidGVzdCBsb2dpbiAyIiwiaWF0IjoxNjU1ODI1NzI0LCJleHAiOjE2NTU5MTIxMjR9.mkTE9cdGQg572Q_ML6XZA-SZjvUb64FcUN3dH-tODJA';

    const [procedures,setProcedures] = useState();
    useEffect(() => {
        const getProcedures = async () =>{
            const response = await axios
            .post('http://localhost:8000/articleReq/getAllArticle.php',
            {key:'value'},
            {headers:{Authorization: `Bearer ${token}`}})
            setProcedures(response.data)
        }
        getProcedures();
    },[])

    return (
        <div className='Procedure'>
            {procedures?.map( procedure => 
                <div className='Card'>
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