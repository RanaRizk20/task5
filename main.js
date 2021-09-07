var p = document.getElementById("p");
function func(image){
  p.src = image.src;
  p.parentElement.style.display="block";
}



function player1score() {
  var player1 = document.getElementById("player1");
  var currentvalue = player1.innerText;

  if(currentvalue<5){
    currentvalue++;
    player1.innerText = currentvalue;
  }
  if (currentvalue ==5){
    var result = document.getElementById("result");
    result.innerText="player1 is winner";

  }
}





function player2score() {
  var player1 = document.getElementById("player2");
  var currentvalue = player2.innerText;

  if(currentvalue<5){
    currentvalue++;
    player1.innerText = currentvalue;
  }
  if (currentvalue ==5){
    var result = document.getElementById("result");
    result.innerText="player2 is winner";

  }
}

function reset(){
  var player1 = document.getElementById("player1");
  player1.innerText=0;

  var player2= document.getElementById("player2");
  player2.innerText=0;

  var result= document.getElementById("result");
  result.innerText="";
}







function digitalhour(){
  var date = new Date();

  var hour = date.getHours();
  var minute = date.getMinutes();
  var second = date.getSeconds();

  var time = hour + " "+":"+" "+minute + " "+":"+ " "+second;
  document.getElementById("clock").innerText=time;
  setTimeout(digitalhour,1000);
}
digitalhour();