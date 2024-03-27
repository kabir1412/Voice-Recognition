x = 0;
y = 0;
draw_circle = "";
draw_rect = "";

var SpeechRecognition = window.webkitSpeechRecognition;
var recognition = new SpeechRecognition();

function start(){
document.getElementById("status").innerHTML = "System is listening, please speak.";
recognition.start();
}

recognition.onresult = function(event){
console.log(event);
result = event.results[0][0].transcript;
document.getElementById("status").innerHTML = "Speech detected is " + result;

if(result == "circle"){
x = Math.floor(Math.random() * 900);
y = Math.floor(Math.random() * 500);
document.getElementById("status").innerHTML = "Started drawing circle.";
draw_circle = "set";
}

if(result == "rectangle"){
    x = Math.floor(Math.random() * 900);
    y = Math.floor(Math.random() * 500);
    document.getElementById("status").innerHTML = "Started drawing rectangle.";
    draw_rect = "set";
    }
}

function setup(){
canvas = createCanvas(900, 500);    
}

function draw(){
if(draw_circle == "set"){
radius = Math.floor(Math.random() * 100);
circle(x, y, radius);
draw_circle = "";
}
if(draw_rect == "set"){
    rect(x, y, 70, 50);
    draw_rect = "";
    }
}