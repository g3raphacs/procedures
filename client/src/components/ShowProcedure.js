import Title from './Title';
import Text from './Text';
import JsonTab from './JsonTab';

const ShowProcedure=()=>{
    return(
        JsonTab.map(procedureTab=>{
            return(
                console.log(procedureTab.categorie[0].procedure[0].nom)
            )
        })
    )

    // return(
    //     procedureTab.map(procedure=>{
    //         return(<li>{procedure.nom}</li>)
    //     })
    // )

    // return(
    //     <div>
    //         <div class='title'>
    //             <Title />
    //         </div>
    //         <div class='text'>
    //             <Text />
    //         </div>
    //     </div>
    // )
}

export default ShowProcedure;