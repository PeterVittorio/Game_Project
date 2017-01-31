var counter = 0;

function play_single_sound(name) {
  document.getElementById(name).play();
}
play_single_sound('audiotag1');

function removeImgTag() {
  $('.objects > img').remove();
}

function addImgTag() {
  $('.objects').prepend($('<img>',{class:'floater',src:''}));
}

$(document).ready(function(){

var myAudio = new Audio('sound/imperial_march.wav');
myAudio.loop = true;
myAudio.play();

var players = [{name:'', points: 0}];

$('button').click(function() {
  var player = "player"; //  prompt("Please enter your name:");
  players.push(player);
  addImgTag();
  randomiseVisualise();
  var h = setInterval(function(){
      if (objectMove()) {
      play_single_sound('audiotag3');
      counter++;
      removeImgTag();
      clearInterval(h);
    }
  }, 800);
  confirmLoss();
});


function confirmLoss () {
  if (counter < 0){
    removeImgTag();
    clearInterval(h);
    alert('Shame on you!!! Improve your recycling skills!!!!');
  }
}






// var timeoutId = setTimeout (function() {
//     var speed = $objects.css('top', $objects.offset().top + 50);
//         speed += 3;
//         }, 6000);










});
