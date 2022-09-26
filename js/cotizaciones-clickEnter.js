var input = document.getElementById("numeroArticulo1");
    input.addEventListener("keypress", function(event) {
        if (event.keyCode === 13) {
            event.preventDefault();
            document.getElementById("botonCotizacionesArticulos").onclick();
        }
    });
    
    input = document.getElementById("numeroArticulo2");
    input.addEventListener("keypress", function(event) {
        if (event.key === "Enter") {
            event.preventDefault();
            document.getElementById("botonCotizacionesArticulos").onclick();
        }
    });

    input = document.getElementById("numeroArticulo3");
    input.addEventListener("keypress", function(event) {
        if (event.key === "Enter") {
            event.preventDefault();
            document.getElementById("botonCotizacionesArticulos").onclick();
        }
    });

    input = document.getElementById("numeroArticulo4");
    input.addEventListener("keypress", function(event) {
        if (event.key === "Enter") {
            event.preventDefault();
            document.getElementById("botonCotizacionesArticulos").onclick();
        };
    });