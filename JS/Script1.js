let iniciarReserva = confirm ("¿Querés reservar una sala?");
    if (iniciarReserva){
        // Pedir nombre
        nombreReserva = reservaPorNombre();
        let nombreR = nombreReserva;

        // Seleccionar piso 
        let piso;
        piso = validarN(piso, 15,"El edificio tiene 15 pisos: \n\n¿En que piso querés reservar la sala?", "❗El edificio tiene 15 pisos, elegí otro piso","❗Elegí un piso entre 1 y 15");
        let pisoR = piso;

        // Seleccionar capacidad;
        let capacidad;
        capacidad = validarN(capacidad, 20, "La capacidad máxima es de 20 personas: \n\n¿Cuantas personas van a asistir?", "❗La salas solo tienen capacidad hasta 20 personas", "❗La sala se debe reservar, minimamente, para 1 persona");
        let capacidadR = capacidad;

        // Agendar dia de la semana
        diaReserva = fechaReserva();
        let diaR = diaReserva;

        // Hora de inicio
        horaInicio = tiempoInicio();
        let horaI_R = horaInicio;

        // Hora de finalización de la reserva
        horaFin = tiempoFin ();
        let horaF_R = horaFin

        // Funcion para validar datos cargados
        let funcionDeValidacion = ((nombreR, capacidadR, pisoR, diaR, horaI_R, horaF_R) => {
            if (validarDatos(nombreR) && validarDatos(capacidadR) && validarDatos(pisoR) && validarDatos(diaR) && validarDatos(horaI_R) && validarDatos(horaF_R)){

                const nueva_sala = new SalasR(nombreR, capacidadR, pisoR, diaR, horaI_R, horaF_R);

                        let confirmar_sala = crear_confirmacion(nueva_sala);
                        if (confirmar_sala) {

                            salasReservadas.push(nueva_sala);
                            console.log(salasReservadas);
                            return escribirEn_documento(nueva_sala);

                        }else{
                            // pedirDatos_sala();
                            console.log(salasReservadas);
                        }
            }
        });

        funcionDeValidacion(nombreR, capacidadR, pisoR, diaR, horaI_R, horaF_R);
}

///////FUNCIONES//////

// Pedir nombre
function reservaPorNombre (nombre){
    let nombreReserva = nombre;
        do{
            nombreReserva = prompt("¿A nombre de quien reservás la sala?");
            console.log(nombreReserva);
            if (!isNaN(nombreReserva)){
                alert ("Escribí un nombre");
            }
        }while(nombreReserva == "" || !isNaN(nombreReserva) || nombreReserva == null );
             alert("Hola " + nombreReserva);
    return nombreReserva;
    }

// Agendar dia de la semana
function fechaReserva (){
    let diaReserva;
        do {
            let respuesta;
            diaReserva = parseInt(prompt("¿Qué día de la semana querés reservarla? \n 1: Lunes \n 2: Martes \n 3: Miercoles \n 4: Jueves \n 5: Viernes")); 
            switch(diaReserva){
                case 1:
                    respuesta = confirm("¿Querés reservar una sala el lunes?");
                    if (respuesta) {
                        console.log(diaReserva);
                    }else{
                        fechaReserva();
                    }
                break;
                case 2:
                respuesta = confirm("¿Querés reservar una sala el martes?");
                    if (respuesta) {
                        console.log(diaReserva);
                    }else{
                        fechaReserva();
                    }
                break;
                case 3:
                    respuesta = confirm("¿Querés reservar una sala el miercoles?");
                    if (respuesta) {
                        console.log(diaReserva);
                    }else{
                        fechaReserva();
                    }
                break;
                case 4:
                    respuesta = confirm("¿Querés reservar una sala el jueves?");
                    if (respuesta) {
                        console.log(diaReserva);
                    }else{
                        fechaReserva();
                    }
                break;
                case 5:
                    respuesta = confirm("¿Querés reservar una sala el viernes?");
                    if (respuesta) {
                        console.log(diaReserva);
                    }else{
                        fechaReserva();
                    }
                break;
                default:
                alert("Por favor, seleccioná un número del 1 al 5");
            }
        } while (diaReserva <1 || diaReserva >5 || diaReserva == null || /\D/.test(diaReserva) || diaReserva == "");
  
    return diaReserva;

    }    

// Hora de inicio
function tiempoInicio (hora1){
        let horaInicio = hora1;
            do {
                horaInicio = parseInt(prompt("Elegí la hora que querés reservar la sala"));
                if(horaInicio <10 || horaInicio >=18 ||horaInicio == null || horaInicio == "" || /\D/.test(horaInicio)){
                    alert ("En el horario que elegiste las oficinas estan cerradas, elegí un horario de 10 a 18.");
                }
            }while(horaInicio <10 || horaInicio >=18 ||horaInicio == null || horaInicio == "" || /\D/.test(horaInicio));
        return horaInicio;
    }

    // Hora de finalización de la reserva
function tiempoFin (hora2) {
        let horaFin = hora2;
            do {
                horaFin = parseInt(prompt("¿Hasta que hora querés reservar la sala?"));
                if(horaFin <10 || horaFin >18){
                    alert ("En el horario que elegiste las oficinas estan cerradas, elegí un horario de 10 a 18.");
                }else if(horaFin <= horaInicio){
                    alert ("El horario que seleccioneste es menor al de inicio");
                    console.log("El horario que seleccioneste es menor al de inicio"); 
                }
            }while(horaFin <10 || horaFin >18 || horaFin <= horaInicio || horaFin == null || horaFin == "" || /\D/.test(horaFin));
        return horaFin
    }

// Tiempo de reserva de la sala
function tiempoReserva (hora1, hora2){
    let resultado = hora2 - hora1;
return resultado;
    }

//Valida el piso y la capacidad
function validarN (datoCargado, condicionA, pregunta, mensaje1, mensaje2, confirmacion){
    let valor = datoCargado;
        do{
            valor = parseInt(prompt(pregunta));
            if(valor > condicionA){
                alert (mensaje1);
            }
            if(valor < 1){
                alert (mensaje2);
            }
            else{       
                console.log (confirmacion);
            }
        }while (valor > condicionA || valor < 1 || valor == "" /*|| valor == null*/ || /\D/.test(valor));
        
    return valor;
} 

// Crea la confirmacion de los datos cargados
function crear_confirmacion(datoSala){
    let mensaje = "¿Los datos cargados son correctos? \n";
    mensaje += "\n Reserva a nombre de " + datoSala.nombreR;
    mensaje += "\n Piso: " + datoSala.pisoR;
    mensaje += "\n Capacidad: " + datoSala.capacidadR + " personas";
    mensaje += "\n\n Día de reserva: " + datoSala.cambiarDia_aString();
    mensaje += "\n Horario de reserva: " + datoSala.horaI_R + " a " + datoSala.horaF_R + " horas" + " ( " + (tiempoReserva (datoSala.horaI_R, datoSala.horaF_R) +  " hora/s )");
    
    let respuesta = confirm(mensaje);

    return respuesta;
}
//Valida que los datos fueron cargados
function validarDatos(dato){
    if(!dato){
        return false;
    }
    if(dato == ""){
        return false;
    }
    return true;
}
//Escribir salas en el documento
function escribirEn_documento(salaI){
    alert ("Reservaste una sala🤘");
    document.write (salaI.mostrar_infoCompletaR() + "<br>");
    console.log(salaI);
}


////////

// let input = document.getElementById("input_invitados");
// input.addEventListener("keypress", (e) =>{
    
// }



