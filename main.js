function elecciones (parametro2){
    let = eleccionPlan ; prompt("Se ah agregado el plan de " + parametro2 + " con exito")
}


let continuar = true
const graciasPor = 0
const nombreApellido = prompt ("Ingrese nombre y apellido")
const email = prompt ("Ingrese su email")
while(continuar) {

    
    let planes
    do {
        planes = parseInt (prompt("Desea agregar al carrito lo planes de.\n 1-Nutricion 2-Fitness 3-Spa 4-Mercado Saludable."))
    } while (isNaN(planes) || planes>=4 || planes<1)
    
    let planElegido 

    //let eleccionPlan = prompt("")
    function elecciones (parametro2){
        alert("Se ah agregado el plan de " + parametro2 + " con exito") 
    }
    switch (planes){

        case 1:
            planElegido = elecciones ("Nutricion")
            break

        case 2 :
             planElegido = elecciones ("Fitness")
             break

        case 3 : 
            planElegido = elecciones ("Spa")
            break

        case 4:
            planElegido = elecciones ("Mercado Saludable")
            break
        default: 
        "Elije el numero entre el 1 al 4 sin ningun caracter para poder continuar"

    }
  
    continuar = confirm("Desea agregar mas planes?")

    
    if(continuar == false){
        graciasPor = alert("Ya enviamos a tu email toda la informacion de tu plan. Que disfrutes este gran camino saludable.")
    }


    }
    

    
