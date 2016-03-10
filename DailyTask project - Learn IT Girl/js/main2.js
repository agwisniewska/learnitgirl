function createTask() {

      var selected = document.getElementById("selectpicker").selectedIndex;
       var selectedvalue = document.getElementsByTagName("option")[selected].value;
       console.log(selectedvalue); 

	var description = document.getElementById('taskdesc').value;
	console.log(description);
	
	var startDate = document.getElementById("datepicker").value;
	console.log(startDate);


	var endDate = document.getElementById("datepicker2").value;
	console.log(endDate);

	var optradio = document.getElementsByName('optradio');
	var optradio;
		for(var i = 0; i < optradio.length; i++){
    		if(optradio[i].checked){
        		optradio = optradio[i].value;
        		console.log(optradio);
        
        }

}
}



