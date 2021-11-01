var SVG = Snap('#my-svg');

// 최상위 그룹
var Paper = SVG.g();

//이미지
var home = Paper.image('img/home.png', 0, 0, 30, 30).toDefs();
var hoi = Paper.image('img/hoi2.png', 0, 0, 45, 35).toDefs();
var bookicon = Paper.image('img/bookicon.png', 0, 0, 32, 32).toDefs();
var sampleimg = Paper.image('img/sample.jpg', 0, 0, 330, 495).toDefs();
var arrow = Paper.image('img/arrow.png', 0, 0, 25, 12).toDefs();
var deleteimg = Paper.image('img/deleteimg.png', 0, 0, 30, 30).toDefs();

// SVG 외곽선
Paper.rect(0, 0, 360, 640, 6).attr({
  'stroke': 'gray',
  'fill': 'none'
});

// 상단 바 부분
var topArea = Paper.g();

home.use().transform('t12, 10').appendTo(topArea).click(handlerHome).attr({
    'cursor' : 'pointer'
});

function handlerHome() {
  location.replace('pairGame.html');
}

hoi.use().transform('t80, 40').appendTo(topArea);

var title = topArea.text(134, 67, ['가등급', '50자']).attr({
  'font-size': 18,
  'font-weight': 'bold',
  'fill': 'orange'
});
title.selectAll('tspan')[1].attr({
  x: 188,
  'fill': 'black'
});

bookicon.use().transform('t235, 43').appendTo(topArea).click(sample).attr({
    'cursor' : 'pointer'
});

function sample() {
  var group = Paper.g();
  sampleimg.use().transform('t15, 90').appendTo(group);
  deleteimg.use().transform('t305, 102').click(handlerreload).appendTo(group).attr({
    'cursor': 'pointer'
  });

  function handlerreload() {
    group.remove();
  }
}

arrow.use().transform('t265, 35').appendTo(topArea);

topArea.text(295, 45, '맛보기').attr({
  'font-size': 14,
  'fill': '#647EA8',
  'rotate': -10
});

var set01B = topArea.path('M90,105 L165,105 A18,18 0 0,1 185,125 L185,145 L70,145 L70,125 A18,18 0 0,1 90,105').attr({
  'fill': 'teal',
  'opacity': '0.2'
});
var set01T = topArea.text(100, 133, '1~5세트').attr({
  'font-size': 18,
  'font-weight': 'bold'
});
var set01 = topArea.g(set01B, set01T).click(handlerCard1).attr({
  'cursor': 'pointer'
});

function handlerCard1() {
  location.reload();
}

var set02B = topArea.path('M215,105 L290,105 A18,18 0 0,1 310,125 L310,145 L195,145 L195,125 A18,18 0 0,1 215,105').attr({
  'fill': '#FADCB9',
  'opacity': '0.6'
});
var set02T = topArea.text(221, 133, '6~10세트').attr({
  'font-size': 18,
  'fill': 'gray'
});
var set02 = topArea.g(set02B, set02T).click(handlerCard2).attr({
  'cursor': 'pointer'
});

function handlerCard2() {
  location.replace('card02.html');
}

topArea.line(40, 145, 340, 145).attr({
  'stroke': 'gray',
  'stroke-width': '1pt'
});

// 한자
var bottomArea = Paper.g();

var numberT = ['01', '02', '03', '04', '05'];
for (var i = 0; i < numberT.length; i++) {
  bottomArea.rect(8, (i * 90) + 165, 25, 60, 5).attr({
    'fill': 'teal',
    'opacity': '0.2'
  });

  bottomArea.rect(40, (i * 90) + 165, 300, 60, 5).attr({
    'fill': '#f1f3f4'
  });

  bottomArea.text(12, (i * 90) + 200, numberT[i]).attr({
    'font-size': 15,
  });
}

var hanjaChoices = Paper.g();

hanjaChoices.text(55, 205, data[0].hanja).click(handler05).attr({
  'font-size': 32,
  'cursor': 'pointer'
});

hanjaChoices.text(115, 205, data[1].hanja).click(handler06).attr({
  'font-size': 32,
  'cursor': 'pointer'
});

