import { Link } from 'react-router-dom'
import '../../styles/css/header.css'
import kasaLogo from '../../assets/logo.svg'

function Header() {
    return (
        <nav className='navbar'>
            <img className = 'navvbar__logo' src = {kasaLogo} />
            <div className = 'navbar__links'>
                <Link to = "/">Accueil</Link>
                <Link to = "/about">A Propos</Link>
            </div>
        </nav>
    )
}

export default Header