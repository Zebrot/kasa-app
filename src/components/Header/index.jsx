import { Link } from 'react-router-dom'
import '../../styles/css/header.css'
import kasaLogo from '../../assets/logo.svg'
import { useLocation } from 'react-router-dom';
function Header() {
    const location = useLocation();
  
    return (
        <nav className='navbar'>
            <img className = 'navbar__logo' src = {kasaLogo} />
            <div className = 'navbar__links'>
                <Link className = {location.pathname == '/' ? "current" : ""} to = "/">Accueil</Link>
                <Link className = {location.pathname == '/about' ? "current" : ""} to = "/about">A Propos</Link>
            </div>
        </nav>
    )
}

export default Header