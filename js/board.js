var counter = 0;
var misses = 0;
var players = [{name:'', points: 0}];

function play_single_sound(name) {
  document.getElementById(name).play();
}

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
myAudio.play();

$(document).ready(function(){


$('button').click(function() {
  var player = prompt("Please enter your name:");
  players.push(player);
  $('#player').text('Player: '+player);
  play_single_sound('audiotag1');
  document.getElementById('titlecontent').style.display = 'none';
  addImgTag();
  randomiseVisualise();
  myInterval();
});



});
