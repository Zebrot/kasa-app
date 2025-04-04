import Carousel from '../../components/Carousel'
import Host from '../../components/Host'
import Rating from '../../components/Rating'
import Tag from '../../components/Tag'
import Collapse from '../../components/Collapse'
import '../../styles/css/logement.css'
import logements from '../../assets/logements.json'
import { useSearchParams } from "react-router-dom";
import { useNavigate } from "react-router-dom"
import { useEffect } from 'react'
import { useState } from 'react'

function FicheLogement() {
    const id =  getIdFromURL();
    const navigate = useNavigate();
    const logement = logements.filter(x => x.id == id)[0];

    useEffect(()=> { // Triggers on mount
        if(!logement)
            navigate('/404');
        scrollToTop();
    },[]);

    if (!logement) // On doit return quelque chose.
        return (<div></div>);

    const tags = logement.tags.map((x,i) => <Tag value ={x} key={i}/>);
    const equipments = logement.equipments.map((x,i) => <li key={i}> {x} </li>);

    return (
        <div className="logement">
            <Carousel imgList = {logement.pictures}/>

            <div className = 'logement__infos'>
                <div className='logement__infos__column leftColumn'>
                    <div className="logement__infos__titles">
                        <h1>{logement.title}</h1>
                        <h2>{logement.location}</h2>
                    </div>
                    <div className='logement__infos__tags'>
                        {tags}
                    </div>

                </div>
                <div className='logement__infos__column rightColumn'>
                    <Host host = {logement.host}/>
                    <Rating value={logement.rating}/>
                </div>
            </div>
            <div className='logement__utilities'>
                <Collapse className = "logement__infos__description" title="Description">
                    {logement.description}
                </Collapse>

                <Collapse className = "logement__infos__equipements" title = "Équipements">
                    {equipments}
                </Collapse>
            </div>
        </div>
    )
}

function getIdFromURL() {
    const [searchParams] = useSearchParams();
    const id = searchParams.get("id");
    return id;
}

function scrollToTop() {
    window.scrollTo(0, 0)
}
export default FicheLogement

