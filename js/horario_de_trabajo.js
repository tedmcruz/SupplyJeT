var horaActual=document.getElementById("reloj");

var diaHora = luxon.DateTime;

function refrescarHora() {
horaActual.innerHTML = diaHora.local().toFormat("hh:mm:ss a");
};

setInterval(refrescarHora, 1000);