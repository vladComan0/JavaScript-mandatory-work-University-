/*
Utilizatorul este informat în timp real asupra gradului de rezistență calculat 
prin modificarea dimensiunii unei componente de tip <div> (rezistență mai mare, dimensiune mai mare).
*/
var div, p1;
var grade = 0;
function main(){
	p1 = document.getElementById("p1");
    div = document.getElementById("result");
    if(grade <= 10)
        p1.onkeydown = keyProcess;
}
function keyProcess(evt) {

    var this_key = (evt) ? evt.which : window.event.keyCode;
    grade++;
    if(this_key > 48 && this_key < 57){
        grade ++;
    }
    if(this_key == 64 || this_key == 33 || this_key == 38 || this_key == 63){
        grade ++;
    }
    if(this_key == 8){
        grade-=2;
    }
    if(grade<=2){
        div.style.width = "50px";
        div.style.height = "50px";
    }
    if(grade > 2 && grade <5){
        div.style.width = "75px";
        div.style.height = "75px";
    }
    if(grade >= 5 && grade <8){
        div.style.width = "100px";
        div.style.height = "100px";
    }
    if(grade>=8){
        div.style.width = "125px";
        div.style.height = "125px";
    }
}