/*
Dezvoltați o pagină web cu facilități JavaScript care definește o grilă dreptunghiulară (componente div alăturate, dispuse matricial;
dimensiunea grilei este prestabilită). La trecerea cu mouse-ul peste componente, acestea își schimbă culoarea. 
Monitorizați și afișați timpul scurs până la colorarea tuturor celulelor.
*/
var div = [];
var count = 0;
var index = 0;
var result;
function main(){
    div[0] = document.getElementById("div1");
    div[1] = document.getElementById("div2");
    div[2] = document.getElementById("div3");
    div[3] = document.getElementById("div4");
    div[4] = document.getElementById("div5");
    div[5] = document.getElementById("div6");
    div[6] = document.getElementById("div7");
    div[7] = document.getElementById("div8");
    div[8] = document.getElementById("div9");
    div[9] = document.getElementById("div10");
    div[10] = document.getElementById("div11");
    div[11] = document.getElementById("div12");
    div[12] = document.getElementById("div13");
    div[13] = document.getElementById("div14");
    div[14] = document.getElementById("div15");
    div[15] = document.getElementById("div16");
    div[16] = document.getElementById("div17");
    div[17] = document.getElementById("div18");
    div[18] = document.getElementById("div19");
    div[19] = document.getElementById("div20");
    div[20] = document.getElementById("div21");
    div[21] = document.getElementById("div22");
    div[22] = document.getElementById("div23");
    div[23] = document.getElementById("div24");
    div[24] = document.getElementById("div25");
    result = document.getElementById("result");
    for(let i = 0; i < 25; i++){
        div[i].addEventListener("mouseover", color);
    }
}
function color(){
    if(this.style.backgroundColor = "lightsalmon"){
        index++;
    }
    this.style.backgroundColor = "blue";
    console.log(count);
    if(index == 25){
        result.innerHTML = "A durat " + count + " de secunde pentru a colora toate patratele";
    }
    counter();
}
function counter(){
    count++;
    setTimeout('counter()', 1000);
}