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