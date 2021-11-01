var PairGame = {
  paper: Paper.g(),
  pairInfo: [],
  condition: {
    grade: '가',
    setRange: [1, 10]
  },
  configure: function() {
    var self = PairGame;

    self.pairInfo = Library.generatePairGame({
      condition: self.condition
    });

  },

  makeQuestion: function() {
    var self = PairGame;
    var questionInfo = self.pairInfo;

    // 문제 그리기
    var questions = Library.drawPairGame({
      paper: self.paper,
      questionInfo: questionInfo
    });

    Library.checkPairGame({
      questions: questions,
      callback: self.report
    });
  },

  report: function(userTime) {
    var self = PairGame;
    self.paper.clear();

    var reportG = self.paper.g();

    reportG.rect(0, 0, 360, 640, 6).attr({
      'stroke': 'gray',
      'fill': '#F6F6F6'
    });

    setTimeout(function() {
      var code03 = new Audio('aud/wow.mp3');
      code03.play();
      //}, 300);

      var record = (userTime / 1000).toFixed(1);
      Paper.text(180, 150, record + '초').attr({
        'fill': 'orange',
        'font-size': 40,
        'font-wieght': 'bold',
        'text-anchor': 'middle'
      });

      reportG.image('img/end.png', 115, 190, 130, 130);

      var blueB = reportG.rect(40, 390, 120, 50).attr({
        'fill': 'skyblue',
        'rx': 8,
        'ry': 8
      });
      var blueBT = reportG.text(100, 422, '처음으로').attr({
        'font-size': 20,
        'text-anchor': 'middle'
      });
      var blue = reportG.g(blueB, blueBT).click(handler01).attr({
        'cursor': 'pointer'
      });

      function handler01() {
        location.replace('pairGame.html');
      }

      var greenB = reportG.rect(200, 390, 120, 50).attr({
        'fill': '#86e07f',
        'rx': 8,
        'ry': 8
      });
      var greenBT = reportG.text(260, 422, '재도전').attr({
        'font-size': 20,
        'text-anchor': 'middle'
      });
      var green = reportG.g(greenB, greenBT).click(handler02).attr({
        'cursor': 'pointer'
      });

      function handler02() {
        location.reload();
      }

      var orangeB = reportG.rect(40, 460, 280, 45).attr({
        'stroke': 'orange',
        'stroke-width': 3,
        'fill': 'none',
        'rx': 8,
        'ry': 8
      });
      var orangeBT = reportG.text(180, 488, '한자 보러 가기').attr({
        'font-size': 18,
        'text-anchor': 'middle'
      });
      var orange = reportG.g(orangeB, orangeBT).click(handler03).attr({
        'cursor': 'pointer'
      });

      function handler03() {
        location.replace('card01.html');
      }
    }, 500);
  },

  start: function() {
    var self = PairGame;
    self.configure();
    self.makeQuestion();
  }
};

PairGame.start();
