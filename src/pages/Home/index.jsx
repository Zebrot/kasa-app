import Banner from '../../components/Banner/index.jsx'
import Card from '../../components/Card/index.jsx'
import bannerImg from '../../assets/img/banner.png'
import logements from '../../assets/logements.json'
import {Link} from 'react-router-dom'

function Home() {
  var cards = logements.map((x,i) => 
  <Link key = {i} to={`/logement?id=${x.id}`}>
    <Card title = {x.title} imgUrl = {x.cover} key={x.id}/>
  </Link>
  );
  
  return (
    <>
      <Banner img={bannerImg} dark="true">Chez vous, partout et ailleurs</Banner>

      <div className='logement-cards'>
         {cards}
      </div>
    </>
  )
}

export default Home
