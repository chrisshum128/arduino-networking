// API key
var key = "6426FFC9204DF1CFAE42D41AED6CB0B7";

// When interface is loaded
window.onload = function() {
    $.get( "command.php", {key: key, command: "definePinMode&pin=7&mode=1"} );
}

// Function to control LEDs
function buttonClick(clicked_id){

    if (clicked_id == "1"){
        $.get( "command.php", {
        key: key, command: "setDigitalOutput&pin=7&output=1"} );  
    } 

    if (clicked_id == "2"){
        $.get( "command.php", {
        key: key, command: "setDigitalOutput&pin=7&output=0"} );  
    } 
}