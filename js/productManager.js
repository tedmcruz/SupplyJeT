const products = [
];

const codeOfProducts = [

];

function testConstructor() 
{

    let name = prompt("INTRODUZCA NOMBRE DEL ARTICULO");

    let description = prompt("INTRODUZCA DESCRIPCION DE (DEL / DE LA) "+name+".");

    let price = prompt("INTRODUZCA PRECIO DE (DEL / DE LA) "+name);

    let thumbnail = "RUTA DE IMAGEN";

    let code = prompt("INTRODUZCA CODIGO DE (DEL / DE LA) "+name,"01");
    while (codeOfProducts.lenght === 0) {
        alert("DIGITAR CODIGO");
        code = prompt("INTRODUZCA CODIGO DE (DEL / DE LA) "+name,"01");
            if (codeOfProducts.includes(code)==true) {
                alert("CODIGO REPETIDO")
                code = prompt("INTRODUZCA CODIGO DE (DEL / DE LA) "+name,"01");
                if (codeOfProducts.includes(code)==true) {
                    alert("CODIGO REPETIDO")
                    break;
            };
        };
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
    products.push(product)
    codeOfProducts.push(product.code)
    console.log(products)
}

function searchForRepeatedCode(designatedCode){
    return designatedCode.code === code
}

function showProducts(){
    console.log(products)
}