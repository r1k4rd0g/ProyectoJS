//Constantes y variables:

const loginForm = document.getElementById("loginForm");
const botonRegistro = document.getElementById("registro");
const botonLogin = document.getElementById("login");
let arrayAlumnos = JSON.parse(localStorage.getItem("alumnos")) || [];

//click en botón entrar-login.
botonLogin.addEventListener("click", () => {
    const cedula = document.getElementById("cedula").value;
    const password = document.getElementById("password").value;
    //buscamos en el array
    const alumnoEncontrado = arrayAlumnos.find((alumno) => alumno.ci === cedula && alumno.pass === password)
    if (alumnoEncontrado) {
        //si encontramos el alumno en el array, entonces inicio de sesión ok.
        Swal.fire({
            position: "center",
            icon: "success",
            title: "Inicio de sesión exitoso",
            showConfirmButton: true,
            timer: 1500,
        }).then(() => {
            // Manda al usuario a la página de gestión usuarios
            window.location.href = "../Secciones/Usuarios.html";
        });
    } else {
        // Error de inicio de sesión
        Swal.fire({
            position: "center",
            icon: "error",
            title: "Error en el inicio de sesión",
            text: "Cédula o contraseña incorrectas",
            showConfirmButton: true,
        });
    };
});

//click en botón registro.
botonRegistro.addEventListener("click", () => {
    window.location.href = "https://r1k4rd0g.github.io/Secciones/Registro.html"
});
//movimiento del logo
const logo = document.getElementById("logo");
let sizeMax = 280; // Tamaño máximo del logo
let sizeMin = 230; // Tamaño mínimo del logo
let size = sizeMin; // Tamaño inicial del logo
let crecimiento = true; // Indica si el logo está creciendo o encogiendo

setInterval(() => {
    crecimiento
        ? (size += 1, size >= sizeMax && (crecimiento = false))
        : (size -= 1, size <= sizeMin && (crecimiento = true));
    logo.style.height = size + "px";
}, 30); // Cambia el tamaño cada 50 milisegundos

//Play music y detenerla luego de 30 segundos, también play al hacer click en logo
const music = document.getElementById("music");
const iconoGif = document.getElementById("iconoGif");
let musicSeEscucha = false;
function playMusic() {
    music.play();
    musicSeEscucha = true;
    iconoGif.classList.remove("fa-pause");
    iconoGif.classList.add("fa-play");
}
function pausaMusic() {
    music.pause();
    musicSeEscucha = false;
    iconoGif.classList.remove("fa-play");
    iconoGif.classList.add("fa-pause");
}
const dalePlay = () => musicSeEscucha ? pausaMusic() : playMusic();

iconoGif.addEventListener("click", dalePlay)
//ejecuta la musica solo 1 vez y guarda en local para que no se vuelva a reproducir automáticamente. 
document.addEventListener("click", () => {
    const musicaReproducida = localStorage.getItem("musicaReproducida");
    if (!musicaReproducida) {
        setTimeout(() => {
            playMusic();
            localStorage.setItem("musicaReproducida", "true");
        }, 3000); // Ejecutar playMusic después de 3 segundos
    }
});