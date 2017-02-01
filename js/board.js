var counter = 0;
var players = [{name:'', points: 0}];

function play_single_sound(name) {
  document.getElementById(name).play();
}
play_single_sound('audiotag1');

function addImgTag() {
  $('.game-board').prepend($('<img>',{class:'floater',src:''}));
}

function removeImgTag() {
  $('.game-board > img').remove();
}

$(document).ready(function(){

// // var myAudio = new Audio('sound/imperial_march.wav');
// // myAudio.loop = true;
// myAudio.play();

$('button').click(function() {
  var player = prompt("Please enter your name:");
  players.push(player);
  addImgTag();
  randomiseVisualise();
  myInterval();
});







// var timeoutId = setTimeout (function() {
//     var speed = $objects.css('top', $objects.offset().top + 50);
//         speed += 3;
//         }, 6000);










});
