
// Pedir nombre
let nombreReserva;
do{
    nombreReserva = prompt("¿A nombre de quien reservás la sala?");
    console.log(nombreReserva);
}while(nombreReserva == "");
    document.write("Hola " + nombreReserva);

// Agendar dia de la semana
let diaReserva;

do {
    diaReserva = parseInt (prompt("Hola " + nombreReserva + " ¿Qué día de la semana querés reservarla? \n 1: Lunes \n 2: Martes \n 3: Miercoles \n 4: Jueves \n 5: Viernes")); 
    switch(diaReserva){
        case 1:
        confirm("¿Querés reservar una sala el lunes?");
            document.write(", reservaste una sala el lunes");
            console.log(diaReserva);
        break;
        case 2:
        confirm("¿Querés reservar una sala el martes?");
            document.write(", reservaste una sala el martes");
            console.log(diaReserva);
        break;
        case 3:
        confirm("¿Querés reservar una sala el miercoles?");
            document.write(", reservaste una sala el miercoles");
            console.log(diaReserva);
        break;
        case 4:
        confirm("¿Querés reservar una sala el jueves?");
            document.write(", reservaste una sala el jueves");
            console.log(diaReserva);
        break;
        case 5:
        confirm("¿Querés reservar una sala el viernes?");
            document.write(", reservaste una sala el viernes");
            console.log(diaReserva);
        break;
        default:
        alert("Por favor, seleccioná un número del 1 al 5");
    }
} while (diaReserva <1 || diaReserva >5 || diaReserva == null || /\D/.test(diaReserva) || diaReserva == "");

// Determianr fecha de reserva
let horaSeleccionada
horaSeleccionada = prompt("Elegí la hora que querés reservar la sala pára el día " + diaReserva);


while (horaSeleccionada <10 || horaSeleccionada >18) {
    alert ("En el horario que elegiste las oficinas estan cerradas, elegí un horario de 10 a 18.");
    console.log("En el horario que elegiste las oficinas estan cerradas, elegí un horario de 10 a 18."); 
    horaSeleccionada = prompt("Elegí la hora que querés reservar la sala pára el día " + diaReserva);
    
}
    alert ("¡Listo! \n Reservaste una sala el día " + diaReserva + " en el horario de las " + horaSeleccionada);
    document.write(" en el horario de las " + horaSeleccionada);
    
