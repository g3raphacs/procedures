import ShowProcedure from './ShowProcedure';
import AddProcedure from './pages/AddProcedure';
import ChooseProcedure from './ChooseProcedure';

const ChoixProcedure=(props)=>{
    let x=props.page;
    if(x===0){
        return(
            <ChooseProcedure />
        )
    }
    else if(x===1){
        return(
            <ShowProcedure/>
        )
    }
    else if(x===2){
        return(
            <AddProcedure annuler={props.annuler}/>
        )
    }
}

export default ChoixProcedure;