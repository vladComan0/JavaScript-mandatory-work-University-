/*
Utilizatorul este informat în timp real asupra gradului de rezistență calculat prin modificarea culorii 
unei componente de tip <div> din roșu -> portocaliu -> galben -> verde.
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
    if(grade<=10){
        setTimeout('keyProcess(evt)', 3000);
    }
    else return;
    if(grade<=2){
        div.style.backgroundColor = "red";
    }
    if(grade > 2 && grade <5){
        div.style.backgroundColor = "orange";
    }
    if(grade >= 5 && grade <8){
        div.style.backgroundColor = "yellow";
    }
    if(grade>=8){
        div.style.backgroundColor = "green";
    }
}