$(document).ready(function(){

var players = [];
var counter = 0;

$('button').click(function() {
  var player1 = "player 1"; //  prompt("Please enter your name:");
  players.push(player1);
  // shuffle(objects1);
  // visualiseArray();
  addImgTag();
  randomiseVisualise();
  var h = setInterval(function(){
    if (objectMove()) {
      counter++;
      removeImgTag();
      clearInterval(h);
      
    }
  }, 800);

});

// Game.prototype.start = function(){
//   setInterval(this.update.bind(this), 100);
// };



// function Game(items) {
//   this.rows    = items.rows;
//   this.columns = items.columns;
//   this.objects   = items.objects;
//
//   for (var rowIndex = 0; rowIndex < items.rows; rowIndex++){
//     for (var columnIndex = 0; columnIndex < items.columns; columnIndex++){
//       $('.game-board').append($('<div>')
//         .addClass('cell board')
//         .attr('data-row', rowIndex)
//         .attr('data-col', columnIndex)
//       );
//     }
//   }
// }
//
// var game = new Game({
//   rows: 20,
//   columns: 8,
//
// });

function addImgTag() {
  $('.objects').prepend($('<img>',{class:'floater',src:''}));
}

function removeImgTag() {
  $('.objects > img').remove();
}
















});
