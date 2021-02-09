/* 
Dezvoltați o pagină web cu facilități JavaScript care pozitionează la mijlocul ecranului
o componentă "div" cu latura de 100 de pixeli, umplută cu roșu. Cand mouse-ul se află deasupra componentei, aceasta este colorată cu albastru.
*/

function main(){
    var div = document.getElementById("div1");
    div.addEventListener("mouseover", hover);
    div.addEventListener("mouseleave", leave)
}
function hover(){
    document.getElementById("div1").style.backgroundColor = "blue";
}
function leave(){
    document.getElementById("div1").style.backgroundColor = "red";
}