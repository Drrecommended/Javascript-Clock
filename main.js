function myClock(){
    var currentTime = new Date();
    var currentHours = currentTime.getHours();
    var currentMinutes = currentTime.getMinutes();
    var currentSeconds = currentTime.getSeconds();
    var currentTimeString = currentHours + ":" + currentMinutes + ":" + currentSeconds;


    $(".clock").html(currentTimeString);
}

$(document).ready(function(){
    setInterval(myClock, 1000)
});
   

