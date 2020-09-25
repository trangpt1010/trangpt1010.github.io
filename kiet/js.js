anh1=true;;
$( document ).ready(function() {
    $('img').mouseup(function()
   {
     changeImg(this);
    
   });
   
   $('img').mousedown(function()
   {
     changeImg(this);
    
   });
    
   $('img').on('touchstart', function()
   {
     changeImg(this);
    
   });
    
       $('img').on('touchend', function()
   {
     changeImg(this);
    
   });
    
   $(document).bind("contextmenu",function(){
     return false;
   });
    
    
   $(document).bind("taphold",function(e){
     e.preventDefault();
     return false;
   });
    
    $('img').bind("taphold",function(e){
     e.preventDefault();
     return false;
    });
    
});

function changeImg(img) {
  if(anh1)
    {
       $("audio")[0].play();
       $(img).attr("src","2.jpg");
       anh1=false;
	   
    }
    else
    {
	  setTimeout(function(){
        $(img).attr("src","1.jpg");
        anh1=true;
	  }, 300);
    }
}
