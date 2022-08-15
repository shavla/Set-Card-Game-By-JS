var _a;
class Layout {
    static ovalPoints() {
        return this.oval.map(x => this.getPoints(x));
    }
    static squigglePoints() {
        return this.squig.map(x => this.getPoints(x));
    }
    static getPoints(p) {
        let result = [];
        for (let t = 0; t < 1; t += 0.01) {
            let x = (1 - t) ** 3 * p[0][0] + 3 * (1 - t) ** 2 * t * p[1][0] + 3 * (1 - t) * t * t * p[2][0] + t ** 3 * p[3][0];
            let y = (1 - t) ** 3 * p[0][1] + 3 * (1 - t) ** 2 * t * p[1][1] + 3 * (1 - t) * t * t * p[2][1] + t ** 3 * p[3][1];
            result.push(x, y);
        }
        return result;
    }
}
_a = Layout;
Layout.logoAddress = "../src/assets/images/logo.png";
Layout.cardLayout = {
    width: 300,
    height: 170,
    radius: 10,
    marginBetween: 30,
    lineThickness: 10
};
Layout.fonts = {
    mochiy: "Mochiy"
};
Layout.figureLayout = {
    width: 60,
    height: 120,
    lineThickness: 4,
    marginBetween: 20,
};
Layout.ovalLayout = {
    radius: _a.figureLayout.width / 2,
};
Layout.ellipseLayout = {
    width: 20,
    height: 28,
    marginTop: 40,
};
Layout.primaryColors = {
    white: 0xFFFFFF,
    lightGreen: 0x00B295,
    black: 0x000000,
    lightRed: 0xFF2E2E
};
Layout.lineThickness = 3;
Layout.oval = [
    [[0, 30], [0, -10], [60, -10], [60, 30]],
    [[60, 89], [60, 130], [0, 130], [0, 90]],
];
Layout.squig = [
    [[5, 24], [-10, 15], [12, -10], [32, 4]],
    [[32, 4], [50, 12], [65, 40], [50, 60]],
    [[50, 60], [35, 80], [40, 95], [55, 96]],
    [[55, 96], [70, 105], [48, 130], [28, 116]],
    [[28, 116], [10, 108], [-5, 80], [10, 60]],
    [[10, 60], [25, 40], [20, 25], [5, 24]]
];
Layout.startGameTextBorder = {
    width: 250,
    height: 80
};
Layout.startGameTextStyle = {
    fontSize: 34,
    fill: Layout.primaryColors.lightGreen,
    fontWeight: "bold",
    fontFamily: _a.fonts.mochiy
};
Layout.rulesButtonTextStyle = {
    fontSize: 30,
    fill: Layout.primaryColors.lightGreen,
    fontWeight: "bold",
    fontFamily: _a.fonts.mochiy
};
Layout.rulesDialog = {
    width: 650,
    height: 450,
    marginTop: 30,
    marginLeft: 40,
    marginRight: 50,
    mainTitleStyle: {
        fontSize: 30,
        fill: Layout.primaryColors.black,
        fontWeight: "bold",
        fontFamily: _a.fonts.mochiy
    },
    secondTitleStyle: {
        fill: Layout.primaryColors.black,
        fontSize: 25,
        align: "center",
        fontWeight: "bold",
        wordWrap: true,
        wordWrapWidth: 550,
        fontFamily: _a.fonts.mochiy
    },
    secondTitleMarginTop: 80,
    rulesTextStyle: {
        fill: Layout.primaryColors.black,
        fontSize: 20,
        align: "left",
        wordWrap: true,
        wordWrapWidth: 550,
        fontFamily: _a.fonts.mochiy
    },
    rulesMarginTop: 170,
    rulesMarginBetween: 60,
};
Layout.restartButton = {
    marginBottom: 80,
    marginRight: 100,
};
Layout.restartTextStyle = {
    fontSize: 25,
    fill: Layout.primaryColors.lightGreen,
    fontFamily: _a.fonts.mochiy
};
Layout.cardsInDeckStyle = {
    marginTop: 50,
    marginLeft: 50,
};
Layout.cardsInDeckTextStyle = {
    fontSize: 22,
    fill: Layout.primaryColors.lightGreen,
    fontFamily: _a.fonts.mochiy
};
Layout.cardsInDeckNumberStyle = {
    marginLeft: 10,
    textStyle: {
        fontSize: 26,
        fill: Layout.primaryColors.lightGreen,
        fontFamily: _a.fonts.mochiy
    }
};
Layout.timeText = {
    marginTop: 55,
    marginRight: 280,
    textStyle: {
        fontSize: 25,
        fill: Layout.primaryColors.lightGreen,
        fontFamily: _a.fonts.mochiy
    }
};
Layout.highScoreButtonTextStyle = {
    fontSize: 30,
    fill: Layout.primaryColors.lightGreen,
    fontWeight: "bold",
    fontFamily: _a.fonts.mochiy
};
Layout.highScoreDialog = {
    width: 450,
    height: 320,
    mainTitleStyle: {
        fontSize: 30,
        fill: Layout.primaryColors.black,
        fontWeight: "bold",
        fontFamily: _a.fonts.mochiy
    },
    marginRight: 60,
    marginTop: 30,
    secondTitleStyle: {
        fill: Layout.primaryColors.black,
        fontSize: 25,
        fontWeight: "bold",
        fontFamily: _a.fonts.mochiy
    },
};
Layout.gameFinishDialog = {
    width: 600,
    height: 350,
    titleStyle: {
        fill: Layout.primaryColors.lightGreen,
        fontSize: 34,
        fontFamily: Layout.fonts.mochiy,
    },
    noHighScoreTextStyle: {
        fill: Layout.primaryColors.lightGreen,
        fontSize: 30,
        fontFamily: Layout.fonts.mochiy,
    },
    restartMarginTop: 330,
    marginTop: 90,
    highScoreTextStyle: {
        fill: Layout.primaryColors.lightGreen,
        fontSize: 38,
        fontFamily: Layout.fonts.mochiy,
    },
    newHighScoreTime: {
        marginTop: 190,
        textStyle: {
            fill: Layout.primaryColors.lightGreen,
            fontSize: 36,
            fontFamily: Layout.fonts.mochiy,
        }
    }
};
Layout.showSetButton = {
    textStyle: {
        fontSize: 25,
        fill: Layout.primaryColors.lightGreen,
        fontFamily: _a.fonts.mochiy
    },
    marginLeft: 100,
    marginBottom: 80,
};
Layout.goHomeButton = {
    textStyle: {
        fontSize: 18,
        fill: Layout.primaryColors.lightGreen,
        fontFamily: _a.fonts.mochiy
    },
    marginLeft: 200,
    marginBottom: 80,
};
// function getPoints(p1: number[], p2: number[], p3: number[], p4: number[]): number[] {
//     let result = [];
//     for (let t = 0; t < 1; t += 0.01) {
//         let x = (1 - t) ** 3 * p1[0] + 3 * (1 - t) ** 2 * t * p2[0] + 3 * (1 - t) * t * t * p3[0] + t ** 3 * p4[0];
//         let y = (1 - t) ** 3 * p1[1] + 3 * (1 - t) ** 2 * t * p2[1] + 3 * (1 - t) * t * t * p3[1] + t ** 3 * p4[1];
//         result.push(x, y);
//     }
//     return result;
// }