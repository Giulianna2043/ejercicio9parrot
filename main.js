

function calcular()
{
    var hora = document.getElementById("hora").value;
	var talking = document.getElementById("hablando").value;
    var salida = document.getElementById("salida");
    
    if((hora<7 || hora>20) && talking==1){
        salida.innerHTML="1"+ " estamos problemas ";
    }
    else {
        salida.innerHTML="0 "+ "no estamos en problemas";
    }

}


