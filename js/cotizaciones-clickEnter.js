var teclaEnter = document.getElementById("numeroArticulo1");
    teclaEnter.addEventListener("keypress", function(eventoEnter) {
        if (eventoEnter.key === "Enter") {
            eventoEnter.preventDefault();
            document.getElementById("botonCotizacionesArticulos").onclick();
        }
    });
    
    teclaEnter = document.getElementById("numeroArticulo2");
    teclaEnter.addEventListener("keypress", function(eventoEnter) {
        if (eventoEnter.key === "Enter") {
            eventoEnter.preventDefault();
            document.getElementById("botonCotizacionesArticulos").onclick();
        }
    });

    teclaEnter = document.getElementById("numeroArticulo3");
    teclaEnter.addEventListener("keypress", function(eventoEnter) {
        if (eventoEnter.key === "Enter") {
            eventoEnter.preventDefault();
            document.getElementById("botonCotizacionesArticulos").onclick();
        }
    });

    teclaEnter = document.getElementById("numeroArticulo4");
    teclaEnter.addEventListener("keypress", function(eventoEnter) {
        if (eventoEnter.key === "Enter") {
            eventoEnter.preventDefault();
            document.getElementById("botonCotizacionesArticulos").onclick();
        };
    });