import React from "react";
import Contador from "./Contador";
// import Item from './Item'

const ItemDetail = ({item}) => {
    return (
        <div className="detalleDeProductoEscogido">
            <article className="chosen-card">
                <img
                    src={item.imagenDeProducto}
                    alt="1"
                />
                <div className="chosen-card-info">
                    <h2>{item.nombreDeProducto}</h2>
                    <h4>${item.precioDeProducto}</h4>
                    <h5>ID-{item.idDeProducto}</h5>
                    <h6>#{item.categoriaDeProducto}</h6>                    
                </div>                
            </article>
            <Contador stock={item.stockDeProducto} initial={0}/>    
        </div>
    )
}    

export default ItemDetail