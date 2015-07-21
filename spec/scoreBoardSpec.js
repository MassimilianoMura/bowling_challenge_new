describe('ScoreBoard', function() {

  beforeEach(function() {
    scoreBoard = new ScoreBoard;
  });

  describe ('it can store the points for every roll', function() {
    scoreBoard.addScore(6);

    expect(scoreBoard.totalScore).toEqual(6);
  });




});