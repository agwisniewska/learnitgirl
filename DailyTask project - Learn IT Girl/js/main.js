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

// function getStartDate() {
	// var date = $("#datepicker").datepicker( 'getDate' );
	// console.log(date)
// }
$('#creator').click(function() {
    $('#myModal').modal('hide');

});

$('body').on('click', 'div.trash', function() {

   $(this).parent().remove();
   var id = $(this).parent().attr('id');
   console.log(id);
//    if (localStorage(key) == id ) {
    if(id in localStorage){
       
        localStorage.removeItem(id);  
          } else {
       alert('no');
    }
//    }
});

// $('#td').click(function () {


// var label = '<span class="label label-warning">TO DO</span>'
//  document.getElementById('DivToPrintOut').appendChild(label);
// });
});


