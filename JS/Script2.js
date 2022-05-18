class Sala {
    constructor(nombre, capacidad, ubicacion) {
        this.nombre = nombre.toUpperCase();
        this.capacidad = parseInt(capacidad);
        this.ubicacion = parseInt(ubicacion);
        this.proyector = false;
        this.reserved = false;
    }
    getInfo(){
        return this.nombre + " - " + this.capacidad;
    }
    getProyector() {
        this.proyector = true;
    }
}

function crearSala(){
    let n = prompt("¿Que nombre va a tener esta sala?");
    let c = prompt("¿Cuanta gente puede entrar?");
    let u = prompt("¿En que piso se encuentra?");
    let p = confirm("¿Tiene proyector?");
    if(p==true){
        nueva_sala.getProyector();
    }else{
    }

    let nueva_sala = new Sala (n, c, u, p);
    return nueva_sala;
}


let nuevaSala = crearSala();
console.log(nuevaSala);