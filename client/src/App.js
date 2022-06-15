import React, {useState,useEffect} from 'react';
import AxiosRequest from './components/Json';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import './App.css';
import Main from './components/pages/Main';
import ShowProcedure from './components/ShowProcedure';

document.title = 'WikiProcédure'

function App() {
  const [requestCategorie, setRequest]=useState([]);
    useEffect(()=>{
      const getRequest=async()=>{
        const reponse=await AxiosRequest('http://localhost:8000/server/categoriereq/getAllCategorie.php',{});
        setRequest(reponse);
      }
      getRequest();
  },[]);

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Main />} />
        {requestCategorie.map((requestsCategorie, index)=>{return(
          requestCategorie===[]?null:<Route key={index} path={'/'+requestsCategorie?.id} element={<Main />}/>
        )})}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
