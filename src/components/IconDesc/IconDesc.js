import './IconDesc.css'

function IconDesc ({icon, title, children}) {

    return (
        <div className='help-container'>
            <div className='desc-title-container'>
                {icon
                 ?<img src={icon} alt={title + 'icon'}/>
                 :<div className='alt-img'/>
                }
                <div className='desc-title'>{title + ":"}</div>
            </div>
            <div className='help-desc'>
                { "- " + children}
            </div>
        </div>
    );

}

export default IconDesc;