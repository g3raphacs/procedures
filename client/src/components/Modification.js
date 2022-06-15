import Button from './Button';
import { Link } from "react-router-dom";
import './scss/Modification.scss';

const Modification=(props)=>{
    return(
        <div>
            <Button page={props.annuler} content='Annuler'/>
            <button type='submit'>Valider</button>
        </div>
    )
}

export default Modification;