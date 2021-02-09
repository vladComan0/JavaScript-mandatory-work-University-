/*
Dezvoltați o pagină web cu facilități jQuery care afișează două câmpuri pt. introducerea unei date. La apăsarea unui buton se validează datele introduse doar dacă delimitează un interval mai mare de 3 luni (analog pb. 3 din lab. 11).
*/

$("document").ready(function(){
    $("#submit").click(function(){
        var elem1 = $("#date1").val();
        var elem2 = $("#date2").val();
        var inputdate1 = new Date(elem1);
        var inputdate2 = new Date(elem2);
        if(((inputdate1.getMonth()-inputdate2.getMonth()) > 3) || ((inputdate1.getMonth()-inputdate2.getMonth()) < -3)){
            alert("Aceste date se valideaza.");
        }
        else{
            alert("Aceste date nu se valideaza. Intervalul e mai mic sau egal cu 3 luni.");
        }
    });
});