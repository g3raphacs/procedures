import Title from './Title';
import Text from './Text';
import Axios from 'axios';

const ShowProcedure=()=>{
    return(
        <div>
            <div class='title'>
                <Title />
            </div>
            <div class='text'>
                <Text />
            </div>
        </div>
    )
}

export default ShowProcedure;