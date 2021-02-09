
/*
Dezvoltați o pagină web cu facilități JavaScript care definește o grilă dreptunghiulară (componente div alăturate, dispuse matricial; dimensiunea grilei este prestabilită). Elementul din stânga sus este colorat diferit.
Definiți 4 taste la apăsarea cărora elementul colorat “se mută” pe celula imediat următoare din stânga, dreapta, sus sau jos (doar dacă mișcarea este posibilă).
*/
var bl, br, bt, bb;
var current = 0;
var div = [];
function main(){
    bl = document.getElementById("bl");
    br = document.getElementById("br");
    bt = document.getElementById("bt");
    bb = document.getElementById("bb");
    div[0] = document.getElementById("div1");
    div[1] = document.getElementById("div2");
    div[2] = document.getElementById("div3");
    div[3] = document.getElementById("div4");
    div[4] = document.getElementById("div5");
    div[5] = document.getElementById("div6");
    div[6] = document.getElementById("div7");
    div[7] = document.getElementById("div8");
    div[8] = document.getElementById("div9");
    div[0].style.backgroundColor = "green";
    bl.addEventListener("click", left);
    br.addEventListener("click", right);
    bt.addEventListener("click", topp);
    bb.addEventListener("click", bottom);
}
function left(){
    if(current==0 || current==3 || current==6){
        alert("There is no space for doing that move!")
        return;
    }
    div[current].style.backgroundColor = "grey";
    div[current-1].style.backgroundColor = "green";
    current--;
}
function right(){
    if(current==2 || current==5 || current==8){
        alert("There is no space for doing that move!")
        return;
    }
    div[current].style.backgroundColor = "grey";
    div[current+1].style.backgroundColor = "green";
    current++;
    console.log(current);
}
function topp(){
    if(current==0 || current==1 || current==2){
        alert("There is no space for doing that move!")
        return;
    }
    div[current].style.backgroundColor = "grey";
    div[current-3].style.backgroundColor = "green";
    current-=3;
}
function bottom(){
    if(current==6 || current==7 || current==8){
        alert("There is no space for doing that move!")
        return;
    }
    div[current].style.backgroundColor = "grey";
    div[current+3].style.backgroundColor = "green";
    current+=3;
}