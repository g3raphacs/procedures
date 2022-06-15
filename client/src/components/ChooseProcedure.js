import React, {useState,useEffect} from 'react';
import AxiosRequest from './Json';
import StarOutline from '../img/star-outline.svg';

const ChooseProcedure=()=>{
  const [allArticles, setAllArticles]=useState([]);
    useEffect(()=>{
    const getAllArticles=async()=>{
        const reponse=await AxiosRequest('http://localhost:8000/server/articlereq/getAllArticle.php',{});
        setAllArticles(reponse);
    }
    getAllArticles();
    },[]);

    console.log(allArticles);

    return(
      <div class='listeProcedure'>
        {allArticles.map((allArticle)=>{return(
          <li key={allArticle.id}>{allArticle.nom} <img src={StarOutline} /></li>
        )})}
      </div>
    )
}

export default ChooseProcedure;