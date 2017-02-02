var garbage = [{name: 'bananapeel.png', id: 'organic'}, {name: 'applecore.png', id: 'organic'}, {name: 'orangepeel.jpg', id: 'organic'},
              {name: 'fishbone.jpeg', id: 'organic'}, {name: 'foodpork.png', id: 'organic'}, {name: 'milkcarton.jpg', id: 'paper'},
              {name: 'greenbottle.png', id: 'glass'}, {name: 'tincan.jpg', id: 'glass'}, {name: 'starbuckscoffeecup.png', id: 'paper'},
              {name: 'bucket.png', id: 'glass'}, {name: 'Budweiser-America-beer-can.png', id: 'glass'}, {name: 'buzzlightyear.png', id: 'glass'},
              {name: 'Cocacolacan.png', id: 'glass'}, {name: 'greekyoghurt.png', id: 'paper'}, {name: 'Heinekencan.png', id: 'glass'},
              {name: 'jackdaniels.png', id: 'glass'}, {name: 'juicecarton.png', id: 'paper'}, {name: 'kilbegganbottle.png', id: 'glass'}, {name: 'largepear.png', id: 'organic'},
              {name: 'lemon.png', id: 'organic'}, {name: 'lemonperrierplasticbottle.png', id: 'glass'}, {name: 'limes.png', id: 'organic'}, {name: 'pears.png', id: 'organic'},
              {name: 'perrierbottle.jpg', id: 'glass'}, {name: 'placticcup.png', id: 'glass'}, {name: 'san_miguel_330ml_large.png', id: 'glass'}, {name: 'yogurtcherry.png', id: 'paper'},
              {name: 'friedchicken.png', id: 'organic'}, {name: 'Campbellscan.png', id: 'glass'}, {name: 'cookie.png', id: 'organic'}];

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

var speed = 0;

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
    $(".floater").css('top', $(".floater").offset().top + 60);
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
      } speed+=4;
    }, 800 - speed);
  }


function confirmLoss () {
    if (misses === 3){
      removeImgTag();
      clear();
      alert('Shame on you!!! You should improve your recycling skills!!!!');
      myAudio.loop = false;
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

function eventCounter() {
  switch(counter) {
    case 5:
      play_single_sound('forcestrong');
      break;
    case 10:
      play_single_sound('jabba');
     break;
  default:
}
}

function confirMatch (){
  if (objectContent === whichGarbageCan()) {
    play_single_sound('audiotag3');
    counter++;
  }  else {
      play_single_sound('audiotag4');
      misses++;
    }
    updateScoreboard();
    eventCounter();
    removeImgTag();
    clear();
    addImgTag();
    randomiseVisualise();
    myInterval();
    confirmLoss();
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
