class RulesDialog {
    constructor() {
        this.drawDialog();
    }

    drawDialog() {
        this.dialogContainer = new PIXI.Container();
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
        })
        this.dialogContainer.addChild(outBorder);
    }

    writeText() {
        const background = new PIXI.Graphics();
        background.beginFill(Layout.primaryColors.lightGreen);
        background.drawRoundedRect(0, 0, Layout.rulesDialog.width, Layout.rulesDialog.height, 20);
        background.endFill();

        background.position.set(window.innerWidth / 2 - background.width / 2, window.innerHeight / 2 - background.height / 2)
        this.dialogContainer.addChild(background);

        background.interactive = true;
        background.buttonMode = false;
        background.on("click", () => {
            // nothing to happen
        })
        app.stage.addChild(this.dialogContainer);

        let mainTitle = new PIXI.Text("Rules", Layout.rulesDialog.mainTitleStyle);
        mainTitle.position.set(background.width / 2 - mainTitle.width / 2, Layout.rulesDialog.marginTop);
        background.addChild(mainTitle);

        let secondTitle = new PIXI.Text("A set consists of three cards satisfying all of these conditions:",Layout.rulesDialog.secondTitleStyle)
        secondTitle.position.set(background.width / 2 - secondTitle.width / 2, Layout.rulesDialog.secondTitleMarginTop);
        background.addChild(secondTitle);


        let rulesContainer = new PIXI.Container();
        const rulesArray = ["- They all have the same number or have three different numbers.", "- They all have the same shape or have three different shapes.", "- They all have the same shading or have three different shadings.", "- They all have the same color or have three different colors."]

        for (let i = 0; i < rulesArray.length; i++) {
            let rule = new PIXI.Text(rulesArray[i], Layout.rulesDialog.rulesTextStyle)
            rule.position.set(Layout.rulesDialog.marginLeft, i * Layout.rulesDialog.rulesMarginBetween);
            rulesContainer.addChild(rule);
        }

        rulesContainer.position.y = Layout.rulesDialog.rulesMarginTop;
        background.addChild(rulesContainer);
    }

    drawCloseButton() {
        let close = new PIXI.Text("X", Layout.rulesDialog.mainTitleStyle)
        close.position.set(window.innerWidth / 2 + Layout.rulesDialog.width / 2 - Layout.rulesDialog.marginRight, window.innerHeight / 2 - Layout.rulesDialog.height / 2 + Layout.rulesDialog.marginTop);
        close.interactive = true;
        close.buttonMode = true;
        close.on("click", () => {
            this.dialogContainer.destroy();
        })
        this.dialogContainer.addChild(close);
    }
}