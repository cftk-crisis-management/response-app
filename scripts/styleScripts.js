$(document).ready(function(){

    $('#fireIcon').click(function(){
    	$('#fireIcon').attr("src","../images/FIRE BUTTON.png");
        $('#floodIcon').attr("src","../images/FLOOD GRAYED.png");
        $('#accidentIcon').attr("src","../images/ACCIDENT_GRAY.png");
        $('body').css({"background-color": "red"});
        // $(this).css({"width": "120px", "height": "120px"});
        // $('#floodIcon').css({"width": "70px", "height": "70px"});
        // $('#accidentIcon').css({"width": "70px", "height": "70px"});
    });

   	$('#floodIcon').click(function(){
   		$('#floodIcon').attr("src","../images/FLOOD_ACTIVE.png");
        $('#fireIcon').attr("src","../images/FIRE_GRAY.png");
        $('#accidentIcon').attr("src","../images/ACCIDENT_GRAY.png");
        $('body').css({"background-color": "blue"});
        // $(this).css({"width": "120px", "height": "120px"});
        // $('#floodIcon').css({"width": "70px", "height": "70px"});
        // $('#accidentIcon').css({"width": "70px", "height": "70px"});
    });

    $('#accidentIcon').click(function(){
   		$('#accidentIcon').attr("src","../images/ACCIDENT_ACTIVE.png");
        $('#fireIcon').attr("src","../images/FIRE_GRAY.png");
        $('#floodIcon').attr("src","../images/FLOOD GRAYED.png");
        $('body').css({"background-color": "green"});
        // $(this).css({"width": "120px", "height": "120px"});
        // $('#floodIcon').css({"width": "70px", "height": "70px"});
        // $('#accidentIcon').css({"width": "70px", "height": "70px"});
    });

});


