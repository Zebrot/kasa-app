import { useState } from "react";
import '../../styles/css/carousel.css'
import prevArrow from '../../assets/prev.svg'
import nextArrow from '../../assets/next.svg'

function Carousel({imgList}){
    const [currentSlide, setCurrentSlide] = useState(0);
    
    const slides = imgList.map((x,i) => 
        <div className="carousel__Slide" key={i}>
            <img src = {x}/>
        </div>
    );

    return (
        <div className="carousel">
            <div className="loading" style={{display: 'none'}}>{slides}</div> {/*Loading imgs before they're displayed*/}
            {slides[currentSlide]}
            {imgList.length > 1 && <div className="carousel__Options">
                <div className="carousel__Options__Buttons">
                    <button className="carousel__Options__Buttons__Previous" onClick={() => setCurrentSlide(previous(currentSlide, imgList.length - 1))}>
                        <img src = {prevArrow}/>
                    </button>
                    <button className="carousel__Options__Buttons__Next" onClick={() => setCurrentSlide(next(currentSlide, imgList.length - 1))}>
                        <img src = {nextArrow}/>
                    </button>
                </div>
                <p className="carousel__Options__Count"> 
                    {currentSlide + 1} / {imgList.length} 
                </p>

            </div>}
        </div>
    )
}

function next(slide, max){
    if ( slide + 1 > max )
        return 0
    return (slide+1)    
}
function previous(slide, max){
    if (slide - 1 < 0)
        return max
    return slide - 1;
}

export default Carousel