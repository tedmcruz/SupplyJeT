// var presionarTeclaEnter; 
//     presionarTeclaEnter= document.getElementById("numeroArticulo1");
//     presionarTeclaEnter.addEventListener("keypress", eventoEnter);

async function presionarTeclaEnter() {
    document.getElementById("numeroArticulo1").addEventListener("keypress", eventoEnter);
    function eventoEnter() {
        if (eventoEnter.key === "Enter") {
            eventoEnter.preventDefault();
            document.getElementById("botonCotizacionesArticulos").onclick();
        }
    };
}

async function ejecutarCotizaciones() {
    await recopilarDatos();
    await presionarTeclaEnter();
};

ejecutarCotizaciones();
    // presionarTeclaEnter = document.getElementById("numeroArticulo2");
    // presionarTeclaEnter.addEventListener("keypress", function(eventoEnter) {
    //     if (eventoEnter.key === "Enter") {
    //         eventoEnter.preventDefault();
    //         document.getElementById("botonCotizacionesArticulos").onclick();
    //     }
    // });

    // presionarTeclaEnter = document.getElementById("numeroArticulo3");
    // presionarTeclaEnter.addEventListener("keypress", function(eventoEnter) {
    //     if (eventoEnter.key === "Enter") {
    //         eventoEnter.preventDefault();
    //         document.getElementById("botonCotizacionesArticulos").onclick();
    //     }
    // });

    // presionarTeclaEnter = document.getElementById("numeroArticulo4");
    // presionarTeclaEnter.addEventListener("keypress", function(eventoEnter) {
    //     if (eventoEnter.key === "Enter") {
    //         eventoEnter.preventDefault();
    //         document.getElementById("botonCotizacionesArticulos").onclick();
    //     };
    // });