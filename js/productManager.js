function testConstructor() 
{
    const nameOfProducts = [
        "BAÑOS",
        "ILUMINACION",
        "PISOS",
        "COCINAS",
        "OFICINAS",
        "FERRETERIA",
        "CONSTRUCCION",
        "EQUIPOS"
    ];

    const priceOfProducts = [
        10,
        20,
        30,
        40,
        50,
        60,
        70,
        80
    ];

    let name = prompt(nameOfProducts,"BAÑOS");
        while(nameOfProducts.includes(name)!=true) {
            alert("INTRODUZCA PRODUCTO VALIDO");
            name = prompt(nameOfProducts,"BAÑOS");
            // if (nameOfProducts.includes(name)==true) {
            //     break;
            // };
        };
    let price = parseFloat(priceOfProducts[nameOfProducts
.indexOf(name)]);
    let quantity = prompt("INTRODUZCA CANTIDAD DE "+name+" QUE DESEA.");
    
    class producto {
        constructor (name, price, quantity){
            this.name = name;
            this.price = parseFloat(price);
            this.quantity = parseInt(quantity);
        }
        sumarItbis() {
            this.price = this.quantity* this.price * 1.18;
            this.price = this.price.toFixed(2);
        }
        mostrar() {
            console.log("El price de "+this.quantity+" "+this.name+" = "+this.price+".")
        };
    }

    const product1 = new producto(name,price,quantity);
    product1.sumarItbis();
    product1.mostrar();
    
}