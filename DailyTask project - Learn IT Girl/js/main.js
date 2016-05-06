$(document).ready(function() {



$('.btn-info').click(function () {
  $("#basicModal").modal('show');
})


$('.alarmbutton').click(function () {
  if ($('#alarmhours').val() != 0) {
  var hours = parseInt($('#alarmhours').val()) * 3600;
  }
  else {
    var hours = 0;
  }
  if ($('#alarmminutes').val() != 0) {
  var minutes = parseInt($('#alarmminutes').val()) * 60;
  }
  else {
    var minutes = 0;
  }
  if ($('#alarmsecond').val() != 0) {
    var seconds = parseInt($('#alarmsecond').val());
  }
  else {
    var seconds = 0;
  }

  var sum = hours + minutes + seconds;
  console.log(sum);
   
   $("#alarm2").show();
   $("#alarm2").timeTo(sum, function(){ 
    alert('Time is over!'); 
    $('#alarm2').hide();
  });

   $('#basicModal').modal('hide');
})



$('body').on('mouseover', '.box', function () {
  if ($(this).children().css("display") === "none") {
    $(this).prop('title', 'Double click to see the content');
          $(this).closest().tooltip(
            { track: true }
          );
  }

});



$('body').on('mouseover', 'input[type="checkbox"]', function () {
  if ($(this).prop("checked") == false) {
      $(this).prop('title', 'Check to make your task private visible on correct code!');
          $(this).tooltip(
            { track: true }
          );
  }

});

$("body").click(function(e){  
   if (e.target.id !== "creator" && $('.alert').is(':visible'))  {
      $('.alert').hide('slow'); 
  } 

});








 

var monthNames = [ "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ]; 
var dayNames= ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]

// Create a newDate() object
var newDate = new Date();
// Extract the current date from Date object
newDate.setDate(newDate.getDate());
// Output the day, date, month and year   
// $('#Date').html(dayNames[newDate.getDay()] + " " + newDate.getDate() + ' ' + monthNames[newDate.getMonth()] + ' ' + newDate.getFullYear());

setInterval( function() {
  // Create a newDate() object and extract the seconds of the current time on the visitor's
  var seconds = new Date().getSeconds();
  // Add a leading zero to seconds value
  $("#sec").html(( seconds < 10 ? "0" : "" ) + seconds);
  },1000);
  
setInterval( function() {
  // Create a newDate() object and extract the minutes of the current time on the visitor's
  var minutes = new Date().getMinutes();
  // Add a leading zero to the minutes value
  $("#min").html(( minutes < 10 ? "0" : "" ) + minutes);
    },1000);
  
setInterval( function() {
  // Create a newDate() object and extract the hours of the current time on the visitor's
  var hours = new Date().getHours();
  // Add a leading zero to the hours value
  $("#hours").html(( hours < 10 ? "0" : "" ) + hours);
    }, 1000); 


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
 
 $('body').on('click', 'input[type="checkbox"]', function(){
            if($(this).prop("checked") == true){
            var code = prompt('Podaj 4 cyfrowy kod');
            console.log(code);
            var id = $(this).parent().parent().attr('id');
            if (id in localStorage) {
              var value = localStorage[id];
              var object = JSON.parse(value);
              object.codetoopen = code;
              console.log(object);
              localStorage.setItem(id, JSON.stringify(object)); 
               $(this).parent().siblings().hide();
               $(this).parent().parent().css("background-color", "E8E8E8");
       

              
              }
             
            }

        
        });
$('.buttonmenu').click(function() {
	$(this).next('.dropdown-menu').toggle();
})


$('body').on('dblclick', '.box', function () {
   
    var id =  $(this).attr('id');
    console.log(id);
    if (id in localStorage) {
      var value = localStorage[id];
      var myobj = JSON.parse(value);
    
      console.log(myobj.codetoopen);
         if (myobj.codetoopen != '') {
              var result = prompt ("Podaj właściwy kod, żeby zobaczyć zadanie");
              if (result == myobj.codetoopen) {
                  alert("ok!")
                  
                  myobj.codetoopen = "";
                
                  localStorage.setItem(id, JSON.stringify(myobj));
                  console.log(localStorage);
                  $('#'+id).children().siblings().show();
                  $('.zadania').empty();
                  printKeys();
                  // compareDates(myobj.endDate, currentdate, myobj.taskstatus, id, myobj.startDate, myobj.category, myobj.desc, myobj.priority, myobj.codetoopen);
                  $('#'+id).children('.checkbox').children().prop( "checked", false );


              }
              else {
                alert("Podałeś niepoprawny kod!")
              }
         }
         // else if (codetoopen=== '') {
         //   console.log('Code here!')
         // }
  }
  
});

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
    checkForm()
    // createTask();
    hideComments();
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
    $('#selectpickertime2').val(object.estimatedtime);

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
   if ($('#alarm2').is(':visible')) {
      $('#alarm2').timeTo("start" === false).hide();
   }

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
   var time = parseInt(object.estimatedtime);
   if (object.estimatedtime != "" && object.taskstatus != "3") {
      $("#alarm2").show();
      $("#alarm2").timeTo(time, function(){ 
        alert('Time is over!'); 
        $('#alarm2').hide();
        $('#'+id).children().children().children().children('#dn').trigger('click');
         object.taskstatus="3";
      });
       
    } 
    else if (object.estimatedtime === "") {
    object.taskstatus = "2";
    console.log("no estimatedtime!")
    }

  console.log(object.taskstatus);
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



});



