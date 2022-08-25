// Commentary

/* 
Multiline
Commentary
*/

/* 
Notes
Variables are defined by "let" and "var". These are modifiable.
Constants are defined by "const". This is not modifiable.
Use specific variable and constant names and use lowercase letter or camelCase while naming them. Don't use accents or spaces.
Number: Numbers and functions
Strings: Letters
Use " ; " at the end of every line in JS, unless it is an "if" function.
It is possibe to do mathematical formulas in JS without any aditional steps other then writng the function.
If the add fuction is used on a string, it will concatenate the strings without spaces.
To asigne a value to a variable, use " = " sign.
One "=" asigns, two "==" compares, three "===" compares value and type of data.
"!=" different from. "!==" stictly different from.
" < , <= , > , >= " comparative operators.
"&&" = and , "||" = or , "!" = not.
To use prompt it is imperative to use an " = " sign, for ex:[ let name = prompt("Enter Name","No name entered"); ] , this allows for user input. Whatever is witten after the " , " will be the default value if nothing is entered.
To use console it is imperative to use an " = " sign, for ex:[ console.log("Test message"); ] , this shows "Test message" on brower console.
To use alert it is not necessary to use " = " sign, for ex:[ alert("Test message"); ] , this will alert for user of message "Test message".
To convert a string to an integer use "parseInt()" function.
To convert an Integer to a String use se the "toString()" function.
To use for it is necessary to identify start (this funciton is executed), condition to end (which is compared to) and variation of code (increase or decrease, which is executed), for ex:[ for (let i = 1; i <= 10; i++)] ("i++"" means that the next sequence will add "1" to "i", which could be replaced with i=i+1)
When using 'break' inside "for", it will break code when "if" condition is met.
When using "continue" inside "for", it will skip code when "if" condition is met and continue with next value.
When using "while", the code will restart (rerun) as long as the "while" condition is met.
When using "do" "while", there is no need to put a new prompt at the end.
When using "switch" within "while", the code run will skip until the "case" with the entered value. The "default" will run when the prompt value doesn't match a "case" value.
*/

// alert("Este pagina es para compras y cotizaciones en SUPPLYJET");

