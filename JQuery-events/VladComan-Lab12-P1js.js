/*
Dezvoltați o pagină web cu facilități JavaScript/jQuery care afișează 2 câmpuri de tip textarea. Pe măsură ce utilizatorul scrie caractere în primul câmp (evenimente de tastatură), în al doilea câmp se afișează o statistică referitoare la caracterele introduse.
Ex.
A - apare de 17 ori în textul de 100 de caractere; procentaj: 17%
B - apare de 3 ori în textul de 100 de caractere; procentaj: 3%
*/
var letter = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var frequency = [];
var total = 0;
$(document).ready(function () {
    for (let i = 0; i < 31; i++) {
        frequency[i] = 0;
    }
    $("#text").keypress(function (event) {
        var key = event.keyCode || event.which;
        var crt_letter = String.fromCharCode(key);
        for (i in letter)
            if (letter[i] == crt_letter) {
                frequency[i]++;
                total++;
            }
        $("#result").text("");
        for (i in letter) {
            var procent = frequency[i] / total * 100;
            procent = procent.toFixed(2);
            $("#result").text($("#result").text() + letter[i] + " appears " + frequency[i] + " times. \nThat means " + procent + "%\n");
        }
    });
});