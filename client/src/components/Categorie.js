import React, { useContext } from 'react';
import File from '../image/procedure.svg';
import { MenuCategorieContext } from '../store/MenuCategorieStore';

const CategoriesTab = [
    {
        id:1,
        name:'Catégorie 1',
    },
    {
        id:2,
        name:'Catégorie 2',
    },
    {
        id:3,
        name:'Catégorie 3',
    },
    {
        id:4,
        name:'Catégorie 4',
    },
    {
        id:5,
        name:'Catégorie 5',
    }
]

const Categorie = () => {
    const [menuCategorieState, menuCategorieDispatch] = useContext(MenuCategorieContext);

    if (menuCategorieState.open===true){
        return (
            <div>
                {CategoriesTab.map( CategoriesTab =>
                    <div className='Card'>
                        <div className='CardImage'>
                            <img src={File} />
                        </div>
                        <div className='CardTitle'>
                            <p key={CategoriesTab.id}>{CategoriesTab.name}</p>
                        </div>
                    </div>
                )}
            </div>
        )
    }
    else{
        return(
            <ul>
                {CategoriesTab.map( CategoriesTab => 
                    <li key={CategoriesTab.id}>{CategoriesTab.name}</li>
                )}
            </ul>
        )
    }
}

export default Categorie;