function probarCodigo()
    {   
        let nombre=prompt("Ingrese Nombre","John");
        let apellido=prompt("Ingrese Apellido","Smith");
        let edad=prompt("Ingrese edad",33)
        let suma;
        var numeroA;
        let numeroB;
            numeroA=prompt("Numero primer a sumar",1);
            numeroB=prompt("Segundo numero a sumar",2);
            suma=parseInt(numeroA)+parseInt(numeroB);
            mensaje="Soy "+ nombre + " " + apellido + " y tengo " + edad + " años de edad." + " El resultado de la suma solicitada = "+suma+".";
        alert(mensaje);
        console.log(mensaje);

        let nombre1=prompt("Ingrese Nombre","John");
        let numero1=prompt("Ingrese Numero del cual quiere saber los primero 10 multiplos",1);
        for(i=1;i<=10;i=i+1) {
            let resultado1=numero1*i;
            console.log("Saludos "+nombre1+". El resultado de "+numero1+" X "+i+" = "+resultado1+".");
        }

        let paisDeOrigen2=prompt("Adivine mi pais de origen","Pista = RD");
        let i2 = 1;
        while(paisDeOrigen2!="ESC"){
            if(paisDeOrigen2=="Republica Dominicana"||paisDeOrigen2=="republica dominicana"||paisDeOrigen2=="REPUBLICA DOMINICANA"){
                console.log("Felicitaciones adivino correctamente mi pais de origen en su intento numero "+i2+".");
                alert("Felicitaciones adivino correctamente mi pais de origen en su intento numero "+i2+".");
                break;
                }
            console.log("Mi pais de origen no es "+paisDeOrigen2+" favor intentar nuevamente o precionar ESC cuando aparezca el espacio nuevamente. Numero de intentos fallidos = "+i2+".");
            alert("Mi pais de origen no es "+paisDeOrigen2+" favor intentar nuevamente o precionar ESC cuando aparezca el espacio nuevamente. Numero de intentos fallidos = "+i2+".");
            i2=i2+1
            paisDeOrigen2=prompt("Adivine mi pais de origen","Pista = RD");
        }

        let i3;
        let numero3=prompt("Ingrese numero de veces que se repetira la palabra HOLA",10)
        for(i3=1;i3<=numero3;i3=i3+1){
            console.log("HOLA")

        }

        let nombre4=prompt("Ingrese Nombre","John");
        let numero4=prompt("Ingrese Numero del cual quiere saber 10 numeros que le siguen",0);
        console.log("Saludos "+nombre4+". Los 10 numeros que le siguen a "+numero4+" son:");
        for(i4=1;i4<=10;i4=i4+1) {
            let resultado4=parseInt(numero4)+parseInt(i4);
            console.log(i4+" = "+resultado4);
        }

    }

    function solicitarNombre() {
        let nombre;
        nombre=prompt("Ingrese Nombre","John");
        console.log("Digito que su nombre es"+" "+nombre);
    }

    function solicitarApellido() {
        let apellido;
        apellido=prompt("Ingrese Apellido","Smith");
        console.log("Digito que su apellido es"+" "+apellido);
    }

    function solicitarNombreCompleto(nombre,apellido) {
        nombre=solicitarNombre();
        apellido=solicitarApellido();
    }

    function buscarNumero() {
        let variedadDeArticulos;
        do {
          variedadDeArticulos = prompt("Favor de Digitar un numero", 0);
        } while ( !isFinite(variedadDeArticulos) );
        if (variedadDeArticulos === null || nvariedadDeArticulos === '') return null;
        return +variedadDeArticulos;
      }

    function mostrar(mensajeConsola) {
        console.log(mensajeConsola);
    }

    function solicitarVariedadDeArticulos() {
        let variedadDeArticulos;
        do {
          variedadDeArticulos = prompt("Ingrese la cantidad de variedad de articulos que va a cotizar.", 0);
        } while ( !isFinite(variedadDeArticulos) );
        if (variedadDeArticulos === null || variedadDeArticulos === '') return null;
        console.log("Digito que la cantidad de variedad de articulos a cotizar sera de"+" "+variedadDeArticulos+".");
        return +variedadDeArticulos;
    }

    function descuentoPorCodigo() {
        let codigoDeDescuento=prompt("Digitar Codigo de Descuento");
        while(codigoDeDescuento!="ESC"){
            if (codigoDeDescuento=="RepDom"){
                    descuento=0.20;
                    console.log("Felicitaciones! Codigo de descuento valido para un descuento del 20% !");
                    alert("Felicitaciones! Codigo de descuento valido para un descuento del 20% !");
                    return descuento;
                }
            console.log("El codigo"+" "+codigoDeDescuento+" "+"favor intentar nuevamente o precionar ESC cuando aparezca el espacio nuevamente.");
            alert("El codigo"+" "+codigoDeDescuento+" "+"favor intentar nuevamente o precionar ESC cuando aparezca el espacio nuevamente.");
            codigoDeDescuento=prompt("Digitar Codigo de Descuento");
        }
        if (codigoDeDescuento=="ESC"){
            descuento=0;
            return descuento;
        }
    }

    function probarSimulador() 
    {
        let nombreCompleto=solicitarNombreCompleto();
        let nombreArticulos=["BAÑOS","ILUMINACION","PISOS","COCINAS","OFICINAS","FERRETERIA","CONSTRUCCION","EQUIPOS"];
        let itbis=1.18;
        let banos=10;
        let numeroBanos=0;
        let iluminacion=20;
        let numeroIluminacion=0;
        let pisos=30;
        let numeroPisos=0;
        let cocinas=40;
        let numeroCocinas=0;
        let oficinas=50;
        let numeroOficinas=0;
        let ferreteria=60;
        let numeroFerreteria=0;
        let construccion=70;
        let numeroConstruccion=0;
        let equipos=80;
        let numeroEquipos=0;
        let variedadDeArticulos=solicitarVariedadDeArticulos();
        let variedad=1;

        let articuloCotizacion;
        // while(articuloCotizacion!="ESC"||variedad!=variedadDeArticulos||variedadDeArticulos!=0){  
        for(variedad=1;variedad<=variedadDeArticulos;variedad=variedad+1) {
                articuloCotizacion=prompt("Ingrese nombre de articulo que desea cotizar.");
                let numeroDeArticulos=parseInt(prompt("Ingrese la cantidad de"+" "+articuloCotizacion+" "+"que desea cotizar."));
                if (articuloCotizacion=="BAÑOS") {
                    numeroBanos=numeroDeArticulos;
                    console.log("Usted a solicitado cotizar"+" "+numeroDeArticulos+" "+articuloCotizacion+".");
                    // variedad=variedad+1;
                    // articuloCotizacion=prompt("Ingrese nombre de articulo que desea cotizar.");
                }
                else if (articuloCotizacion=="ILUMINACION") {
                    numeroIluminacion=numeroDeArticulos;
                    console.log("Usted a solicitado cotizar"+" "+numeroDeArticulos+" "+articuloCotizacion+".");
                    // variedad=variedad+1;
                    // articuloCotizacion=prompt("Ingrese nombre de articulo que desea cotizar.");
                }
                else if (articuloCotizacion=="PISOS") {
                    numeroPisos=numeroDeArticulos;
                    console.log("Usted a solicitado cotizar"+" "+numeroDeArticulos+" "+articuloCotizacion+".");
                    // variedad=variedad+1;
                    // articuloCotizacion=prompt("Ingrese nombre de articulo que desea cotizar.");
                }
                else if (articuloCotizacion=="COCINAS") {
                    numeroCocinas=numeroDeArticulos;
                    console.log("Usted a solicitado cotizar"+" "+numeroDeArticulos+" "+articuloCotizacion+".");
                    // variedad=variedad+1;
                    // articuloCotizacion=prompt("Ingrese nombre de articulo que desea cotizar.");
                }
                else if (articuloCotizacion=="OFICINAS") {
                    numeroOficinas=numeroDeArticulos;
                    console.log("Usted a solicitado cotizar"+" "+numeroDeArticulos+" "+articuloCotizacion+".");
                    // variedad=variedad+1;
                    // articuloCotizacion=prompt("Ingrese nombre de articulo que desea cotizar.");
                }
                else if (articuloCotizacion=="FERRETERIA") {
                    numeroFerreteria=numeroDeArticulos;
                    console.log("Usted a solicitado cotizar"+" "+numeroDeArticulos+" "+articuloCotizacion+".");
                    // variedad=variedad+1;
                    // articuloCotizacion=prompt("Ingrese nombre de articulo que desea cotizar.");
                }
                else if (articuloCotizacion=="CONSTRUCCION") {
                    numeroConstruccion=numeroDeArticulos;
                    console.log("Usted a solicitado cotizar"+" "+numeroDeArticulos+" "+articuloCotizacion+".");
                    // variedad=variedad+1;
                    // articuloCotizacion=prompt("Ingrese nombre de articulo que desea cotizar.");
                }
                else if (articuloCotizacion=="EQUIPOS") {
                    numeroEquipos=numeroDeArticulos;
                    console.log("Usted a solicitado cotizar"+" "+numeroDeArticulos+" "+articuloCotizacion+".");
                    // variedad=variedad+1;
                    // articuloCotizacion=prompt("Ingrese nombre de articulo que desea cotizar.");
                }
                else { alert("Introduzca nombre valido del los articulos en mayusculas = "+nombreArticulos);
                    // articuloCotizacion=prompt("Ingrese nombre de articulo que desea cotizar.");
                }
            }
        
        
        let cotizacion=banos*numeroBanos+iluminacion*numeroIluminacion+pisos*numeroPisos+cocinas*numeroCocinas+oficinas*numeroOficinas+ferreteria*numeroFerreteria+construccion*numeroConstruccion+equipos*numeroEquipos;
        let codigoDeDescuento=descuentoPorCodigo();
        let descuento=parseFloat(codigoDeDescuento);
        let cotizacionMenosDescuento=cotizacion-descuento*cotizacion;
        let cotizacionFinal=cotizacionMenosDescuento*itbis;
        mostrar("El monto de la cotizacion es de "+cotizacion+" "+"pesos dominicanos.");
        descuento=descuento*100;
        mostrar("El descuento aplicado es de"+" "+descuento+"%");
        mostrar("El monto de la cotizacion con el descuento es de "+cotizacionMenosDescuento+" "+"pesos dominicanos.");
        mostrar("El monto de la cotizacion final es de "+cotizacionFinal+" "+"pesos dominicanos."); 
        mostrar("La cotizacion final es de"+" "+numeroBanos+" "+"baños,"+" "+numeroIluminacion+" "+"iluminacion,"+" "+numeroPisos+" "+"pisos,"+" "+numeroCocinas+" "+"cocinas,"+" "+numeroOficinas+" "+"oficinas,"+" "+numeroFerreteria+" "+"ferreteria,"+" "+numeroConstruccion+" "+"construccion y"+" "+numeroEquipos+" "+"equipos por un total de"+" "+cotizacionFinal+" "+"con impuestos incluidos."
        )
    }

    function probarConstructor() 
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

