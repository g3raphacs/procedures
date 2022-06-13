import Axios from 'axios';

const token='eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyIjoidGVzdCBsb2dpbiAyIiwiaWF0IjoxNjU1MTA0MzEzLCJleHAiOjE2NTUxOTA3MTN9.gRhewYB_MQPd0Wsb03pZnBwi0yRSHRAcFDSJD6eSPmQ'

const config = {
  headers: { Authorization: `Bearer ${token}` }
};

const bodyParameters = {
 key: "value"
};

const axiosRequest=()=>Axios.post( 
'http://localhost:8000/server/articlereq/getAllArticle.php',
bodyParameters,
config)
.then(res => {
  console.log(res.data)
})
.catch(error => {
    console.log(error)
})

const Procedure=()=>{
    
}