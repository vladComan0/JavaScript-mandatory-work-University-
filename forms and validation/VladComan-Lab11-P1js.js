/*
Dezvoltați o pagină web cu facilități JavaScript care afișează un câmp destinat încărcării de fișiere și 
permite doar selectarea fișierelor de tip imagine (jpeg, png, gif, bmp). Corelați tipul de fișier detectat cu extensia acestuia.
*/
function main(){
    var text = "";
    var type = "";
	var elem = document.getElementById("file1");
	
	text += "numele fisierului: " + elem.value;
    text += "\ntipul fisierului: " + elem.files[0].type;
    text += "\nmarimea fisierului: " + elem.files[0].size;
    type = elem.files[0].type;
    alert(type);
    if(type == "image/jpg" || type == "image/png" || type == "image/gif" || type == "image/bmp" || type == "image/jpeg")
        alert(text);
    else
        alert("The file chosen is not of the specific type!");
}