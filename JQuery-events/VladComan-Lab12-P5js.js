/*
Dezvoltați o pagină web cu facilități JavaScript/jQuery care implementează un formular electronic cu următoarele câmpuri (analog lab. 11):
a. nume (câmp de tip text)
b. prenume (cîmp de tip text)
c. sex (câmp de selecție unică (butoane radio sau câmp de tip select))
d. data nașterii (câmp de tip dată)
e. adresă de email (câmp de tip text)
Fiecare câmp este animat când primește focus-ul și își schimbă: marginea din stânga, înălțimea și lățimea. Câmpurile revin la dimensiunile normale la pierderea focus-ului (blur).
*/

$(document).ready(function(){
    $("input").focus(function(){
        var height = parseInt($(this).css("height"));
        var width = parseInt($(this).css("width"));
        var left = parseInt($(this).css("marginLeft"));
        $(this).css({height: height + 10 + "px", width: width + 10 + "px", marginLeft: left + 10 + "px"});
    });
    $("input").blur(function(){
        var height = parseInt($(this).css("height"));
        var width = parseInt($(this).css("width"));
        var left = parseInt($(this).css("marginLeft"));
        $(this).css({height: height - 10 + "px", width: width - 10 + "px", marginLeft: left - 10 + "px"});
    });
});