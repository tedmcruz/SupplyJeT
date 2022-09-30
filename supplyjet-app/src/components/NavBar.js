import mainlogo from '../images/supplyjet-temporal-logo.png';
import cartsymbol from '../images/shopping-cart-48.png';

const NavBar = () => {
    return (
        <div>
            <img src={mainlogo} id="supplyjetlogo" alt="SupplyJeT logo"></img>
            <nav>   
            <ul className="menu">
                <li className="menu__item">
                    <a className="menu__link" href="index.html">Inicio</a>
                </li>
                <li className="menu__item">
                    <a className="menu__link" href="nosotros.html">Nosotros</a> 
                </li>
                <li className="menu__item">
                    <a className="menu__link" href="cotizaciones.html">Cotizaciones</a> 
                </li>
                <li className="menu__item">
                    <a className="menu__link" href="preguntas-frecuentes.html">Preguntas Frecuentes</a> 
                </li>
                <li className="menu__item">
                    <a className="menu__link" href="contactanos.html">Contactanos</a>
                </li>
                <li className="menu__item">
                    <a className="menu__link" href="carrito.html"><img src={cartsymbol} alt='carrito'/></a>
                </li>
            </ul>
        </nav>
    </div>    
    )
}

export default NavBar