import React, { useContext, useState } from 'react';
import PlusButton from '../components/PlusButton';
import Research from '../components/Research';
import Categorie from '../components/Categorie';
import Procedure from '../components/Procedure';
import ShowProcedure from '../components/ShowProcedure';
import AddProcedureButton from '../components/AddProcedureButton';
import AddProcedure from '../components/AddProcedure';
import { MenuCategorieContext } from '../store/MenuCategorieStore';
import '../style/Home.scss';

const Home = () => {
    const [menuCategorieState, menuCategorieDispatch] = useContext(MenuCategorieContext);

    const [toggle,setToggle] = useState(false);
    const [toggleAddProcedure,setToggleAddProcedure] = useState(false);
    const [selectedProcedure,setSelectedProcedure] = useState({});

    return (
        <div className='Home'>
            <div className='TopMenu'>
                <Research />
                <AddProcedureButton toggleView={(open)=>{setToggleAddProcedure(open)}}/>
            </div>
            <div className='Content'>
                <div className={menuCategorieState.open===true?'LeftBackground Open':'LeftBackground'} onClick={()=>{menuCategorieDispatch({type: 'click',payload: false})}}/>
                <div className={menuCategorieState.open===true?'LeftMenu Open':'LeftMenu'}>
                    <div className='LeftContent'>
                        <PlusButton />
                        <div className='Categorie'>
                            <Categorie />
                        </div>
                    </div>
                </div>
                <div className='RightMenu'>
                    <div className='RightContent'>
                        <Procedure toggleView={(open,procedure)=>{setToggle(open);setSelectedProcedure(procedure)}}/>
                    </div>
                </div>
            </div>
            <ShowProcedure toggle={toggle} toggleView={(param) => {setToggle(param)}} procedure={selectedProcedure}/>
            <AddProcedure toggle={toggleAddProcedure} toggleView={(param) => {setToggleAddProcedure(param)}}/>
        </div>
    );
};

export default Home;