/*
Dezvoltați o pagină web cu facilități JavaScript care afișează ora curentă (hh:mm:ss), actualizată o dată pe secundă 
(obiect de tip Date, apel repetat de cod prin setInterval() sau setTimeout()).
*/
var div;
function main(){
    div = document.getElementById("date");
    update();
}
function update(){
    var currentdate = new Date();
    var time = currentdate.toLocaleTimeString('ro-RO');
    div.innerHTML = "Ora curenta: " + time;
    setTimeout("update()",1000);
}