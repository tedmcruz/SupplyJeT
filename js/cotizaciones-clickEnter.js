async function presionarTeclaEnter() {
    let teclaEnter;
    await fetch('../js/datos.json')
    .then( (res) => res.json())
    .then ( (datos) => {
        datos.forEach((producto) => {
            numeroArticulo="numeroArticulo"+producto.idDeProducto;
            teclaEnter = document.getElementById(numeroArticulo);
            teclaEnter.addEventListener("keypress", function(eventoEnter) {
                if (eventoEnter.key === "Enter") {
                    eventoEnter.preventDefault();
                    document.getElementById("botonCotizacionesArticulos").onclick();
                }
            });
        });
    })
};

async function ejecutarCotizaciones() {
    await recopilarDatos();
    await presionarTeclaEnter();
    await obtenerNumero();
};

ejecutarCotizaciones();