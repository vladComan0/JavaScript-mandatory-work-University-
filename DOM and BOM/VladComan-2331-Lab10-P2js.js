/* 
Dezvoltați o pagină web cu facilități JavaScript care desenează, una langa alta,
o serie (10) de componente div colorate cu culori prestabilite. Într-o zonă de pe ecran
se afișează codul culorii deasupra căreia se află mouse-ul. Textul este afișat cu culoarea componentei.
*/
var div = [];
var mouse;
function main(){
    div[0]=document.getElementById("div1");
    div[1]=document.getElementById("div2");
    div[2]=document.getElementById("div3");
    div[3]=document.getElementById("div4");
    div[4]=document.getElementById("div5");
    div[5]=document.getElementById("div6");
    div[6]=document.getElementById("div7");
    div[7]=document.getElementById("div8");
    div[8]=document.getElementById("div9");
    div[9]=document.getElementById("div10");
    for(let i=0;i<10;i++){
        div[i].style.backgroundColor = rgb(i*15+50, i*20+20, i*25);
    }
    for(let i=0;i<10;i++){
        div[i].addEventListener("mouseover",showRGB);
    }
}

function rgb(r, g, b){
    return ["rgb(",r,",",g,",",b,")"].join("");
}
function showRGB(){
    var result = document.getElementById("result");
    result.innerHTML = "THE COLOR IS: " + this.style.backgroundColor;
}