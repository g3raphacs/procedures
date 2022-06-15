import Button from './Button';
import MenuProcedure from './MenuProcedure';

const ShowMenu=(props)=>{
    return(
        <div class='showMenu'>
            <div class='addProcButton'>
                <Button page={props.page} content='+'/>
            </div>
            <div class='menuProcedure'>
                <MenuProcedure onCategorieClick={(id)=>props.onCategorieClick(id)}/>
            </div>
        </div>
    )
}

export default ShowMenu;