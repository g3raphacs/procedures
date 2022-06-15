import Axios from 'axios';
import '../server/articleReq/getAllArticle.php';

const token='eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyIjoidGVzdCBsb2dpbiAyIiwiaWF0IjoxNjU1Mjc3NjIwLCJleHAiOjE2NTUzNjQwMjB9.ucIr5dERTYoh4-V-i7QAm-kyk-m4XfHssz-W_gtenko'

const config = {
  headers: { Authorization: `Bearer ${token}` }
};

const AxiosRequest=(url,bodyParameters)=>Axios.post( 
url,
bodyParameters,
config)
.then(res => {
  return res.data;
})
.catch(error => {
  return error;
})

export default AxiosRequest;