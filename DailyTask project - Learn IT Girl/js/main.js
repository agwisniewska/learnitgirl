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



});




// $("input:radio[name=optradio]").click(function() {
//      var value = $('input:radio[name=optradio]:checked').val();
//     	console.log(value);
// });








// function createTask() {
// 	getTaskValue();
// 	getSelectedValue()
// 	getRadioValue();
// 	getStartDate();
// 	getEndDate();


	
// }

// function getSelectedValue() {
//       var selected = document.getElementById("selectpicker").selectedIndex;
//        var selectedvalue = document.getElementsByTagName("option")[selected].value;
//        console.log(selectedvalue)

// }

// function getTaskValue() {
// 	var description = document.getElementById('taskdesc').value;
// 	console.log(description)
	
// }

// function getStartDate() {
// 	var startDate = document.getElementById("datepicker").value;
// 	console.log(startDate)

	
// }

// function getEndDate() {
// 	var endDate = document.getElementById("datepicker2").value;
// 	console.log(endDate)
// }

// function getRadioValue() {
// 	var optradio = document.getElementsByName('optradio');
// 	var optradio;
// 		for(var i = 0; i < optradio.length; i++){
//     		if(optradio[i].checked){
//         		optradio = optradio[i].value;
//         		console.log(optradio);
        	
//     		}
// 		}


// }



