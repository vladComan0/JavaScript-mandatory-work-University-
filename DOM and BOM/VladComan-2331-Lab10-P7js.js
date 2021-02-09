/*
Dezvoltați o pagină web cu facilități JavaScript care detectează și afișează caracteristicile:
- host
- hostname
- href
- pathname
- port
- protocol
specifice paginii curente. Să se afișeze numele browserului care a servit la încărcarea paginii. 
*/
var div;
function main(){
    div = document.getElementById("div");
    var url = window.location.href;
    console.log(url+"\n");
    var str = url.split(",").toString();
    console.log(str+"\n");
    var arr = str.split("/");
    var protocol = arr[0] + "//";
    var hostname = arr[2].split(":")[0];
    var port = arr[2].split(":")[1];
    var pathname = arr[3].split(".")[0];
    var host = arr[2];
    div.innerHTML = "Host: " + host + "<br>";
    div.innerHTML += "Hostname: " + hostname + "<br>";
    div.innerHTML += "Pathname: " + pathname + "<br>";
    div.innerHTML += "Port: " + port + "<br>";
    div.innerHTML += "Protocol: " + protocol + "<br>";
}