$(document).ready(function(){
     var date = new Date().toLocaleTimeString('en-US', { hour12: true, 
            hour: "numeric", 
            minute: "numeric"})
      $("#clock").text(date);

     var openWindow = null;
     var reopenIntro = false;
     var image = new Image();
     image.src = "gif/rantergif.gif";

     // Selected Icon Display
     $(".iconCover").click(function(){
          if ($("#introWindow").is(':visible'))
               reopenIntro = true;
          else
               reopenIntro = false;
          $(openWindow).hide();
          $("#introWindow").hide();
          $(".iconCover").removeClass("selectedIcon");
          $(this).addClass("selectedIcon");
          
          var selectedIcon = $(this).find(':nth-child(1)').attr('id');
          selectedIcon = "#" + selectedIcon + "Window";
          $(selectedIcon).show();
          openWindow = selectedIcon;

          // Refresh GIFs for accurate viewing
          $('img').prop('src',function(){return this.src;})
     });

     $(".closeButt").click(function(){
          if(reopenIntro)
               $("#introWindow").show();
          $(this).parents().eq(1).hide(); 
          $(".iconCover").removeClass("selectedIcon");
     });
     
     $(".butt").mousedown(function(){
          $(this).css("background","rgba(163,164,166,1)");
     }).mouseup(function(){
          $(this).css("background","rgba(255,255,255,1)");
     });

     
});

