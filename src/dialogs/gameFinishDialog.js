class GameFinishDialog {
  constructor(currentTime) {
    this.currentTime = currentTime;
    this.drawDialog();
  }

  drawDialog() {
    this.dialogContainer = new PIXI.Container();
    this.dialogBackground = new PIXI.Graphics();
    this.dialogBackground.beginFill();
    this.dialogBackground.drawRect(
      0,
      0,
      Layout.gameFinishDialog.width,
      Layout.gameFinishDialog.height
    );
    this.dialogBackground.endFill();

    let highScoreTime = JSON.parse(
      window.localStorage.getItem("highScore")
    )?.time;
    let hasNewHighScore =
      highScoreTime != null ? this.currentTime < highScoreTime : true;

    if (hasNewHighScore) {
      this.displayNewHighScore();
    } else {
      this.displayScore();
    }

    const restart = new PIXI.Text(
      "Restart",
      Layout.gameFinishDialog.titleStyle
    );
    restart.position.set(
      this.dialogBackground.width / 2 - restart.width / 2,
      Layout.gameFinishDialog.restartMarginTop
    );
    restart.interactive = true;
    restart.buttonMode = true;
    restart.on("click", () => {
      this.dialogContainer.destroy();
      new Game();
    });

    this.dialogBackground.addChild(restart);
    this.dialogBackground.position.set(
      window.innerWidth / 2 - this.dialogBackground.width / 2,
      window.innerHeight / 2 - this.dialogBackground.height / 2
    );

    this.dialogContainer.addChild(this.dialogBackground);
    app.stage.addChild(this.dialogContainer);
  }

  displayNewHighScore() {
    let congText = new PIXI.Text(
      "Congratulations!",
      Layout.gameFinishDialog.noHighScoreTextStyle
    );
    congText.position.set(
      this.dialogBackground.width / 2 - congText.width / 2,
      0
    );

    this.dialogBackground.addChild(congText);

    let newHighScoreText = new PIXI.Text(
      "...NEW HIGHSCORE...",
      Layout.gameFinishDialog.highScoreTextStyle
    );

    newHighScoreText.position.set(
      this.dialogBackground.width / 2 - newHighScoreText.width / 2,
      Layout.gameFinishDialog.marginTop
    );
    this.dialogBackground.addChild(newHighScoreText);

    let timeText = new PIXI.Text(
      "Time :  " +
        new Date(this.currentTime * 1000).toISOString().substr(14, 5),
      Layout.gameFinishDialog.newHighScoreTime.textStyle
    );
    timeText.position.set(
      this.dialogBackground.width / 2 - timeText.width / 2,
      Layout.gameFinishDialog.newHighScoreTime.marginTop
    );
    this.dialogBackground.addChild(timeText);

    let date = new Date();
    let setHighScore = {
      time: this.currentTime,
      date: `${date.getDate()} ${new Intl.DateTimeFormat("en-US", {
        month: "long",
      }).format(date)} ${date.getFullYear()}`,
    };
    window.localStorage.setItem("highScore", JSON.stringify(setHighScore));
  }

  displayScore() {
    let congText = new PIXI.Text(
      "Congratulations!",
      Layout.gameFinishDialog.noHighScoreTextStyle
    );
    congText.position.set(
      this.dialogBackground.width / 2 - congText.width / 2,
      0
    );

    let timeText = new PIXI.Text(
      "Time :  " +
        new Date(this.currentTime * 1000).toISOString().substr(14, 5),
      Layout.gameFinishDialog.noHighScoreTextStyle
    );
    timeText.position.set(
      this.dialogBackground.width / 2 - timeText.width / 2,
      Layout.gameFinishDialog.marginTop
    );
    this.dialogBackground.addChild(congText);
    this.dialogBackground.addChild(timeText);
  }
}
