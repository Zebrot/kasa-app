import '../../styles/css/card.css'

function Card({title, imgUrl}) {
    return (
        <article className = "card">
            <h2> {title} </h2>
            <img alt = "Le nom du logement" src ={imgUrl}/>
        </article>
    )
}

export default Card;