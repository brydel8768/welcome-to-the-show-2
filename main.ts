controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    info.changeScoreBy(1)
})
scene.setBackgroundImage(assets.image`stage`)
let mySprite = sprites.create(assets.image`singing bear`, SpriteKind.Player)
mySprite.bottom = 115
game.splash("PRESS A TO START.")
info.startCountdown(10)
