import React from 'react';

const AddProcedureButton = ({toggleView}) => {
    return (
        <button onClick={()=>{toggleView(true)}}>Ajouter Procedure</button>
    );
};

export default AddProcedureButton;