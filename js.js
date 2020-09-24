anh1=true;;
$( document ).ready(function() {
    $('img').mouseup(function()
   {
     if(anh1)
    {
      $("audio")[0].play();
       $(this).attr("src","2.jpg");
       anh1=false;
    }
    else
    {
      $(this).attr("src","1.jpg");
      anh1=true;
    }
    
   })
   
   $('img').mousedown(function()
   {
     if(anh1)
    {
      $("audio")[0].play();
       $(this).attr("src","2.jpg");
       anh1=false;
    }
    else
    {
      $(this).attr("src","1.jpg");
      anh1=true;
    }
    
   })
    
   $('img').on('touchstart', function()
   {
     if(anh1)
    {
      $("audio")[0].play();
       $(this).attr("src","2.jpg");
       anh1=false;
    }
    else
    {
      $(this).attr("src","1.jpg");
      anh1=true;
    }
    
   })
    
       $('img').on('touchend', function()
   {
     if(anh1)
    {
      $("audio")[0].play();
       $(this).attr("src","2.jpg");
       anh1=false;
    }
    else
    {
      $(this).attr("src","1.jpg");
      anh1=true;
    }
    
   })
});
