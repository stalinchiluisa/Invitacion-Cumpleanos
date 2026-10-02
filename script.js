// =====================================
// ELEMENTOS
// =====================================

const botonAbrir = document.getElementById("botonAbrir");
const pantallaInicio = document.getElementById("pantallaInicio");
const musicaFondo = document.getElementById("musicaFondo");
const efectoGlobos = document.getElementById("efectoGlobos");
const efectoConfeti = document.getElementById("efectoConfeti");
const serpentinasFiesta =
    document.getElementById("serpentinasFiesta");
    function lanzarSerpentinas() {

    const colores = [
        "#ff006e",
        "#ffbe0b",
        "#3a86ff",
        "#8338ec",
        "#06d6a0",
        "#fb5607",
        "#ffffff",
        "#ff4d9d"
    ];


    for (let i = 0; i < 45; i++) {

        const serpentina =
            document.createElement("div");

        serpentina.classList.add(
            "serpentina-voladora"
        );


        // Posición inicial
        serpentina.style.left =
            Math.random() * 100 + "%";


        // Color aleatorio
        serpentina.style.background =
            colores[
                Math.floor(
                    Math.random() * colores.length
                )
            ];


        // Movimiento lateral
        const movimiento =
            (Math.random() * 500) - 250;


        serpentina.style.setProperty(
            "--movimiento-x",
            movimiento + "px"
        );


        serpentina.style.setProperty(
            "--movimiento-x-final",
            movimiento * 1.5 + "px"
        );


        // Diferentes tamaños
        serpentina.style.height =
            (50 + Math.random() * 90) + "px";


        // Diferentes velocidades
        serpentina.style.animationDuration =
            (2.5 + Math.random() * 2) + "s";


        // Pequeño retraso
        serpentina.style.animationDelay =
            (Math.random() * 0.5) + "s";


        serpentinasFiesta.appendChild(
            serpentina
        );


        // Eliminar después de la animación
        setTimeout(function () {

            serpentina.remove();

        }, 5000);

    }

}
function lanzarGlobos() {

    const colores = [
        "#ff4d6d",
        "#ffd166",
        "#06d6a0",
        "#118ab2",
        "#8338ec",
        "#ff85a1"
    ];

    for (let i = 0; i < 18; i++) {

        const globo = document.createElement("div");

        globo.classList.add("globo");

        globo.style.left =
            Math.random() * 100 + "%";

        globo.style.background =
            colores[
                Math.floor(
                    Math.random() * colores.length
                )
            ];

        globo.style.animationDuration =
            (6 + Math.random() * 5) + "s";

        efectoGlobos.appendChild(globo);

        setTimeout(function () {

            globo.remove();

        }, 12000);
    }
}
function lanzarConfeti() {

    const colores = [
        "#ff006e",
        "#ffbe0b",
        "#3a86ff",
        "#06d6a0",
        "#ffffff",
        "#8338ec"
    ];

    for (let i = 0; i < 80; i++) {

        const pieza =
            document.createElement("div");


        if (Math.random() > 0.5) {

            pieza.classList.add("confeti");

        } else {

            pieza.classList.add("serpentina");

        }


        pieza.style.left =
            Math.random() * 100 + "%";


        pieza.style.background =
            colores[
                Math.floor(
                    Math.random() * colores.length
                )
            ];


        pieza.style.animationDuration =
            (3 + Math.random() * 3) + "s";


        pieza.style.animationDelay =
            (Math.random() * 1.2) + "s";


        efectoConfeti.appendChild(pieza);


        setTimeout(function () {

            pieza.remove();

        }, 7000);

    }

}


// =====================================
// ABRIR INVITACIÓN + MÚSICA
// =====================================

botonAbrir.addEventListener("click", function () {
    lanzarSerpentinas();
    lanzarGlobos();

lanzarConfeti();

    // Reproducir música
    if (musicaFondo) {

        musicaFondo.volume = 0.45;

        musicaFondo.play()
            .then(function () {
                console.log("Música reproduciendo");
            })
            .catch(function (error) {
                console.log("No se pudo reproducir:", error);
            });
    }


    // Ocultar pantalla inicial
    pantallaInicio.style.transition = "opacity 0.8s ease";
    pantallaInicio.style.opacity = "0";

    setTimeout(function () {
        pantallaInicio.style.display = "none";
    }, 800);

});


// =====================================
// CUENTA REGRESIVA
// =====================================

const fechaCumpleanos = new Date(
    2026,
    9,
    8,
    18,
    0,
    0
);


function actualizarContador() {

    const ahora = new Date();

    const diferencia =
        fechaCumpleanos.getTime() - ahora.getTime();


    if (diferencia <= 0) {

        document.getElementById("dias").textContent = "00";
        document.getElementById("horas").textContent = "00";
        document.getElementById("minutos").textContent = "00";
        document.getElementById("segundos").textContent = "00";

        return;
    }


    const dias = Math.floor(
        diferencia / (1000 * 60 * 60 * 24)
    );


    const horas = Math.floor(
        (diferencia / (1000 * 60 * 60)) % 24
    );


    const minutos = Math.floor(
        (diferencia / (1000 * 60)) % 60
    );


    const segundos = Math.floor(
        (diferencia / 1000) % 60
    );


    document.getElementById("dias").textContent =
        String(dias).padStart(2, "0");

    document.getElementById("horas").textContent =
        String(horas).padStart(2, "0");

    document.getElementById("minutos").textContent =
        String(minutos).padStart(2, "0");

    document.getElementById("segundos").textContent =
        String(segundos).padStart(2, "0");
}


// Ejecutar inmediatamente
actualizarContador();


// Actualizar cada segundo
setInterval(actualizarContador, 1000);