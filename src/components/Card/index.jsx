import '../../styles/css/card.css'

function Card({title, imgUrl}) {
    return (
        <article className = "card">
            <div className='title'>
                <h2> {title} </h2>
            </div>
            <img alt = {title} src ={imgUrl}/>
        </article>
    )
}

export default Card;