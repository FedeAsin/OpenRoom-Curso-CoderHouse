const fecha = new Date();

console.log(fecha.getDay());



/*
//Escribe el array en el documento

function escribirArray(){
    let mensaje = "Estas son las salas creadas";
    salasGuardadas.forEach((Sala)=> {
        mensaje += ("\n " + Sala.mostrar_infoCompleta());
    })
    document.write(mensaje);
}


// Actualizar datos
    function actualizar_datos(dato){
        let actualizarDato = dato;
        let respuesta_actualizacion;
        do{
            actualizarDato = prompt("¿Que dato queres actualizar? \n 1- Nombre \n 2- Piso \n 3- Capacidad \n 4- Proyector");
            switch (actualizarDato){
                case "1":
                    respuesta_actualizacion = validarS();
                    return salasGuardadas.push((a) => a.nombre = respuesta_actualizacion);
                case "2":
                    respuesta_actualizacion = validarN(piso, 15,"¿En que piso esta la sala?", "El edificio tiene 15 pisos, elegí otro piso","Elegí un piso entre 1 y 15","Elegiste el piso");
                    return salasGuardadas.push(respuesta_actualizacion);
                case "3": 
                respuesta_actualizacion = validarN(capacidad, 20, "¿Cuantas personas pueden entrar?", "La salas solo tienen capacidad hasta 20 personas", "La sala se debe reservar minimamente para 1 persona", "Elegiste la cantidad de invitados");
                    return salasGuardadas.push(respuesta_actualizacion);
                case "4":
                    respuesta_actualizacion = confirm ("¿Tiene proyector?");
                    return salasGuardadas.push(respuesta_actualizacion);
                default: 
                    alert ("Escribí que dato querés cambiar");
            }
        }while(actualizarDato == "");
    }
*/