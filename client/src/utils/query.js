import axios from 'axios';

const query = {
    token: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyIjoiYWxleGlzIiwiaWF0IjoxNjU2NDIyNjA4LCJleHAiOjE2NTY1MDkwMDh9.3yHtN1DEa2lbYJMW-afXE_iRdW887Fu6EE8vSKa_ROU',
    article: async (id) => {
        const response = await axios
        .post('http://localhost:8000/articleReq/getArticleById.php',
        {id:id},
        {headers:{Authorization: `Bearer ${query.token}`}})
        return response.data
    }
}

export default query;