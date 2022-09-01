var reloj=document.getElementById("reloj");
var diaHora = luxon.DateTime;
var horaActual = diaHora.local();

function refrescarHora() {
if (diaHora.local()>=horaActual.startOf('day').plus({hours:8})&&diaHora.local()<=horaActual.endOf('day').minus({hours:6})){
    reloj.innerHTML = "ESTAMOS LABORANDO! SON LAS "+diaHora.local().toFormat("hh:mm:ss a");
} else {
    reloj.innerHTML = "YA ESTAMOS CERRADOS! "+diaHora.local().toFormat("hh:mm:ss a");
};
};

setInterval(refrescarHora, 1000);