<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js"></script>
<script type="text/javascript">
//Background change based on time
$(document).ready(function() {
    var d = new Date();
    var n = d.getHours();
{
// Night
      if (n >= 20 && n <= 22 || n <= 6 && n >= 1) 
        $('.masthead').css("background-image", "url('https://images8.alphacoders.com/599/thumb-1920-599909.jpg')");
    
//Midnight "PEACE AND TRANQUILLTY BY HAT KID" easter egg (This was a BITCH to get working properly!) (Note to self: for professional websites, i should make it to where it only occurs once a month or once a year, so people using my site aren't shut down when trying to use the site at midnight.)
        else if (n >= 23 || n <= 1) 
           $('.masthead').css("background-image", "url('https://thumbs.gfycat.com/SlushyDefiniteBasil-max-1mb.gif')"); 
// Evening/sunset
      else if (n >= 18 && n <= 20)
        $('.masthead').css("background-image", "url('https://i.ibb.co/tLnWGCM/sunset-dragon-by-rose-of-lynn-d32ix3r-fullview.jpg')");
// Afternoon
      else if (n >= 12  && n <= 17)
        $('.masthead').css("background-image", "url('https://img5.goodfon.com/wallpaper/nbig/a/1e/brian-valeza-afternoon-snack-dragon-hunting-wyverns-vymyshle.jpg')");
// Morning
      else
        $('.masthead').css("background-image", "url('https://i.ibb.co/5FVHfdc/good-morning-hai-ro-by-lailie-dragon-lovard-dag77h3-fullview.jpg')", "background-repeat", "no-repeat", "background-size", "cover");
}

    
{
//Buttons 
    
//For click to reveal on text paragraphs (less clutter)
    
$("#clicksecret").click(function(){
  $("#smol").toggle();
});
$("#clickexperience").click(function(){
  $("#experience2").toggle();
});
$("#clicklearn").click(function(){
  $("#learn2").toggle();
});
$("#clickfuture").click(function(){
  $("#future2").toggle();
});
    
//For click to change background image on header
    
    $("#MorningBackground").click(function(){
 $('.masthead').css("background-image", "url('https://i.ibb.co/5FVHfdc/good-morning-hai-ro-by-lailie-dragon-lovard-dag77h3-fullview.jpg')";
});
            
            function windowResize() {
                var winWide = $(window).width();
                var winHeight = $(window).height();
  
                $(".resizable").width(winWide/2).height(winHeight/2);
    };
            $(document).ready(function(){
    windowResize();
    $( window ).on("resize", windowResize);
});
       
});
    
    (function($){
  var pr = 0, bgWidth = true, bgResize;

  bgResize = function(){
    var wr = $(window).width() / $(window).height();

    if(wr > pr && !bgWidth) {
      $('body').css('width', '100%').css('height', '');
      bgWidth = true;
    } else if(wr < pr && bgWidth) {
      $('body').css('height', '100%').css('width', '');
      bgWidth = false;
    }
  };

  $(document).ready(function() {
    var img = $('body');
    if(img.height()) {
      pr = $('body').width() / $('body').height();
      bgResize();
    } else {
      img.load(function(){
        pr = $('body').width() / $('body').height();
        bgResize();
      });
    }

    $(window).resize(bgResize);
    prettyPrint();
  });
        
         });
}
});
    
</script>