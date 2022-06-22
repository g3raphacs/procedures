import React, { useContext, useEffect, useState } from 'react';
import File from '../image/procedure.svg';
import { MenuCategorieContext } from '../store/MenuCategorieStore';
import axios from 'axios';

const Categorie = () => {
    const [menuCategorieState, menuCategorieDispatch] = useContext(MenuCategorieContext);
    const token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyIjoidGVzdCBsb2dpbiAyIiwiaWF0IjoxNjU1ODI1NzI0LCJleHAiOjE2NTU5MTIxMjR9.mkTE9cdGQg572Q_ML6XZA-SZjvUb64FcUN3dH-tODJA';

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
                    <div className='Card'>
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
                    {return <li>{categorie.nom}</li>}
                )}
            </ul>
        )
    }
}

export default Categorie;