// var presionarTeclaEnter; 
//     presionarTeclaEnter= document.getElementById("numeroArticulo1");
//     presionarTeclaEnter.addEventListener("keypress", eventoEnter);

window.addEventListener('load', function() {
    document.getElementById("numeroArticulo1").addEventListener("keypress", eventoEnter);
})
    function eventoEnter() {
        if (eventoEnter.key === "Enter") {
            eventoEnter.preventDefault();
            document.getElementById("botonCotizacionesArticulos").onclick();
        }
    };
    
    presionarTeclaEnter = document.getElementById("numeroArticulo2");
    presionarTeclaEnter.addEventListener("keypress", function(eventoEnter) {
        if (eventoEnter.key === "Enter") {
            eventoEnter.preventDefault();
            document.getElementById("botonCotizacionesArticulos").onclick();
        }
    });

    presionarTeclaEnter = document.getElementById("numeroArticulo3");
    presionarTeclaEnter.addEventListener("keypress", function(eventoEnter) {
        if (eventoEnter.key === "Enter") {
            eventoEnter.preventDefault();
            document.getElementById("botonCotizacionesArticulos").onclick();
        }
    });

    presionarTeclaEnter = document.getElementById("numeroArticulo4");
    presionarTeclaEnter.addEventListener("keypress", function(eventoEnter) {
        if (eventoEnter.key === "Enter") {
            eventoEnter.preventDefault();
            document.getElementById("botonCotizacionesArticulos").onclick();
        };
    });