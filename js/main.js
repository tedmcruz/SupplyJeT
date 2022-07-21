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
        let numero1=prompt("Ingrese Numero del cual quiere saber los primero 20 multiplos",1);
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

    }

