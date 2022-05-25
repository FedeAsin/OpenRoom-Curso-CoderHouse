// Este es el array donde se guardan las salas creadas
let salasGuardadas = [];


// Creaccion de salas
class Sala {

    constructor (nombre, capacidad, piso){
        this.nombre = (nombre).toUpperCase();
        this.capacidad = parseInt(capacidad);
        this.piso = parseInt(piso);
        // this.proyector = false;
    }
    mostrar_info(){
        return this.nombre;
    }

    

    mostrar_infoCompleta(){
        return (this.nombre + "\n" + "Capacidad: " + this.capacidad + " personas" + "\n" + "Ubicado en el piso N° " + this.piso + "\n\n");
    }

}


    // mostrar_proyector(){
    //     if(this.proyector == false){
    //         return "No";
    //     }else{
    //         return "Sí";
    //     }
    // }

    // //Cambiar proyector a false
    // set_proyector(cambio_proyector){
    //     this.proyector = cambio_proyector;
    // }