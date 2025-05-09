

// creamos una funcion para mostrar una alerta cuando el usuario de click en el boton
// evento de click
function saludar() {
    alert("Bienvenido")
}


const click = document.getElementById("parrafo")
const body = document.getElementsByTagName("body")

click.style.cursor = "pointer";


// callback
click.addEventListener("click", () => {
    document.body.style.background = "red";
});


// formulario
// obtenemos el formulario por el id
const formulario = document.getElementById("formulario");
// 1. document.getElemetById("")

const text = document.getElementById("texto");

// agregamos un evento al formulario " submit "
formulario.addEventListener("submit", (event) => {
    // detenemos el comportamiento que tienen los formularios de recargar la pagina al enviarlo
    event.preventDefault()
    console.log(event)
    // obtenemos el valor que ingreso el usuario en el input
    const name = event.target.nombre.value;

    const apellido = event.target.apellido.value;

    const edad = event.target.edad.value;

    text.innerHTML = `<p>${name} - ${apellido} - ${edad} años</p>`;
    alert(`nombre: ${name} - apellido: ${apellido} - ${edad} años`)
})


// promesas promise
fetch("https://jsonplaceholder.typicode.com/users").then(
    (response) => {
        // esperar la respusta del servicio y la vamos a procesar
        console.log(response)
        console.log()
        return response.json();
    }
).then(
    (data) => {
        console.log(data)

        const mi_lista = document.getElementById("lista-usuarios")


        data.forEach(element => {
            const li = document.createElement("li");

            li.textContent = ` nombre : ${element.name} - username: ${element.username}`;

            mi_lista.appendChild(li)

        });
    }
);

// async - await

async function getUPost() {
    const respose = await fetch("https://jsonplaceholder.typicode.com/posts");
    const dataJson = await respose.json();

    console.log(dataJson)

    const listado_post = document.getElementById("post")

    dataJson.forEach( element => {

        const my_post = document.createElement("div");

        my_post.innerHTML =  `<div  class="post" >
        <h3>${element.title}</h3>
        <p>${element.body}</p>
    </div>`;

    listado_post.appendChild(my_post)
    } );
}

getUPost();

