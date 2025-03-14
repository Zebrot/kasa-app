import '../../styles/css/card.css'

function Card({title, imgUrl, link}) {
    return (
        <article className = "card">
            <a href = {'/logement/' + link}>            
                <h2> {title} </h2>
                <img alt = "Le nom du logement" src ={imgUrl}/>
            </a>
        </article>
    )
}

export default Card;