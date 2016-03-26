

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
	
	
	for (var i = 0; i < localStorage.length; i++){

		var div	=	'<div class	="box"	id="' + task.id + '">'+ trash + edit + hamburgermenu +	'<h3>' 	+ task.desc + " "
		+ task.startDate + " " +  task.endDate +  " " + optradio + " " + selected + '</h3>' + '</div>';
		
		}

		$('.zadania').append(div);
	
	
		
		
		



	



	
	clearForm();


 

}




// $('#do').click(function () {
// 	$('.box').append('<span class="label label-success">DOING</span>');
// });



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

	var values = []
 	keys = Object.keys(localStorage)
    // i = keys.length;
   

   for (var i=0; i <keys.length; i++) {
   // while ( i-- ) {
        values.push(localStorage.getItem(keys[i]) );
        document.getElementById('DivToPrintOut').innerHTML =values; 
    }

    return values;
}
	
 	
 
// var key = i
// for (var i=0; i< localStorage.length; i++) { 
//  var key = i
//   localStorage.getItem(i);
//  document.getElementById('DivToPrintOut').innerHTML = key;
// }






// 	$('.trash').onclick(function() {
//     $(this).parent().remove();
// });



function clearForm() {

	$('#taskdesc').val('');
	$('#selectpicker').val('');
	$('#datepicker').val('');
	$('#datepicker2').val('');



}

// var todo = document.getElementById("td");
// var doing = document.getElementById("do");
// var done = document.getElementById("dn");

// $('#td').click(function () {
// 	var label = '<span class="label label-warning">TO DO</span>';
//  	document.getElementById('DivToPrintOut').appendChild(label);
// });






