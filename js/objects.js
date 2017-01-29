var objects1 = [
  {name: 'bananapeel.png', cat: 'organic'}, {name: 'applecore.jpeg', cat: 'organic'}, {name: 'orangepeel.jpg', cat: 'organic'},
  {name: 'fishbone.jpeg', cat: 'organic'}, {name: 'foodpork.png', cat: 'organic'}, {name: 'milkcarton.jpg', cat: 'paper'},
  {name: 'greenbottle.png', cat: 'glass'}, {name: 'tincan.jpg', cat: 'glass'}, {name: 'starbuckscoffeecup.png', cat: 'paper'}, {name: 'starwars.png', cat: 'tiefighter'}];

// function shuffle(array) {
//   var currentIndex = array.length, temporaryValue, randomIndex;
//
//   // While there remain elements to shuffle...
//   while (0 !== currentIndex) {
//
//     // Pick a remaining element...
//     randomIndex = Math.floor(Math.random() * currentIndex);
//     currentIndex -= 1;
//
//     // And swap it with the current element.
//     temporaryValue = array[currentIndex];
//     array[currentIndex] = array[randomIndex];
//     array[randomIndex] = temporaryValue;
//
//   }
//   return array;
// }

// function visualiseArray(){
//   for (i=0; i<objects1.length; i++){
//     $(".floater").attr("src","img/"+objects1[i].name);
//   }
// }

function randomiseVisualise() {
  var randomPicIndex = Math.floor(Math.random() * objects1.length);
  var pictureSelect = objects1[randomPicIndex].name;
  $(".floater").attr("src","img/"+pictureSelect);
}


function objectMove() {
$objects.css('top', $objects.offset().top + 10);
}

// }

var $objects = $('.objects');
$(document).keydown(function(e) {
    switch(e.which) {
      case 37:
          $objects.css('left', $objects.offset().left - 36);
          break;
      // case 38:
      //     $objects.css('top', $objects.offset().top - 10);
      //     break;
      case 39:
          $objects.css('left', $objects.offset().left + 20);
          break;
      case 40:
          $objects.css('top', $objects.offset().top + 10);
          break;
      default: return; // exit this handler for other keys
    }
    e.preventDefault(); // prevent the default action (scroll / move caret)
});
