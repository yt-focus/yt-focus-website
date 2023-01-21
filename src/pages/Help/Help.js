import Back from "../../components/Back/Back";
import Cover from "../../components/Cover/Cover";
import IconDesc from "../../components/IconDesc/IconDesc";
import Showcase from "../../components/showcase/Showcase";
import './Help.css'

function Help () {
    return (
        <Cover>
            <div className='description-list'>
                <Back />
                <IconDesc  title='Known Issues'>
                    In case of any visual glitches, or functions not working: refresh the page or turn on and off the toggle button on the top right. This is due to how Youtube may load during your first use.
                </IconDesc>
                <IconDesc  title='Feedback & Reporting Bugs'>
                    You can leave feedback and report bugs on our github page. This project is open source so you are open to contribute your own changes!
                </IconDesc>
                <IconDesc icon='power-icon.svg' title='Power Button'>
                    Press this to turn on and off the extension.
                </IconDesc>
                <IconDesc icon='blur-icon.svg' title='Blur Recommendations'>
                    This blurs the thumbnails of the recommendation section when watching a video.
                    This also blurs recommendations at the end of a video.
                </IconDesc>
                <IconDesc icon='greyscale-icon.svg' title='Greyscale Thumbnails'>
                    Greyscales all thumbnails on the website. This does not affect the videoplayer when watching videos.
                </IconDesc>
                <IconDesc icon='brightness-icon.svg' title='Video Brightness'>
                    Shifts the brightness of a video
                </IconDesc>
                <IconDesc icon='sepia-icon.svg' title='Video Sepia'>
                    Colors the video in a reddish hue for ease on the eyes
                </IconDesc>
                <IconDesc  title='Focus Homepage'>
                    Removes all distractions from YouTube homepage only leaving the top search bar without the notification bell.
                </IconDesc>
                <IconDesc  title='Hide Comments'>
                    Hides all comments when watching a video.
                </IconDesc>
                <IconDesc  title='Hide Recommendation'>
                    Hides all recommendations when watching a video. (best used with theatre mode)
                </IconDesc>
                <IconDesc  title='Lowercase Titles'>
                    Lowercases all titles to combat click-bait or annoying jarring titles that go LOOK AT ME!!!
                </IconDesc>
                <Showcase />

            </div>
        </Cover>
    );
}

export default Help;