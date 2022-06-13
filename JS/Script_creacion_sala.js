const clave_ls = "Salas_guardadas";

const clave_id = "clave_id";

let id_sala = localStorage.getItem(clave_id);

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
    

//// CARGAR SALAS ////
function cargar_Salas (){

    let salas = localStorage.getItem(clave_ls);

    
    if (salas){
        salas = JSON.parse(salas);
        console.table(salas);

          for (let i = 0 ; i < salas.length ; i++) {
            let s = salas[i];
            Sala.newSala(s);
            creadoraDe_Div (s.nombre,s.capacidad,s.piso,s.proyector);
            ocultar_emptyState();
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

        let error = document.getElementById("error");
        error.style.color = "red";

        let mensajesError = [];
        if(!nuevoNombre && !nuevaCapacidad && !nuevoPiso){
            mensajesError.push("Ingresá los datos solicitados");
            error.innerHTML = mensajesError.join(", ");

            return false;
        }

        if (!nuevoNombre){
            mensajesError.push("Ingresá el nombre de la sala");
            error.innerHTML = mensajesError.join(", ");

            return false;
        }

        if (!nuevaCapacidad){
            mensajesError.push("Ingresá la capacidad máxima de la sala");
            error.innerHTML = mensajesError.join(", ");

            return false;
        }

        if (nuevaCapacidad > 20){
            mensajesError.push("La capacidad máxima es 20 personas");
            error.innerHTML = mensajesError.join(", ");

            return false;
        }
        if (nuevaCapacidad < 1){
            mensajesError.push("La capacidad mínima es 1 persona");
            error.innerHTML = mensajesError.join(", ");

            return false;
        }
        if (!nuevoPiso){
            mensajesError.push("Ingresá el piso donde está la sala");
            error.innerHTML = mensajesError.join(", ");

            return false;
        }
        if (nuevoPiso > 15){
            mensajesError.push("El edificio tiene 15 pisos");
            error.innerHTML = mensajesError.join(", ");

            return false;
        }
        if (nuevoPiso < 1){
            mensajesError.push("En la planta baja no hay salas");
            error.innerHTML = mensajesError.join(", ");

            return false;
        }

        mensajesError.push(" ");
        error.innerHTML = mensajesError;

        return true;

        
    }


////CREADOR SALAS

    function creador_Sala(){
    
        let nuevoNombre = document.getElementById("input_name").value;
        let nuevaCapacidad = document.getElementById("input_guests").value;
        let nuevoPiso = document.getElementById("input_location").value;
        let nuevoProyector = document.getElementById("input_proyector").checked;

        let dato_salaNueva = new Sala(
            id_sala,
            nuevoNombre,
            nuevaCapacidad,
            nuevoPiso,
            nuevoProyector);

        id_sala++

        conjuntoDeSalas.push(dato_salaNueva);
        localStorage.setItem(clave_ls, JSON.stringify(conjuntoDeSalas));

        creadoraDe_Div(nuevoNombre,nuevaCapacidad,nuevoPiso,nuevoProyector);

        ocultar_emptyState();
        mostrar_Toast();
    }

//// CREADOR DE CARDS DE SALAS CREADAS ////

function creadoraDe_Div (nombre,capacidad,piso,proyector){

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
    mostrar_salasYaCreadas();
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
    document.getElementById("input_proyector").value = false;

}

function mostrar_Toast(){
    let toast = document.getElementById("toast");
    toast.style.visibility = "visible";
    toast.style.opacity = "1";

    setTimeout(function(){
        toast.style.visibility = "hidden";
        toast.style.opacity = "0";
    },2000)
}

function mostrar_salasYaCreadas(){
    let eS = document.getElementById("salasCreadas");
    eS.style.visibility = "visible";
    eS.style.opacity = "1";
}

function ocultar_emptyState(){
    let eS = document.getElementById("emptyState");
    eS.style.visibility = "hidden";
    eS.style.opacity = "0";
}