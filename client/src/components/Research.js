import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Research = () => {
    //Research bar for NomArticle with autocompletion
    const token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyIjoiYWxleGlzIiwiaWF0IjoxNjU2NTczMjI0LCJleHAiOjE2NTY2NTk2MjR9.UvgwghbOaprNknI0uJoahDVkHQPEcpk7kDi_akH9h9o';
    const [research, setResearch] = useState('');
    
    useEffect(() => {
        const getResearch = async () => {
            const response = await axios
            .post('http://localhost:8000/articleReq/getAllArticleByNom.php',
            JSON.stringify({nom: research}),
            {headers:{Authorization: `Bearer ${token}`}})
            setResearch(response.data)
        }
        getResearch();
    },[])

    return (
        <div className='Research'>
            <input type='text' placeholder='Rechercher un article' value={research} onChange={(e) => {setResearch(e.target.value)}} />
        </div>
    )
}

export default Research;