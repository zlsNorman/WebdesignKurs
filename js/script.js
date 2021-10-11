if (
  navigator.appName.indexOf("Internet Explorer") != -1 ||
  navigator.userAgent.match(/Trident.*rv[ :]*11\./)
) {
  //This user uses Internet Explorer
  window.location =
    "https://support.microsoft.com/de-de/office/diese-website-funktioniert-nicht-in-internet-explorer-8f5fc675-cd47-414c-9535-12821ddfc554?ui=de-de&rs=de-de&ad=de";
}

$("main").scroll(()=>{
  var menu = [
    '#home',
    '#history'
  ];
  for(i=0;i<menu.length;i++){
    var objectPosition = $(menu[i]).offset().top;
    var scrollPosition = $("main").scrollTop();

    if(objectPosition < scrollPosition){
      $('.navCircles [href="'+menu[i]+'"]').parent().addClass("blueDot");
    }else{
      $('.navCircles [href="'+menu[i]+'"]').parent().removeClass("blueDot");
    };
  }
});



/* if($(document).scrollTop() == 0){
    $(".navCircles:first-of-type div").addClass("blueDot");
}; */

$(".burger").click(()=>{
    $("nav").fadeToggle()
    $(".burger a").toggleClass("rotate45")
});

