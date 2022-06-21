import React from 'react';
import File from '../image/procedure.svg';

const ProceduresTab = [
    {
        id:1,
        name:'Procédure 1',
        categorie:1
    },
    {
        id:2,
        name:'Procédure 2',
        categorie:1
    },
    {
        id:3,
        name:'Procédure 3',
        categorie:2
    },
    {
        id:4,
        name:'Procédure 4',
        categorie:2
    },
    {
        id:5,
        name:'Procédure 5',
        categorie:3
    },
    {
        id:6,
        name:'Procédure 6',
        categorie:3
    },
    {
        id:7,
        name:'Procédure 7',
        categorie:4
    },
    {
        id:8,
        name:'Procédure 8',
        categorie:4
    },
    {
        id:9,
        name:'Procédure 9',
        categorie:5
    },
    {
        id:10,
        name:'Procédure 10',
        categorie:5
    }
]

const Procedure = () => {
    return (
        <div className='Procedure'>
            {/* <ul>
                {ProceduresTab.map( ProcedureTab =>
                    <li key={ProcedureTab.id}>{ProcedureTab.name}</li>
                )}
            </ul> */}
            {ProceduresTab.map( ProcedureTab => 
                <div className='Card'>
                    <div className='CardImage'>
                        <img src={File} />
                    </div>
                    <div className='CardTitle'>
                        <p>{ProcedureTab.name}</p>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Procedure;