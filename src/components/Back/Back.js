import { Link } from "react-router-dom";
import './Back.css'

function Back () {
    return (
        <Link className='back' to="/">
            <img src='back-icon.svg' alt='back icon'/>
            <div>Back</div>
        </Link>
    );
}

export default Back;