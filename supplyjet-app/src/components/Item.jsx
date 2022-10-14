import React from "react";



const Item = ({producto}) => {
    
    return (

        <div className="todosLosProductos">
                <article className="card">
                    <img
                        src={producto.imagenDeProducto}
                        alt="1"
                    />
                    <div className="card-info">
                        <h2>{producto.nombreDeProducto}</h2>
                        <h4>${producto.precioDeProducto}</h4>
                        <h5>ID-{producto.idDeProducto}</h5>
                        <h6>#{producto.categoriaDeProducto}</h6>
                    </div>
                </article>    
        </div>
        
    )
}    

export default Item