hanjaChoices.text(175, 205, data[2].hanja).click(handler07).attr({
  'font-size': 32,
  'cursor': 'pointer'
});

hanjaChoices.text(235, 205, data[3].hanja).click(handler08).attr({
  'font-size': 32,
  'cursor': 'pointer'
});

hanjaChoices.text(295, 205, data[4].hanja).click(handler09).attr({
  'font-size': 32,
  'cursor': 'pointer'
});

hanjaChoices.text(55, 295, data[5].hanja).click(handler10).attr({
  'font-size': 32,
  'cursor': 'pointer'
});

hanjaChoices.text(115, 295, data[6].hanja).click(handler11).attr({
  'font-size': 32,
  'cursor': 'pointer'
});

hanjaChoices.text(175, 295, data[7].hanja).click(handler12).attr({
  'font-size': 32,
  'cursor': 'pointer'
});

hanjaChoices.text(235, 295, data[8].hanja).click(handler13).attr({
  'font-size': 32,
  'cursor': 'pointer'
});

hanjaChoices.text(295, 295, data[9].hanja).click(handler14).attr({
  'font-size': 32,
  'cursor': 'pointer'
});

hanjaChoices.text(55, 385, data[10].hanja).click(handler15).attr({
  'font-size': 32,
  'cursor': 'pointer'
});

hanjaChoices.text(115, 385, data[11].hanja).click(handler16).attr({
  'font-size': 32,
  'cursor': 'pointer'
});

hanjaChoices.text(175, 385, data[12].hanja).click(handler17).attr({
  'font-size': 32,
  'cursor': 'pointer'
});

hanjaChoices.text(235, 385, data[13].hanja).click(handler18).attr({
  'font-size': 32,
  'cursor': 'pointer'
});

hanjaChoices.text(295, 385, data[14].hanja).click(handler19).attr({
  'font-size': 32,
  'cursor': 'pointer'
});

hanjaChoices.text(55, 475, data[15].hanja).click(handler20).attr({
  'font-size': 32,
  'cursor': 'pointer'
});

hanjaChoices.text(115, 475, data[16].hanja).click(handler21).attr({
  'font-size': 32,
  'cursor': 'pointer'
});

hanjaChoices.text(175, 475, data[17].hanja).click(handler22).attr({
  'font-size': 32,
  'cursor': 'pointer'
});

hanjaChoices.text(235, 475, data[18].hanja).click(handler23).attr({
  'font-size': 32,
  'cursor': 'pointer'
});

hanjaChoices.text(295, 475, data[19].hanja).click(handler24).attr({
  'font-size': 32,
  'cursor': 'pointer'
});

hanjaChoices.text(55, 565, data[20].hanja).click(handler25).attr({
  'font-size': 32,
  'cursor': 'pointer'
});

hanjaChoices.text(115, 565, data[21].hanja).click(handler26).attr({
  'font-size': 32,
  'cursor': 'pointer'
});

hanjaChoices.text(175, 565, data[22].hanja).click(handler27).attr({
  'font-size': 32,
  'cursor': 'pointer'
});

hanjaChoices.text(235, 565, data[23].hanja).click(handler28).attr({
  'font-size': 32,
  'cursor': 'pointer'
});

hanjaChoices.text(295, 565, data[24].hanja).click(handler29).attr({
  'font-size': 32,
  'cursor': 'pointer'
});

// 핸들러 함수
function handler05() {
  var group = Paper.g();
  group.rect(50, 255, 255, 180, 5).attr({
    'fill': '#D5E9E2'
  });
  group.text(180, 355, data[0].mean).attr({
    'fill': 'black',
    'font-size': 50,
    'text-anchor': 'middle'
  });

  setTimeout(function() {
    group.remove();
  }, 1000);
}

function handler06() {
  var group = Paper.g();
  group.rect(50, 255, 255, 180, 5).attr({
    'fill': '#D5E9E2'
  });
  group.text(180, 355, data[1].mean).attr({
    'fill': 'black',
    'font-size': 50,
    'text-anchor': 'middle'
  });

  setTimeout(function() {
    group.remove();
  }, 1000);
}

