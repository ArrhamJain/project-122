x = 0;
y = 0;

draw_apple = "set";

var to_number="";

var SpeechRecognition = window.webkitSpeechRecognition;
  
var recognition = new SpeechRecognition();

function start()
{
  document.getElementById("status").innerHTML = "System is listening please speak";  
  recognition.start();
} 
 
recognition.onresult = function(event) {

  to_number = Number(content);
  if(Number.isInteger(to_number));

 console.log(event); 

 content = event.results[0][0].transcript;

    document.getElementById("status").innerHTML = "The speech has been recognized: " + content; 

}

function setup() {
    screen_width=window.innerWidth;
    screen_height=window.innerHeight;
    canvas=createCanvas(screen_width,screen_height-150);
    canvas.position(75);

}

function draw() {
  if(draw_apple == "set"){
    for(var i=1;i<=to_number;i++){
      x=Math.floor(Math.random()*700);
      y=Math.floor(Math.random()*400);
    }
  }
  
  {
    document.getElementById("status").innerHTML = to_number + " Apples drawn";
    draw_apple = "";
  }
}

function speak(){
    var synth = window.speechSynthesis;

    var utterThis = new SpeechSynthesisUtterance(speak_data);

    synth.speak(utterThis);

    speak_data = "";
}

function preload()
{
  apple=loadImage("apple.png");

}

call=speak();
