/*
Dezvoltați o pagină web cu facilități JavaScript/jQuery care afișează 10 componente alăturate de tip div. Folosiți funcții de animație pentru a mări cu 10 pixeli dimensiunile fiecărei componente după ce se detectează click-uri de mouse.
*/

$(document).ready(function(){
    for(let i = 0; i < 10; i++){
        $("#div"+i).click(function(){
            var height = parseInt($(this).css("height")) + 10;
            var width = parseInt($(this).css("width")) + 10;
            $(this).css({height: height, width: width});
        });
    }
});