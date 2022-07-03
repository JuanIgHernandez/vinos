import React from "react"
import Logo from '../../logo/VinotecaLogo.png'
import './NavBar.css'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';



const NavBar = () => {
    return(
        <header>
        <img src={Logo} alt=""/>
        <h1 class='text-3xl font-bold underline'>Vinoteca Don Julian</h1>
        <nav>
            <a href="">Catalogo</a>
            <a href="">Sobre Nosotros</a>
            <a href="">Contacto</a>
        </nav>
        <ShoppingCartIcon sx={{ fontSize: 40 }} />
        </header>
    )
}

export default NavBar