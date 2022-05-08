
// Pedir nombre
let nombreReserva = prompt("¿A nombre de quien reservás la sala?");
    console.log(nombreReserva);
    document.write("Hola " + nombreReserva);
//¿Como hago para que no se pueda avanzar si no se completo el campo? Porque ahora si le doy enter pasa a la seleccion de dia

// Agendar dia de la semana
let diaReserva;
do {
    diaReserva = parseInt (prompt("Hola " + nombreReserva + " ¿Qué día de la semana querés reservarla? \n 1: Lunes \n 2: Martes \n 3: Miercoles \n 4: Jueves \n 5: Viernes")); 
    switch(diaReserva){
        case 1:
        confirm("¿Querés reservar una sala el lunes?");
            document.write(", reservaste una sala el Lunes");
            console.log(diaReserva);
        break;
        case 2:
        confirm("¿Querés reservar una sala el martes?");
            document.write(", reservaste una sala el Martes");
            console.log(diaReserva);
        break;
        case 3:
        confirm("¿Querés reservar una sala el miercoles?");
            document.write(", reservaste una sala el Miercoles");
            console.log(diaReserva);
        break;
        case 4:
        confirm("¿Querés reservar una sala el jueves?");
            document.write(", reservaste una sala el Jueves");
            console.log(diaReserva);
        break;
        case 5:
        confirm("¿Querés reservar una sala el viernes?");
            document.write(", reservaste una sala el Viernes");
            console.log(diaReserva);
        break;
        default:
        alert("Por favor, seleccioná un número del 1 al 5");
    }
} while (diaReserva <1 || diaReserva >5);



//  Si coloco este codigo (diaReserva !== Number) o (diaReserva == "") para que repita el ciclo si no pongo un numero o pongo enter sin completar, no se repite el ciclo. ¿Por que sera?
 
// Si quiero, luego de seleccionar el día de reserva de la sala que seleccione el horario (entre 10 y 18 hs) como se podria hacer? Lo arme como se ve abajo pero no me funciona del todo bien.

/*
 
  let horaSeleccionada = prompt("Elegí la hora que querés reservar la sala pára el día " + diaReserva);

    if (horaGuardada){
        document.write(" en el horario de las " + horaSeleccionada);
        alert ("¡Listo! \n Reservaste una sala el día " + diaReserva + " en el horario de las " + horaSeleccionada);
    }else{
    alert ("En el horario que elegiste las oficinas estan cerradas, elegí un horario de 10 a 18.");
        console.log("En el horario que elegiste las oficinas estan cerradas, elegí un horario de 10 a 18.");
    }
   */