import React, {useState,useEffect} from 'react';
import ResearchBar from '../ResearchBar';
import ShowMenu from '../ShowMenu';
import ChoixProcedure from '../ChoixProcedure';
import AxiosRequest from '../Json';
import './scss/Main.scss';

const Main=()=>{
    const [request, setRequest]=useState([]);
    useEffect(()=>{
    const getRequest=async()=>{
        const reponse=await AxiosRequest('http://localhost:8000/server/articlereq/getAllArticle.php',{});
        setRequest(reponse);
    }
    getRequest();
    },[]);

    console.log(request);

    const [pages, setPage]=useState(0);
    return(
        <div>
            <div class='researchBarProcedure'>
                <ResearchBar />
            </div>
            <div class='procedure'>
                <div class='showMenu'>
                    <ShowMenu page={()=>setPage(1)}/>
                </div>
                <div class='showProcedure'>
                    <ChoixProcedure page={pages} annuler={()=>setPage(0)}/>
                    
                </div>
            </div>
        </div>
    )
}

export default Main;