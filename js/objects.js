var garbage = [{name: 'bananapeel.png', id: 'organic'}, {name: 'applecore.png', id: 'organic'}, {name: 'orangepeel.jpg', id: 'organic'},
              {name: 'fishbone.jpeg', id: 'organic'}, {name: 'foodpork.png', id: 'organic'}, {name: 'milkcarton.jpg', id: 'paper'},
              {name: 'greenbottle.png', id: 'glass'}, {name: 'tincan.jpg', id: 'glass'}, {name: 'starbuckscoffeecup.png', id: 'paper'}, {name: 'starwars.png', id: 'tiefighter'}];

var Garbagecan = [{name: 'organicgarbage', id: 'organic', sound: ''},
                  {name: 'papergarbage', id: 'paper', sound: ''},
                  {name: 'glassgarbage', id: 'glass', sound: ''}];

var b = $('.organicgarbage')[0];
var organicTop = b.getBoundingClientRect().top;
var organicLeft = b.getBoundingClientRect().left;
var organicRight = b.getBoundingClientRect().right;

var c = $('.papergarbage')[0];
var paperTop = c.getBoundingClientRect().top;
var paperLeft = c.getBoundingClientRect().left;
var paperRight = c.getBoundingClientRect().right;

var d =  $('.glassgarbage')[0];
var glassTop = d.getBoundingClientRect().top;
var glassLeft = d.getBoundingClientRect().left;
var glassRight = d.getBoundingClientRect().right;

var objectBottomGlobal;
var objectLeftGlobal;
var objectRightGlobal;
var objectMidpointGlobal;

var objectContent = '';
var randomGlobal;

function randomiseVisualise() {
  var randomPicIndex = Math.floor(Math.random() * garbage.length);
  randomGlobal = randomPicIndex;
  var pictureSelect = garbage[randomPicIndex].name;
  var pictureID = garbage[randomPicIndex].id;
  objectContent = pictureID;
  $(".floater").attr("src","img/"+pictureSelect);
}

function myInterval(){
 h =  setInterval(function() {
    $(".floater").css('top', $(".floater").offset().top + 50);
    var a = $('.floater')[0];
    var objectBottom = a.getBoundingClientRect().bottom;
    objectBottomGlobal = objectBottom;
    var objectLeft = a.getBoundingClientRect().left;
    objectLeftGlobal = objectLeft;
    var objectRight = a.getBoundingClientRect().right;
    objectRightGlobal = objectRight;
    var midpoint = (objectLeft + objectRight)/2;
    objectMidpointGlobal = midpoint;
      if(objectBottom > organicTop) {
        confirMatch();
      }
    }, 800);
  } 

function confirmLoss () {
    if (counter < 0){
      removeImgTag();
      alert('Shame on you!!! You should improve your recycling skills!!!!');
      clear();
    }
}

var whichGarbageCan = function () {
          if ((organicLeft < objectMidpointGlobal) && (objectMidpointGlobal < organicRight)) {
            return Garbagecan[0].id;
          } else if ((paperLeft < objectMidpointGlobal) && (objectMidpointGlobal < paperRight)) {
              return Garbagecan[1].id;
            } else if ((glassLeft < objectMidpointGlobal) && (objectMidpointGlobal < glassRight)) {
                return Garbagecan[2].id;
              }
            };

function clear() {
  clearInterval(h);
}

function confirMatch (){
  if (objectContent === whichGarbageCan()) {
    play_single_sound('audiotag3');
    counter++;
  }  else {
      play_single_sound('audiotag4');
      counter--;
    }
    removeImgTag();
    clear();
    confirmLoss();
    addImgTag();
    randomiseVisualise();
    myInterval();
}

$(document).keydown(function(e) {
  var $objects = $('.floater');
  if ($objects.length > 0){
    switch(e.which) {
      case 37:
          $objects.css('left', $objects.offset().left - 36);
          break;
      case 39:
          $objects.css('left', $objects.offset().left + 20);
          break;
      case 40:
          $objects.css('top', $objects.offset().top + 30);
          break;
      default: return;
    }
    e.preventDefault();
  }
});
