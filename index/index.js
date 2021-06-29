jQuery(document).ready(function() {

  var mouseX = 0, mouseY = 0;
  var xp = 0, yp = 0;
   
  $(document).mousemove(function(e){
    mouseX = e.pageX - 30;
    mouseY = e.pageY - 30; 
  });
    
  setInterval(function(){
    xp += ((mouseX - xp)/2);
    yp += ((mouseY - yp)/2);
    $("#circle").css({left: xp +'px', top: yp +'px'});
  }, 20);

});
