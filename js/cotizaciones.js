const lista = document.querySelector('#listado')

crearLista('../js/datos.json');

async function crearLista(file) {
    let jsonDatos = await fetch(file);
    let listaDatos = await jsonDatos.text();
    document.getElementById("prueba").innerHTML = JSON.parse(listaDatos);
  }

async function recopilarDatos(){
await fetch('../js/datos.json')
    .then( (res) => res.json())
    .then ( (datos) => {

        datos.forEach((producto) => {
            const li = document.createElement('li')
            li.innerHTML = `
                    <img ${producto.imagenDeProducto} class="cotizaciones__imagenes" alt="${producto.nombreDeProducto}">
                    <div class="cotizaciones__text">         
                    <h3 class="cotizaciones__name">${producto.nombreDeProducto}</h3>
                    <p class="cotizaciones__descripcion">Descripcion: ${producto.descripcionDeProducto}</p>
                    </div>
                    <div class="cotizaciones_precio">
                    <input id="numeroArticulo${producto.idDeProducto}" class="eventoEnter" type="number" placeholder="0">
                    </div>
                    <p id="textoArticulo${producto.idDeProducto}" class="precioArticulo"></p>
                `
            li.classList.add('cotizaciones__item');
            lista.append(li);
        });
    });
};

// function crearVariablesDeArticulos(){
//     var numeroDeArticulo = [];
//     var cantidadTotalDeArticulos=10;
//     for (var idDeArticulo = 1; idDeArticulo <= cantidadTotalDeArticulos; ++idDeArticulo) {
//         numeroDeArticulo[idDeArticulo] = idDeArticulo;
//     }
    
//     console.log(numeroDeArticulo);
//     return numeroDeArticulo;
//     }

// var cantidadTotalDeArticulos=10;
// alert (cantidadTotalDeArticulos);
// for (var numeroSequencia = 1; numeroSequencia < cantidadTotalDeArticulos; numeroSequencia++) { 
//     window["precioTotalArticulo"+numeroSequencia] = new Object(numeroSequencia);
//     window["numeroArticulo"+numeroSequencia] = new Object(numeroSequencia);
// }

let botonRegistro;
    botonRegistro=document.getElementById("botonCotizacionesArticulos");
    botonRegistro.onclick = function () {
    obtenerNumero()
};

/*
document.getElementById("numeroArticulo1").value=parseInt(JSON.parse(localStorage.getItem("numeroGuardado1")));
document.getElementById("numeroArticulo2").value=parseInt(JSON.parse(localStorage.getItem("numeroGuardado2")));
document.getElementById("numeroArticulo3").value=parseInt(JSON.parse(localStorage.getItem("numeroGuardado3")));
document.getElementById("numeroArticulo4").value=parseInt(JSON.parse(localStorage.getItem("numeroGuardado4")));    
*/

/*
let productoGenerico = document.getElementsByClassName("cotizaciones__name");
for (let numeroDeProductosGenericos = 0; numeroDeProductosGenericos < productoGenerico.length; numeroDeProductosGenericos++) {
let indice=productos.findIndex(productos => productos.id === numeroDeProductosGenericos+1);
let nombreDeProductoGenerico=eliminarComillas(JSON.stringify(productos[indice].nombreDeProducto));
productoGenerico[numeroDeProductosGenericos].innerHTML = nombreDeProductoGenerico;
}
*/

function eliminarComillas(palabraConComillas) {
    let palabraSinComillas;
    palabraSinComillas=palabraConComillas.replaceAll('"','');
    return palabraSinComillas;
};

