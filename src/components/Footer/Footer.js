import { Link } from 'react-router-dom';
import './Footer.css'


function Footer () {
    return (
        <div className='footer'>
            <div className='footer-links'>
                <a href='https://opencollective.com/yt-focus'> Donate</a>
                <Link to="/privacy">Privacy</Link>
                <Link to="/help">Help</Link>
                <a href='https://github.com/yt-focus/yt-focus'> Github</a>

            </div>
            <p className='copyright'>Copyright © {new Date().getFullYear()} YT Focus. All rights reserved.</p>
        </div>  
    );
}

export default Footer;