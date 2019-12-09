
  document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.parallax');
    var instances = M.Parallax.init(elems, 0);
  });


  $(document).ready(function(){

    $(".mnu").on('click', function(){

      if($(".sidenav").hasClass('sidenavOn')){
        $(".sidenav").removeClass('sidenavOn');
        $(".sidenav").css("transition-duration", "0.5s"); 
      } else{
        $(".sidenav").addClass('sidenavOn');

        $(".sidenav").css("width", "auto");

      }


    });

  

    
  });
      