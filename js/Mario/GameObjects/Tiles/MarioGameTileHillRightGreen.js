class MarioGameTileHillRightGreen extends MarioGameTile {
    constructor() {
        super({
            hasCollider: false,
            allowPassThrough: true,
            breakFromBeneath: false,
            spritesheetAnimationSet: new SpritesheetAnimationSet({
                spritesheetAnimations: {
                    "idle": new SpritesheetAnimation({
                        imageSrc: MarioGameTile.spriteSheet,
                        transforms: [
                            new Transform({
                                position: new Vector2(MarioGameTile.spriteSize.x * 10, MarioGameTile.spriteSize.y * 8),
                                size: MarioGameTile.spriteSize
                            })
                        ],
                        msPerFrame: 10000,
                        loop: false
                    }),
                },
                startAnimationName: "idle"
            })
        });
    }
}
//# sourceMappingURL=MarioGameTileHillRightGreen.js.map