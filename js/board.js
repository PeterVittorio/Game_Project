$(document).ready(function(){

var players = [];

$('button').click(function() {
  var player1 = prompt("Please enter your name:");
  players.push(player1);
  console.log(players);
  shuffle(objects1);
  visualiseArray();
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

















});