/*    function obtenerNumero1() {
        // Valor con class numeroArticulo1
        let numeroArticuloCotizacion1;
        numeroArticuloCotizacion1 = document.getElementById("numeroArticulo1").value;
        numeroArticuloCotizacion1 = parseFloat(numeroArticuloCotizacion1);
        // Si numeroArticuloCotizacion1 no es un numero entero
        let texto;
        // let precioTotalArticulo1;
        if (isNaN(numeroArticuloCotizacion1)) {
          texto = "No Valido";
          precioTotalArticulo1 = numeroArticuloCotizacion1 *10;
        } else if (Number.isInteger(numeroArticuloCotizacion1) && numeroArticuloCotizacion1>=parseInt(0)) {
          texto = "El costo de "+numeroArticuloCotizacion1+" baños es de "+numeroArticuloCotizacion1*10+" pesos.";
        } else  {
            texto = "Intente de nuevo";
        }
        document.getElementById("textoArticulo1").innerHTML = texto;
        textoPrecioTotal="El costo de todos los articulos es de "+precioTotalArticulo1+precioTotalArticulo2+precioTotalArticulo3+precioTotalArticulo4+" pesos.";
        document.getElementById("cotizaciones_precio_total").innerHTML = textoPrecioTotal;
    }

    var input = document.getElementById("numeroArticulo1");
    input.addEventListener("keypress", function(event) {
        if (event.key === "Enter") {
            event.preventDefault();
            document.getElementById("botonArticulo1").click();
        }
    });

    function obtenerNumero2() {
        // Valor con class numeroArticulo2
        let numeroArticuloCotizacion2;
        numeroArticuloCotizacion2 = document.getElementById("numeroArticulo2").value;
        numeroArticuloCotizacion2 = parseFloat(numeroArticuloCotizacion2);
        // Si numeroArticuloCotizacion2 no es un numero entero
        let texto;
        // let precioTotalArticulo2;
        if (isNaN(numeroArticuloCotizacion2)) {
          texto = "No Valido";
          precioTotalArticulo2 = numeroArticuloCotizacion2 *20;
        } else if (Number.isInteger(numeroArticuloCotizacion2) && numeroArticuloCotizacion2>=parseInt(0)) {
          texto = "El costo de "+numeroArticuloCotizacion2+" iluminacion es de "+numeroArticuloCotizacion2*20+" pesos.";
        } else  {
            texto = "Intente de nuevo";
        }
        document.getElementById("textoArticulo2").innerHTML = texto;
        textoPrecioTotal="El costo de todos los articulos es de "+precioTotalArticulo1+precioTotalArticulo2+precioTotalArticulo3+precioTotalArticulo4+" pesos.";
        document.getElementById("cotizaciones_precio_total").innerHTML = textoPrecioTotal;
    }

    var input = document.getElementById("numeroArticulo2");
    input.addEventListener("keypress", function(event) {
        if (event.key === "Enter") {
            event.preventDefault();
            document.getElementById("botonArticulo2").click();
        }
    });

    function obtenerNumero3() {
        // Valor con class numeroArticulo3
        let numeroArticuloCotizacion3;
        numeroArticuloCotizacion3 = document.getElementById("numeroArticulo3").value;
        numeroArticuloCotizacion3 = parseFloat(numeroArticuloCotizacion3);
        // Si numeroArticuloCotizacion3 no es un numero entero
        let texto;
        // let precioTotalArticulo3;
        if (isNaN(numeroArticuloCotizacion3)) {
          texto = "No Valido";
        precioTotalArticulo3 = numeroArticuloCotizacion3 *30;
        } else if (Number.isInteger(numeroArticuloCotizacion3) && numeroArticuloCotizacion3>=parseInt(0)) {
          texto = "El costo de "+numeroArticuloCotizacion3+" pisos es de "+numeroArticuloCotizacion3*30+" pesos.";
        } else  {
            texto = "Intente de nuevo";
        }
        document.getElementById("textoArticulo3").innerHTML = texto;
        textoPrecioTotal="El costo de todos los articulos es de "+precioTotalArticulo1+precioTotalArticulo2+precioTotalArticulo3+precioTotalArticulo4+" pesos.";
        document.getElementById("cotizaciones_precio_total").innerHTML = textoPrecioTotal;
    }

    var input = document.getElementById("numeroArticulo3");
    input.addEventListener("keypress", function(event) {
        if (event.key === "Enter") {
            event.preventDefault();
            document.getElementById("botonArticulo3").click();
        }
    });

    function obtenerNumero4() {
        // Valor con class numeroArticulo4
        let numeroArticuloCotizacion4;
        numeroArticuloCotizacion4 = document.getElementById("numeroArticulo4").value;
        numeroArticuloCotizacion4 = parseFloat(numeroArticuloCotizacion4);
        // Si numeroArticuloCotizacion4 no es un numero entero
        let texto;
        // let precioTotalArticulo4;
        if (isNaN(numeroArticuloCotizacion4)) {
          texto = "No Valido";
        precioTotalArticulo4 = numeroArticuloCotizacion4 *40;
        } else if (Number.isInteger(numeroArticuloCotizacion4) && numeroArticuloCotizacion4>=parseInt(0)) {
          texto = "El costo de "+numeroArticuloCotizacion4+" cocinas es de "+numeroArticuloCotizacion4*40+" pesos.";
        } else  {
            texto = "Intente de nuevo";
        }
        document.getElementById("textoArticulo4").innerHTML = texto;
        textoPrecioTotal="El costo de todos los articulos es de "+precioTotalArticulo1+precioTotalArticulo2+precioTotalArticulo3+precioTotalArticulo4+" pesos.";
        document.getElementById("cotizaciones_precio_total").innerHTML = textoPrecioTotal;
    }

    var input = document.getElementById("numeroArticulo4");
    input.addEventListener("keypress", function(event) {
        if (event.key === "Enter") {
            event.preventDefault();
            document.getElementById("botonArticulo4").click();
        }
    });*/

        /*const productos = [
            {nombreDeProducto: "BAÑOS", precioDeProducto:10},
            {nombreDeProducto: "ILUMINACION", precioDeProducto: 20},
            {nombreDeProducto: "PISOS", precioDeProducto: 30},
            {nombreDeProducto: "COCINAS", precioDeProducto: 40},
            {nombreDeProducto: "OFICINAS", precioDeProducto: 50},
            {nombreDeProducto: "FERRETERIA", precioDeProducto: 60},
            {nombreDeProducto: "CONSTRUCCION", precioDeProducto: 70},
            {nombreDeProducto: "EQUIPOS", precioDeProducto: 80}
        ];*/


    const productos = [
        {nombreDeProducto: "BAÑOS", precioDeProducto: 10, descripcionDeProducto: "Este es un producto de calidad."},
        {nombreDeProducto: "ILUMINACION", precioDeProducto: 20, descripcionDeProducto: "Este es un producto de calidad."},
        {nombreDeProducto: "PISOS", precioDeProducto: 30, descripcionDeProducto: "Este es un producto de calidad."},
        {nombreDeProducto: "COCINAS", precioDeProducto: 40, descripcionDeProducto: "Este es un producto de calidad."},
        {nombreDeProducto: "OFICINAS", precioDeProducto: 50, descripcionDeProducto: "Este es un producto de calidad."},
        {nombreDeProducto: "FERRETERIA", precioDeProducto: 60, descripcionDeProducto: "Este es un producto de calidad."},
        {nombreDeProducto: "CONSTRUCCION", precioDeProducto: 70, descripcionDeProducto: "Este es un producto de calidad."},
        {nombreDeProducto: "EQUIPOS", precioDeProducto: 80, descripcionDeProducto: "Este es un producto de calidad."}
    ];

    let botonRegistro1 =document.getElementById("botonArticulo1");
        botonRegistro1.onclick = () =>{
        obtenerNumero();
        };
    
    let botonRegistro2 =document.getElementById("botonArticulo2");
        botonRegistro2.onclick = () =>{
        obtenerNumero();
        };

    let botonRegistro3 =document.getElementById("botonArticulo3");
        botonRegistro3.onclick = () =>{
        obtenerNumero();
        };

    let botonRegistro4 =document.getElementById("botonArticulo4");
        botonRegistro4.onclick = () =>{
        obtenerNumero();
        };
    
    document.getElementById("cargador").onload = function() {cargarArchivos()};

    function cargarArchivos(){     
        document.getElementById("numeroArticulo1").value=parseInt(JSON.parse(localStorage.getItem(numeroArticulo1)));
        document.getElementById("numeroArticulo2").value=parseInt(JSON.parse(localStorage.getItem(numeroArticulo2)));
        document.getElementById("numeroArticulo3").value=parseInt(JSON.parse(localStorage.getItem(numeroArticulo3)));
        document.getElementById("numeroArticulo4").value=parseInt(JSON.parse(localStorage.getItem(numeroArticulo4)));
        console.log("EXITO");
    }

    function obtenerNumero() {

        let precioTotalArticulo1;
        let precioTotalArticulo2;
        let precioTotalArticulo3;
        let precioTotalArticulo4;
        let precioTotalTodosLosArticulos;

            numeroArticuloCotizacion = document.getElementById("numeroArticulo1").value;
            numeroArticuloCotizacion = parseFloat(numeroArticuloCotizacion);
            let texto;
            if (isNaN(numeroArticuloCotizacion)) {
            texto = "No Valido";
            precioTotalArticulo1=0;
            } else if (Number.isInteger(numeroArticuloCotizacion) && numeroArticuloCotizacion>=parseInt(0)) {
            texto = "El costo de "+numeroArticuloCotizacion+" baños es de "+numeroArticuloCotizacion*10+" pesos.";
            precioTotalArticulo1=numeroArticuloCotizacion*10;
            } else  {
                texto = "Intente de nuevo";
            }
            document.getElementById("textoArticulo1").innerHTML = texto;
            precioTotalTodosLosArticulos=precioTotalArticulo1+precioTotalArticulo2+precioTotalArticulo3+precioTotalArticulo4;
            textoPrecioTotal="El costo de todos los articulos es de "+precioTotalTodosLosArticulos+" pesos.";
            document.getElementById("cotizaciones_precio_total").innerHTML = textoPrecioTotal;
            localStorage.setItem("numeroArticulo1",JSON.stringify(numeroArticuloCotizacion));
            localStorage.setItem("textoArticulo1",JSON.stringify(texto));


            numeroArticuloCotizacion = document.getElementById("numeroArticulo2").value;
            numeroArticuloCotizacion = parseFloat(numeroArticuloCotizacion);
            if (isNaN(numeroArticuloCotizacion)) {
            texto = "No Valido";
            precioTotalArticulo2=0;
            } else if (Number.isInteger(numeroArticuloCotizacion) && numeroArticuloCotizacion>=parseInt(0)) {
            texto = "El costo de "+numeroArticuloCotizacion+" iluminacion es de "+numeroArticuloCotizacion*20+" pesos.";
            precioTotalArticulo2=numeroArticuloCotizacion*20;
            } else  {
                texto = "Intente de nuevo";
            }
            document.getElementById("textoArticulo2").innerHTML = texto;
            precioTotalTodosLosArticulos=precioTotalArticulo1+precioTotalArticulo2+precioTotalArticulo3+precioTotalArticulo4;
            textoPrecioTotal="El costo de todos los articulos es de "+precioTotalTodosLosArticulos+" pesos.";
            document.getElementById("cotizaciones_precio_total").innerHTML = textoPrecioTotal;
            localStorage.setItem("numeroArticulo2",JSON.stringify(numeroArticuloCotizacion));
            localStorage.setItem("textoArticulo2",JSON.stringify(texto));


            numeroArticuloCotizacion = document.getElementById("numeroArticulo3").value;
            numeroArticuloCotizacion = parseFloat(numeroArticuloCotizacion);
            if (isNaN(numeroArticuloCotizacion)) {
            texto = "No Valido";
            precioTotalArticulo3=0;
            } else if (Number.isInteger(numeroArticuloCotizacion) && numeroArticuloCotizacion>=parseInt(0)) {
            texto = "El costo de "+numeroArticuloCotizacion+" pisos es de "+numeroArticuloCotizacion*30+" pesos.";
            precioTotalArticulo3=numeroArticuloCotizacion*30;
            } else  {
                texto = "Intente de nuevo";
            }
            document.getElementById("textoArticulo3").innerHTML = texto;
            precioTotalTodosLosArticulos=precioTotalArticulo1+precioTotalArticulo2+precioTotalArticulo3+precioTotalArticulo4;
            textoPrecioTotal="El costo de todos los articulos es de "+precioTotalTodosLosArticulos+" pesos.";
            document.getElementById("cotizaciones_precio_total").innerHTML = textoPrecioTotal;
            localStorage.setItem("numeroArticulo3",JSON.stringify(numeroArticuloCotizacion));
            localStorage.setItem("textoArticulo3",JSON.stringify(texto));


            numeroArticuloCotizacion = document.getElementById("numeroArticulo4").value;
            numeroArticuloCotizacion = parseFloat(numeroArticuloCotizacion);
            if (isNaN(numeroArticuloCotizacion)) {
            texto = "No Valido";
            precioTotalArticulo4=0;
            } else if (Number.isInteger(numeroArticuloCotizacion) && numeroArticuloCotizacion>=parseInt(0)) {
            texto = "El costo de "+numeroArticuloCotizacion+" cocinas es de "+numeroArticuloCotizacion*40+" pesos.";
            precioTotalArticulo4=numeroArticuloCotizacion*40;
            } else  {
                texto = "Intente de nuevo";
            }
            document.getElementById("textoArticulo4").innerHTML = texto;
            precioTotalTodosLosArticulos=precioTotalArticulo1+precioTotalArticulo2+precioTotalArticulo3+precioTotalArticulo4;
            textoPrecioTotal="El costo de todos los articulos es de "+precioTotalTodosLosArticulos+" pesos.";
            document.getElementById("cotizaciones_precio_total").innerHTML = textoPrecioTotal;
            localStorage.setItem("numeroArticulo4",JSON.stringify(numeroArticuloCotizacion));
            localStorage.setItem("textoArticulo4",JSON.stringify(texto));

        }

        var input = document.getElementById("numeroArticulo1");
        input.addEventListener("keypress", function(event) {
            if (event.key === "Enter") {
                event.preventDefault();
                document.getElementsByClassName("botonArticulo").onclick();
            }
        });

        var input = document.getElementById("numeroArticulo2");
        input.addEventListener("keypress", function(event) {
            if (event.key === "Enter") {
                event.preventDefault();
                document.getElementsByClassName("botonArticulo").onclick();
            }
        });

        var input = document.getElementById("numeroArticulo3");
        input.addEventListener("keypress", function(event) {
            if (event.key === "Enter") {
                event.preventDefault();
                document.getElementsByClassName("botonArticulo").onclick();
            }
        });

        var input = document.getElementById("numeroArticulo4");
        input.addEventListener("keypress", function(event) {
            if (event.key === "Enter") {
                event.preventDefault();
                document.getElementsByClassName("botonArticulo").onclick();
            }
    });

