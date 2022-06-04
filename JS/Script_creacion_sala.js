const clave_ls = "Salas_guardadas";

const clave_id = "clave_id";

let id_sala = 0;

let btn_crear = document.getElementById("btn");

let conjuntoDeSalas = cargar_Salas();



//// FORMULARIO ////

btn_crear.addEventListener("click",(e)=>{
    e.preventDefault();
    
    if (validador()){

        creador_Sala();
        reseteador();
    }

});





//// FUNCIONES ////


//// recorrer claves ////

function recorrer_claves (){
    for (let i = 0 ; i < id_sala.length ; i++) {
        let s = id_sala[i];
        Sala.newSala(s);
      }
      return id_sala;
    }

recorrer_claves ()
    

//// CARGAR SALAS ////
function cargar_Salas (){

    let salas = localStorage.getItem(clave_ls);
    
    if (salas){
        salas = JSON.parse(salas);

          for (let i = 0 ; i < salas.length ; i++) {
            let s = salas[i];
            Sala.newSala(s);
            creadoraDe_Div (s.nombre,s.capacidad,s.piso);
          }
          return salas;
    }

    return new Array();
}


//// VALIDADOR DE DATOS ////

    function validador(){

        let nuevoNombre = document.getElementById("input_name").value;
        let nuevaCapacidad = document.getElementById("input_guests").value;
        let nuevoPiso = document.getElementById("input_location").value;
        

        if(!nuevoNombre && !nuevaCapacidad && !nuevoPiso){
            alert("Ingresá los datos solicitados")

            return false;
        }

        if (!nuevoNombre){
            alert("Ingresá el nombre de la sala");

            return false;
        }

        if (!nuevaCapacidad){
            alert("Ingresá la capacidad máxima de la sala");

            return false;
        }

        if (!nuevoPiso){
            alert("Ingresá el piso donde se encuentra la sala");

            return false;
        }

        return true;
    }


////CREADOR SALAS

    function creador_Sala(){

        let nuevoNombre = document.getElementById("input_name").value;
        let nuevaCapacidad = document.getElementById("input_guests").value;
        let nuevoPiso = document.getElementById("input_location").value;

        let dato_salaNueva = new Sala(
            id_sala,
            nuevoNombre,
            nuevaCapacidad,
            nuevoPiso);

        id_sala++


        creadoraDe_Div(nuevoNombre,nuevaCapacidad,nuevoPiso);
        salasGuardadas.push(dato_salaNueva);

        localStorage.setItem(clave_ls, JSON.stringify(salasGuardadas));
    }

//// CREADOR DE CARDS DE SALAS CREADAS ////

function creadoraDe_Div (nombre,capacidad,piso){


    let mostrarSalas = document.getElementById ("mostrarSalas");
    let box = document.createElement("div");


    let nombreS = document.createElement("h2");
    nombreS.textContent = nombre;  //.toUpperCase();

    let capacidadS = document.createElement("h3");
    capacidadS.textContent = capacidad + " personas";

    let ubicacionS = document.createElement("h3");
    ubicacionS.textContent = piso + " piso";

    box.appendChild(nombreS);
    box.appendChild(capacidadS);
    box.appendChild(ubicacionS);

    mostrarSalas.appendChild(box);

    console.log("Se creo la sala: " + salasGuardadas);

    //// Hover en card ////
    hover_Card(box);
}


//// HOVER DE CARD ////

function hover_Card(box){

    box.addEventListener("mouseover", ()=>{
        box.style.cursor = "pointer";
        box.style.backgroundColor = "#F9FAFC";     
    });

    box.addEventListener("mouseout", ()=>{
    box.style.backgroundColor = "#FFFFFF";     
    });
    }       


//// RESETEAR FORMULARIO ////

function reseteador(){
    
    document.getElementById("input_name").value = "";
    document.getElementById("input_location").value = "";
    document.getElementById("input_guests").value = "";

}











