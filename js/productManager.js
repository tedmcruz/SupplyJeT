function testConstructor() 
{
    const nombresDeProductos = [
        "BAÑOS",
        "ILUMINACION",
        "PISOS",
        "COCINAS",
        "OFICINAS",
        "FERRETERIA",
        "CONSTRUCCION",
        "EQUIPOS"
    ];

    const preciosDeProductos = [
        10,
        20,
        30,
        40,
        50,
        60,
        70,
        80
    ];

    let nombre = prompt(nombresDeProductos,"BAÑOS");
        while(nombresDeProductos.includes(nombre)!=true) {
            alert("INTRODUZCA PRODUCTO VALIDO");
            nombre = prompt(nombresDeProductos,"BAÑOS");
            // if (nombresDeProductos.includes(nombre)==true){
            //     break;
            // };
        };
    let precio = parseFloat(preciosDeProductos[nombresDeProductos.indexOf(nombre)]);
    let cantidad = prompt("INTRODUZCA CANTIDAD DE "+nombre+" QUE DESEA.");
    
    class producto {
        constructor (nombre, precio, cantidad){
            this.nombre = nombre;
            this.precio = parseFloat(precio);
            this.cantidad = parseInt(cantidad);
        }
        sumarItbis() {
            this.precio = this.cantidad* this.precio * 1.18;
            this.precio = this.precio.toFixed(2);
        }
        mostrar() {
            console.log("El precio de "+this.cantidad+" "+this.nombre+" = "+this.precio+".")
        };
    }

    const producto1 = new producto(nombre,precio,cantidad);
    producto1.sumarItbis();
    producto1.mostrar();
    
}