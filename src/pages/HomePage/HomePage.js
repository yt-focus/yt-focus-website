import React from 'react';
import Cover from '../../components/Cover/Cover';
import IconText from '../../components/IconText/IconText';
import Showcase from '../../components/showcase/Showcase';
import './HomePage.css'

function HomePage () {
    return (
        <Cover>
                <div className='contents'>

                        <div className='seller'>
                        <div className='logo-container'>
                            <img src='icon-logo.svg' alt='logo icon'/>
                            <div>Focus</div>
                        </div>
                    <div className='container'>
                            <div className='slogan'>
                                <p>Learn without the distractions</p>
                                <p>a chrome extension for YouTube™</p>
                            </div>
                            <div className='features'>
                                <div className='feature-list'>
                                    <IconText iconPath='blur-icon.svg'> Recommendation Blur </IconText >
                                    <IconText iconPath='greyscale-icon.svg'> Thumbnail Greyscale</ IconText>
                                    <IconText iconPath='brightness-icon.svg'> Brightness </ IconText>
                                    <IconText iconPath='sepia-icon.svg'> Sepia </ IconText>
                                </div>
                                <div className='divider'/>
                                <div className='feature-list right'>
                                    <IconText>Distraction Free HomePage</IconText>
                                    <IconText>Hide Comments</IconText>
                                    <IconText>Hide Recommendations</IconText>
                                    <IconText>Lowercase Titles</IconText>
                                </div>
                            </div>
                            <a href='https://chrome.google.com/webstore/detail/yt-focus-learning-made-ea/fdekaebckbnpgafknooinjcnelmlhiip'>
                                <div className='download-button'>
                                    <img src='chrome-icon.png' alt='chrome-icon'/>
                                    <div>start learning</div>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
                <Showcase />
        </Cover>
    );
}

export default HomePage;