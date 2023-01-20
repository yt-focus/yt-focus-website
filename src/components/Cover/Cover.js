import '../../pages/HomePage/HomePage.css'
function Cover ({children}) {
    return (
    <div className='main'>
            <div className='cover' />
            {children}
    </div>
    );
}

export default Cover