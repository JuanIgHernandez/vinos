import React from "react"
import Logo from '../../logo/ClothesLogo.jpg'
import './NavBar.css'
import CartWidget from "../Cart/CartWidget";
import { Link, NavLink } from "react-router-dom";



const NavBar = () => {

    const categories = [
        { name: "Electronics", id: 0, route: "/category/electronics" },
        { name: "Jewelery", id: 1, route: "/category/jewelery" },
        { name: "Men's Clothing", id: 2, route: "/category/men's clothing" },
        { name: "Women's clothing", id: 3, route: "/category/women's clothing" },
    ];

    return(
        <header>
        <Link to="/"><img src={Logo} alt=""/></Link>
        <h1 class='text-3xl font-bold'>Clothes Store</h1>
        <nav>
        {categories.map((category) => <NavLink key={category.id} to={category.route}>{category.name}</NavLink>)}
        </nav>
        <Link to="/cart"><CartWidget /></Link>
        </header>
    )
}

export default NavBar