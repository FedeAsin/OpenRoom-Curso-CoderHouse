const clave_ls = "Salas_guardadas";

// let id_sala = localStorage.getItem(clave_id);

let btn_buscar = document.getElementById("btn_buscar");


//// FORMULARIO ////

btn_buscar.addEventListener("click",(e)=>{
    e.preventDefault();
    
    if (validador_b()){

        alert("buscando la sala...");
        cargar_Salas_b ()
        // creador_Sala();
        reseteador_b();
    }

});


//// FUNCIONES ////

function validador_b(){

    let diaReserva = document.querySelector(".rDay").value;   
    let time_from = document.getElementById("ftime_f").value;
    let time_until = document.getElementById("ftime_u").value;
    let input_guests = document.getElementById("input_invitados").value;


    let error = document.getElementById("error");
    error.style.color = "red";

    let mensajesError = [];
    if(!diaReserva && !time_from && !time_until && !input_guests){
        mensajesError.push("Ingresá los datos solicitados");
        error.innerHTML = mensajesError.join(", ");

        return false;
    }

    if (!diaReserva){
        mensajesError.push("Seleccioná el día que queres reservar");
        error.innerHTML = mensajesError.join(", ");

        return false;
    }

    if (!time_from){
        mensajesError.push("Ingresá la hora de inicio de reserva");
        error.innerHTML = mensajesError.join(", ");

        return false;
    }

    if (!time_until){
        mensajesError.push("Ingresá la hora de fin de reserva");
        error.innerHTML = mensajesError.join(", ");

        return false;
    }
    if (time_until < time_from){
        mensajesError.push("El horario de fin no puede ser menor al de inicio");
        error.innerHTML = mensajesError.join(", ");

        return false;
    }
    if (time_until == time_from){
        mensajesError.push("El horario de fin no puede ser igual al de inicio");
        error.innerHTML = mensajesError.join(", ");

        return false;
    }


    if (!input_guests){
        mensajesError.push("Ingresá la cantidad de invitados");
        error.innerHTML = mensajesError.join(", ");

        return false;
    }
    if (input_guests > 20){
        mensajesError.push("La capacidad máxima es 20 personas");
        error.innerHTML = mensajesError.join(", ");

        return false;
    }
    if (input_guests < 1){
        mensajesError.push("La capacidad mínima es 1 persona");
        error.innerHTML = mensajesError.join(", ");

        return false;
    }

    mensajesError.push(" ");
    error.innerHTML = mensajesError;


    return true;

    
}

function reseteador_b(){
        
    document.getElementById("dLunes").value = false;
    document.getElementById("ftime_f").value = "";
    document.getElementById("ftime_u").value = "";
    document.getElementById("input_invitados").value = "";

}

function cargar_Salas_b (){

    let salas = localStorage.getItem(clave_ls);

    
    if (salas){
        salas = JSON.parse(salas);
        console.table(salas);

          for (let i = 0 ; i < salas.length ; i++) {
            let s = salas[i];
            Sala.newSala(s);
            creadoraDe_Div (s.nombre,s.capacidad,s.piso,s.proyector);
          }
          return salas;
    }

    return alert("no hay salas creadas")
}

//// CREADOR DE CARDS DE SALAS CREADAS ////

function creadoraDe_Div (nombre,capacidad,piso,proyector){

    title.style.visibility = "visible";

    let mostrarSalas = document.getElementById ("mostrarSalas");
    let box = document.createElement("div");


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