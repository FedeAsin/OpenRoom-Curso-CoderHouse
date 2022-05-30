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



let sala1 = new Sala ("Azul", 10, 1);
let sala2 = new Sala ("Rojo", 12, 2);


salasGuardadas.push(sala1);
salasGuardadas.push(sala2);
