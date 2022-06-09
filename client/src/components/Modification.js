import Button from './Button';
import { Link } from "react-router-dom";
import './scss/Modification.scss';

const Modification=()=>{
    return(
        <div>
            <Link to='/'><Button content='Annuler'/></Link>
            <button type='submit'>Valider</button>
        </div>
    )
}

export default Modification;