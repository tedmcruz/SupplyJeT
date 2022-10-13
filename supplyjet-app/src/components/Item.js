import React from "react";
import {productos} from './Productos';



const Item = () => {

    return (

        <div className="todosLosProductos">
            {productos.map((producto) => (
                <article className="card" key={producto.idDeProducto}>
                    <img
                        src={producto.imagenDeProducto}
                        alt="1"
                    />
                    <div className="card-info">
                        <h2>{producto.nombreDeProducto}</h2>
                        <h4>${producto.precioDeProducto}</h4>
                        <h5>ID = {producto.idDeProducto}</h5>
                        <h6>#Categoria</h6>
                    </div>
                </article>
            ))}    
        </div>
    )
}    

export default Item