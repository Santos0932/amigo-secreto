// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
// Declarar el array para almacenar los nombres de los amigos
let amigos = [];

// Función para agregar amigos
function agregarAmigo() {
    // Capturar el valor del campo de entrada
    const inputNombre = document.getElementById('amigo').value;

    // Validar la entrada
    if (inputNombre.trim() === "") {
        alert("Por favor, inserte un nombre."); // Mostrar alerta si el campo está vacío
        return; // Salir de la función si la entrada no es válida
    }

    // Actualizar el array de amigos
    amigos.push(inputNombre);

    // Limpiar el campo de entrada
    document.getElementById('amigo').value = "";

    // Actualizar la lista visual
    actualizarListaAmigos();
}

// Función para recorrer el array y actualizar la lista HTML
function actualizarListaAmigos() {
    // Obtener el elemento de la lista
    const listaAmigos = document.getElementById('listaAmigos');

    // Limpiar la lista existente
    listaAmigos.innerHTML = "";

    // Iterar sobre el arreglo amigos y agregar cada uno como <li>
    amigos.forEach((amigo) => {
        const elemento = document.createElement('li');
        elemento.textContent = amigo; // Asignar el nombre del amigo
        listaAmigos.appendChild(elemento); // Agregar el elemento <li> a la lista
    });
}

// Función para sortear un amigo secreto
function sortearAmigo() {
    // Validar que haya al menos un participante
    if (amigos.length === 0) {
        alert("No hay participantes para sortear."); // Mostrar alerta si no hay amigos
        return;
    }

    // Generar un índice aleatorio
    const indiceSorteado = Math.floor(Math.random() * amigos.length);
    const amigoSorteado = amigos[indiceSorteado];

    // Mostrar el resultado del sorteo
    const listaResultado = document.getElementById('resultado');
    listaResultado.innerHTML = ""; // Limpiar resultados previos

    const elemento = document.createElement('li');
    elemento.textContent = `El amigo sorteado es: ${amigoSorteado}`; // Resultado
    listaResultado.appendChild(elemento);


   // **LIMPIAR CAMPOS Y LISTAS**
   amigos = []; // Vaciar el array de amigos
   actualizarListaAmigos(); // Actualizar la lista visual para que también quede vacía
}