async function obtenerNumero() {

    var cantidadTotalDeArticulos=10;
    // for (var numeroSequencia = 1; numeroSequencia < cantidadTotalDeArticulos; numeroSequencia++) { 
    //     window["precioTotalArticulo"+numeroSequencia] = new Object(numeroSequencia);
    //     window["numeroArticulo"+numeroSequencia] = new Object(numeroSequencia);
    // }

    let precioTotalTodosLosArticulos;
    await fetch('../js/datos.json')
    .then( (res) => res.json())
    .then ( (datos) => {

        datos.forEach((producto) => {

            numeroArticuloParaFormula = "numeroArticulo"+producto.idDeProducto;
            numeroArticuloCotizacion = document.getElementById(numeroArticuloParaFormula).value;
            numeroArticuloCotizacion = parseFloat(numeroArticuloCotizacion);
            let texto;
            if (isNaN(numeroArticuloCotizacion)) {
            texto = "No Valido";
            precioTotalArticulo1=0;
            } else if (Number.isInteger(numeroArticuloCotizacion) && numeroArticuloCotizacion>=parseInt(0)) {
            texto = "El costo de "+numeroArticuloCotizacion+" baños es de "+numeroArticuloCotizacion*producto.precioDeProducto+" pesos.";
            window["precioTotalArticulo"+producto.idDeProducto]=numeroArticuloCotizacion*producto.precioDeProducto;
            } else  {
                texto = "El numero tiene que ser positivo y entero.";
            }
            document.getElementById("textoArticulo1").innerHTML = texto;
            precioTotalTodosLosArticulos=precioTotalArticulo1+precioTotalArticulo2+precioTotalArticulo3+precioTotalArticulo4;
            textoPrecioTotal="El costo de todos los articulos es de "+precioTotalTodosLosArticulos+" pesos.";
            document.getElementById("cotizaciones_precio_total").innerHTML = textoPrecioTotal;
            localStorage.setItem("numeroGuardado1",JSON.stringify(numeroArticuloCotizacion));
            localStorage.setItem("textoArticulo1",JSON.stringify(texto));
        });
    });
    
    //     numeroArticuloCotizacion = document.getElementById("numeroArticulo2").value;
    //     numeroArticuloCotizacion = parseFloat(numeroArticuloCotizacion);
    //     if (isNaN(numeroArticuloCotizacion)) {
    //     texto = "No Valido";
    //     precioTotalArticulo2=0;
    //     } else if (Number.isInteger(numeroArticuloCotizacion) && numeroArticuloCotizacion>=parseInt(0)) {
    //     texto = "El costo de "+numeroArticuloCotizacion+" iluminacion es de "+numeroArticuloCotizacion*20+" pesos.";
    //     precioTotalArticulo2=numeroArticuloCotizacion*20;
    //     } else  {
    //         texto = "El numero tiene que ser positivo y entero.";
    //     }
    //     document.getElementById("textoArticulo2").innerHTML = texto;
    //     precioTotalTodosLosArticulos=precioTotalArticulo1+precioTotalArticulo2+precioTotalArticulo3+precioTotalArticulo4;
    //     textoPrecioTotal="El costo de todos los articulos es de "+precioTotalTodosLosArticulos+" pesos.";
    //     document.getElementById("cotizaciones_precio_total").innerHTML = textoPrecioTotal;
    //     localStorage.setItem("numeroGuardado2",JSON.stringify(numeroArticuloCotizacion));
    //     localStorage.setItem("textoArticulo2",JSON.stringify(texto));


    //     numeroArticuloCotizacion = document.getElementById("numeroArticulo3").value;
    //     numeroArticuloCotizacion = parseFloat(numeroArticuloCotizacion);
    //     if (isNaN(numeroArticuloCotizacion)) {
    //     texto = "No Valido";
    //     precioTotalArticulo3=0;
    //     } else if (Number.isInteger(numeroArticuloCotizacion) && numeroArticuloCotizacion>=parseInt(0)) {
    //     texto = "El costo de "+numeroArticuloCotizacion+" pisos es de "+numeroArticuloCotizacion*30+" pesos.";
    //     precioTotalArticulo3=numeroArticuloCotizacion*30;
    //     } else  {
    //         texto = "El numero tiene que ser positivo y entero.";
    //     }
    //     document.getElementById("textoArticulo3").innerHTML = texto;
    //     precioTotalTodosLosArticulos=precioTotalArticulo1+precioTotalArticulo2+precioTotalArticulo3+precioTotalArticulo4;
    //     textoPrecioTotal="El costo de todos los articulos es de "+precioTotalTodosLosArticulos+" pesos.";
    //     document.getElementById("cotizaciones_precio_total").innerHTML = textoPrecioTotal;
    //     localStorage.setItem("numeroGuardado3",JSON.stringify(numeroArticuloCotizacion));
    //     localStorage.setItem("textoArticulo3",JSON.stringify(texto));


    //     numeroArticuloCotizacion = document.getElementById("numeroArticulo4").value;
    //     numeroArticuloCotizacion = parseFloat(numeroArticuloCotizacion);
    //     if (isNaN(numeroArticuloCotizacion)) {
    //     texto = "No Valido";
    //     precioTotalArticulo4=0;
    //     } else if (Number.isInteger(numeroArticuloCotizacion) && numeroArticuloCotizacion>=parseInt(0)) {
    //     texto = "El costo de "+numeroArticuloCotizacion+" cocinas es de "+numeroArticuloCotizacion*40+" pesos.";
    //     precioTotalArticulo4=numeroArticuloCotizacion*40;
    //     } else  {
    //         texto = "El numero tiene que ser positivo y entero.";
    //     }
    //     document.getElementById("textoArticulo4").innerHTML = texto;
    //     precioTotalTodosLosArticulos=precioTotalArticulo1+precioTotalArticulo2+precioTotalArticulo3+precioTotalArticulo4;
    //     textoPrecioTotal="El costo de todos los articulos es de "+precioTotalTodosLosArticulos+" pesos.";
    //     document.getElementById("cotizaciones_precio_total").innerHTML = textoPrecioTotal;
    //     localStorage.setItem("numeroGuardado4",JSON.stringify(numeroArticuloCotizacion));
    //     localStorage.setItem("textoArticulo4",JSON.stringify(texto));

};