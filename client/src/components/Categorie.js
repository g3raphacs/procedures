import React from 'react';
import File from '../image/procedure.svg';

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
    return (
        <div className='Categorie'>
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

export default Categorie;