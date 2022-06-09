import Button from './Button';
import MenuProcedure from './MenuProcedure';
import { Link } from "react-router-dom";

const ShowMenu=()=>{
    return(
        <div>
            <div class='addProcButton'>
                <Link to='addprocedure'><Button content='Ajouter une procédure'/></Link>
            </div>
            <div class='menuProcedure'>
                <MenuProcedure />
            </div>
        </div>
    )
}

export default ShowMenu;