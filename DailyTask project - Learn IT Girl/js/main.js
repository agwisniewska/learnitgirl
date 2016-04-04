$(document).ready(function() {
	
$('#first').click(function()  {
	$('#firstul').toggle();
});


$('#second').click(function (){
		$('#secondul').toggle();
});

$('#third').click(function (){
		$('#thirdul').toggle();
});



$('.box').dblclick(function() {
	$(this).next('.innerbox').toggle();
	return false
});

$('#createtask').click(function () {
	$('#form').toggle();
})

$('.glyphicon-search').click(function () {
	$('.search').show();

});

$('#dn').click(function () {
	$(this).next('tasks').style.textDecoration = "line-through";
});

$('.buttonmenu').click(function() {
	$(this).next('.dropdown-menu').toggle();
})


    $('#datepicker').datepicker({
    	altFormat: "yy-mm-dd",
        minDate: 0,
     
});


 
    $('#datepicker2').datepicker({
        altFormat: "yy-mm-dd",
        minDate: 0,
    });

   $('#datepicker3').datepicker({
      altFormat: "yy-mm-dd",
        minDate: 0,
     
});
      $('#datepicker4').datepicker({
      altFormat: "yy-mm-dd",
        minDate: 0,
     
});

$("#createtask").click(function(){
        $("#myModal").modal();
    });


$('#creator').click(function() {
    $('#myModal').modal('hide');

});

$('#creator2').click(function() {
    $('#Modal').modal('hide');

});
// update task - here I fill the update modal form with data from localStoarge
$('body').on('click', 'div.edit', function() {
  $("#Modal").modal();

    var id = $(this).parent().attr('id');
    console.log(id)
    var value = localStorage[id];
  
    var object = JSON.parse(value);
    console.log(object.priority)
    $('#task_id').val(id);
    $('#taskdescription').val(object.desc);
    $('#selectpickersecond').val(object.category);
    document.getElementById("datepicker3").value = object.startDate;
    document.getElementById("datepicker4").value =  object.endDate;
    $("input[name=optradio2][value=" + object.priority + "]").prop('checked', true);

});
// function executes on trash click which removes data (div) from main view and localStorage
$('body').on('click', 'div.trash', function() {
   $(this).parent().remove();
   var id = $(this).parent().attr('id');
      if(id in localStorage){
        localStorage.removeItem(id);  
          }
});
// Here I run functions on mouseover effect which help me to change task status and placed them in localStroage.
$('body').on('mouseover', 'div#dn', function () {
   
   $(this).parent().parent().parent().siblings('h3').find('p').css("text-decoration", "line-through"); 
    var id = $(this).parent().parent().parent().parent().attr('id');
   var value = localStorage[id];
   var object = JSON.parse(value);
   object.taskstatus = "done";
   localStorage.setItem(id, JSON.stringify(object));   
});

$('body').on('mouseover', 'div#do', function () {
   $(this).parent().parent().parent().parent().append('<span class="label label-success">doing</span>');
    var id = $(this).parent().parent().parent().parent().attr('id');
   var value = localStorage[id];
   var object = JSON.parse(value);
   object.taskstatus = "doing";
   localStorage.setItem(id, JSON.stringify(object));   

});
// Here I can display all objects from localStorage which category is "work" and hide those which category is "home" The function is run on "work" button click.
$('#work').click(function () {
  $('.zadania').empty();
    for(var i=0; i<localStorage.length; i++) {
         var key = localStorage.key(i);
         var value = localStorage[key];
         var myobj = JSON.parse(value);
         var category = myobj.category;
            if (category === "Work") {
                 var div  = '<div class ="box"  id="' + key + '">'+ trash + edit + hamburgermenu +  '<h3>' + myobj.startDate + " "  + myobj.endDate + checkStatus(myobj.category, myobj.desc, myobj.taskstatus)  +  '</h3>' +'</div>';
                  $('.zadania').append(div)
            }
       }
});


// Here I can diplay all objects from localStorage which category is "home" and hide those which category is "work". The function is run on "home" button click
$('#home').click(function () {
  $('.zadania').empty();
    for(var i=0; i<localStorage.length; i++) {
         var key = localStorage.key(i);
         var value = localStorage[key];
         var myobj = JSON.parse(value);
         console.log(typeof(myobj));
         var category = myobj.category;
            if (category === "Home") {
                 var div  = '<div class ="box"  id="' + key + '">'+ trash + edit + hamburgermenu +  '<h3>' + myobj.startDate + " "  + myobj.endDate + checkStatus(myobj.category, myobj.desc, myobj.taskstatus)  +  '</h3>' +'</div>';
                  $('.zadania').append(div)
            }

       }
});

});


