class MarioGameTileBricksTopBrown extends MarioGameTile {
    constructor() {
        super({
            hasCollider: true,
            allowPassThrough: false,
            breakFromBeneath: true,
            spritesheetAnimationSet: new SpritesheetAnimationSet({
                spritesheetAnimations: {
                    "idle": new SpritesheetAnimation({
                        imageSrc: MarioGameTile.spriteSheet,
                        transforms: [
                            new Transform({
                                position: new Vector2(MarioGameTile.spriteSize.x, 0),
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
//# sourceMappingURL=MarioGameTileBricksTopBrown.js.map