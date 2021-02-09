$(document).ready(function(){
    var k = 0;
    for(let i = 0; i < 10; i++){
        $("#div"+i).css({left: getRandomInt(150, 1200) + "px", top: getRandomInt(150, 800) + "px"});
        $("#div"+i).click(function(){
            $(this).hide();
            k++;
            if(k == 10){
            clearInterval(myInterval);
            $("#timer").text("It took you " + counter + " seconds to finish");
            return false;
            }
    });
}
var counter = 0;
var myInterval = setInterval(function () {
    counter++;
    $("#timer").text("Time since the page started: " + counter + " seconds");
}, 1000);
console.log("K is: " + k);
});
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}