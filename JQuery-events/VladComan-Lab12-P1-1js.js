/*
Rescrieți aplicația astfel încât statistica să se afișeze la apăsarea unui buton.
*/
var letter = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var frequency = [];
var total = 0;
$(document).ready(function() {
    for(let i = 0; i < 31; i++){
        frequency[i] = 0;
    }
    $("#text").keypress(function(event) {
        var key = event.keyCode || event.which;
        var crt_letter = String.fromCharCode(key);
        for (i in letter)
            if (letter[i] == crt_letter) {
                frequency[i]++;
                total++;
            }
    });
    $("#calc").click(function(){
        $("#result").text("");
        for (i in letter) {
            var procent = frequency[i] / total * 100;
            procent = procent.toFixed(2);
            $("#result").text($("#result").text() + letter[i] + " appears " + frequency[i] + " times. \nThat means " + procent + "%\n");
        }
    });
});