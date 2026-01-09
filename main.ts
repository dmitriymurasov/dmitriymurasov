loops.forever(function () {
    if (blocks.testForBlock(GOLD_BLOCK, pos(0, -1, 0))) {
        player.say("я наступил на золото!")
        mobs.applyEffect(SPEED, mobs.target(LOCAL_PLAYER), 10, 255)
    }
})
loops.forever(function () {
    if (blocks.testForBlock(GOLD_BLOCK, pos(0, -1, 0))) {
        mobs.clearEffect(mobs.target(NEAREST_PLAYER))
        player.say("я наступил на золото!")
        mobs.applyEffect(SPEED, mobs.target(LOCAL_PLAYER), 10, 50)
    } else {
        mobs.clearEffect(mobs.target(NEAREST_PLAYER))
        mobs.applyEffect(SLOWNESS, mobs.target(LOCAL_PLAYER), 10, 0)
    }
})
loops.forever(function () {
    if (blocks.testForBlock(DIAMOND_BLOCK, pos(0, -1, 0))) {
        for (let index = 0; index < 4; index++) {
            mobs.spawn(SHEEP, pos(10, 0, 0))
        }
    }
})
