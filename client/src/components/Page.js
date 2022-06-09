import {React,useState} from 'react';
import Root from './pages/Root';
import Procedure from './pages/Procedure';
import AddProcedure from './pages/AddProcedure';

const Page=()=>{
    const [view,setView] = useState('root');
    switch(view){
        case 'root':
            return <Root click={()=>setView('addprocedure')}/>
        case 'procedure':
            return <Procedure/>
        case 'addprocedure':
            return <AddProcedure click={()=>setView('root')}/>
    }
}

export default Page;