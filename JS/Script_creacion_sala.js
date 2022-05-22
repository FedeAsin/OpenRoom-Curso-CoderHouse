// Inicio
let completar = true;
while(completar){
        let instrucciones = "Seleccioná que querés hacer: \n"
        instrucciones += "\n 1. 🆕 Crear sala";
        instrucciones += "\n 2. 🔍 Ver salas creadas";
        instrucciones += "\n 3. ❌ Borrar una sala";

        let respuesta_instrucciones = prompt(instrucciones);

            switch (respuesta_instrucciones){
                
                case "1":
                    //Pedir datos de sala
                    pedirDatos_sala();
                    break;
                case "2":
                    Salas_creadas();
                    break;
                case "3":
                    //Borrar salas
                case null:
                    completar = false;
                    break;
                default: 
                    alert ("Seleccioná una opción") ; 
            }
}

/////////////////FUNCIONES/////////////////////////////

//Pedir datos de sala
function pedirDatos_sala(){
    let respueta = confirm ("¿Querés crear una sala nueva?");

    if (respueta) {
        let nombre;
        nombre = validarS();
        
        let piso;
        piso = validarN(piso, 15,"El edificio tiene 15 pisos: \n\n¿En que piso esta la sala?", "❗El edificio tiene 15 pisos, elegí otro piso","❗Elegí un piso entre 1 y 15");
            
        let capacidad;
        capacidad = validarN(capacidad, 20, "La capacidad máxima es 20 personas: \n\n¿Cuantas personas pueden entrar?", "❗La salas solo tienen capacidad hasta 20 personas", "❗La sala se debe reservar, minimamente, para 1 persona");

        let proyector 
        proyector = proyector_pregunta();

        // Validar datos cargados

        if (validarDatos(nombre) && validarDatos(capacidad) && validarDatos(piso)){

            const nueva_sala = new Sala(nombre, capacidad, piso, proyector);

                    let confirmar_sala = crear_confirmacion(nueva_sala);
                    if (confirmar_sala) {
                        salasGuardadas.push(nueva_sala);
                        console.log(salasGuardadas);
                        return escribirEn_documento(nueva_sala);
                    }else{
                        pedirDatos_sala();
                        console.log(salasGuardadas);
                    }
        } 
    }

//Valida el nombre
    function validarS(){
        let nombre;
        do{
            nombre = prompt("¿Cual va a ser el nombre de la sala?").toUpperCase();
            if(!nombre){
            alert ("Ingresá un nombre");
            }
            else{
                return nombre;
            }
        }while(!nombre);
    }
//Valida el piso y la capacidad
    function validarN (datoCargado, condicionA, pregunta, mensaje1, mensaje2, confirmacion){
        let valor = datoCargado;
            do{
                valor = parseInt(prompt(pregunta));
                if(valor > condicionA){
                    alert (mensaje1);
                }
                if(valor < 1){
                    alert (mensaje2);
                }
                else{       
                    console.log (confirmacion);
                }
            }while (valor > condicionA || valor < 1 || valor == "" /*|| valor == null*/ || /\D/.test(valor));
            
        return valor;
    }
//determinar el valor del proyector
    function proyector_pregunta (){
        let tieneProyector = confirm("¿Tiene proyector?");
            if(tieneProyector){
                //alert ("Tiene proyector");
                return true;
            }
            else{
                //alert ("No tiene proyector");
                return false;
            }
        }        

//Confirmación de datos cargados        
    function crear_confirmacion(datoSala){
        let mensaje = "¿Los datos cargados son correctos? \n";
        mensaje += "\n Nombre: " + datoSala.nombre;
        mensaje += "\n Piso: " + datoSala.piso;
        mensaje += "\n Capacidad: " + datoSala.capacidad + " personas";
        mensaje += "\n ¿Tiene proyector?: " + datoSala.proyector;

        let respuesta = confirm(mensaje);

        return respuesta;
    }

//Valida que los datos fueron cargados
    function validarDatos(dato){
        if(!dato){
            return false;
        }
        if(dato == ""){
            return false;
        }
        return true;
    }
//Escribir salas en el documento
    function escribirEn_documento(salaI){
        //alert ("Sala " + salaI.mostrar_info() + " creada🤘");
        document.write (salaI.mostrar_infoCompleta() + "<br>");
        console.log(salaI);
}



    //Borrar salas
    function borrar_salas(){

    }

}

//Ver salas creadas
function Salas_creadas(){

    if(buscarSalas(true)){

        alert(salasGuardadas);
    }

    function buscarSalas(){
    
        if (salasGuardadas.length == 0){

            alert("Por el momento no hay salas creadas");

            return false;

        }else{
            return true;
        }
    }
}
