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


$("#createtask").click(function(){
        $("#myModal").modal();
    });


$('#creator').click(function() {
    $('#myModal').modal('hide');

});

$('#creator2').click(function() {
    $('#Modal').modal('hide');

});
// update task
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
   console.log(id);
//    if (localStorage(key) == id ) {
    if(id in localStorage){
       
        localStorage.removeItem(id);  
          }
//    }
});

$('body').on('mouseover', 'div#dn', function () {
   
   $(this).parent().parent().parent().siblings('h3').find('p').css("text-decoration", "line-through"); 
    var id = $(this).parent().parent().parent().parent().attr('id');
   var value = localStorage[id];
   var object = JSON.parse(value);
   object.taskstatus = "done";
   localStorage.setItem(id, JSON.stringify(object));   


console.log(localStorage);


});
$('body').on('mouseover', 'div#do', function () {
   
   $(this).parent().parent().parent().parent().append('<span class="label label-success">doing</span>');
    var id = $(this).parent().parent().parent().parent().attr('id');
   var value = localStorage[id];
   var object = JSON.parse(value);
   object.taskstatus = "doing";
   localStorage.setItem(id, JSON.stringify(object));   


console.log(localStorage);


});

$('#work').click(function () {
  $('.zadania').empty();
    for(var i=0; i<localStorage.length; i++) {
         var key = localStorage.key(i);
         var value = localStorage[key];
         
         var myobj = JSON.parse(value);
         console.log(typeof(myobj));
         var category = myobj.category;
         
            if (category === "Work") {
                 var div  = '<div class ="box"  id="' + key + '">'+ trash + edit + hamburgermenu +  '<h3>' + myobj.startDate + " "  + myobj.endDate + checkStatus(myobj.category, myobj.desc, myobj.taskstatus)  +  '</h3>' +'</div>';
                  $('.zadania').append(div)
            }

       }
});



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


