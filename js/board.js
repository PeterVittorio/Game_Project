var counter = 0;
var players = [{name:'', points: 0}];

function play_single_sound(name) {
  document.getElementById(name).play();
}

play_single_sound('exit');

function updateScoreboard () {
  $('#points').text('Points: ' +counter);
}

function addImgTag() {
  $('.game-board').prepend($('<img>',{class:'floater',src:''}));
}

function removeImgTag() {
  $('.game-board > .floater').remove();
}

var myAudio = new Audio('sound/imperial_march.wav');
myAudio.loop = true;

$(document).ready(function(){



$('button').click(function() {
  var player = prompt("Please enter your name:");
  players.push(player);
  $('#player').text('Player: '+player);
  play_single_sound('audiotag1');
  myAudio.play();
  addImgTag();
  randomiseVisualise();
  myInterval();
});







});
