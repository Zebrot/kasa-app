import '../../styles/css/rating.css'
import fullStar from '../../assets/fullStar.svg'
import emptyStar from '../../assets/emptyStar.svg'

function Rating({value}) {
    let stars = []
    for (let i = 0; i < 5; i++) {
        if (i >= value)
            stars.push(<img src={emptyStar} key={i}/>);
        else
            stars.push(<img src={fullStar} key={i}/>);
    }

    return (
        <div className='rating'>
            {stars}
        </div>
    )

}

export default Rating;