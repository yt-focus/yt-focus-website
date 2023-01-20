import Back from '../../components/Back/Back';
import Cover from '../../components/Cover/Cover';
import IconDesc from '../../components/IconDesc/IconDesc';
import Showcase from '../../components/showcase/Showcase';
import './Privacy.css'

function Privacy () {
    return(
        <Cover>
            <div className='privacy-container'>
                <Back />
                <IconDesc title='Personal Data' >
                YT-Focus respects the privacy of its users and is committed to protecting their personal information. We do not collect or retain any personal data, browsing history or other identifying information.
                </IconDesc>
                <IconDesc title='Third Party Services' >
                In the future, YT-Focus may collect certain technical information, such as browser version, platform name, and display settings, with the user's permission. This information is used to improve the functionality and performance of the application, and to suggest default settings for new users.
                </IconDesc>
                <IconDesc>
                    YT-Focus uses Chrome (Chromium) or WebExtensions Storage Sync API to store user settings, and browser's Web Storage API (localStorage) to store Developer Tools fixes. For users of YT-Focus for Safari, settings are stored in the User's defaults database, and purchases are handled by iTunes.
                </IconDesc>
                <IconDesc>
                    Donations to YT-Focus are processed by Open Collective and their chosen payment processors, Stripe and PayPal.
                </IconDesc>
                <IconDesc title='Website Data' >
                    Our website, yt-focus.org, may use statistical tools to track page visits and link clicks. Anonymous data on the visitor's language and time zone is also collected. We take all necessary measures to ensure the security of this data.
                </IconDesc>
                

            </div>
            <Showcase/>
        </Cover>
    );
}

export default Privacy;