function handler07() {
  var group = Paper.g();
  group.rect(50, 255, 255, 180, 5).attr({
    'fill': '#D5E9E2'
  });
  group.text(180, 355, data[2].mean).attr({
    'fill': 'black',
    'font-size': 50,
    'text-anchor': 'middle'
  });

  setTimeout(function() {
    group.remove();
  }, 1000);
}

function handler08() {
  var group = Paper.g();
  group.rect(50, 255, 255, 180, 5).attr({
    'fill': '#D5E9E2'
  });
  group.text(180, 355, data[3].mean).attr({
    'fill': 'black',
    'font-size': 50,
    'text-anchor': 'middle'
  });

  setTimeout(function() {
    group.remove();
  }, 1000);
}

function handler09() {
  var group = Paper.g();
  group.rect(50, 255, 255, 180, 5).attr({
    'fill': '#D5E9E2'
  });
  group.text(180, 355, data[4].mean).attr({
    'fill': 'black',
    'font-size': 50,
    'text-anchor': 'middle'
  });

  setTimeout(function() {
    group.remove();
  }, 1000);
}

function handler10() {
  var group = Paper.g();
  group.rect(50, 255, 255, 180, 5).attr({
    'fill': '#D5E9E2'
  });
  group.text(180, 355, data[5].mean).attr({
    'fill': 'black',
    'font-size': 50,
    'text-anchor': 'middle'
  });

  setTimeout(function() {
    group.remove();
  }, 1000);
}

function handler11() {
  var group = Paper.g();
  group.rect(50, 255, 255, 180, 5).attr({
    'fill': '#D5E9E2'
  });
  group.text(180, 355, data[6].mean).attr({
    'fill': 'black',
    'font-size': 50,
    'text-anchor': 'middle'
  });

  setTimeout(function() {
    group.remove();
  }, 1000);
}

function handler12() {
  var group = Paper.g();
  group.rect(50, 255, 255, 180, 5).attr({
    'fill': '#D5E9E2'
  });
  group.text(180, 355, data[7].mean).attr({
    'fill': 'black',
    'font-size': 50,
    'text-anchor': 'middle'
  });

  setTimeout(function() {
    group.remove();
  }, 1000);
}

function handler13() {
  var group = Paper.g();
  group.rect(50, 255, 255, 180, 5).attr({
    'fill': '#D5E9E2'
  });
  group.text(180, 355, data[8].mean).attr({
    'fill': 'black',
    'font-size': 50,
    'text-anchor': 'middle'
  });

  setTimeout(function() {
    group.remove();
  }, 1000);
}

function handler14() {
  var group = Paper.g();
  group.rect(50, 255, 255, 180, 5).attr({
    'fill': '#D5E9E2'
  });
  group.text(180, 355, data[9].mean).attr({
    'fill': 'black',
    'font-size': 50,
    'text-anchor': 'middle'
  });

  setTimeout(function() {
    group.remove();
  }, 1000);
}

function handler15() {
  var group = Paper.g();
  group.rect(50, 255, 255, 180, 5).attr({
    'fill': '#D5E9E2'
  });
  group.text(180, 355, data[10].mean).attr({
    'fill': 'black',
    'font-size': 50,
    'text-anchor': 'middle'
  });

  setTimeout(function() {
    group.remove();
  }, 1000);
}

function handler16() {
  var group = Paper.g();
  group.rect(50, 255, 255, 180, 5).attr({
    'fill': '#D5E9E2'
  });
  group.text(180, 355, data[11].mean).attr({
    'fill': 'black',
    'font-size': 50,
    'text-anchor': 'middle'
  });

  setTimeout(function() {
    group.remove();
  }, 1000);
}

function handler17() {
  var group = Paper.g();
  group.rect(50, 255, 255, 180, 5).attr({
    'fill': '#D5E9E2'
  });
  group.text(180, 355, data[12].mean).attr({
    'fill': 'black',
    'font-size': 50,
    'text-anchor': 'middle'
  });

  setTimeout(function() {
    group.remove();
  }, 1000);
}

function handler18() {
  var group = Paper.g();
  group.rect(50, 255, 255, 180, 5).attr({
    'fill': '#D5E9E2'
  });
  group.text(180, 355, data[13].mean).attr({
    'fill': 'black',
    'font-size': 50,
    'text-anchor': 'middle'
  });

  setTimeout(function() {
    group.remove();
  }, 1000);
}

