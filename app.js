// Array donde guardaremos los amigos
let amigos = [];

// Función para agregar un amigo
function agregarAmigo() {
    const input = document.getElementById("amigo");
    const nombre = input.value.trim();

    // Validación: no se permite vacío
    if (nombre === "") {
        alert("El nombre no puede estar vacío.");
        return;
    }

    // Validación: evitar duplicados
    if (amigos.includes(nombre)) {
        alert("Ese nombre ya está en la lista.");
        input.value = "";
        return;
    }

    // Agregar a la lista
    amigos.push(nombre);
    actualizarLista();

    // Limpiar input
    input.value = "";
    input.focus();
}

// Función para actualizar la lista de amigos en pantalla
function actualizarLista() {
    const lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";

    amigos.forEach((amigo, index) => {
        const li = document.createElement("li");
        li.textContent = amigo + " ";

        // Botón para editar un amigo
        const btnEditar = document.createElement("button");
        btnEditar.textContent = "✏️Editar";
        btnEditar.classList.add("edit-btn");
        btnEditar.onclick = () => editarAmigo(index);

        // Botón para eliminar un amigo
        const btnEliminar = document.createElement("button");
        btnEliminar.textContent = "Eliminar❌";
        btnEliminar.classList.add("delete-btn");
        btnEliminar.onclick = () => eliminarAmigo(index);

        li.appendChild(btnEditar);
        li.appendChild(btnEliminar);
        lista.appendChild(li);
    });
}

// Función para eliminar un amigo de la lista
function eliminarAmigo(index) {
    amigos.splice(index, 1);
    actualizarLista();
}

// Función para editar un amigo
function editarAmigo(index) {
    const nuevoNombre = prompt("Edita el nombre:", amigos[index]);

    if (nuevoNombre === null) {
        return; // Canceló el prompt
    }

    const nombreLimpio = nuevoNombre.trim();

    // Validaciones
    if (nombreLimpio === "") {
        alert("El nombre no puede estar vacío.");
        return;
    }

    if (amigos.includes(nombreLimpio) && amigos[index] !== nombreLimpio) {
        alert("Ese nombre ya está en la lista.");
        return;
    }

    amigos[index] = nombreLimpio;
    actualizarLista();
}

// Función para sortear un amigo
function sortearAmigo() {
    const resultado = document.getElementById("resultado");
    resultado.innerHTML = "";

    if (amigos.length < 2) {
        alert("Necesitas al menos 2 amigos para sortear.");
        return;
    }

    // Seleccionar un índice al azar
    const indice = Math.floor(Math.random() * amigos.length);
    const amigoSecreto = amigos[indice];

    const li = document.createElement("li");
    li.textContent = `🎉 Tu amigo secreto es: ${amigoSecreto}`;
    resultado.appendChild(li);
}
