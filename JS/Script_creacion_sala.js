//mostrar salas ya creadas
creadoraDe_Div (sala1);
creadoraDe_Div (sala2);

////////////////PRUEBA FORMULARIO///////////////////



    let nuevoNombre = document.getElementById("input_name");

    let nuevoPiso = document.getElementById("input_location");

    let nuevaCapacidad = document.getElementById("input_guests");


    let btn_crear = document.getElementById("btn");


    btn_crear.addEventListener("click",()=>{

        let dato_btn = new Sala (
            nuevoNombre.value,
            nuevoPiso.value,
            nuevaCapacidad.value,
        );
    
        validar_datosInput(dato_btn);
    });
    
    
    function validar_datosInput(dato_storage){

        if (dato_storage){
            salasGuardadas.push(dato_storage);
            return creadoraDe_Div(dato_storage);
        
                        // let indice = localStorage.length;
                        // localStorage.setItem(indice.toString(),dato_storage.toString()); 
            
        }else{
            alert("Completá los campos para poder crear una sala");
    
        }
    }


/////CREADOR DE CARDS DE SALAS CREADAS/////

function creadoraDe_Div (dato_sala){

    let mostrarSalas = document.getElementById ("mostrarSalas");

    addElemento(dato_sala);

    function addElemento (dato_sala){

        let box = document.createElement("div");

        let nombreS = document.createElement("h2");
        nombreS.textContent = dato_sala.nombre;

        let capacidadS = document.createElement("h3");
        capacidadS.textContent = dato_sala.capacidad + " personas";

        let ubicacionS = document.createElement("h3");
        ubicacionS.textContent = dato_sala.piso + " piso";

        box.appendChild(nombreS);
        box.appendChild(capacidadS);
        box.appendChild(ubicacionS);

        mostrarSalas.appendChild(box);

        console.log(salasGuardadas);



        //Hover de card
        
        box.addEventListener("mouseover", ()=>{
                box.style.cursor = "pointer";
                box.style.backgroundColor = "#F9FAFC";     
        });
        box.addEventListener("mouseout", ()=>{
            box.style.backgroundColor = "#FFFFFF";     
        });
    }
}








/*

mostrar_cards();

function mostrar_cards(){

    
    for (let i = 0 ;i < localStorage.length ; i++){


        let key = localStorage.key(i);
        let dato = localStorage.getItem(key);

        creadoraDe_Div(dato);
    }
}


*/