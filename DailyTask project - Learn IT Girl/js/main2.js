

function createTask() {

	var selected = document.getElementById("selectpicker").selectedIndex;
	var selectedValue = selected.value;
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
		task.id = "id" + Math.random().toString(16).slice(2)

		var div	=	'<div class	="box"	id="' + task.id + '">'+ trash + edit + hamburgermenu +	'<h3>' 	+ task.desc + " "
		+ task.startDate + " " +  task.endDate +  " " + optradio + " " + selected + '</h3>' + '</div>';
		
		}

		$('.zadania').append(div);


	
	clearForm();


 

}


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
    
    console.log(key + " => " + value);
    var div	=	'<div class	="box"	id="' + key + '">'+ trash + edit + hamburgermenu +	'<h3>' 	+ value+ '</h3>' + '</div>';
   	$('.zadania').append(div);
}

}


	



function clearForm() {

	$('#taskdesc').val('');
	$('#selectpicker').val('');
	$('#datepicker').val('');
	$('#datepicker2').val('');



}







