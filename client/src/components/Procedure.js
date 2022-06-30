import { React, useContext, useEffect } from 'react';
import { ProcedureContext } from '../store/ProcedureStore';
import File from '../image/procedure.svg';
import axios from 'axios';

const Procedure = ({toggleView}) => {
    const token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyIjoiYWxleGlzIiwiaWF0IjoxNjU2NTczMjI0LCJleHAiOjE2NTY2NTk2MjR9.UvgwghbOaprNknI0uJoahDVkHQPEcpk7kDi_akH9h9o';
    const [procedureState, procedureDispatch] = useContext(ProcedureContext);

    useEffect(() => {
        const getProcedures = async () =>{
            const response = await axios
            .post('http://localhost:8000/articleReq/getAllArticle.php',
            {key:'value'},
            {headers:{Authorization: `Bearer ${token}`}})
            procedureDispatch({type:'init',setProcedures:response.data})
        }
        getProcedures();
    },[])

    return(
        <div className='Procedure'>
            {procedureState.procedures?.map( procedure =>
            <div className='Card' onClick={()=>{toggleView(true,{nom:procedure.nom, texte:procedure.texte})}}>
                <div className='CardImage'>
                    <img src={File} />
                </div>
                <div className='CardTitle'>
                    <p key={procedure.id}>{procedure.nom}</p>
                </div>
            </div>
            )}
        </div>
    )
}

export default Procedure;