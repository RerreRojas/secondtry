const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))

const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]')
const popoverList = [...popoverTriggerList].map(popoverTriggerEl => new bootstrap.Popover(popoverTriggerEl))


$("#enviarCorreo").click(function(){
    $("#p1").toggle();
  });

$("#ingr").on("dblclick", function(){
    $(this).css({"color":"red"});
       });

$("#prep").on("dblclick", function(){
    $(this).css({"color":"red"});
     });

$("#pancakes").click(function(){
        $("#p2").fadeToggle();
      });

$("#tiramisu").click(function(){
        $("#p3").fadeToggle();
      });

$("#plateada").click(function(){
        $("#p4").fadeToggle();
      });