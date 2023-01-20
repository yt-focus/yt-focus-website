import { Link } from 'react-router-dom';
import './Footer.css'


function Footer () {
    return (
        <div className='footer'>
            <a href='https://github.com/yt-focus/yt-focus'> Donate</a>
            <Link to="/privacy">Privacy</Link>
            <Link to="/help">Help</Link>
            <a href='https://github.com/yt-focus/yt-focus'> Github</a>
        </div>  
    );
}

export default Footer;