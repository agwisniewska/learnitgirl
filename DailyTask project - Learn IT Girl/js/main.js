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
// update task
$('body').on('click', 'div.edit', function() {
  $("#Modal").modal();

    var id = $(this).parent().attr('id');
    var value = localStorage[id];
  
    var object = JSON.parse(value);
   
    $('#taskdescription').val(object.desc);
    $('#selectpickersecond').val(object.category);
    document.getElementById("datepicker3").value = object.startDate;
    document.getElementById("datepicker4").value =  object.endDate;
    document.getElementsByName('optradio').value = object.priority;
    $( "#Modal input[type=radio][value="+ object.priority + "]" ).prop('checked', true);


  //   var optradio = document.getElementsByName('optradio');
  // var optradio;
  //   for(var i = 0; i < optradio.length; i++){
  //       if(optradio[i].checked){
  //           optradio = optradio[i].value;
  //         }
  //     }




  



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


});


