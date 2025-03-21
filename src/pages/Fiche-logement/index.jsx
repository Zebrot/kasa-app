import { useLocation } from "react-router"
import Carousel from '../../components/Carousel'
import Host from '../../components/Host'
import Rating from '../../components/Rating'
import Tag from '../../components/Tag'
import Collapse from '../../components/Collapse'
import '../../styles/css/logement.css'

function FicheLogement() {
    const logement = useLocation().state;

    const tags = logement.tags.map((x,i) => <Tag value ={x} key={i}/>);
    const equipments = logement.equipments.map(x => <li> {x} </li>);
    return (
        <div className="logement">
            <Carousel imgList = {logement.pictures}/>

            <div className = 'logement__infos'>

                <div className="logement__infos__row firstRow">
                    <div className="logement__infos__titles">
                        <h1>{logement.title}</h1>
                        <h2>{logement.location}</h2>
                    </div>
                    <Host host = {logement.host}/>
                </div>  
                <div className="logement__infos__row secondRow">
                    <div className='logement__infos__tags'>
                        {tags}
                    </div>

                    <Rating value={logement.rating}/>
                </div>
                <div className="logement__infos__row thirdRow">

                    <Collapse className = "logement__infos__description" title="Description">
                        {logement.description}
                    </Collapse>

                    <Collapse className = "logement__infos__equipements" title = "Équipements">
                        {equipments}
                    </Collapse>
                </div>
            </div>
        </div>
    )
}
export default FicheLogement