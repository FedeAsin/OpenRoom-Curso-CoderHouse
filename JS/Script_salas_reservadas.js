
const clave_rs = "Salas_reservadas";

let conjuntoDeSalas = cargar_Salas();

function cargar_Salas (){

    let salas = localStorage.getItem(clave_rs);
    
    if (salas){
        salas = JSON.parse(salas);
        console.table(salas);

          for (let i = 0 ; i < salas.length ; i++) {
            let s = salas[i];
            Sala.newSala(s);
            creadoraDe_Div (s.nombre,s.capacidad,s.piso,s.proyector);
            ocultar_emptyState();
            mostrar_salasReservadas();
          }
          return salas;
    }

    return new Array();
}

function creadoraDe_Div(nombre,capacidad,piso,proyector){

    let mostrarSalas = document.getElementById("mostrarSalas");

    let box = document.createElement("div");
    box.classList.add("box");

    let nombreS = document.createElement("h2");
    nombreS.textContent = nombre.toUpperCase();

    let capacidadS = document.createElement("h3");
    capacidadS.textContent = capacidad + " personas";

    let ubicacionS = document.createElement("h3");
    ubicacionS.textContent = piso + " piso";

    let proyectorS = document.createElement("h3");
    if(proyector){
    proyectorS.textContent = "Con proyector";
    
    }else {
    proyectorS.textContent = "Sin proyector";
    }

    box.appendChild(nombreS);
    box.appendChild(capacidadS);
    box.appendChild(ubicacionS);
    box.appendChild(proyectorS);

    mostrarSalas.appendChild(box);
}

function ocultar_emptyState(){
  let eS = document.getElementById("emptyState");
  eS.style.visibility = "hidden";
  eS.style.opacity = "0";
}

function mostrar_salasReservadas(){
  let eS = document.getElementById("salasReservadas");
  eS.style.visibility = "visible";
  eS.style.opacity = "1";
}