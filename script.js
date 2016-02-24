var colors = [
    "Red",
    "Orange",
    "Yellow",
    "Green",
    "Blue",
    "Purple"
    ];
      var i = 0;
function ColorChanger(){
    $("html").css("background-color", colors[i]);
        i++;
        console.log(i);
        
        
}


for (var a=0;a<colors.length;a++){

$("body").append("<button id="+"/colors[i]"/+"class="+"/colors[i]"/+">"+colors[i]+"</button>");
}