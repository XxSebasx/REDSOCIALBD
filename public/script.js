document.getElementById("formularioUser").addEventListener("submit", addUser);

getUsers();

async function addUser(event) {
    event.preventDefault();
    const nombre = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    const response = await fetch("/usuarios", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ nombre, email, password }),
    });

    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }else{
        getUsers();
    }
}

async function getUsers() {
    const response = await fetch("/usuarios");
    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }
    const usuarios = await response.json();
    console.log(usuarios)
}

async function getUser() {
    const response = await fetch(`/usuarios/${id}`);
    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }
    const usuario = await response.json();
    console.log(usuario)
}

async function deleteUser(id) {
    const response = await fetch(`/usuarios/${id}`, {
        method: "DELETE",
    });
    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }
}