function handler19() {
  var group = Paper.g();
  group.rect(50, 255, 255, 180, 5).attr({
    'fill': '#D5E9E2'
  });
  group.text(180, 355, data[14].mean).attr({
    'fill': 'black',
    'font-size': 50,
    'text-anchor': 'middle'
  });

  setTimeout(function() {
    group.remove();
  }, 1000);
}

function handler20() {
  var group = Paper.g();
  group.rect(50, 255, 255, 180, 5).attr({
    'fill': '#D5E9E2'
  });
  group.text(180, 355, data[15].mean).attr({
    'fill': 'black',
    'font-size': 50,
    'text-anchor': 'middle'
  });

  setTimeout(function() {
    group.remove();
  }, 1000);
}

function handler21() {
  var group = Paper.g();
  group.rect(50, 255, 255, 180, 5).attr({
    'fill': '#D5E9E2'
  });
  group.text(180, 355, data[16].mean).attr({
    'fill': 'black',
    'font-size': 50,
    'text-anchor': 'middle'
  });

  setTimeout(function() {
    group.remove();
  }, 1000);
}

function handler22() {
  var group = Paper.g();
  group.rect(50, 255, 255, 180, 5).attr({
    'fill': '#D5E9E2'
  });
  group.text(180, 355, data[17].mean).attr({
    'fill': 'black',
    'font-size': 50,
    'text-anchor': 'middle'
  });

  setTimeout(function() {
    group.remove();
  }, 1000);
}

function handler23() {
  var group = Paper.g();
  group.rect(50, 255, 255, 180, 5).attr({
    'fill': '#D5E9E2'
  });
  group.text(180, 355, data[18].mean).attr({
    'fill': 'black',
    'font-size': 50,
    'text-anchor': 'middle'
  });

  setTimeout(function() {
    group.remove();
  }, 1000);
}

function handler24() {
  var group = Paper.g();
  group.rect(50, 255, 255, 180, 5).attr({
    'fill': '#D5E9E2'
  });
  group.text(180, 355, data[19].mean).attr({
    'fill': 'black',
    'font-size': 50,
    'text-anchor': 'middle'
  });

  setTimeout(function() {
    group.remove();
  }, 1000);
}


function handler25() {
  var group = Paper.g();
  group.rect(50, 255, 255, 180, 5).attr({
    'fill': '#D5E9E2'
  });
  group.text(180, 355, data[20].mean).attr({
    'fill': 'black',
    'font-size': 50,
    'text-anchor': 'middle'
  });

  setTimeout(function() {
    group.remove();
  }, 1000);
}

function handler26() {
  var group = Paper.g();
  group.rect(50, 255, 255, 180, 5).attr({
    'fill': '#D5E9E2'
  });
  group.text(180, 355, data[21].mean).attr({
    'fill': 'black',
    'font-size': 50,
    'text-anchor': 'middle'
  });

  setTimeout(function() {
    group.remove();
  }, 1000);
}

function handler27() {
  var group = Paper.g();
  group.rect(50, 255, 255, 180, 5).attr({
    'fill': '#D5E9E2'
  });
  group.text(180, 355, data[22].mean).attr({
    'fill': 'black',
    'font-size': 50,
    'text-anchor': 'middle'
  });

  setTimeout(function() {
    group.remove();
  }, 1000);
}

function handler28() {
  var group = Paper.g();
  group.rect(50, 255, 255, 180, 5).attr({
    'fill': '#D5E9E2'
  });
  group.text(180, 355, data[23].mean).attr({
    'fill': 'black',
    'font-size': 50,
    'text-anchor': 'middle'
  });

  setTimeout(function() {
    group.remove();
  }, 1000);
}

function handler29() {
  var group = Paper.g();
  group.rect(50, 255, 255, 180, 5).attr({
    'fill': '#D5E9E2'
  });
  group.text(180, 355, data[24].mean).attr({
    'fill': 'black',
    'font-size': 50,
    'text-anchor': 'middle'
  });

  setTimeout(function() {
    group.remove();
  }, 1000);
}
