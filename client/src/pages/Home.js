import React, { useContext } from 'react';
import PlusButton from '../components/PlusButton';
import Research from '../components/Research';
import Categorie from '../components/Categorie';
import Procedure from '../components/Procedure';
import AddProcedureButton from '../components/AddProcedureButton';
import Modal from '../components/Modal';
import { MenuCategorieContext } from '../store/MenuCategorieStore';
import '../style/Home.scss';

const Home = () => {
    const [menuCategorieState, menuCategorieDispatch] = useContext(MenuCategorieContext);

    return (
        <div className='Home'>
            <div className='TopMenu'>
                <Research />
                <AddProcedureButton />
            </div>

            <div className='Content'>
                <div className={menuCategorieState.open===true?'LeftMenu Open':'LeftMenu'}>
                    <div className='LeftContent'>
                        <PlusButton />
                        <Categorie />
                    </div>
                </div>
                <div className='RightMenu'>
                    <div className='RightContent'>
                        <Procedure />
                    </div>
                </div>
            </div>

            <div className='ModalWindow'>
                <Modal />
            </div>
        </div>
    );
};

export default Home;