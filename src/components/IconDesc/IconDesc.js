import './IconDesc.css'

function IconDesc ({icon, title, children, style}) {

    return (
        <div className='help-container' style={style}>
            <div className='desc-title-container'>
                {icon
                 ?<img src={icon} alt={title + 'icon'}/>
                 :<div className='alt-img'/>
                }
                {title && <div style={style} className='desc-title'>{title + ":"}</div>}
            </div>
            <div className='help-desc' style={style}>
                { "- " + children}
            </div>
        </div>
    );

}

export default IconDesc;