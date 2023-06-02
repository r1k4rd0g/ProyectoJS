
class Alumno {
    constructor(nombre, apellido, edad, ci, celular, mail, pass) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
        this.ci = ci;
        this.celular = celular;
        this.mail = mail;
        this.pass = pass;
    }
}

//Constantes y variables:
const registroForm = document.getElementById("registroForm");
const botonRegistrarme = document.getElementById("registrarme");
const rutaDatos ="json/datos.json"
//Arrays:
// Recuperar datos del Local Storage o inicializar como array vacío
let arrayAlumnos = JSON.parse(localStorage.getItem("alumnos")) || []; 

const datosAlumnos = localStorage.getItem("alumnos");

//Traigo del formulario registro y doy el alta al hacer click en el btn registrarme
botonRegistrarme.addEventListener("click", (e)=>{
    e.preventDefault();
    let nombre = document.getElementById("nombre").value;
    let apellido = document.getElementById("apellido").value;
    let edad = document.getElementById("edad").value;
    let ci = document.getElementById("ci").value;
    let celular = document.getElementById("celular").value;    
    let mail = document.getElementById("mail").value;
    let pass = document.getElementById("pass").value;
    let alumno = new Alumno(nombre, apellido, edad, ci, celular, mail, pass);
    arrayAlumnos.push(alumno);
    const arrayAlumnosJSON = JSON.stringify(arrayAlumnos);
    localStorage.setItem("alumnos", arrayAlumnosJSON);
    Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Registro exitoso!',
        showConfirmButton: true,
    });
    registroForm.reset();
    instrucciones.innerHTML = `
                            <h2>Para volver haga click en el logo</h2>
                            `;
    // Agrega la clase con el fondo
    instrucciones.classList.add('with-background');
    // Elimina la clase después de 3 segundos (3000 milisegundos)
    setTimeout(()=> {
        instrucciones.classList.remove('with-background');
    }, 3000);
})


