function insertar(email, nombre, telefono) {
    var request = new XMLHttpRequest();
    request.open('POST', "https://herok-backend-5411ebb815f5.herokuapp.com/contactos");
    request.setRequestHeader("Content-Type", "application/json");

    // Crear un objeto con los parámetros a enviar
    var data = {
        email: email,
        nombre: nombre,
        telefono: telefono
    };

    request.send(JSON.stringify(data));

    request.onload = (e) => {
        if (request.status === 200) {
            alert("Contacto insertado correctamente");
            // Redirige al usuario al index
            window.location.href = "/";
            // La solicitud se realizó con éxito
            const response = JSON.parse(request.responseText);
            console.log("Response:", response);
            // Muestra una alerta para indicar que la inserción se realizó con éxito
            
        } else {
            console.error("Error al hacer la solicitud:", request.status, request.statusText);
            // Muestra una alerta para indicar que ocurrió un error
            alert("Error al insertar el contacto. Por favor, inténtalo de nuevo.");
        }
    };
}

function cancelar() {
    // Acción cancelada, simplemente redirige al index
    window.location.href = "/";
    alert("Acción cancelada");
}
