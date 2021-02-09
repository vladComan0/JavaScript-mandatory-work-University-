/*
Rescrieți aplicația folosind mișcările de mouse pentru poziționarea imaginii
*/
var x = 50;
var y = 50;
$(document).ready(function() {
    var dragging = false;
    var mx, my;
    $("#player").mousedown(function(event) {
        dragging = true;
        mx = event.clientX - this.offsetLeft;
        my = event.clientY - this.offsetTop;
        this.setCapture && this.setCapture();
        return false;
    });
    $(document).mousemove(function(event){
        if (dragging) {
            var event = event || window.event;
            var x = event.clientX - mx;
            var y = event.clientY - my;
            $("#player").css({ left: x + "px", top: y + "px" });
            if (x < 1250 && x > 1100 && y < 650 && y > 500) {
                $("#player").css({top: 600 + "px", left: 1200 + "px"});
                $("#text").html("YOU WON!");
                return 0;
            }
            else{
                $("#text").html("");
            }
        }
    })
    $(document).mouseup(function(event){
        dragging = false;
        $("#player")[0].releaseCapture;
        event.cancelBubble = true;
    });

});