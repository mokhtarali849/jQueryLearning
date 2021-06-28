$("h1").css("color","red");
$('button').text(" Click Here.");
$("a").attr("href","https://www.google.com");

//addEventListener using js
// for(var i=0; i<5; i++){
//   document.querySelectorAll("button")[i].addEventListener("click",function(){
//     document.querySelector("h1").style.color="purple";
//   });
// }

//addEventListener using jQuery
$("button").click(function(){
  $("h1").css("color","purple");
});

$(document).keypress(function(event){
  $("h2").text(event.key);
});

$("h2").on("mouseover",function(){
  $("h2").css("color","red");
});

//showing and disappearing h1 on click function
$("button").on("click",function(){
  $("h1").fadeToggle();
});
//changing visibility
$("button").on("click",function(){
  $("h1").animate({opacity:0.5});
});
//sliding up and sliding down
$("button").on("click",function(){
  $("h3").slideToggle();
});
