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
                    YT-Focus uses Chrome (Chromium) or WebExtensions Storage Sync API to store user settings, and browser's Web Storage API (localStorage) to store Developer Tools fixes (Nothing is stored via a cloud or database we own).
                </IconDesc>
                <IconDesc style={{ marginTop: '-1rem' }}>
                    Donations to YT-Focus are processed by Open Collective and their chosen payment processors, Stripe and PayPal.
                </IconDesc>
                <IconDesc title='Website Data' >
                    Our website, yt-focus.org, may use statistical tools to track page visits, link clicks, Anonymous data on the visitor's language and time zone may also be collected (None of which is implemented as of now, and may never be implemented). We take all necessary measures to ensure the security of this data.
                </IconDesc>
                

            </div>
            <Showcase/>
        </Cover>
    );
}

export default Privacy;
