import React, {useState,useEffect} from 'react';
import AxiosRequest from './Json';

const MenuProcedure=(props)=>{
        const [allCategories, setAllCategories]=useState([]);
        useEffect(()=>{
            const getAllCategories=async()=>{
                const response=await AxiosRequest('http://localhost:8000/server/categoriereq/getAllCategorie.php',{});
                setAllCategories(response);
            }
            getAllCategories();
        },[]);

        console.log(allCategories);
        
    return(
        <div>
            {allCategories.map((allCategorie)=>{return(
                <a key={allCategorie.id} onClick={
                    ()=>{props.onCategorieClick(allCategorie.id)}
                }><li>{allCategorie.nom}</li></a>
            )})}
        </div>
    )
}

export default MenuProcedure;