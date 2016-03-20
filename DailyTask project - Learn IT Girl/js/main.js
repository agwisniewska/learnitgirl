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
    	altFormat: "yy-mm-dd"
    });

function DisableBeforeToday(date){
    return [(date.getDate() < date.now()];
}


    $(function() {
    $('.date-picker').datepicker( {
        beforeShowDay: DisableBeforeToday
        changeMonth: true,
        changeYear: true,
        showButtonPanel: true,
        dateFormat: 'MM yy',
        onClose: function(dateText, inst) { 
            $(this).datepicker('setDate', new Date(inst.selectedYear, inst.selectedMonth, 1));
        }
    });
});

    $('#datepicker').datepicker();

    $('#datepicker2').datepicker();


$("#createtask").click(function(){
        $("#myModal").modal();
    });

// function getStartDate() {
	// var date = $("#datepicker").datepicker( 'getDate' );
	// console.log(date)
// }








// $("input:radio[name=optradio]").click(function() {
//      var value = $('input:radio[name=optradio]:checked').val();
//     	console.log(value);
// });






});


