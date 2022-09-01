var reloj=document.getElementById("reloj");
var diaHora = luxon.DateTime;
var horaActual = diaHora.local();

function refrescarHora() {
if (diaHora.local()>=horaActual.startOf('day').plus({hours:8,minutes:0})&&diaHora.local()<=horaActual.endOf('day').minus({hours:6,minutes:0})&&diaHora.local().weekday!=6&&diaHora.local().weekday!=7){
    reloj.innerHTML = "ESTAMOS LABORANDO! SON LAS "+diaHora.local().toFormat("hh:mm:ss a");
} else {
    reloj.innerHTML = "YA ESTAMOS CERRADOS! NUESTRO HORARIO ES DE 8AM A 6PM DE LUNES A VIERNES. SON LAS "+diaHora.local().toFormat("hh:mm:ss a");
};
};

setInterval(refrescarHora, 1000);