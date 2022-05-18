// Creaccion de salas
class Sala {

    constructor (nombre, capacidad, piso){
        this.nombre = nombre;
        this.capacidad = parseInt(capacidad);
        this.piso = parseInt(piso);
        this.estado = true;
        this.proyector = undefined;


    }
    mostrar_info(){
        return this.nombre;
    }
   
    mostrar_proyector(){
        if(this.proyector){
            return "Si";
        }else{
            return "No";
        }
    }
    mostrar_infoCompleta(){
        return "Se creo la sala " + this.nombre + " - " + this.estado + "<br>"
        + "Capacidad: " + this.capacidad + " personas" + " - " + "Proyector: " + this.proyector + "<br>"
        + "Ubicado en el piso N° " + this.piso;
    }
}