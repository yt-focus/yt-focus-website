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
                <IconDesc  title='Bugs'>
                    In case of any visual glitches, or functions not working: refresh the page or turn on and off the toggle button on the top right. This is due to how Youtube may load, or may happen first time you're injecting the code into your browser.
                </IconDesc>
                <IconDesc icon='blur-icon.svg' title='Blur Recommendations'>
                    This blurs the thumbnails of the recommendation section when watching a video.
                    This also blurs recommendations at the end of a video.
                </IconDesc>
                <IconDesc icon='greyscale-icon.svg' title='Greyscale Thumbnails'>
                    Greyscales all thumbnails on the website. This does not affect the videoplayer when watching videos.
                </IconDesc>
                <IconDesc icon='brightness-icon.svg' title='Brightness'>
                    Changes everything on the page
                    excluding the sidebar and top search bar. (affects videoplayer)
                </IconDesc>
                <IconDesc icon='sepia-icon.svg' title='Sepia'>
                    Filters the page to a redish hue to combat blue-light. (affects videoplayer)
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