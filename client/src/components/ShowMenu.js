import Button from './Button';
import MenuProcedure from './MenuProcedure';

const ShowMenu=(props)=>{
    return(
        <div>
            <div class='addProcButton'>
                <Button page={props.page} content='Ajouter une procédure'/>
            </div>
            <div class='menuProcedure'>
                <MenuProcedure />
            </div>
        </div>
    )
}

export default ShowMenu;