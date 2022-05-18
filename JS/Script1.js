let iniciarReserva = confirm ("¿Querés reservar una sala?")
    if (iniciarReserva){
        // Pedir nombre
        nombreReserva = reservaPorNombre();

        // Agendar dia de la semana
        diaReserva = fechaReserva();

        // Hora de inicio
        horaInicio = tiempoInicio();

        // Hora de finalización de la reserva
        horaFin = tiempoFin ();

        // Tiempo de reserva de la sala
        resultado = tiempoReserva (horaInicio, horaFin);
}


///////FUNCIONES//////

// Pedir nombre
function reservaPorNombre (nombre){
    let nombreReserva = nombre;
        do {
            nombreReserva = prompt("¿A nombre de quien reservás la sala?");
            console.log(nombreReserva);
        }while(nombreReserva == "");
            document.write("Hola " + nombreReserva);
    return nombreReserva;
    }

 // Agendar dia de la semana
 function fechaReserva (dia){
    let diaReserva = dia;
    let respuesta;
        do {
            diaReserva = parseInt(prompt("Hola " + nombreReserva + " ¿Qué día de la semana querés reservarla? \n 1: Lunes \n 2: Martes \n 3: Miercoles \n 4: Jueves \n 5: Viernes")); 
            switch(diaReserva){
                case 1:
                    respuesta = confirm("¿Querés reservar una sala el lunes?");
                    if (respuesta) {
                        document.write(", reservaste una sala el lunes");
                        console.log(diaReserva);
                    }else{
                        fechaReserva();
                    }
                break;
                case 2:
                respuesta = confirm("¿Querés reservar una sala el martes?");
                    if (respuesta) {
                        document.write(", reservaste una sala el martes");
                        console.log(diaReserva);
                    }else{
                        fechaReserva();
                    }
                break;
                case 3:
                    respuesta = confirm("¿Querés reservar una sala el miercoles?");
                    if (respuesta) {
                        document.write(", reservaste una sala el miercoles");
                        console.log(diaReserva);
                    }else{
                        fechaReserva();
                    }
                break;
                case 4:
                    respuesta = confirm("¿Querés reservar una sala el jueves?");
                    if (respuesta) {
                        document.write(", reservaste una sala el jueves");
                        console.log(diaReserva);
                    }else{
                        fechaReserva();
                    }
                break;
                case 5:
                    respuesta = confirm("¿Querés reservar una sala el viernes?");
                    if (respuesta) {
                        document.write(", reservaste una sala el viernes");
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
                horaInicio = parseInt(prompt("Elegí la hora que querés reservar la sala para el día " + diaReserva));
                if(horaInicio <10 || horaInicio >=18){
                    alert ("En el horario que elegiste las oficinas estan cerradas, elegí un horario de 10 a 18.");
                }else{
                    document.write(", de " + horaInicio);
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
                }else{
                    document.write(" a " + horaFin + ".");
                }
            }while(horaFin <10 || horaFin >18 || horaFin <= horaInicio || horaFin == null || horaFin == "" || /\D/.test(horaFin));
        return horaFin
        }

// Tiempo de reserva de la sala
function tiempoReserva (hora1, hora2){
    let resultado = hora2 - hora1;
    if(resultado >= 2){
        alert("Reservaste un sala desde las " + horaInicio + " hasta las " + horaFin + " horas." + "\nEl tiempo de reserva de la sala es de " + resultado + " horas")
        document.write(" El tiempo de reserva de la sala es de " + resultado + " horas");    
    }else{
        alert("Reservaste un sala desde las " + horaInicio + " hasta las " + horaFin + " horas." + "\nEl tiempo de reserva de la sala es de " + resultado + " hora")
        document.write(" El tiempo de reserva de la sala es de " + resultado + " hora");
    }
return resultado;
}