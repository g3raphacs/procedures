import React, {useState,useEffect} from 'react';
import ResearchBar from '../ResearchBar';
import ShowMenu from '../ShowMenu';
import ChoixProcedure from '../ChoixProcedure';
import Button from '../Button';
import './scss/Main.scss';

const Main=()=>{
    const [pages, setPage]=useState(0);
    const [procedures, setProcedures]=useState([]);
    const onCategorieClick=(procedures)=>{
        const response=await AxiosRequest('http://localhost:8000/server/categoriereq/getArticleByCategorie.php',{});
        setProcedures(procedures);
    }
    return(
        <div class='main'>
            <div class='topMenu'>
                <div class='researchBar'><ResearchBar /></div>
                <Button content='Ajouter une procédure'/>
            </div>
            <div class='bottomMenu'>
                <div class='leftMenu'>
                    <ShowMenu page={()=>setPage(2)} onCategorieClick={(categorieId)=>onCategorieClick(id)} />
                </div>
                <div class='rightMenu'>
                    <ChoixProcedure page={pages} annuler={()=>setPage(0)} procedures={procedures}/>
                </div>
            </div>
        </div>
    )
}

export default Main;