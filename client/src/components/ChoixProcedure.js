import ShowProcedure from './ShowProcedure';
import AddProcedure from './pages/AddProcedure';

const ChoixProcedure=(props)=>{
    let x=props.page;
    if(x===0){
        return(
            <ShowProcedure/>
        )
    }
    else if(x===1){
        return(
            <AddProcedure annuler={props.annuler}/>
        )
    }
}

export default ChoixProcedure;