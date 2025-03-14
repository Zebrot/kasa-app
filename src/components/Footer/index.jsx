import '../../styles/css/footer.css'
import logo from '../../assets/colorlessLogo.svg'

function Footer() {
    return (
        <footer className = "footer">
            <img src = {logo}/>
            <p>© 2020 Kasa. All rights reserved</p>
        </footer>
    )
}

export default Footer