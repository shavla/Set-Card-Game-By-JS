class HighScoreDialog {
  constructor() {
    this.drawDialog();
  }

  drawDialog() {
    this.dialogContainer = new PIXI.Container();
    this.backgroundContainer = new PIXI.Container();
    this.drawOutborder();
    this.writeText();
    this.drawCloseButton();
  }

  drawOutborder() {
    const outBorder = new PIXI.Graphics();
    outBorder.beginFill(Layout.primaryColors.black, 0.6);
    outBorder.drawRect(0, 0, window.innerWidth, window.innerHeight);
    outBorder.endFill();

    outBorder.interactive = true;
    outBorder.buttonMode = false;
    outBorder.on("click", () => {
      this.dialogContainer.destroy();
    });
    this.dialogContainer.addChild(outBorder);
  }

  writeText() {
    const background = new PIXI.Graphics();
    background.beginFill(Layout.primaryColors.lightGreen);
    background.drawRoundedRect(
      0,
      0,
      Layout.highScoreDialog.width,
      Layout.highScoreDialog.height,
      20
    );
    background.endFill();

    this.backgroundContainer.addChild(background);

    background.interactive = true;
    background.buttonMode = false;
    background.on("click", () => {
      // nothing to happen
    });

    let mainTitle = new PIXI.Text(
      "High Score",
      Layout.highScoreDialog.mainTitleStyle
    );
    mainTitle.position.set(
      background.width / 2 - mainTitle.width / 2,
      Layout.highScoreDialog.marginTop
    );
    background.addChild(mainTitle);

    this.displayTimeAndDateScore();

    this.dialogContainer.addChild(this.backgroundContainer);
    this.backgroundContainer.position.set(
      window.innerWidth / 2 - this.backgroundContainer.width / 2,
      window.innerHeight / 2 - this.backgroundContainer.height / 2
    );
    app.stage.addChild(this.dialogContainer);
  }

  drawCloseButton() {
    let close = new PIXI.Text("X", Layout.highScoreDialog.mainTitleStyle);
    close.position.set(
      this.backgroundContainer.width - Layout.highScoreDialog.marginRight,
      Layout.highScoreDialog.marginTop
    );
    close.interactive = true;
    close.buttonMode = true;
    close.on("click", () => {
      this.dialogContainer.destroy();
    });
    this.backgroundContainer.addChild(close);
  }

  displayTimeAndDateScore() {
    let highScoreInfo = JSON.parse(window.localStorage.getItem("highScore"));
    if (highScoreInfo) {
      let timeText = new PIXI.Text(
        "Time :  " +
          new Date(highScoreInfo.time * 1000).toISOString().substr(14, 5),
        Layout.highScoreDialog.secondTitleStyle
      );
      timeText.position.set(
        this.backgroundContainer.width / 2 - timeText.width / 2,
        this.backgroundContainer.height / 2 - timeText.height
      );

      let dateText = new PIXI.Text(
        "Date :  " + highScoreInfo.date,
        Layout.highScoreDialog.secondTitleStyle
      );
      dateText.position.set(
        this.backgroundContainer.width / 2 - dateText.width / 2,
        this.backgroundContainer.height / 2 + dateText.height
      );

      this.backgroundContainer.addChild(timeText);
      this.backgroundContainer.addChild(dateText);
    } else {
      let text = new PIXI.Text(
        "No HighScore Yet!",
        Layout.highScoreDialog.secondTitleStyle
      );
      text.position.set(
        this.backgroundContainer.width / 2 - text.width / 2,
        this.backgroundContainer.height / 2
      );
      this.backgroundContainer.addChild(text);
    }
  }
}
