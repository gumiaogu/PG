var SVG = Snap('#my-svg');

// 최상위 그룹
var Paper = SVG.g();

// 이미지
var bi = Paper.image('img/bi.jpg', 0, 0, 220, 36).toDefs();
var hoi = Paper.image('img/hoi.png', 0, 0, 190, 190).toDefs();
var gamestart = Paper.image('img/gamestart.png', 0, 0, 80, 75).toDefs();
var go = Paper.image('img/go.png', 0, 0, 80, 80).toDefs();

// SVG 외곽선
Paper.rect(0, 0, 360, 640, 6).attr({
  'stroke': 'gray',
  'fill': 'none'
});

// 상단 바 부분
var topArea = Paper.g();

bi.use().transform('t70, 40').appendTo(topArea);

var title = topArea.text(180, 175, ['한 자', '짝 맞 추 기']).attr({
  'font-size': 40,
  'text-anchor': 'middle'
});
title.selectAll('tspan')[1].attr({
  x: 180,
  y: 230
});

gamestart.use().transform('t25, 300').appendTo(topArea).click(handler).attr({
  'cursor': 'pointer'
});
go.use().transform('t250, 300').appendTo(topArea).click(handler).attr({
  'cursor': 'pointer'
});
hoi.use().transform('t65, 360').appendTo(topArea).click(handler).attr({
  'cursor': 'pointer'
});

function handler() {
  location.replace('pairGame01.html');
}
