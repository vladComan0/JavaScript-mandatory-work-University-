$(document).ready(function(){
    $("#div").animate({
    left: '150px',
    opacity: '0.7',
    height: '250px',
    width: '350px'
    }, 5000, function(){
    alert("animatie terminata");
    });
});