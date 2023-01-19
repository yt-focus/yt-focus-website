import React from 'react';
import './HomePage.css'

function HomePage () {
    return (

        <div className='main'>
            <div className='cover' />

            <div className='contents'>

                <div className='logo-container'>
                    <img src='icon-logo.svg' alt='logo icon'/>
                    <h1>Focus</h1>
                </div>

                <div className='seller'>
                    <div className='slogan'>
                        <p></p>
                        <p></p>
                    </div>
                    <div className='features'>
                        <div></div>
                        <div className='divider'></div>
                        <div></div>
                    </div>
                    <a>
                        <div className='download-button'>
                            <img />
                            <p></p>
                        </div>
                    </a>
                </div>
            </div>

            <div className='footer'>

            </div>
        </div>
    );
}

export default HomePage;