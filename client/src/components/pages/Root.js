import Button from '../Button';
import ResearchBar from '../ResearchBar';
import ResearchSentence from '../ResearchSentence';
import { Link } from "react-router-dom";

import './scss/Root.scss';

const jsontab=[{nom:'test'},
{nom:'test2'}];

const Root=(props)=>{
    return(
        <div className='main'>
            <div className='button'>
                <div className='addProcButton'><Button content='Ajouter une procédure' click={props.click}/></div>
                <Link to='/procedure'>Test</Link>
            </div>

            <div className='research'>
                <div className='researchSentence'><ResearchSentence /></div>
                <div className='researchBar'><ResearchBar/></div>
            </div>

            <div className='categorie'>
                {jsontab.map(element=>{return(<a>{element.nom}</a>)})}
            </div>
        </div>
    )
}

export default Root;