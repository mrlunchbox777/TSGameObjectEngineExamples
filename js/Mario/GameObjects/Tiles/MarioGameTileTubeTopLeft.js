class MarioGameTileTubeTopLeft extends MarioGameTile {
    constructor() {
        super({
            hasCollider: true,
            allowPassThrough: false,
            breakFromBeneath: false,
            spritesheetAnimationSet: new SpritesheetAnimationSet({
                spritesheetAnimations: {
                    "idle": new SpritesheetAnimation({
                        imageSrc: MarioGameTile.spriteSheet,
                        transforms: [
                            new Transform({
                                position: new Vector2(0, MarioGameTile.spriteSize.y * 10),
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
//# sourceMappingURL=MarioGameTileTubeTopLeft.js.map