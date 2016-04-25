$(document).ready(function() {
	
$('#first').click(function(event)  {
	event.stopPropagation();
  $('#firstul').toggle();
});

$(document).click( function () {
  $('#firstul').hide();
});

$('#second').click(function(event)  {
  event.stopPropagation();
  $('#secondul').toggle();
});

$(document).click( function () {
  $('#secondul').hide();
});


$('#third').click(function(event)  {
  event.stopPropagation();
  $('#thirdul').toggle();
});

$(document).click( function () {
  $('#thirdul').hide();
})


$('.box').dblclick(function() {
	$(this).next('.innerbox').toggle();
	return false
});

$('#createtask').click(function () {
	$('#form').toggle();
})


$('.buttonmenu').click(function() {
	$(this).next('.dropdown-menu').toggle();
})


    $('#datepicker').datepicker({
    	altFormat: "yy-mm-dd",
        minDate: 0,
     
});

$('.glyphicon-search').click(function (){
    $('.search').toggle();
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
    createTask();

    $("#myModal").modal('hide');
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
// function to remove task, using a special jquery confirm function. Because trash is dynamically created item I have to call confirm in body onclick function 
$('body').on('click', 'div.trash', function() {
    var result = $(this).confirm({
    text: "Are you sure to delete that task?",
    confirm: function(button) {
       $(result).parent().remove();
       var id = $(result).parent().attr('id');
        if(id in localStorage){
          localStorage.removeItem(id);
        }
    },
    cancel: function(button) {
        // nothing to do
    },
    confirmButton: "Yes",
    cancelButton: "No",
    confirmButtonClass: "btn-danger",
    cancelButtonClass: "btn-default",
    dialogClass: "modal-dialog ag" // Bootstrap classes for large modal
  });
});
      

// Here I run functions on mouseover effect which help me to change task status and placed them in localStroage.
$('body').on('click', 'div#dn', function () {


    var id = $(this).parent().parent().parent().parent().attr('id');
   var value = localStorage[id];
   var object = JSON.parse(value);
   object.taskstatus = "3";
   localStorage.setItem(id, JSON.stringify(object));   

    $('.zadania').empty();
      printKeys();
});

$('body').on('click', 'alert-success', function () {
  $('.alert-success').fadeOut( "slow" );
});

$('body').on('click', 'div#td', function () {
   

    var id = $(this).parent().parent().parent().parent().attr('id');
   var value = localStorage[id];
   var object = JSON.parse(value);
   object.taskstatus = "1";
   localStorage.setItem(id, JSON.stringify(object));   
   $('.zadania').empty();
      printKeys();
});

$('body').on('click', 'div#do', function () {
  
  var id = $(this).parent().parent().parent().parent().attr('id');
   var value = localStorage[id];
   var object = JSON.parse(value);
   object.taskstatus = "2";
   console.log(object.taskstatus)
   localStorage.setItem(id, JSON.stringify(object));   
  //  $('#clock').timeTo({
  //   seconds: 100
  // });
   $('.zadania').empty();
      printKeys();

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
            if (myobj.category === "Home") {
                 var div  = '<div class ="box"  id="' + key + '">'+ trash + edit + hamburgermenu +  '<h3>' + myobj.startDate + " "  + myobj.endDate + checkStatus(myobj.category, myobj.desc, myobj.taskstatus)  +  '</h3>' +'</div>';
                  $('.zadania').append(div)
            }

       }
});



$('#today').click(function () {
  $('.zadania').empty();
  for(var i=0; i<localStorage.length; i++) {
         var key = localStorage.key(i);
         var value = localStorage[key];
         var myobj = JSON.parse(value);
         console.log(typeof(myobj));
          if ( myobj.startDate === currentdate) {
                compareDates(myobj.endDate, currentdate, myobj.taskstatus, key, myobj.startDate, myobj.category, myobj.desc);
             
            }

       }

     });

$('#next').click(function () {
  $('.zadania').empty();
     for(var i=0; i<localStorage.length; i++) {
         var key = localStorage.key(i);
         var value = localStorage[key];
         var myobj = JSON.parse(value);
                   if (myobj.startDate > currentdate & myobj.startDate<=dateplusseven1) {
                            compareDates(myobj.endDate, currentdate, myobj.taskstatus, key, myobj.startDate, myobj.category, myobj.desc); 
                    
                    }
                    else {
                      $('.zadania').val("Not found");
                    }
           
            }

     });

  $('#clock').timeTo();

});



// function validateDescription() {
//   var name = document.getElementById('taskdesc').value;
//   if (name.length == 0) {
//     producePrompt("Description is required", "commentDescription", "taskdesc", "red", "solid 1px red");
//     return false;
//   }
//   producePrompt("OK!", "commentDescription", "tascdesc", "green", "solid 1px green");
//   return true;
// }

// function validateStartDate() {
//   var name = document.getElementById('datepicker').value;


//   if (name.length == 0) {
//     producePrompt("StartDate is required", "commentStartDate", "datepicker", "red", "solid 1px red");
//     return false;
//   }
//     producePrompt("OK!", "commentStartDate", "datepicker", "green", "solid 1px green");
//   return true;
// }

// function validateEndDate() {
//   var name = document.getElementById('datepicker2').value;
  
//   if (name.length == 0) {
//     producePrompt("EndDate is required", "commentEndDate", "datepicker2", "red", "solid 1px red");
//     return false;
//   }
//   producePrompt("OK!", "commentEndDate", "datepicker2", "green", "solid 1px green");
//   return true;
// }
// function hidePrompt() {
//     document.getElementById('submitPrompt').style.display = "none";
// }

// function producePrompt(message, promptLocation, borderLocation, color, border) {
//   document.getElementById(promptLocation).innerHTML = message;
//   document.getElementById(promptLocation).style.color = color;
//   document.getElementById(borderLocation).style.border = border;
// }

// function submitPrompt(message, promptLocation, color) {
//   document.getElementById(promptLocation).innerHTML = message;
//   document.getElementById(promptLocation).style.color = color;
// }

// });

