
const clave_rs = "Salas_reservadas";

let conjuntoDeSalas = load_room();

function load_room (){

    let salas = localStorage.getItem(clave_rs);
    
    if (salas){
        salas = JSON.parse(salas);
          for (let i = 0; i < salas.length; i++) {
            let s = salas[i];
            Sala.newSala(s);
            create_card (s.id,s.nombre,s.capacidad,s.piso,s.proyector);
            hide_emptyState();
            show_createdRooms();
          }
          return salas;
    }

    return new Array();
}

function create_card(id,nombre,capacidad,piso,proyector){

    let mostrarSalas = document.getElementById("mostrarSalas");

    let box = document.createElement("div");
    box.classList.add("box");
    box.setAttribute("box_id", id);

    let nombreS = document.createElement("h2");
    nombreS.textContent = nombre;

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

    let btn_detaill = document.createElement("button");
        btn_detaill.textContent = "Ver sala";
        btn_detaill.classList.add("btnDetaill");
        hover_button(btn_detaill)



    box.appendChild(nombreS);
    box.appendChild(capacidadS);
    box.appendChild(ubicacionS);
    box.appendChild(proyectorS);
    box.appendChild(btn_detaill);

    mostrarSalas.appendChild(box);
}

function hide_emptyState(){
  let eS = document.getElementById("emptyState");
  eS.style.visibility = "hidden";
  eS.style.opacity = "0";
}

function show_createdRooms(){
  let eS = document.getElementById("salasReservadas");
  eS.style.visibility = "visible";
  eS.style.opacity = "1";
}
function hover_button(element){

  element.addEventListener("mouseover", ()=>{
      element.style.cursor = "pointer";
      element.style.backgroundColor = "#4575d687";     
  });

  element.addEventListener("mouseout", ()=>{
  element.style.backgroundColor = "#4576D6";     
  });
} 








