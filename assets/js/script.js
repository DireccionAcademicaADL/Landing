// Agregar smooth scrolling a todos los enlaces con la clase "page-scroll"
$(".page-scroll").on('click', function (event) {

    // Asegurarse de que this.hash tenga un valor antes de anular el comportamiento predeterminado
    if (this.hash !== "") {
        // Evitar el comportamiento predeterminado del enlace
        event.preventDefault();

        // Almacenar el valor del hash
        var hash = this.hash;

        // Usar el método animate() de jQuery para agregar desplazamiento suave
        // El número (800) especifica el número de milisegundos que tarda en desplazarse hasta el área designada
        $('html, body').animate({
            scrollTop: $(hash).offset().top
        }, 800, function () {

            // Agregar hash (#) a la URL cuando haya terminado de desplazarse (comportamiento predeterminado del clic)
            window.location.hash = hash;
        });
    } // fin de la condición
});
