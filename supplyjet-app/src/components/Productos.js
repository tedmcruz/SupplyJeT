import img1 from "../images/bathrooms.jpg"
import img2 from "../images/lighting.jpg"
import img3 from "../images/floor-tiles.jpg"
import img4 from "../images/kitchen.jpg"
import img5 from "../images/office.jpg"
import img6 from "../images/hardware-store.jpg"
import img7 from "../images/construction.jpg"
import img8 from "../images/heavy-machinery.jpg"

export const productos = [
    {idDeProducto:"1", nombreDeProducto: "BAÑOS", descripcionDeProducto: "Este es un baño de calidad.", stockDeProducto:80, precioDeProducto: 10, imagenDeProducto:img1},
    {idDeProducto:"2", nombreDeProducto: "ILUMINACION", descripcionDeProducto: "Esta es una iluminacion de calidad.", stockDeProducto:70, precioDeProducto: 20, imagenDeProducto:img2},
    {idDeProducto:"3", nombreDeProducto: "PISOS", descripcionDeProducto: "Este es un piso de calidad.", stockDeProducto:60, precioDeProducto: 30, imagenDeProducto:img3},
    {idDeProducto:"4", nombreDeProducto: "COCINAS", descripcionDeProducto: "Esta es una cocina de calidad.", stockDeProducto:50, precioDeProducto: 40, imagenDeProducto:img4},
    {idDeProducto:"5", nombreDeProducto: "OFICINAS", descripcionDeProducto: "Esta es una oficina de calidad.", stockDeProducto:40, precioDeProducto: 50, imagenDeProducto:img5},
    {idDeProducto:"6", nombreDeProducto: "FERRETERIA", descripcionDeProducto: "Esta es una ferreteria de calidad.", stockDeProducto:30, precioDeProducto: 60, imagenDeProducto:img6},
    {idDeProducto:"7", nombreDeProducto: "CONSTRUCCION", descripcionDeProducto: "Esta es una construccion de calidad.", stockDeProducto:20, precioDeProducto: 70, imagenDeProducto:img7},
    {idDeProducto:"8", nombreDeProducto: "EQUIPOS", descripcionDeProducto: "Estos son equipos de calidad.", stockDeProducto:10, precioDeProducto: 80, imagenDeProducto:img8}
];
/* 
class Producto {
    constructor(idDeProducto, nombreDeProducto, descripcionDeProducto, stockDeProducto, precioDeProducto,) {
        this.idDeProducto = idDeProducto;
        this.nombreDeProducto = nombreDeProducto;
        this.descripcionDeProducto = descripcionDeProducto;
        this.stockDeProducto = stockDeProducto;
        this.precioDeProducto = precioDeProducto;
    }   
}
*/
const tareaAsincrona = new Promise((resolve, reject) => {
    setTimeout(() =>{
        resolve(productos);
    }, 3000); 
});

const runTareaAsincrona = () => {
    tareaAsincrona.then(resolvedProductos => {
        console.log("Productos",resolvedProductos);
        console.log("Si resolvio");
    },
    err => {
        console.log("No resolvio");
    }).catch(err=> {
        console.log("Algo diferente paso");
    }).then(() => {
        console.log("Se ejecuta siempre sin importar lo que pase")
    });
};

runTareaAsincrona();


// 2
const tareaAsincrona2 = new Promise((resolve, reject) => {
    setTimeout(() =>{
        if(productos.length == 0){
            reject("No hay productos definidos")
        }else{
            let productosConStock = [];
            productosConStock = productos.map(producto => ({"nombreDeProducto": producto["nombreDeProducto"], "stockDeProducto": producto["stockDeProducto"]}));
            resolve(productosConStock);
        };
    }, 3000); 
});

const runTareaAsincrona2 = () => {
    tareaAsincrona2.then(resolvedProductos2 => {
        resolvedProductos2.map(producto => console.log(producto.nombreDeProducto));
        console.log("Si resolvio");
    },
    err => {
        console.log("No resolvio");
    }).catch(err=> {
        console.log("Algo diferente paso");
    }).then(() => {
        console.log("Se ejecuta siempre sin importar lo que pase")
    });
};

runTareaAsincrona2();