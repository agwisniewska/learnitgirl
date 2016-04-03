

function createTask() {



	var status = document.getElementById("taskstatus").value;

	var selected = $( "#selectpicker option:selected" ).text();

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

	task.taskstatus = status;
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
	
	
	for (var i = 0; i < localStorage.length; i++){

		var div	=	'<div class	="box"	id="' + task.id + '">'+ trash + edit + hamburgermenu +	'<h3>' 	+ task.desc + " "
		+ task.startDate + " " +  task.endDate +  " " + optradio + " " + selected + '</h3>' + '</div>';
		
		}

$(".zadania").empty()
	
	printKeys();


	
	clearForm();


 

}

// function checkValue() {
	
// 	var selected = document.getElementById("selectpicker").value;
// 	console.log(selected);
	
// 	if (selected === 1) {
// 		var selected = "work";
// 		return selected;
// 	}
// 	else if (selected === 0) {
// 		var selected = "home";
// 		return selected;
// 	}
	
// }

var trash = '<div class="trash"> \
		<span class="glyphicon glyphicon-trash" aria-hidden="true"> \
		</span>\
	</div>'

var edit = '<div class="edit"> \
		<span class="glyphicon glyphicon-edit" aria-hidden="true">\
		 </span>\
	</div>'


												       
var hamburgermenu= '<div class="dropdown hamburger"> \
		<span class="glyphicon glyphicon-star" aria-hidden="true"> \
			<div class="dropdown-content">\
				<div id="td">todo</div>\
				<div id="do">doing</div>\
				<div id="dn">done</div> \
			</div>\
		</span>\
	</div>'


function printKeys() {
	for(var i=0, len=localStorage.length; i<len; i++) {
	    var key = localStorage.key(i);
	    var value = localStorage[key];
	    console.log(typeof(value));
	    
	    console.log(key + " => " + value)

	   	var myobj = JSON.parse(localStorage[key]);
	    console.log(typeof(myobj));
	 
	    var div	=	'<div class	="box"	id="' + key + '">'+ trash + edit + hamburgermenu +	'<h3>' + myobj.startDate + " "  + myobj.endDate + checkStatus(myobj.category, myobj.desc, myobj.taskstatus)  +  '</h3>' +'</div>';
	   	

	   	$('.zadania').append(div);
	}

}



function checkStatus(category, description, status) {
	if (status === "done") {
		return  '<p class="done">' + category + " " +  description + '</p>'
	}
	else if (status=== "todo" ) {
		return '<p>' + '<span class="label label-danger">To do</span>' + category + " " +  description + '</p>'
	}
	else if (status === "doing") {
		return '<p>' + '<span class="label label-success">Doing</span>' + category + " " +  description + '</p>'
	}
	

}
function clearForm() {

	$('#taskdesc').val('');
	$('#selectpicker').val('');
	$('#datepicker').val('');
	$('#datepicker2').val('');

}

function updateTask() {

	var selected = document.getElementById("selectpickersecond").selectedIndex;

	// selected = checkValue();

	var description = document.getElementById('taskdescription').value;
		
	var startDate = document.getElementById("datepicker3").value;
		
	var endDate = document.getElementById("datepicker4").value;
		
	var optradio = document.getElementsByName('optradio2');
	var task_id = document.getElementById("task_id").value;
	var optradio;
		for(var i = 0; i < optradio.length; i++){
	    	if(optradio[i].checked){
	        	optradio = optradio[i].value;
	        }
	    }

	var task = {}

	task.id = task_id;
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
	
	$(".zadania").empty()
	
	printKeys();

}

// function checkStatus() {
// 	// var array = [];
// 			for(var i=0; i<localStorage.length; i++) {
// 	    		var key = localStorage.key(i);
// 	    		var value = localStorage[key];
// 	    		console.log(typeof(value));
	    
// 	    		console.log(key + " => " + value)

// 	   			var myobj = JSON.parse(localStorage[key]);
// 	    		console.log(typeof(myobj));
// 				console.log(myobj.taskstatus)
// 				if (myobj.taskstatus === "done") {
// 					$('#'+ key +' p').css("text-decoration", "line-through"); 
// 	   		}
		
			
		
// }


// }




