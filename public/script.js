document.getElementById("formularioUser").addEventListener("submit", addUser);

document.getElementById("mostrarUsuario").addEventListener("click",getUsuarioByID);

document.getElementById("eliminarUsuario").addEventListener("click", deleteUsuario);

document.getElementById("mostrarPerfil").addEventListener("click", getPerfilByID);

document.getElementById("eliminarPerfil").addEventListener("click", deletePerfil);

document.getElementById("actualizar").addEventListener("click",asignarPerfil);

document.getElementById("actualizarPerfil").addEventListener("click",updatePerfil);

document.getElementById("mostrarUsuariosConPerfil").addEventListener("click",getUsuariosConPerfil);

document.getElementById("mostrarUsuariosSinPerfil").addEventListener("click",getUsuariosSinPerfil);

document
  .getElementById("formularioPerfil")
  .addEventListener("submit", createPerfil);

getUsers();

getPerfiles();

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
  const usuarios = await response.json();
  console.log(usuarios);
  let tabla = document.getElementById("tablaUsuario");
  let filas = ""
  for (let i = 0; i < usuarios.length; i++) {
    let user = usuarios[i];
    let fila = `<tr><td>${user.ID}</td><td>${user.nombre}</td>
    <td>${user.email}</td><td>${user.password}</td>
    </tr>`;
    filas+= fila
  }
  tabla.innerHTML = filas;
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
  let direccion = document.getElementById("direccion").value;
  let telefono = document.getElementById("telefono").value;
  let fecha = new Date(document.getElementById("fecha").value);
  let fotoPerfil = document.getElementById("fotoPerfil").value;
  const response = await fetch("/perfiles", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({direccion, telefono, fecha, fotoPerfil })
  });

  if (response.ok) {
    const perfil = await response.json();
    console.log(perfil);
    getPerfiles();
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

async function asignarPerfil() {
  let id = document.getElementById("putPerfil").value;
  let idUsuario = document.getElementById("putUsuario").value;
  console.log(idUsuario)
  console.log(id)
  const response = await fetch(`/perfiles/${id}`,{
    method: "POST",
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

async function updatePerfil() {
  let id = document.getElementById("putID").value;
  let direccion = document.getElementById("putDireccion").value;
  let telefono = document.getElementById("putTelefono").value;
  let fecha = new Date(document.getElementById("putFecha").value);
  let fotoPerfil = document.getElementById("putFotoPerfil").value;

  console.log(id)
  console.log(direccion)
  console.log(telefono)
  console.log(fecha)
  console.log(fotoPerfil)
  
  const response = await fetch(`/perfiles/${id}`,{
    method: "PUT",
    headers:{
      "Content-Type": "application/json"
    },
    body: JSON.stringify({direccion, telefono, fecha, fotoPerfil})
  });
  if(response.ok){
    const result = await response.json();
    console.log(result)
  }
}

async function getUsuariosConPerfil() {
  const response = await fetch("/usuariosconperfiles",{
    method: "GET",
    headers:{
      "Content-Type": "application/json"
    }
  });
  if(response.ok){
    const result = await response.json();
    console.log(result)
  }
}

async function getUsuariosSinPerfil() {
  const response = await fetch("/usuariosSinPerfil",{
    method: "GET",
    headers:{
      "Content-Type": "application/json"
    }
  });
  if(response.ok){
    const result = await response.json();
    console.log(result)
  }
}

async function getPerfiles() {
  const response = await fetch("/perfiles",{
    method: "GET",
    headers:{
      "Content-Type": "application/json"
    }
  });

  if(response.ok){
    const result = await response.json();
    let tabla = document.getElementById("tablaPerfil");
    let filas = "";
    for (let i = 0; i < result.length; i++) {
      let perfil = result[i];
      let fila = `<tr><td>${perfil.ID}</td><td>${perfil.usuarioID}</td>
      <td>${perfil.direccion}</td><td>${perfil.telefono}</td>
      <td>${perfil.fecha}</td><td>${perfil.fotoPerfil}</td></tr>`;
      filas+= fila
    }
    tabla.innerHTML = filas;
  }
}






