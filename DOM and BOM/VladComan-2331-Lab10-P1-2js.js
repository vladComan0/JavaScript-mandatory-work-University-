/*
Schimbați culoarea componentei progresiv (setTimeout, setInterval).
*/

var flag = "";
var crt_rcolor = 255;
var crt_bcolor = 0;
var increment = 15;
function main(){
    div = document.getElementById("div1");
    div.addEventListener("mouseover", hover);
    div.addEventListener("mouseleave", leave);
}
function hover(){
    flag="hover";
    changecolor();
}
function leave(){
    flag="leave";
    changecolor();
}
function rgb(r, g, b){
    return ["rgb(",r,",",g,",",b,")"].join("");
}
function changecolor(){
    if(flag=="hover"){
        if(crt_bcolor<=240 && crt_rcolor >=15){
            crt_rcolor-=increment;
            crt_bcolor+=increment;
            div.style.backgroundColor = rgb(crt_rcolor, 0, crt_bcolor);
            setTimeout("changecolor()", 50);
            console.log(crt_rcolor + " " + crt_bcolor);
            console.log("\nHOVER!");
        }
    }
    else if(flag=="leave"){
        if(crt_rcolor<=240 && crt_bcolor >=15){
            crt_rcolor+=increment;
            crt_bcolor-=increment;
            div.style.backgroundColor = rgb(crt_rcolor, 0, crt_bcolor);
            setTimeout("leave()", 50);
            console.log(crt_rcolor + " " + crt_bcolor);
            console.log("\nLEAVE!");
        }
    }
    console.log("\n"+flag);
}