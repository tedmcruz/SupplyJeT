const fs = require("fs");
const { stringify } = require("querystring");

class productManager {

    #pathOfProducts = "./Products.json"; //#path is used to make a private path that is not accessible outside of the class

    // constructor(pathOfProducts){
    //     this.#pathOfProducts = pathOfProducts
    // }

    async createProduct (id, name, description, price, thumbnail, code, stock){
        const newProduct = {
        id,
        name,
        description,
        price,
        thumbnail,
        code,
        stock
        };

        const products = await this.fetchProducts();

        const updatedProducts = [...products, newProduct];

        await fs.promises.writeFile(this.#pathOfProducts,JSON.stringify(updatedProducts));
    }

    async fetchProducts() {
        try {
            const products = await fs.promises.readFile(this.#pathOfProducts,"utf-8");

            return JSON.parse(products);
        }   catch (emptyProductsFile) {
            return [0];
        }
    }
}

async function addProduct() {

    const product = new productManager();

    // console.log(await product.fetchProducts());

    let products = await product.fetchProducts();

    let id;

    let lastId;

    if(products.length===0 ||lastId===0 || lastId===null){
        lastId = 0;
    } else {
        lastId = products.reduce((array, product) => {
            return (array = array> product.id ? array : product.id);
        });
    };

    // console.log("last id = "+lastId);
    if (lastId===0 || lastId===null){
        id=1;
    } else {
        id = lastId + 1;
    }
    // console.log("id = "+id);

    let name = "Mario";
    // prompt("INTRODUZCA NOMBRE DEL ARTICULO");

    let description = "Party";
    // prompt("INTRODUZCA DESCRIPCION DE (DEL / DE LA) "+name+".");

    let price = 2000;
    // prompt("INTRODUZCA PRECIO DE (DEL / DE LA) "+name);

    let thumbnail = "RUTA DE IMAGEN";

    let code = 01;
    // prompt("INTRODUZCA CODIGO DE (DEL / DE LA) "+name+".");
    // while (code === 0 || codeOfProducts.includes(code)===true || code === undefined || code === NaN || code === null || code.trim() === "") {
    //     if (codeOfProducts.includes(code)!=true && code != 0 && code != null && code != NaN && code != undefined && code.trim() != "") {
    //         break;
    //     };
    //     alert("DIGITAR CODIGO NO REPETIDO");
    //     code = prompt("INTRODUZCA CODIGO DE (DEL / DE LA) "+name+".");
    // };

    let stock = 500;
    // prompt("INTRODUZCA CANTIDAD DISPONIBLE DE "+name+".");

    await product.createProduct(
        id,
        name,
        description,
        price,
        thumbnail,
        code,
        stock
    )

    // console.log(name);

    // console.log(description);

    // console.log(price);

    // console.log(thumbnail);

    // console.log(code);
    
    // console.log(stock);
    showAddedProduct = JSON.stringify(await product.fetchProducts());

    console.log("ADD PRODUCT = "+showAddedProduct)
}

async function searchProductById(){

    const product = new productManager();

    // console.log(await product.fetchProducts());

    let products = await product.fetchProducts();

    let searchedProduct;
    searchedProduct = products.findIndex(search => search.id === product.id);
    if (searchedProduct > -1) products[searchedProduct] = element;
    else products.push(element);
      

    // let searchedProduct;
    // let code = prompt("INTRODUZCA CODIGO DEL ARTICULO DECEADO PARA LA BUSQUEDA.");
    // if (code === 0 || products.length === 0 || products.length === undefined ||codeOfProducts.includes(code)!=true || code === null || code === undefined) {
    //     alert("CODIGO NO EXISTE");}
    // else if (codeOfProducts.includes(code)===true) {
    //         searchedProduct = products.find(product => product.code === code);
    //         console.log(searchedProduct);
    //     };
    // console.log("El codigo introducido fue ="+code)
};

async function getProductById(products,searchedId){

    const product = new productManager();
    products = await product.fetchProducts();
    // console.log(products);
    searchedId = 2 ;
    let searchedProduct = products.filter(searchedProduct => searchedProduct.id===searchedId);
    // let searchedProduct = products.filter(searchedProduct =>
    //     {return searchedProduct.id.includes(searchedId);
    //     });
    console.log(searchedProduct);
}

async function showProducts(){
    const products = fs.readFileSync("./Products.json","utf-8")
    console.log("SHOW PRODUCTS = "+products);
}

async function updateProduct(){
    const product = new productManager();
    // let products = await product.fetchProducts();
    // let productIdToUpdate = 1;
    let productToUpdate = getProductById();
    let detailsToUpdate = {id:2,name:"Jose",price:250};
    let updatedProduct = Object.assign(productToUpdate,detailsToUpdate)

    
    console.log([updatedProduct]);
    // updateProduct=JSON.stringify(updateProduct);
    // console.log("UPDATE PRODUCT = "+updateProduct);
    // await fs.promises.writeFile("./Products.json",updateProduct)
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

    // addProduct ();
    // getProducts();
    // getProductById();
    // updateProduct();


    const fs = require("fs");

class ProductManager {
    #nextId = 0;
    #path;
    //  = "./Products.json"; //#path is used to make a private path that is not accessible outside of the class


    constructor(path){
        this.#path = path
    }

    async getProducts() {
    try {
        const products = await fs.promises.readFile(this.#path,"utf-8");

        return JSON.parse(products);
    }   catch (emptyProductsFile) {
        return [];
    }
    }

    async getProductById(productId){
        const products = await this.getProducts();

        let searchedProduct = products.find(p => p.id === productId);

        if (!searchedProduct) {
            throw new Error(`Product with Product ID ${productId} doesn't exist.`)
        }

        console.log(searchedProduct);
        // if (searchedProduct.id === id){
        //     return searchedProduct = products.filter(searchedProduct => searchedProduct.id===searchedId)
        // }
    }

    async addProduct(name, description, price, thumbnail, code, stock){
        const products = await this.getProducts();

        let id = products.length +1; // = this.#nextId

        const newProduct = {
        id,
        name,
        description,
        price,
        thumbnail,
        code,
        stock
        };

        const addedProducts = [...products, newProduct];

        await fs.promises.writeFile(this.#path,JSON.stringify(addedProducts));

        // this.#nextId += 1;
    }
    

    async updateProduct(productId,newName, newDescription, newPrice, newThumbnail, newCode, newStock){
        const products = await this.getProducts();

        
        let productToModifyById = products.find(p => p.id === productId);

        if (!productToModifyById){
            throw new Error(`Product ID ${productId} not found.`)
        }

        const updatedProduct = {
            ...productToModifyById,
            name : newName, 
            description : newDescription, 
            price : newPrice, 
            thumbnail : newThumbnail, 
            code : newCode, 
            stock : newStock 
        };
        console.log(updatedProduct);
        
    }

    async deleteProduct(productId){
        const products = await this.getProducts();

        
    }
}


async function main () {
    const manager = new ProductManager("./Products.json");

    let products = await manager.getProducts();

    // console.log(products);

    // await manager.addProduct("name", "description", 20, "thumbnail", 300, 4000);

    // await manager.getProductById(2);

    await manager.updateProduct(2,"Joyas", "Oro", 30, "thumbnail", 30, 2000 );

    products = await manager.getProducts();

    // console.log(products);
}

main();