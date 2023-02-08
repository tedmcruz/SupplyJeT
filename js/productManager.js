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
    let price = parseFloat(priceOfProducts[nameOfProducts.indexOf(name)]);
    let stock = prompt("INTRODUZCA CANTIDAD DE "+name+" QUE DESEA.");
    
    class productManager {

        constructor (name, description, price, thumbnail, code, stock){
            this.name = name;
            this.price = parseFloat(price);
            this.stock = parseInt(stock);
        }
        sumarItbis() {
            this.price = this.stock* this.price * 1.18;
            this.price = this.price.toFixed(2);
        }
        mostrar() {
            console.log("El price de "+this.stock+" "+this.name+" = "+this.price+".")
        };
    }

    const product = new productManager(name, description, price, thumbnail, code, stock);
    product.sumarItbis();
    product.mostrar();
    
}