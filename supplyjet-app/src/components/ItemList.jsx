import React from "react";
import Item from './Item'

const ItemList = ({ items }) => {
    return (
        <div className="item-list">
            {items.map((producto) => {
                return <Item producto={producto} key={producto.idDeProducto} />
            })}            
        </div>
    )
}    

export default ItemList