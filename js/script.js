if (
  navigator.appName.indexOf("Internet Explorer") != -1 ||
  navigator.userAgent.match(/Trident.*rv[ :]*11\./)
) {
  //This user uses Internet Explorer
  window.location =
    "https://support.microsoft.com/de-de/office/diese-website-funktioniert-nicht-in-internet-explorer-8f5fc675-cd47-414c-9535-12821ddfc554?ui=de-de&rs=de-de&ad=de";
}

/* global values */
var timelines = [
  "1387",
  "1837 - 1900",
  "1945 - 1977",
  "1996"
];
var timelinesText = [
  `Erstmals wurde 1387 in Schwepnitz ein Herrensitz erwähnt. Auf diesen geht jedoch nicht das Schloss Schwepnitz, sondern das ehemals nahe 
  gelegene Gutshaus Schwepnitz zurück. Das sich aus dem Herrensitz entwickelte Rittergut bezieht sich ebenfalls auf das Gutshaus. Das Schloss 
  wurde später als zusätzlicher Bau errichtet.`,
  `1837 gelangte Ernst Heinrich Feurich in den Besitz des Grundstücks. Er ließ den Park umgestalten und 1848 nach einem Blitzschlag das Schloss als 
  Neubau errichten. Die Freiherren von Rochow erwarben das Schloss 1883 von einem Herrn Eckelmann. Ihnen folgte Arndt von Wolffersdorf um 
  1900.`,
  `Im Herbst 1945 wurde Arndt von Wolffersdorf enteignet. Er floh mit seiner Frau 1952 in den Westen. Bis 1977 wurde Schloss Schwepnitz als Schule 
  genutzt.`,
  `Nach einem Brand 1996 ist das Schloss nur noch als Ruine erhalten.`
];

if($(document).scrollTop() == 0){
  $(".navCircles:first-of-type div").addClass("blueDot");
};
function navBar(){
  var menu = [
    '#home',
    '#history'
  ];
  for(i=0;i<menu.length;i++){
    var objectPosition = $(menu[i]).offset().top;
    var objectPositionEnd = $(window).innerHeight() + objectPosition ;
    var scrollPosition = $("main").scrollTop();
    if(objectPosition <= scrollPosition && scrollPosition <= objectPositionEnd){
      $('.navCircles [href="'+menu[i]+'"]').parent().addClass("blueDot");
    }else{
      $('.navCircles [href="'+menu[i]+'"]').parent().removeClass("blueDot");
    };
  }
}
$("main").scroll(()=>{
  navBar();
});

$(".burger").click(()=>{
    $("nav").fadeToggle()
    $(".burger a").toggleClass("rotate45")
});

$(".dreieck").on('click', function() {
  var dreieckId = $(this).attr('id');
  var timelineValue = $("#timelineValue").html();
  var trueValue
  for(i=0; i < timelines.length; i++){
    if(dreieckId == "dreieckTop" && timelineValue == timelines[i]){
      trueValue = i-1;
      $("#timelineValue").html(timelines[trueValue]);
      $(".timelineText p").html(timelinesText[trueValue]);
    }
    else if(dreieckId == "dreieckBot" && timelineValue == timelines[i]){
      trueValue = i+1;
      $("#timelineValue").html(timelines[trueValue]);
      $(".timelineText p").html(timelinesText[trueValue]);
    }
    
    if($("#timelineValue").html()==timelines[0]){
      $("#dreieckTop polygon").addClass("disable")
    }else if($("#timelineValue").html()==timelines[3]){
      $("#dreieckBot polygon").addClass("disable")
    }
    else{
      $(".dreieck polygon").removeClass("disable")
    }
    
  }
});



function getRotationDegrees(obj) {
  var matrix = obj.css("-webkit-transform") ||
  obj.css("-moz-transform")    ||
  obj.css("-ms-transform")     ||
  obj.css("-o-transform")      ||
  obj.css("transform");
  if(matrix !== 'none') {
      var values = matrix.split('(')[1].split(')')[0].split(',');
      var a = values[0];
      var b = values[1];
      var angle = Math.round(Math.atan2(b, a) * (180/Math.PI));
  } else { var angle = 0; }
  return (angle < 0) ? angle + 360 : angle;
}

if(window.matchMedia("(min-width: 701px)")){
  setInterval(function(){ 
    //this code runs every second 
    var angle1 = getRotationDegrees($('.pocketZeiger'));
    console.log(angle1);
    $('.pocketZeiger').css('transform','rotate('+ parseInt(angle1+1) +'deg)')
  }, 1000);
  
}