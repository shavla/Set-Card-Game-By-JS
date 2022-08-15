class Card {
  constructor(config) {
    this.config = config;
    this.isSelected = false;
    this.createCard();
  }

  createCard() {
    this.card = new PIXI.Graphics();
    let container = new PIXI.Container();
    let shape = new PIXI.Graphics();

    this.drawCardBackground();

    let fillAlpha = this.config.shading == Shading.solid ? 1 : 0;

    shape
      .beginFill(colors[this.config.color], fillAlpha)
      .lineStyle(4, colors[this.config.color])
      .drawPolygon(shapePolygons[this.config.shape])
      .endFill();

    for (let i = 0; i < quantitys[this.config.quantity]; i++) {
      let cloneShape = shape.clone();
      cloneShape.position.x =
        i * (Layout.figureLayout.width + Layout.figureLayout.marginBetween);
      container.addChild(cloneShape);
    }

    if (shadings[this.config.shading] == Shading.striped) {
      this.drawLines(container);
    }

    container.position.set(
      this.card.width / 2 - container.width / 2,
      this.card.height / 2 - container.height / 2
    );
    this.card.addChild(container);
    this.card.scale.set(0.9)

  }

  drawCardBackground() {
    this.card
      .beginFill(Layout.primaryColors.white)
      .drawRoundedRect(
        0,
        0,
        Layout.cardLayout.width,
        Layout.cardLayout.height,
        Layout.cardLayout.radius
      )
      .endFill();

    this.drawCardBorder();
    // app.stage.addChild(this.card)
  }

  drawCardBorder() {
    this.cardGreenBorder = new PIXI.Graphics();
    this.cardGreenBorder
      .beginFill(Layout.primaryColors.lightGreen)
      .drawRoundedRect(
        0,
        0,
        Layout.cardLayout.width + 10,
        Layout.cardLayout.height + 10,
        Layout.cardLayout.radius
      )
      .endFill();

    this.cardRedBorder = new PIXI.Graphics();
    this.cardRedBorder
      .beginFill(Layout.primaryColors.lightRed)
      .drawRoundedRect(
        0,
        0,
        Layout.cardLayout.width + 10,
        Layout.cardLayout.height + 10,
        Layout.cardLayout.radius
      )
      .endFill();

    let whiteBackground = new PIXI.Graphics();
    whiteBackground
      .beginFill(Layout.primaryColors.white)
      .drawRoundedRect(
        0,
        0,
        Layout.cardLayout.width,
        Layout.cardLayout.height,
        Layout.cardLayout.radius
      )
      .endFill();

    this.cardGreenBorder.position.set(
      this.card.width / 2 - this.cardGreenBorder.width / 2,
      this.card.height / 2 - this.cardGreenBorder.height / 2
    );
    this.cardRedBorder.position.set(
      this.card.width / 2 - this.cardGreenBorder.width / 2,
      this.card.height / 2 - this.cardGreenBorder.height / 2
    );
    this.card.addChild(this.cardRedBorder);
    this.card.addChild(this.cardGreenBorder);
    this.card.addChild(whiteBackground);

    this.hideHint();
    this.unSelect();
  }

  drawLines(shapeContainer) {
    let line = new PIXI.Graphics();
    for (let i = 0; i < 23; i++) {
      line.lineStyle(Layout.lineThickness, colors[this.config.color]);
      line.moveTo(0, i * 10);
      line.lineTo(Layout.cardLayout.width, i * 10);
    }
    let container = new PIXI.Container();
    container.addChild(line);

    let shape = new PIXI.Graphics();
    shape
      .beginFill(colors[this.config.color])
      .lineStyle(4, colors[this.config.color])
      .drawPolygon(shapePolygons[this.config.shape])
      .endFill();
    for (let i = 0; i < quantitys[this.config.quantity]; i++) {
      let cloneShape = shape.clone();
      cloneShape.position.x =
        i * (Layout.figureLayout.width + Layout.figureLayout.marginBetween);
      container.addChild(cloneShape);
    }
    container.mask = line;
    shapeContainer.addChild(container);
  }

  setPosition(x, y) {
    this.card.position.set(x, y);
  }

  toggleSelect() {
    this.isSelected = !this.isSelected;
    this.cardGreenBorder.alpha = this.isSelected ? 1 : 0;
    return this.isSelected;
  }

  showHint() {
    this.cardRedBorder.alpha = 1;
  }

  unSelect() {
    this.cardGreenBorder.alpha = 0;
  }

  hideHint() {
    this.cardRedBorder.alpha = 0;
  }

  deleteCard() {
    this.card.destroy();
  }
}

const shapePolygons = {
  [Shape.diamond]: [
    0,
    Layout.figureLayout.height / 2,
    Layout.figureLayout.width / 2,
    0,
    Layout.figureLayout.width,
    Layout.figureLayout.height / 2,
    Layout.figureLayout.width / 2,
    Layout.figureLayout.height,
  ],
  [Shape.oval]: new Array().concat(...Layout.ovalPoints()),
  [Shape.squiggle]: new Array().concat(...Layout.squigglePoints()),
};

const colors = {
  [Color.red]: 0xff0000,
  [Color.green]: 0x008000,
  [Color.purple]: 0x800080,
};

const quantitys = {
  [Quantity.one]: 1,
  [Quantity.two]: 2,
  [Quantity.three]: 3,
};

const shadings = {
  [Shading.open]: 0,
  [Shading.solid]: 1,
  [Shading.striped]: 2,
};
