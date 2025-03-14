import Banner from '../../components/Banner/index.jsx'
import Card from '../../components/Card/index.jsx'
import bannerImg from '../../assets/img/banner.png'
import logements from '../../assets/logements.json'

function App() {
  var cards = logements.map((x,i) => <Card link = {x.id} title = {x.title} imgUrl = {x.cover} key={x.id}/>)
  console.log(cards)
  
  return (
    <>
      <Banner/>

      <div className='logement-cards'>
         {cards}
      </div>
    </>
  )
}

export default App
