import React from "react"
import Logo from '../../img/VinotecaLogo.png'
import './NavBar.css'

const NavBar = () => {
    return(
        <header>
        <img src={Logo} alt=""/>
        <h1>Vinoteca Don Julian</h1>
        <nav>
            <a href="">Catalogo</a>
            <a href="">Sobre Nosotros</a>
            <a href="">Contacto</a>
        </nav>
        
        </header>
    )
}

export default NavBar