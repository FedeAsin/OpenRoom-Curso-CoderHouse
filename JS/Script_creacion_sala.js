const clave_ls = "Salas guardadas";
const clave_rs = "Salas_reservadas";
let id = 0;
let btn_crear = document.getElementById("btn");
let conjuntoDeSalas = load_room();


//// FORMULARIO ////

btn_crear.addEventListener("click",(e)=>{
    e.preventDefault();
    
    if (validator()){
        create_room();
        reset_form();
    }

});


////> FUNCIONES <////

//// CARGAR SALAS ////

function load_room (){

    let salas = localStorage.getItem(clave_ls);
    
    if (salas){
        salas = JSON.parse(salas);
        console.table(salas);

          for (let i = 0 ; i < salas.length; i++){
            let s = salas[i];
            Sala.newSala(s);
            create_card(s.id,s.nombre,s.capacidad,s.piso,s.proyector);
            hide_emptyState();
          }
          return salas;
    }

    return new Array();
}


//// VALIDADOR DE DATOS ////

    function validator(){

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

////CREADOR SALAS ////

    function create_room(){
    
        let nuevoNombre = document.getElementById("input_name").value;
        let nuevaCapacidad = document.getElementById("input_guests").value;
        let nuevoPiso = document.getElementById("input_location").value;
        let nuevoProyector = document.getElementById("input_proyector").checked;

        let dato_salaNueva = new Sala(id,nuevoNombre,nuevaCapacidad,nuevoPiso,nuevoProyector);
        id++;
 
        conjuntoDeSalas.push(dato_salaNueva);
        localStorage.setItem(clave_ls, JSON.stringify(conjuntoDeSalas));

        create_card(id,nuevoNombre,nuevaCapacidad,nuevoPiso,nuevoProyector);
        hide_emptyState();
        show_toast("Sala creada");
        

    }


//// CREADOR DE CARDS DE SALAS CREADAS ////

function create_card (boxId,boxName,boxCapacity,boxLocation,boxProyector){


    let mostrarSalas = document.getElementById ("mostrarSalas");

    let box = document.createElement("div");
    box.classList.add("box");
    box.setAttribute("box_id", boxId);


    //Nombre
    let nombreS = document.createElement("h2");
    nombreS.textContent = boxName;
    //Capacidad
    let capacidadS = document.createElement("h3");
    if(boxCapacity == 1){
        capacidadS.textContent = boxCapacity + " persona";
    }else if(boxCapacity > 1){
        capacidadS.textContent = boxCapacity + " personas";
    }
    //Ubicacion
    let ubicacionS = document.createElement("h3");
    ubicacionS.textContent = boxLocation + " piso";
    //Proyector
    let proyectorS = document.createElement("h3");
    if(boxProyector){
    proyectorS.textContent = "Con proyector 🟢";
    }else {
    proyectorS.textContent = "Sin proyector 🔴";
    }
    // Boton borrar //
    let btnDelete = document.createElement("button");
        btnDelete.textContent = "Eliminar sala";
        btnDelete.classList.add("btnDelete");


        btnDelete.addEventListener("click", (event) =>{
            //Se selecciona la card a eliminar
            let cardToDelete = event.target.parentNode;
            //Se determina el ID de la card 
            let cardID = cardToDelete.getAttribute("box_id");
            console.log("cardID ->" + cardID);
            //Eliminar la card en el HTML
            cardToDelete.remove();
            //Eliminar la card en LocalStorage
            deleteInLocalStorage(cardID);
        })

        function deleteInLocalStorage(id_sala){
            //obtener localStorage
            let obtenerLocalStorage = JSON.parse(localStorage.getItem(clave_ls));
            //busco posicion a eliminar
            let indexInLocalStorage = obtenerLocalStorage.findIndex(element => element.id === id_sala);
            //elimino el elemento
            obtenerLocalStorage.splice(indexInLocalStorage, 1);
            //Guardo el nuevo array - Salas creadas
            localStorage.setItem(clave_ls, JSON.stringify(obtenerLocalStorage));
        }
    

    // DIBUJAR COMPONENTES
    box.appendChild(nombreS);
    box.appendChild(capacidadS);
    box.appendChild(ubicacionS);
    box.appendChild(proyectorS);
    box.appendChild(btnDelete);
    mostrarSalas.appendChild(box);

    //// Hover en card
    hover_button(btnDelete);
    show_createdRooms();
}

//// HOVER DE CARD ////
function hover_button(element){

    element.addEventListener("mouseover", ()=>{
        element.style.cursor = "pointer";
        element.style.backgroundColor = "#C23229";     
    });

    element.addEventListener("mouseout", ()=>{
    element.style.backgroundColor = "#FF3F33";     
    });

    }        

//// RESETEAR FORMULARIO ////
function reset_form(){
    
    document.getElementById("input_name").value = "";
    document.getElementById("input_location").value = "";
    document.getElementById("input_guests").value = "";
    document.getElementById("input_proyector").checked = false;

}

//// MOSTRAR TOAST DE SALA CREADA ////
function show_toast(text){
    let toast = document.getElementById("toast");
    toast.textContent = text;
    toast.style.visibility = "visible";
    toast.style.opacity = "1";

    setTimeout(function(){
        toast.style.visibility = "hidden";
        toast.style.opacity = "0";
    },2000)
}


function show_createdRooms(){
    let eS = document.getElementById("salasCreadas");
    eS.style.visibility = "visible";
    eS.style.opacity = "1";
}

function hide_emptyState(){
    let eS = document.getElementById("emptyState");
    eS.style.visibility = "hidden";
    eS.style.opacity = "0";
}






