import React from "react";
import './NavBar.css'
import CartWidget from "../CartWidget/CartWidget";
const NavBar =()=>{
    return (
    <>
<h1>Tu E-Moto</h1>

<ul>
<li>
<a href="">Inicio</a>
</li>
<li>
<a href="">Productos</a>
</li>
<li>
<a href="">Contacto</a>
</li>
<li>
<a href="">Nosotros</a>
</li>

</ul>

<CartWidget/>

    </>
    )
}
export default NavBar;