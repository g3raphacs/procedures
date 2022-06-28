import axios from 'axios';

const query = {
    token: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyIjoiYWxleGlzIiwiaWF0IjoxNjU2MzMyNzkyLCJleHAiOjE2NTY0MTkxOTJ9.MhxEoTYAf066L_RRHdGUBThzEEytDDnUzKAFrQ4Cd7Q',
    article: async (id) => {
        const response = await axios
        .post('http://localhost:8000/articleReq/getArticleById.php',
        {id:id},
        {headers:{Authorization: `Bearer ${query.token}`}})
        return response.data
    }
}

export default query;