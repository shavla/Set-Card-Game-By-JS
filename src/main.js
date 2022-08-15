const app = new PIXI.Application({
  width: window.innerWidth,
  height: window.innerHeight,
  transparent: false,
  antialias: true,
});

document.body.appendChild(app.view);

window.onload = () => {
  new Lobby(app);
  // new Game()
};
