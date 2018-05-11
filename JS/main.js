$(document).ready(function(){
    //jQuery code here
    console.log("jquery")
 });

 $(".close, .hamburger").click(function(e){
   e.preventDefault();
   $(".main-nav").toggleClass('open-nav');
 });

 $(".close").click(function(){
   $(".main-nav").removeClass("open-nav");
 });

 
