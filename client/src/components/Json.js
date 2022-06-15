import Axios from 'axios';
import '../server/articleReq/getAllArticle.php';

const token='eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyIjoidGVzdCBsb2dpbiAyIiwiaWF0IjoxNjU1MTA0MzEzLCJleHAiOjE2NTUxOTA3MTN9.gRhewYB_MQPd0Wsb03pZnBwi0yRSHRAcFDSJD6eSPmQ'

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