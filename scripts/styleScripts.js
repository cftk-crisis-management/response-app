$(document).ready(function(){
    $('#fireIcon').click(function(){
        $('#floodIcon').attr("src","../images/FLOOD GRAYED.png");
        $('#accidentIcon').attr("src","../images/ACCIDENT_GRAY.png");
        $(this).css({"width": "70px", "height": "70px"});
        $('#floodIcon').css({"width": "30px", "height": "30px"});
        $('#accidentIcon').css({"width": "30px", "height": "30px"});
    });
});