import React, {useEffect, useState} from "react";
import ItemList from './ItemList';
import {productos} from './Productos';

const ItemListContainer = () => {
    const [items,setItems] = useState([]);

    useEffect(() => {
        const traerProductos = () => {
            return new Promise((res,rej) => {
                setTimeout(() => {
                    res(productos);
                }, 2000);
            });
        };
        traerProductos()
            .then((res) =>{
                setItems(res);
            }) 
            .catch((error) => {
                console.log(error);
            })
    }, []);

    return (
        <div>
            <h2 className="page__header">DEPARTAMENTOS</h2>
                <ItemList items={items}/>
        </div>
    )
}    

export default ItemListContainer