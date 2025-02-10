document.getElementById("formularioUser").addEventListener("submit", addUser);

document.getElementById("mostrarUsuario").addEventListener("click",getUsuarioByID);

document.getElementById("eliminarUsuario").addEventListener("click", deleteUsuario);

document.getElementById("mostrarPerfil").addEventListener("click", getPerfilByID);

document.getElementById("eliminarPerfil").addEventListener("click", deletePerfil);

document.getElementById("actualizar").addEventListener("click",updatePerfil);

document
  .getElementById("formularioPerfil")
  .addEventListener("submit", createPerfil);

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
  } else {
    getUsers();
  }
}

async function getUsers() {
  const response = await fetch("/usuarios");
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  const usuarios = await response.json();
  console.log(usuarios);
}

async function getUser() {
  const response = await fetch(`/usuarios/${id}`);
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  const usuario = await response.json();
  console.log(usuario);
}

async function deleteUser(id) {
  const response = await fetch(`/usuarios/${id}`, {
    method: "DELETE",
  });
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
}

async function createPerfil(event) {
  event.preventDefault();
  let usuarioID = parseInt(document.getElementById("usuarioID").value);
  let direccion = document.getElementById("direccion").value;
  let telefono = document.getElementById("telefono").value;
  let fecha = new Date(document.getElementById("fecha").value);
  let fotoPerfil = document.getElementById("fotoPerfil").value;
  console.log(usuarioID)
  const response = await fetch("/perfiles", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({usuarioID, direccion, telefono, fecha, fotoPerfil })
  });

  if (response.ok) {
    const perfil = await response.json();
    console.log(perfil);
  }
}


async function getUsuarioByID(){
    let id = document.getElementById("getUsuarioID").value;
    const response = await fetch(`/usuarios/${id}`,{
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        },
    })

    const usuario = await response.json();
    console.log(usuario)
}

async function deleteUsuario() {
  let id = document.getElementById("getUsuarioID").value;

  const response = await fetch(`/usuarios/${id}`,{
    method: "DELETE",
    headers: {
      "Content-Type": "application/json"
    }
  })

  if(response.ok){
    const result = await response.json();
    console.log(result);
  }

}

async function getPerfilByID() {
  let id = document.getElementById("getPerfilesID") .value;
  const response = await fetch(`/perfiles/${id}`,{
    method: "GET",
    headers: {
      "Content-Type": "application/json"
    }
  })
  const result = await response.json();
  console.log(result);
}

async function deletePerfil() {
  let id = document.getElementById("getPerfilesID").value;
  const response = await fetch(`/perfiles/${id}`,{
    method: "DELETE",
    headers: {
      "Content-Type": "application/json"
    }
  })

  if(response.ok){
    const result = await response.json();
    console.log(result);
  }
}

async function updatePerfil() {
  let id = document.getElementById("putPerfil").value;
  let idUsuario = document.getElementById("putUsuario").value;
  console.log(idUsuario)
  console.log(id)
  const response = await fetch(`/perfiles/${id}`,{
    method: "PUT",
    headers:{
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ID:idUsuario})
  });
  if(response.ok){
    const result = await response.json();
    console.log(result)
  }
}




