import React, { Component }  from 'react';
import AddTitle from '../AddTitle';
import AddCategorie from '../AddCategorie';
import Modification from '../Modification';
import CKEditor from '../CKEditor';
import './scss/AddProcedure.scss';

const AddProcedure=(props)=>{
    return(
        <div>
            <div class='titlebar'>
                <AddTitle />
            </div>
            <div class='editor'>
                <CKEditor class='ck'/>
            </div>
            <div>
                <div class='categorie'>
                    <AddCategorie />
                </div>
                <div class='modification'>
                    <Modification annuler={props.annuler}/>
                </div>
            </div>
        </div>
    )
}

export default AddProcedure;