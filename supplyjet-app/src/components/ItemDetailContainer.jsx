import React, { useEffect, useState } from "react";
import ItemDetail from './ItemDetail';
import {productos} from './Productos';

const ItemDetailContainer = () => {
    const [item, setItem] = useState({});

    useEffect(() => {
        const traerProducto = () => {
            return new Promise((res,rej) => {
                const producto = productos.find((prod) => prod.idDeProducto === 1);
                console.log(producto);
                setTimeout(() => {
                    res(producto);
                }, 2000);
            });
        };
        traerProducto()
            .then((res) =>{
                setItem(res);
            }) 
            .catch((error) => {
                console.log(error);
            })
    }, []);

    return (
        <div>
                <ItemDetail item={item}/>
        </div>
    )
};    

export default ItemDetailContainer