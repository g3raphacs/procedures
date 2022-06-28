import React, { useContext, useEffect, useState } from 'react';
import File from '../image/categorie.svg';
import { MenuCategorieContext } from '../store/MenuCategorieStore';
import { ChooseCategorieContext } from '../store/ChooseCategorieStore';
import axios from 'axios';

const Categorie = () => {
    const [menuCategorieState, menuCategorieDispatch] = useContext(MenuCategorieContext);
    const [chooseCategorieState, chooseCategorieDispatch] = useContext(ChooseCategorieContext);
    const token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyIjoiYWxleGlzIiwiaWF0IjoxNjU2MzMyNzkyLCJleHAiOjE2NTY0MTkxOTJ9.MhxEoTYAf066L_RRHdGUBThzEEytDDnUzKAFrQ4Cd7Q';

    const [categories,setCategories] = useState();
    useEffect(() => {
        const getCategories = async () =>{
            const response = await axios
            .post('http://localhost:8000/categorieReq/getAllCategorie.php',
            {key:'value'},
            {headers:{Authorization: `Bearer ${token}`}})
            setCategories(response.data)
        }
        getCategories();
    },[])

    if (menuCategorieState.open===true){
        return (
            <>
                {categories?.map( categorie =>
                    <div className='Card' onClick={() => {chooseCategorieDispatch({type: 'click', payload: categorie.id})}}>
                        <div className='CardImage'>
                            <img src={File} />
                        </div>
                        <div className='CardTitle'>
                            <p key={categorie.id}>{categorie.nom}</p>
                        </div>
                    </div>
                )}
            </>
        )
    }
    else{
        return(
            <ul>
                {categories?.map(categorie =>
                    {return <li onClick={() => {chooseCategorieDispatch({type: 'click', payload: categorie.id})}}>{categorie.nom}</li>}
                )}
            </ul>
        )
    }
}

export default Categorie;