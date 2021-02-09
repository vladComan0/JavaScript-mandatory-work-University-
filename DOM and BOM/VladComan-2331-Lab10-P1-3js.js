/*
Culoarea componentei este închisă/deschisă pe masură ce cursorul mouse-ului
se apropie de țintă.
*/

var flag = "";
var crt_rcolor = 255;
var crt_bcolor = 0;
var increment = 15;
var divX, divY;
function main(){
    div = document.getElementById("div1");
    getPos(div);
    document.onmousemove = findScreenCoords;
    console.log("\n mouse coords: " + divX + " " + divY);
}
function closer(){
    flag="closer";
    changecolor();
}
function further(){
    flag="further";
    changecolor();
}
function rgb(r, g, b){
    return ["rgb(",r,",",g,",",b,")"].join("");
}
function changecolor(){
    if(flag=="closer"){
        if(crt_bcolor<=240 && crt_rcolor >=15){
            crt_rcolor-=increment;
            crt_bcolor+=increment;
            div.style.backgroundColor = rgb(crt_rcolor, 0, crt_bcolor);
            setTimeout("changecolor()", 50);
            //console.log(crt_rcolor + " " + crt_bcolor);
        }
    }
    else if(flag=="further"){
        if(crt_rcolor<=240 && crt_bcolor >=15){
            crt_rcolor+=increment;
            crt_bcolor-=increment;
            div.style.backgroundColor = rgb(crt_rcolor, 0, crt_bcolor);
            setTimeout("changecolor()", 50);
            //console.log(crt_rcolor + " " + crt_bcolor);
        }
    }
}
function getPos(el) {
    for (var lx=0, ly=0; el != null; lx += el.offsetLeft, ly += el.offsetTop, el = el.offsetParent);
    divX=lx;
    divY=ly;
}
function findScreenCoords(mouseEvent)
{
    var x, y;
  if (mouseEvent)
  {
    x = mouseEvent.screenX;
    y = mouseEvent.screenY;
  }
  else
  {
    //IE
    x = window.event.screenX;
    y = window.event.screenY;
  }
  document.getElementById("div1").innerHTML = x + ", " + y;
  if(x>=divX){
    if((x-divX)>=800){
      document.getElementById("div1").style.backgroundColor = rgb(227, 0, 31);
      setTimeout("findScreenCoords()", 50);
    }
    if((x-divX)>700 &&(x-divX)<800){
      document.getElementById("div1").style.backgroundColor = rgb(199, 0, 59);
      setTimeout("findScreenCoords()", 50);
    }
    if((x-divX)>600 &&(x-divX)<=700){
      document.getElementById("div1").style.backgroundColor = rgb(171, 0, 87);
      setTimeout("findScreenCoords()", 50);
    }
    if((x-divX)>500 &&(x-divX)<=600){
      document.getElementById("div1").style.backgroundColor = rgb(143, 0, 115);
      setTimeout("findScreenCoords()", 50);
    }
    if((x-divX)>400 &&(x-divX)<=500){
      document.getElementById("div1").style.backgroundColor = rgb(115, 0, 143);
      setTimeout("findScreenCoords()", 50);
    }
    if((x-divX)>300 &&(x-divX)<=400){
      document.getElementById("div1").style.backgroundColor = rgb(87, 0, 171);
      setTimeout("findScreenCoords()", 50);
    }
    if((x-divX)>200 &&(x-divX)<=300){
        document.getElementById("div1").style.backgroundColor = rgb(59, 0, 199);
        setTimeout("findScreenCoords()", 50);
      }
      if((x-divX)>100 &&(x-divX)<=200){
        document.getElementById("div1").style.backgroundColor = rgb(31, 0, 227);
        setTimeout("findScreenCoords()", 50);
      }
      if((x-divX)>0 &&(x-divX)<=100){
        document.getElementById("div1").style.backgroundColor = rgb(0, 0, 255);
        setTimeout("findScreenCoords()", 50);
      }
  }
  if(x<divX){
    if((divX-x)<=50){
      document.getElementById("div1").style.backgroundColor = rgb(35, 0, 220);
      setTimeout("findScreenCoords()", 50);
    }
    if((divX-x)>50 &&(divX-x)<=100){
      document.getElementById("div1").style.backgroundColor = rgb(70, 0, 185);
      setTimeout("findScreenCoords()", 50);
    }
    if((divX-x)>100 &&(divX-x)<=150){
        document.getElementById("div1").style.backgroundColor = rgb(105, 0, 150);
        setTimeout("findScreenCoords()", 50);
    }
      if((divX-x)>150 &&(divX-x)<=200){
        document.getElementById("div1").style.backgroundColor = rgb(140, 0, 115);
        setTimeout("findScreenCoords()", 50);
    }
    if((divX-x)>200 &&(divX-x)<=250){
        document.getElementById("div1").style.backgroundColor = rgb(175, 0, 80);
        setTimeout("findScreenCoords()", 50);
    }
    if((divX-x)>250 &&(divX-x)<=300){
        document.getElementById("div1").style.backgroundColor = rgb(210, 0, 45);
        setTimeout("findScreenCoords()", 50);
    }
    if((divX-x)>300 &&(divX-x)<=350){
        document.getElementById("div1").style.backgroundColor = rgb(245, 0, 10);
        setTimeout("findScreenCoords()", 50);
    }
  }
}

