// Here I have a function to create a single task

function createTask() {
// Firstly I read all data from modal form available on button "create task" click
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
	// then I create and object TASK
	var task = {}
	// next I create my object key. It is div ID  which is randomously generated
	task.id = "id" + Math.random().toString(16).slice(2)
// here I add value to object task
	task.taskstatus = status;
	task.category = selected;
	task.desc = description;
	task.startDate = startDate;
	task.endDate = endDate;
	task.priority = optradio;

	if(typeof(Storage)!=="undefined")
		{
		// here I create an object in localStorage. Because of the fact that localStorage content are only strings I need to change my object into string using JSON
		localStorage.setItem(task.id,JSON.stringify(task));
	
		}
	else
	{
		alert("oh no...")
	}
	
	//  Here I clear everything which is available in div.zadania to avoid addind duplicate content
	$(".zadania").empty()
	//  Here I call a function to print all of my objects available in localStorage on page
	printKeys();
	//  Here I clear from from all data inserted
	clearForm();




}
// here I create and icon trash which is a part of each div.box generated on page. The same for edit and hamburgermenu icon.
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


var currentDate = new Date()
var dateplusseven = new Date(new Date().getTime()+(7*24*60*60*1000));

console.log(currentDate);
var day = currentDate.getDate()
var month = currentDate.getMonth() + 1
var year = currentDate.getFullYear()

var currentdate = moment(currentdate).format( 'MM/DD/YYYY');
var dateplusseven1 = moment(dateplusseven).format('MM/DD/YYYY');

var due = "Today you have to finish task!"
var overdue = "Overdue task"

// Here I add a function which enables me to display all data available on localStorage in desirable way. I 
function printKeys() {
	for(var i=0; i<localStorage.length; i++) {
		var key = localStorage.key(i);
		var value = localStorage[key];
		var myobj = JSON.parse(value);
	   	var enddate = myobj.endDate;
	   	
	   	var status = myobj.taskstatus;
	   	// Here I compare task.end  date with actual date and status and according to this I generate div background color and a message
	   	if ( enddate === currentdate & status === "todo") {
	   		var div = '<div class	="box"	id="' + key + '">' + trash + edit + hamburgermenu + '<h3>' + myobj.startDate + " "  + myobj.endDate + checkStatus(myobj.category, myobj.desc, myobj.taskstatus)+ '</h3>'  +'</div>';
	   		$('.zadania').append(div);
	   		$('#'+key).css("background-color","#FFFF99");



	   	}
	   	else if  (enddate < currentdate & status == "todo") {
	   		var div = '<div class	="box"	id="' + key + '">' + trash + edit + hamburgermenu + '<h3>' + myobj.startDate + " "  + myobj.endDate + checkStatus(myobj.category, myobj.desc, myobj.taskstatus)+ '</h3>'  +'</div>';
	   	
	   		$('.zadania').append(div);
	   		$('#'+key).css("background-color","#FF6666");

	   	}
	   	else {
	   		 var div = '<div class	="box"	id="' + key + '">' + trash + edit + hamburgermenu + '<h3>' + myobj.startDate + " "  + myobj.endDate + checkStatus(myobj.category, myobj.desc, myobj.taskstatus)+'</h3>'  +'</div>';
	   		$('.zadania').append(div);
	   	}
	  	
	  

	    
	    // I add a newly created div to div.zadania
	    
	}
}
// Here I check task's status. Function have three arguments, and depending on the status I create different content


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

function checkDate(enddate, status, currentdate, key) {
 if ( enddate === currentdate & status === "todo") {
                          var div = '<div class ="box"  id="' + key + '">' + trash + edit + hamburgermenu + '<h3>' + myobj.startDate + " "  + myobj.endDate + checkStatus(myobj.category, myobj.desc, myobj.taskstatus)+ '</h3>'  +'</div>';
                          $('.zadania').append(div);
                          $('#'+key).css("background-color","#FFFF99");

                        }
                        else if  (enddate < currentdate & status == "todo") {
                            var div = '<div class ="box"  id="' + key + '">' + trash + edit + hamburgermenu + '<h3>' + myobj.startDate + " "  + myobj.endDate + checkStatus(myobj.category, myobj.desc, myobj.taskstatus)+ '</h3>'  +'</div>';
                            $('.zadania').append(div);
                            $('#'+key).css("background-color","#FF6666");
                        }
                      else {
                          var div = '<div class  ="box"  id="' + key + '">' + trash + edit + hamburgermenu + '<h3>' + myobj.startDate + " "  + myobj.endDate + checkStatus(myobj.category, myobj.desc, myobj.taskstatus)+'</h3>'  +'</div>';
                          $('.zadania').append(div);
                       }
                   }
// Here I add a function to clear form as I close the modal form
function clearForm() {
	$('#taskdesc').val('');
	$('#selectpicker').val('');
	$('#datepicker').val('');
	$('#datepicker2').val('');
}
// Here I have function update task which help me to collect data from update-modal form and then update them in localStorage
function updateTask() {

	var task_id = document.getElementById("task_id").value;
	var selected = $( "#selectpickersecond option:selected" ).text();
	var description = document.getElementById('taskdescription').value;
	var startDate = document.getElementById("datepicker3").value;
	var endDate = document.getElementById("datepicker4").value;
	var optradio = document.getElementsByName('optradio2');
	var optradio;
	for(var i = 0; i < optradio.length; i++){
		if(optradio[i].checked){
			optradio = optradio[i].value;
		}
	}
//  as in function "cretae task()" I create a task object which will be added to localStorage
	var task = {}
	task.id = task_id;
	task.category = selected;
	task.desc = description;
	task.startDate = startDate;
	task.endDate = endDate;
	task.priority = optradio;

	if(typeof(Storage)!=="undefined")
		{
		// Here I get my object task from localStorage and parse string to objecy
		task_temp = localStorage.getItem(task.id); 
		task_temp = JSON.parse(task_temp);
		// Here I set that my actual taskstatus (taskstatus of object downloaded from localStorage) will become automatically taskstatus of newly created object.
		task.taskstatus = task_temp.taskstatus;		
		// Next I set my newly created task in localStorage. Becuause of the fact that task.id is not changed,  the old object is in result replaced by a new one.
		localStorage.setItem(task.id, JSON.stringify(task));
	}
	else
	{
		alert("oh no...")
	}
	$('.zadania').empty();
	printKeys();
}





