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

    let name = prompt("INTRODUZCA NOMBRE DEL ARTICULO");

    let description = prompt("INTRODUZCA DESCRIPCION DE (DEL / DE LA) "+name+".");

    let price = prompt("INTRODUZCA PRECIO DE (DEL / DE LA) "+name);

    let thumbnail = "Ruta de Imagen";

    let code = prompt(codeOfProducts,"01");
    while(codeOfProducts.includes(code)!=true) {
        alert("CODIGO REPETIDO");
        code = prompt(codeOfProducts,"01");
            // if (nameOfProducts.includes(name)==true) {
            //     break;
            // };
        };

    let stock = prompt("INTRODUZCA CANTIDAD DISPONIBLE DE "+name+".");
    
    class productManager {

        constructor (name, description, price, thumbnail, code, stock){
            this.name = name;
            this.description = description;
            this.price = parseFloat(price);
            this.thumbnail = thumbnail;
            this.code = code;
            this.stock = parseInt(stock);
        }
        mostrar() {
            console.log(nameOfProducts);
        };
    }

    const product = new productManager(name, description, price, thumbnail, code, stock);
    product.mostrar();
}