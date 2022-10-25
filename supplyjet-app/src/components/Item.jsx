import React from "react";
import Contador from "./Contador";



const Item = ({producto}) => {
    
    return (

        <div className="todosLosProductos">
                <article className="card cotizaciones__item">
                    <img
                        className="cotizaciones__imagenes"
                        src={producto.imagenDeProducto}
                        alt="1"
                    />
                    <div className="card-info cotizaciones__text">
                        <h2 className="cotizaciones__name">{producto.nombreDeProducto}</h2>
                        <h4>${producto.precioDeProducto}</h4>
                        <h5>ID-{producto.idDeProducto}</h5>
                        <h6>#{producto.categoriaDeProducto}</h6>
                    </div>
                    <Contador stock={producto.stockDeProducto} initial={0} />
                </article>

        </div>
        
    )
}    

export default Item