function validateDescription() {
  var description = document.getElementById('taskdesc').value;
  if (description.length === 0) {
    producePrompt("Description is required", "commentDescription", "red");
    return false;
  }
    producePrompt("OK", "commentDescription", "green");
 
   return true;

 
}

function validateStartDate() {
  

  if($("#datepicker").datepicker("getDate") === null) {

    producePrompt("StartDate is required","commentStartDate", "red")
    return false;
  }
  
  producePrompt("OK", "commentStartDate", "green");
  return true;
 


}

function validateEndDate() {
  var enddate = document.getElementById('datepicker2').value;
  
  if (enddate.length === 0) {
    producePrompt("EndDate is required", "commentEndDate", "red");
    return false;
    }
    producePrompt("OK", "commentEndDate", "green");    
      return true
  
  }

function validatePriority() {

    if (document.getElementById("optradio1").checked == true) {
        producePrompt("OK", "commentPriority", "green");    
      	return true
    }
    else if (document.getElementById("optradio2").checked == true) {
         producePrompt("OK", "commentPriority", "green");    
      	return true
    }
    else if (document.getElementById("optradio3").checked == true) {
         producePrompt("OK", "commentPriority", "green");    
      		return true
    }
    else {
        producePrompt("Priority is required", "commentPriority", "red");
    	return false;
        }
    }



	// if ($('input[name=optradio]:checked').length > 0) {
 //    producePrompt("Priority is required", "commentPriority", "red");
 //    return false;
 //    }
 //    producePrompt("OK", "commentPriority", "green");    
 //      return true
  
 //  }



function producePrompt(message, promptLocation, color) {
  document.getElementById(promptLocation).innerHTML = message;
  document.getElementById(promptLocation).style.color = color;
}


function hideComments() {
  $('#commentDescription').empty();
  $('#commentStartDate').empty();
  $('#commentEndDate').empty();
  $('#commentPriority').empty();
  $('#submitPrompt').empty();

}

function hidePrompt() {
    document.getElementById('submitPrompt').style.display = "none";
}


function validateForm() {
  if (!validateDescription() && !validateStartDate() && !validateEndDate() && !validatePriority() ) {
      
      submitPrompt("COMPLETE THE FORM!", 'submitPrompt', 'red');


      return false
  }
}



function submitPrompt(message, promptLocation, color) {
  document.getElementById(promptLocation).innerHTML = message;
  document.getElementById(promptLocation).style.color = color;
}


function checkForm() {
  
  if (!validateDescription() || !validateStartDate() || !validateEndDate() || !validatePriority()) {
    submitPrompt("COMPLETE THE FORM!", 'submitPrompt', 'red');
    return false
  }
  createTask();
}