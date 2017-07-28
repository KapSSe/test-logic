/* Desktop on hover */
$(document).ready(function(){
    $( ".cms" ).hover(function() {
      $( ".drop" ).toggleClass('drop__active')
         $( ".drop__active" ).hover(function() {
            $( ".drop" ).toggleClass('drop__active')
      });
   });  
  
   /* Responsive burger*/
   $(".menu-resp").on('click',function(){
      $(".menu-resp").toggleClass("menu-resp--active")
      $( ".menu" ).toggleClass('menu--active');
      $( ".heading" ).toggleClass('heading--active');
   })
   
   /* On drop link click */ 
   $(".drop__link").on('click',function(){
      $(".menu-resp").toggleClass("menu-resp--active")
      $( ".menu" ).toggleClass('menu--active');
      $( ".heading" ).toggleClass('heading--active');
    })
});
