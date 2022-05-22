// Este es el array donde se guardan las salas creadas
const salasGuardadas = new Array();
// Creaccion de salas
class Sala {

    constructor (nombre, capacidad, piso){
        this.nombre = nombre;
        this.capacidad = parseInt(capacidad);
        this.piso = parseInt(piso);
        this.proyector = false;
    }
    mostrar_info(){
        return this.nombre;
    }
   
    mostrar_proyector(){
        if(this.proyector == false){
            return "No";
        }else{
            return "Sí";
        }
    }

    mostrar_infoCompleta(){
        return this.nombre + "<br>"
        + "Capacidad: " + this.capacidad + " personas" + " - " + "Proyector: " + this.proyector + "<br>"
        + "Ubicado en el piso N° " + this.piso;
    }


    set_nombre(nuevo_nombre){
        this.nombre = nuevo_nombre;
    }

    //Cambiar proyector a false
    set_proyector(cambio_proyector){
        this.proyector = cambio_proyector;
    }


}







/* ¿Como hago para al reservar un horario y un dia para la sala quede guardada la info?
 Al reservar un lunes de 10 a 11 la sala creada deberia bloquear ese dato.... como lo hago?
 
 
 
 */