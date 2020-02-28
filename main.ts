let count = 0
let list = [sprites.builtin.forestBat0, sprites.builtin.forestBat1, sprites.builtin.forestBat2, sprites.builtin.forestBat3, sprites.builtin.forestBat4, sprites.builtin.forestBat5, sprites.builtin.forestBat6, sprites.builtin.forestBat7]
let bat = sprites.create(list[0], SpriteKind.Player)
game.onUpdateInterval(200, function () {
    bat.setImage(list[count % list.length])
    count += 1
})
