

function calcular()
{
    var hora = document.getElementById("hora").value;
	var talking = document.getElementById("talking").value;
    var salida = document.getElementById("salida");
    
    if((hora<7 || hora>20) && talking==1){
        salida.innerHTML=" hay problemas  1";
    }
    else {
        salida.innerHTML="no hay problemas  0";
    }

}


