import axios from 'axios';

const query = {
    token: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyIjoidGVzdCBsb2dpbiAyIiwiaWF0IjoxNjU2MDU0MTgxLCJleHAiOjE2NTYxNDA1ODF9.CCUBNOJaljXYogPko6fmk8QshobDbAtiu5y6ssjMXlM',
    article: async (id) => {
        const response = await axios
        .post('http://localhost:8000/articleReq/getArticleById.php',
        {id:id},
        {headers:{Authorization: `Bearer ${query.token}`}})
        return response.data
    }
}

export default query;