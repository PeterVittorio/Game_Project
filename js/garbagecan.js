var garbagecan = [{name: 'garbagecan1', id: 'organic', sound: ''},
                  {name: 'garbagecan2', id: 'paper', sound: ''},
                  {name: 'garbagecan3', id: 'glass', sound: ''}];

function getPosGar1() {
  var e = $('.garbagecan1')[0];
  var garbCan1Top = e.getBoundingClientRect().top;
  return garbCan1Top;
}

function getPosGar2() {
  var f = $('.garbagecan2')[0];
  var garbCan2Top = f.getBoundingClientRect().top;
  return garbCan2Top;
}

function getPosGar3() {
  var g = $('.garbagecan3')[0];
  var garbCan3Top = g.getBoundingClientRect().top;
  return garbCan3Top;
}
