import '../../styles/css/banner.css'
import bannerImg from '../../assets/img/banner.png'
function Banner() { 
    return (
        <div className='banner'>
            <img src = {bannerImg} alt='Une falaise au-dessus de la mer'/>
            <h2>Chez vous, partout et ailleurs</h2>
        </div>
    )
}

export default Banner