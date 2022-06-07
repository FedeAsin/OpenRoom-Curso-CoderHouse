// Creaccion de salas
class Sala {

    constructor (id, nombre, capacidad, piso, proyector){
        this.id = id;
        this.nombre = nombre;
        this.capacidad = parseInt(capacidad);
        this.piso = parseInt(piso);
        this.proyector = proyector;
        this.estado = "Libre";
    }

    static newSala(sala){
        return new Sala(sala.id,sala.nombre,sala.capacidad,sala.piso);
    }

    mostrar_info(){
        return this.nombre;
    }

    mostrar_infoCompleta(){
        return (this.nombre + "\n" + "Capacidad: " + this.capacidad + " personas" + "\n" + "Ubicado en el piso N° " + this.piso + "\n\n");
    }

    getEstado(){
        return this.estado ;
    }

    setEstadoNuevo(nuevo_estado){
        this.estado = nuevo_estado;
    }
}
