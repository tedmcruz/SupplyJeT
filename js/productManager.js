const products = [
];

const codeOfProducts = [

];

function testConstructor() 
{
    const codeOfProductsLength = codeOfProducts.length;

    let id = codeOfProductsLength+1;

    let name = prompt("INTRODUZCA NOMBRE DEL ARTICULO");

    let description = prompt("INTRODUZCA DESCRIPCION DE (DEL / DE LA) "+name+".");

    let price = prompt("INTRODUZCA PRECIO DE (DEL / DE LA) "+name);

    let thumbnail = "RUTA DE IMAGEN";

    let code = prompt("INTRODUZCA CODIGO DE (DEL / DE LA) "+name+".");
    while (code === 0 || codeOfProductsLength === 0 || codeOfProducts.includes(code)===true) {
        if (codeOfProducts.includes(code)!=true && code != 0 && code != null && code != undefined) {
            break;
        };
        alert("DIGITAR CODIGO NO REPETIDO");
        code = prompt("INTRODUZCA CODIGO DE (DEL / DE LA) "+name+".");
    };
    let stock = prompt("INTRODUZCA CANTIDAD DISPONIBLE DE "+name+".");
    
    class productManager {

        constructor (id, name, description, price, thumbnail, code, stock){
            this.id = id;
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

    const product = new productManager(id, name, description, price, thumbnail, code, stock);
    products.push(product)
    codeOfProducts.push(product.code)
    console.log(products)
}

function getProductsById(){
    let searchedProduct = [];
    let code = prompt("INTRODUZCA CODIGO DEL ARTICULO DECEADO PARA LA BUSQUEDA.");
    while (code === 0 || codeOfProductsLength === 0 || codeOfProducts.includes(code)!=true || code === null || code === undefined) {
        if (codeOfProducts.includes(code)=true) {
            searchedProduct.push = code;
            break;
        };
        alert("CODIGO NO EXISTE");
        code = prompt("INTRODUZCA CODIGO DEL ARTICULO DECEADO PARA LA BUSQUEDA.");
    };
    console.log(searchedProduct);
}

function showProducts(){
    console.log(products)
}