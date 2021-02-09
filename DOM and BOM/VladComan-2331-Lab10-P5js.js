/*
Dezvoltați o pagină web cu facilități JavaScript care definește un labirint (componente div alăturate, dispuse matricial).
O imagine (a carei dimensiuni ii permit să încapă în labirint) trebuie mutată cu cursorul, de la intrare spre ieșire.
Se afișează în permanență numărul de coliziuni cu pereții labirintului. Se contorizează timpul scurs între intrarea în labirint și momentul ieșirii (număr de secunde).
Aplicația are 2 butoane, Pauza și Restart.
NOT FINISHED
*/

var div = [];
var image;
var is_dragging = false;
var offset_left;
var offset_top;
var my_div;
var tempX, tempY;
function main(){
    for(let i = 0; i < 91; i++){
        div[i] = document.getElementById(getElement(i));
    }
    image = document.getElementById("image");
    my_div = document.getElementById("my_div");
    image.addEventListener("drag", startDragging);
}
function getElement(i){
    return (i+1).toString();
}

function startDragging(){
	is_dragging = true;
	offset_top = tempY - parseInt(image.style.top.substr(0, image.style.top.length-2));
	offset_left = tempX - parseInt(image.style.left.substr(0, image.style.left.length-2));
}
function stopDragging(){
	is_dragging = false;
}

function f1(x, y){		
	my_div.innerHTML = "Pozitia curenta a pointerului de mouse: "+x+", "+y;
	if(is_dragging){
		left_pos = x - offset_left;
		top_pos = y - offset_top;
		layer.style.left = left_pos+"px";
		layer.style.top = top_pos+"px";
	}	
}