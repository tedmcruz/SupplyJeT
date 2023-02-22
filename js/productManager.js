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
    while (code === 0 || codeOfProducts.includes(code)===true || code === undefined || code === NaN || code === null || code.trim() === "") {
        if (codeOfProducts.includes(code)!=true && code != 0 && code != null && code != NaN && code != undefined && code.trim() != "") {
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

function getProductById(){
    let searchedProduct;
    let code = prompt("INTRODUZCA CODIGO DEL ARTICULO DECEADO PARA LA BUSQUEDA.");
    if (code === 0 || products.length === 0 || products.length === undefined ||codeOfProducts.includes(code)!=true || code === null || code === undefined) {
        alert("CODIGO NO EXISTE");}
    else if (codeOfProducts.includes(code)===true) {
            searchedProduct = products.find(product => product.code === code);
            console.log(searchedProduct);
        };
    console.log("El codigo introducido fue ="+code)
    };

function showProducts(){
    console.log(products)
}

function eliminateProductByCode(){
    const filteredProducts = Array.from(products);
    let code = prompt("INTRODUZCA CODIGO DEL ARTICULO QUE DESEA ELIMINAR.");
    if (code === 0 || products.length === 0 || products.length === undefined ||codeOfProducts.includes(code)!=true || code === null || code === undefined) {
        alert("CODIGO NO EXISTE");}
    else if (codeOfProducts.includes(code)===true) {
            eliminateProduct = filteredProducts.find(product => product.code === code);
            console.log(eliminateProduct);
        };
    console.log("El codigo introducido fue ="+code)
    const codeOfProductoToRemove = filteredProducts.findIndex((product) => product.code === code);
        filteredProducts.splice(codeOfProductoToRemove, code);
        console.log(filteredProducts);
    };