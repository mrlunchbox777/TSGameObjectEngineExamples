class MarioGameTileCloudBottomRight extends MarioGameTile {
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
                                position: new Vector2(MarioGameTile.spriteSize.x * 2, MarioGameTile.spriteSize.y * 21),
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
//# sourceMappingURL=MarioGameTileCloudBottomRight.js.map