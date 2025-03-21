import Collapse from '../../components/Collapse'
import Banner from '../../components/Banner'
import infos from '../../assets/about.json'
import bannerImg from '../../assets/img/bannerAbout.png'
function About() {
    const infoList = infos.map((x, i) => 
        <Collapse title={x.title} key = {i}>
            {x.content}
        </Collapse>
    );
    return(
        <>
            <Banner img = {bannerImg}></Banner>
            <div className = 'aboutList'>
                {infoList}
            </div>
        </>
    )
}

export default About