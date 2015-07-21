function ScoreBoard() {
  this.totalScore = 0;
};

ScoreBoard.prototype.addScore = function(score) {
  return this.totalScore += score;
};