let salasReservadas = [];

class SalasR {
    constructor (nombreR, capacidadR, pisoR, diaR, horaI_R, horaF_R){
        this.nombreR = nombreR;
        this.capacidadR = parseInt(capacidadR);
        this.pisoR = parseInt(pisoR);
        this.diaR = parseInt(diaR);
        this.horaI_R = parseInt(horaI_R);
        this.horaF_R = parseInt(horaF_R);
    }

    mostrar_infoR(){
        return this.nombreR;
    }

    cambiarDia_aString(){
        if (this.diaR == 1){
            return "Lunes";
        }if (this.diaR == 2){
            return "Martes";
        }if (this.diaR == 3){
            return "Miercoles";
        }if (this.diaR == 4){
            return "Jueves";
        }if (this.diaR == 5){
            return "Viernes";
        }
    }

    mostrar_infoCompletaR(){
        return ("Sala reservada a nombre de " + this.nombreR + "<br>" + "Capacidad: " + this.capacidadR + " personas" + "<br>" + "Ubicado en el piso N° " + this.pisoR + "<br><br>"
        + "Día de reserva: " + this.cambiarDia_aString(this.diaR) + "<br>  Horario de reserva: " + this.horaI_R + " a " + this.horaF_R + " horas" + "<br>" + "Tiempo de reserva: " + tiempoReserva (this.horaI_R, this.horaF_R) + " hora/s");
    }
}

