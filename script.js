
var otraPrenda=true
var precios={
    vestido: 1000, 
    pollera: 600, 
    top: 500}
var total=0
function procesar(prendas){
    total+=precios[prendas]
    console.log("Usted ha seleccionado: "+prendas)
    console.log("Ha seleccinado una prenda de "+precios[prendas]+" pesos")
    console.log("El total resultante es de "+total+" pesos")
}

while(otraPrenda){
    var prendaSeleccionada = prompt("Ingrese la prenda selecionda:")
    if (prendaSeleccionada=="vestido" ||
        prendaSeleccionada=="pollera" ||
        prendaSeleccionada=="top"){
            procesar(prendaSeleccionada)
    }
    else{
        alert("La prenda ingresada no es válida")
    }
    do{
        var solicitarOtraPrenda = prompt("Desea otra prenda?")
        if(solicitarOtraPrenda=="si"){
            break;
        }
        else if(solicitarOtraPrenda=="no"){
            otraPrenda=false
        }
        else{
            alert("La respuesta ingresada no es válida. Responda si o no")
        }
    }while((solicitarOtraPrenda != "si") && (solicitarOtraPrenda != "no"));
}

document.write("<h3>El total es "+total+" pesos</h3>")
console.log("El total es "+total+" pesos")
alert("El total es "+total+" pesos")