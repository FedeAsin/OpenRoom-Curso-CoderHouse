
let respueta = confirm ("¿Querés crear una sala nueva?")

if (respueta){
    let nombre = prompt("¿Cual va a ser el nombre de la sala?").toUpperCase();

    let piso;
    piso = validarN(piso, 15, 1,"¿En que piso esta la sala?", "El edificio tiene 15 pisos, elegí otro piso","Elegí un piso entre 1 y 15","Elegiste el piso");

    let capacidad;
    capacidad = validarN(capacidad, 20, 1, "¿Cuantas personas pueden entrar?", "La salas solo tienen capacidad hasta 20 personas", "La sala se debe reservar minimamente para 1 persona", "Elegiste la cantidad de invitados");

    let proyector;
    proyector = proyector_detalle(proyector);


/////////////////Validar datos/////////////////////////////


    do{
        if (validarDatos(nombre) && validarDatos(capacidad) && validarDatos(piso)){

                let nueva_sala = new Sala (nombre, capacidad, piso, proyector);
                let confirmar_sala = crear_confirmacion(nueva_sala);

                if (confirmar_sala) {
                    alert ("Sala " + nueva_sala.mostrar_info() + " creada");
                    document.write (nueva_sala.mostrar_infoCompleta());
                    console.log(nueva_sala);
                }else{
                    let actualizarDato;
                    do{
                        actualizarDato = prompt("¿Que dato queres actualizar? \n - Nombre \n - Piso \n - Capacidad \n - Proyector");
                        switch (actualizarDato){
                            case "Nombre":
                                respuesta_actualizacion = prompt ("¿Cual va a ser el nombre de la sala?").toUpperCase();
                                nueva_sala.nombre = nombre;
                            break;
                            case "Piso":
                                respuesta_actualizacion =  prompt ("¿Dónde esta ubicada?");
                                nueva_sala.piso = piso;
                            break;
                            case "Capacidad": 
                            respuesta_actualizacion = prompt ("¿Cuantas personas pueden entrar?");
                                nueva_sala.capacidad = capacidad;
                            break;
                            case "Proyector":
                                respuesta_actualizacion = confirm ("¿Tiene proyector?")
                                nueva_sala.proyector = proyector;
                            break;
                            default: 
                                alert ("Escribí que dato querés cambiar");
                        }
                    }while(actualizarDato == "");

                    // CORREGIR
                    confirmar_sala = crear_confirmacion(nueva_sala);
                    confirm (confirmar_sala);
                    //
                }
        }else {
            alert ("Dejaste un dato sin completar");
        }
    }while (validarDatos(false));

    //let confirmar = crear_confirmacion();
}

/////////////////FUNCIONES/////////////////////////////

function validarN (numeroCargado, condicionA, condicionB, pregunta, mensaje1, mensaje2, mensaje3){
        let valor = numeroCargado;
        do{
            valor = parseInt(prompt(pregunta));
            if(valor > condicionA){
                alert (mensaje1);
            }else if(valor < condicionB){
                alert (mensaje2);
            }else
            console.log (mensaje3);
        }while (valor > condicionA || valor < condicionB || valor == "" || valor == null || /\D/.test(valor));

        let respuesta_valor = valor;
        return respuesta_valor;
    }

    function proyector_detalle (dato){
        let tieneProyector = dato;
        tieneProyector = confirm("¿Tiene proyector?");
            if(tieneProyector){
                alert ("Tiene proyector");
                return true;
            }
            else{
                alert ("No tiene proyector");
                return false;
            }
        }        

    function crear_confirmacion(datoSala){
        let mensaje = "";
        mensaje = mensaje + "¿Los datos cargados son correctos? \n";
        mensaje = mensaje + "\n Nombre: " + datoSala.nombre;
        mensaje = mensaje + "\n Piso: " + datoSala.piso;
        mensaje = mensaje + "\n Capacidad: " + datoSala.capacidad;
        mensaje = mensaje + "\n ¿Tiene proyector?: " + datoSala.mostrar_proyector() ;

        let respuesta = confirm(mensaje);

        return respuesta;
    }


    function validarDatos(dato){
        if(!dato){
            return false;
        }
        if(dato == ""){
            return false;
        }
        return true;
    }

    function actualizarDato(numeroDato){
        let actualizarDato = numeroDato;
        let nueva_sala
                    do{
                        actualizarDato = prompt("¿Que dato queres actualizar? \n - Nombre \n - Piso \n - Capacidad \n - Proyector");
                        switch (actualizarDato){
                            case "Nombre":
                                respuesta_actualizacion = prompt ("¿Cual va a ser el nombre de la sala?").toUpperCase();
                                nueva_sala.nombre = nombre;
                            break;
                            case "Piso":
                                respuesta_actualizacion =  prompt ("¿Dónde esta ubicada?");
                                nueva_sala.piso = piso;
                            break;
                            case "Capacidad": 
                            respuesta_actualizacion = prompt ("¿Cuantas personas pueden entrar?");
                                nueva_sala.capacidad = capacidad;
                            break;
                            case "Proyector":
                                respuesta_actualizacion = confirm ("¿Tiene proyector?")
                                nueva_sala.proyector = proyector;
                            break;
                            default: 
                                alert ("Escribí que dato querés cambiar");
                        }
                    }while(actualizarDato == "");
        
        return actualizarDato;
}