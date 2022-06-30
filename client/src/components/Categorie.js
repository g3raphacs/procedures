// import React, { useContext, useEffect, useState } from 'react';
// import File from '../image/categorie.svg';
// import { MenuCategorieContext } from '../store/MenuCategorieStore';
// import { ChooseCategorieContext } from '../store/ChooseCategorieStore';
// import axios from 'axios';

// const Categorie = () => {
//     const [menuCategorieState, menuCategorieDispatch] = useContext(MenuCategorieContext);
//     const [chooseCategorieState, chooseCategorieDispatch] = useContext(ChooseCategorieContext);
//     const token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyIjoiYWxleGlzIiwiaWF0IjoxNjU2NDIyNjA4LCJleHAiOjE2NTY1MDkwMDh9.3yHtN1DEa2lbYJMW-afXE_iRdW887Fu6EE8vSKa_ROU';

//     const [categories,setCategories] = useState();
//     useEffect(() => {
//         const getCategories = async () =>{
//             const response = await axios
//             .post('http://localhost:8000/categorieReq/getAllCategorie.php',
//             {key:'value'},
//             {headers:{Authorization: `Bearer ${token}`}})
//             setCategories(response.data)
//         }
//         getCategories();
//     },[])

//     if (menuCategorieState.open===true){
//         return (
//             <>
//                 {categories?.map( categorie =>
//                     <div className='Card' onClick={() => {chooseCategorieDispatch({type: 'click', payload: categorie.id})}}>
//                         <div className='CardImage'>
//                             <img src={File} />
//                         </div>
//                         <div className='CardTitle'>
//                             <p key={categorie.id}>{categorie.nom}</p>
//                         </div>
//                     </div>
//                 )}
//             </>
//         )
//     }
//     else{
//         return(
//             <ul>
//                 {categories?.map(categorie =>
//                     {return <li onClick={() => {chooseCategorieDispatch({type: 'click', payload: categorie.id})}}>{categorie.nom}</li>}
//                 )}
//             </ul>
//         )
//     }
// }

// export default Categorie;

import React, { useState, useContext } from 'react';
import File from '../image/categorie.svg';
import axios from 'axios';
import { CategorieContext } from '../store/CategorieStore';
import { MenuCategorieContext } from '../store/MenuCategorieStore';

const Categorie = () => {
    const token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyIjoiYWxleGlzIiwiaWF0IjoxNjU2NTczMjI0LCJleHAiOjE2NTY2NTk2MjR9.UvgwghbOaprNknI0uJoahDVkHQPEcpk7kDi_akH9h9o';

    const [menuCategorieState, menuCategorieDispatch] = useContext(MenuCategorieContext);
    const [categorieState, categorieDispatch] = useContext(CategorieContext);

    useState(() => {
        const getCategories = async () =>{
            const response = await axios
            .post('http://localhost:8000/categorieReq/getAllCategorie.php',
            {key:'value'},
            {headers:{Authorization: `Bearer ${token}`}})
            categorieDispatch({type: 'init',setCategories:response.data})
        }
        getCategories();
    },[])

    console.log(categorieState);

    if(menuCategorieState.open===true){
        return(
            <>
                {categorieState.categories?.map( categorie =>
                    <div className='Card' onClick={() => {menuCategorieDispatch({type: 'click', payload: categorie.id})}}>
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
        return (
            <div>
                <ul>
                    {categorieState.categories?.map(categorie =>    
                        {return <li>{categorie.nom}</li>}
                    )}
                </ul>
            </div>
        );
    }
};

export default Categorie;