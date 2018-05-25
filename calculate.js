calculate bill()
{
	var carCost=document.getElementById("cost").value;
	if(document.getElementById("check1").checked==true)
    {
		Alert("200");
    }
	else
   {
		if(document.getElementById("hat").value)
   {
		var bill=(0.15*document.getElementById("cost").value);
	}
		else if(document.getElementById("sed").value)
   {
		var bill=(0.18*document.getElementById("cost").value);
	}
		else if(document.getElementById("sm").value)
   {
		var bill=(0.10*document.getElementById("cost").value);
	}
		alert(bill);
	}
}

