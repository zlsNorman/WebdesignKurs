if (
  navigator.appName.indexOf("Internet Explorer") != -1 ||
  navigator.userAgent.match(/Trident.*rv[ :]*11\./)
) {
  //This user uses Internet Explorer
  window.location =
    "https://support.microsoft.com/de-de/office/diese-website-funktioniert-nicht-in-internet-explorer-8f5fc675-cd47-414c-9535-12821ddfc554?ui=de-de&rs=de-de&ad=de";
}

if($(document).scrollTop() == 0){
    $(".navCircles:first-of-type div").addClass("blueDot");
}

$(".burger").click(()=>{
    $("nav").fadeToggle()
    $(".burger a").toggleClass("rotate45")
})
