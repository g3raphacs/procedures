import ResearchBar from '../ResearchBar';
import ShowMenu from '../ShowMenu';
import ShowProcedure from '../ShowProcedure';

import './scss/Main.scss';

const Main=()=>{
    return(
        <div>
            <div class='researchBarProcedure'>
                <ResearchBar />
            </div>
            <div class='procedure'>
                <div class='showMenu'>
                    <ShowMenu />
                </div>
                <div class='showProcedure'>
                    <ShowProcedure />
                </div>
            </div>
        </div>
    )
}

export default Main;