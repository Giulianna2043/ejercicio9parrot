function calcular()
{
	var talking = document.getElementById("hablando").value;
	var weekday = parseInt(document.getElementById("hora").value);

	var istalking = true;
	var isnottalking = false;

	var salida = document.getElementById("salida");

	if(talking == "2")
	{
		isVacation = false;
	}

	if(weekday < 6)
	{
		isWeekday = true;
	}

	if(isVacation)
	{
		salida.innerHTML = "1";
	}else{
		if(isWeekday)
		{
			salida.innerHTML = "0";
		}else{
			salida.innerHTML = "1";
		}
	}
}



 talking = Boolean(talking);
    if((hora<7 || hora>20) && talking==1){
        return 1;
    }
    else{
        return 0;
    }

}
