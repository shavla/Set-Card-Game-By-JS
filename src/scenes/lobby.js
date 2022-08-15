class Lobby {
  constructor(app) {
    this.app = app;
    this.Layout = new Layout();
    this.displayLobby();
  }

  displayLobby() {
    this.drawStartGameButton();
    this.drawRulesButton();
    this.drawHihgScoreButton();
    this.app.stage.addChild(this.lobbyContainer);
  }

  drawStartGameButton() {
    this.lobbyContainer = new PIXI.Container();

    const logo = PIXI.Sprite.from(Layout.logoAddress);
    logo.anchor.set(0.5);
    logo.position.set(window.innerWidth / 2, window.innerHeight / 3);

    this.lobbyContainer.addChild(logo);

    const buttonContainer = new PIXI.Container();
    const border = new PIXI.Graphics();
    border.beginFill();
    border.lineStyle(4, Layout.primaryColors.lightGreen);
    border.drawRect(
      0,
      0,
      Layout.startGameTextBorder.width,
      Layout.startGameTextBorder.height
    );
    border.endFill();
    buttonContainer.addChild(border);

    const text = new PIXI.Text("Start Game", Layout.startGameTextStyle);
    text.anchor.set(0.5);
    text.position.set(buttonContainer.width / 2, buttonContainer.height / 2);
    buttonContainer.addChild(text);

    buttonContainer.interactive = true;
    buttonContainer.buttonMode = true;

    buttonContainer.on("mouseover", () => {
      border.clear();
      border.beginFill(Layout.primaryColors.lightGreen);
      border.lineStyle(4, Layout.primaryColors.lightGreen);
      border.drawRect(
        0,
        0,
        Layout.startGameTextBorder.width,
        Layout.startGameTextBorder.height
      );
      border.endFill();
      text.style.fill = Layout.primaryColors.black;
    });

    buttonContainer.on("mouseout", () => {
      border.clear();
      border.beginFill();
      border.lineStyle(4, Layout.primaryColors.lightGreen);
      border.drawRect(
        0,
        0,
        Layout.startGameTextBorder.width,
        Layout.startGameTextBorder.height
      );
      border.endFill();
      text.style.fill = Layout.primaryColors.lightGreen;
    });

    buttonContainer.on("click", () => {
      this.lobbyContainer.destroy();
      new Game();
    });

    buttonContainer.pivot.set(
      buttonContainer.width / 2,
      buttonContainer.height / 2
    );
    buttonContainer.position.set(
      window.innerWidth / 2,
      window.innerHeight / 1.7
    );
    this.lobbyContainer.addChild(buttonContainer);
  }

  drawRulesButton() {
    const text = new PIXI.Text("Rules", Layout.rulesButtonTextStyle);
    text.anchor.set(0.5);
    text.position.set(window.innerWidth / 2, (window.innerHeight * 3) / 4);
    this.lobbyContainer.addChild(text);

    text.interactive = true;
    text.buttonMode = true;
    text.on("click", () => {
      new RulesDialog();
    });
  }

  drawHihgScoreButton() {
    const text = new PIXI.Text("High Score", Layout.highScoreButtonTextStyle);
    text.anchor.set(0.5);
    text.position.set(window.innerWidth / 2, (window.innerHeight * 5) / 6);
    this.lobbyContainer.addChild(text);

    text.interactive = true;
    text.buttonMode = true;
    text.on("click", () => {
      new HighScoreDialog();
    });
  }
}
