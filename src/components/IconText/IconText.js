import './IconText.css'

function IconText ({iconPath=false, children}) {
    return(
        <div className='icon-text-container'>
            {
                iconPath
                ? <img className='icon-holder' src={iconPath} alt={children + 'icon'}/>
                : <div className='icon-holder'/>

            }
            <div className='feature-text'>
                {children}
            </div>
        </div>
    );
}

export default IconText;