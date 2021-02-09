/*
Dezvoltați o pagină web cu facilități JavaScript/jQuery care afișează o imagine. Poziția imaginii poate fi 
controlată prin apăsarea tastelor W A S D (sus, stânga, jos, dreapta). Un chenar predefinit marchează poziția țintă a imaginii.
 Dacă mai mult de 75% din imagine se suprapune peste chenarul țintă, imaginea este automat poziționată centrat în 
 țintă și nu mai poate fi mișcată cu ajutorul tastelor.
*/

var x = 50;
var y = 50;
$(document).ready(function() {
    $(document).keypress(function(event) {
        var key = event.keyCode || event.which;
        if (key == 119) { //W
            y -= 20;
            $("#player").css({top: y + "px"});
        }
        if (key == 115) { //S
            y += 20;
            $("#player").css({top: y + "px"});
        }
        if (key == 97) { //A
            x -= 20;
            $("#player").css({left: x + "px" });
        }
        if (key == 100) { //D
            x += 20;
            $("#player").css({left: x + "px" });
        }
        if (x < 1250 && x > 1100 && y < 650 && y > 500) {
            $("#player").css({top: 600 + "px", left: 1200 + "px"});
            $("#text").html("YOU WON!");
            return 0;
        }
        else{
            $("#text").html("");
        }

    });
});