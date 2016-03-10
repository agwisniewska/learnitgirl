function createTask() {

      var selected = document.getElementById("selectpicker").selectedIndex;
       var selectedvalue = document.getElementsByTagName("option")[selected].value;
     

	var description = document.getElementById('taskdesc').value;

	
	var startDate = document.getElementById("datepicker").value;



	var endDate = document.getElementById("datepicker2").value;


	var optradio = document.getElementsByName('optradio');
	var optradio;
		for(var i = 0; i < optradio.length; i++){
    		if(optradio[i].checked){
        		optradio = optradio[i].value;
        		
        	}

	}
	var task = {}
	
	task.id = "id" + Math.random().toString(16).slice(2)
	task.category = selected;
	task.desc = description;
	task.startDate = startDate;
	task.endDate = endDate;
	task.priority = optradio;
	

	console.log(task);

		if(typeof(Storage)!=="undefined")
  				{
			localStorage.setItem(task.id,JSON.stringify(task));

				task = localStorage.getItem(task.id); 
				task = JSON.parse(task);
				

 			 }
			else
				  {
				 alert("oh no...")
				  }



}



  


