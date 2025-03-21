import '../../styles/css/banner.css'
function Banner({children, img, dark=false}) { 
    return (
        <div className={'banner' + (dark ? ' dark' : '')}>
            <img src = {img}/>
            <h2>{children}</h2>
        </div>
    )
}

export default Banner