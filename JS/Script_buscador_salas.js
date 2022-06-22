const clave_ls = "Salas guardadas";
const clave_rs = "Salas_reservadas";

// let id_sala = localStorage.getItem(clave_id);

let btn_buscar = document.getElementById("btn_buscar");


//// FORMULARIO ////

btn_buscar.addEventListener("click",(e)=>{
    e.preventDefault();

    if (validador_b()){
        cargar_Salas_b ();
        reseteador_b();
    }
});


//// FUNCIONES ////

function validador_b(){

    let diaReserva = document.getElementById("rDay").value;   
    let input_tiempoDesde = document.getElementById("ftime_f").value;
    let input_tiempoHasta = document.getElementById("ftime_u").value;
    let input_invitados = document.getElementById("input_invitados").value;
    let input_proyector = document.getElementById("input_proyector").checked;

    let error = document.getElementById("error");
    error.style.color = "red";

    let mensajesError = [];
    if(!diaReserva && !input_tiempoDesde && !input_tiempoHasta && !input_invitados){
        mensajesError.push("Ingresá los datos solicitados");
        error.innerHTML = mensajesError.join(", ");

        return false;
    }

    if (!diaReserva){
        mensajesError.push("Seleccioná el día que queres reservar");
        error.innerHTML = mensajesError.join(", ");

        return false;
    }

    if (!input_tiempoDesde){
        mensajesError.push("Ingresá la hora de inicio de reserva");
        error.innerHTML = mensajesError.join(", ");

        return false;
    }

    if (!input_tiempoHasta){
        mensajesError.push("Ingresá la hora de fin de reserva");
        error.innerHTML = mensajesError.join(", ");

        return false;
    }
    if (input_tiempoHasta < input_tiempoDesde){
        mensajesError.push("El horario de fin no puede ser menor al de inicio");
        error.innerHTML = mensajesError.join(", ");

        return false;
    }
    if (input_tiempoHasta == input_tiempoDesde){
        mensajesError.push("El horario de fin no puede ser igual al de inicio");
        error.innerHTML = mensajesError.join(", ");

        return false;
    }
    if (!input_invitados){
        mensajesError.push("Ingresá la cantidad de invitados");
        error.innerHTML = mensajesError.join(", ");

        return false;
    }
    if (input_invitados > 20){
        mensajesError.push("La capacidad máxima es 20 personas");
        error.innerHTML = mensajesError.join(", ");

        return false;
    }
    if (input_invitados < 1){
        mensajesError.push("La capacidad mínima es 1 persona");
        error.innerHTML = mensajesError.join(", ");

        return false;
    }

    mensajesError.push(" ");
    error.innerHTML = mensajesError;

    console.log(diaReserva + " " + input_tiempoDesde + " " + input_tiempoHasta + " " + input_invitados + " " + input_proyector );
    return true;

    
}

function reseteador_b(){
    
    document.getElementById("rDay").value = "";
    document.getElementById("ftime_f").value = "";
    document.getElementById("ftime_u").value = "";
    document.getElementById("input_invitados").value = "";
    document.getElementById("input_proyector").checked = false;

}

function cargar_Salas_b(){

    let salas = localStorage.getItem(clave_ls);

    if (salas){
        alert_swal("Buscando las mejores salas");

        filterSalas();

         function filterSalas (){
                salas = JSON.parse(salas);
                console.table(salas);
        
                let input_invitados = document.getElementById("input_invitados").value;
                let input_proyector = document.getElementById("input_proyector").checked;
                
                    let salasEncontradas = salas.filter (salaBuscada => 
                        (salaBuscada.capacidad >= input_invitados) && (salaBuscada.proyector === input_proyector));
    
                    salasEncontradas.map (salaEncontrada => creadoraDe_Div(salaEncontrada.nombre, salaEncontrada.capacidad, salaEncontrada.piso, salaEncontrada.proyector));

                    
        }
    } else{
        alert_swal("Aun no hay salas creadas");
    }
};

        

//// CREADOR DE CARDS DE SALAS CREADAS ////

function creadoraDe_Div (nombre,capacidad,piso,proyector){

            title.style.visibility = "visible";

            let mostrarSalas = document.getElementById ("mostrarSalas");
            let box = document.createElement("div");

            let nombreS = document.createElement("h2");
                nombreS.textContent = nombre.toUpperCase();

                let capacidadS = document.createElement("h3");
                if(capacidad == 1){
                    capacidadS.textContent = capacidad + " persona";
                }else if(capacidad > 1){
                    capacidadS.textContent = capacidad + " personas";
                }

            let ubicacionS = document.createElement("h3");
                ubicacionS.textContent = piso + " piso";

            let proyectorS = document.createElement("h3");
                if(proyector){
                proyectorS.textContent = "Con proyector 🟢";
                }else {
                proyectorS.textContent = "Sin proyector 🔴";
                }
            let btn_reservarS = document.createElement("h4");
                 btn_reservarS.textContent = "Reservar sala";

            
                btn_reservarS.addEventListener("click", ()=>{

                    // Esta funcion esta por trabajarse
                    // Acá se va a poder guardar en el localStorage la info de la sala para poder "reservarla"
                });
            


            box.appendChild(nombreS);
            box.appendChild(capacidadS);
            box.appendChild(ubicacionS);
            box.appendChild(proyectorS);
            box.appendChild(btn_reservarS);

            mostrarSalas.appendChild(box);

            //// Hover en card ////
            hover_Card(btn_reservarS);
    
};

//// HOVER DE CARD ////
function hover_Card(element){

    element.addEventListener("mouseover", ()=>{
        element.style.cursor = "pointer";
        element.style.backgroundColor = "#109283";     
    });

    element.addEventListener("mouseout", ()=>{
    element.style.backgroundColor = "#13BAA6";     
    });

    }  

function alert_swal (mensaje){
    swal.fire({
        title: mensaje,
        width: "32em",
        padding: "16px",
        timer: 1000,
        timerProgressBar: true,
        allowOutsideClick: false,
        allowEscapeKey: false,
        showConfirmButton: false,
    });
}

function alertButton_swal (titulo, bTexto){
    Swal.fire({
        title: titulo,
        icon: 'question',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: bTexto,
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire(
            'Reservada!',
            'Ya podes ver tu sala en "Mis reservas"',
            'success'
            
          )
        }
      })
}






