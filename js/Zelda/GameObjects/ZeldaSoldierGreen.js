class ZeldaSoldierGreen extends ZeldaSoldier {
    constructor(boundarySize) {
        super();
        this.currentAnimationName = null;
        this.holdingMouse = false;
        this.boundarySize = boundarySize.clone();
        this.currentAnimationName = "walkDown";
        this.spritesheetAnimationSet = new SpritesheetAnimationSet({
            spritesheetAnimations: {
                "walkDown": new SpritesheetAnimation({
                    imageSrc: 'Images/SoldierGreenWalkDownSpritesheet.png',
                    transforms: [
                        new Transform({ position: new Vector2(0, 0), size: new Vector2(22, 38) }),
                        new Transform({ position: new Vector2(0, 38), size: new Vector2(22, 38) }),
                        new Transform({ position: new Vector2(0, 76), size: new Vector2(22, 38) }),
                        new Transform({ position: new Vector2(0, 114), size: new Vector2(22, 38) }),
                    ],
                    msPerFrame: 200
                }),
                "walkSide": new SpritesheetAnimation({
                    imageSrc: 'Images/SoldierGreenWalkSideSpritesheet.png',
                    transforms: [
                        new Transform({ position: new Vector2(0, 0), size: new Vector2(31, 27) }),
                        new Transform({ position: new Vector2(0, 27), size: new Vector2(31, 27) }),
                        new Transform({ position: new Vector2(0, 54), size: new Vector2(31, 27) }),
                    ],
                    msPerFrame: 200
                })
            },
            startAnimationName: this.currentAnimationName
        });
        Input.registerMouseDown(this, this.mousedown);
        Input.registerMouseUp(this, this.mouseup);
        this.init();
    }
    // override
    update() {
        if (Math.random() < 0.01) {
            if (this.currentAnimationName == "walkDown") {
                this.currentAnimationName = "walkSide";
            }
            else {
                this.currentAnimationName = "walkDown";
            }
            this.spritesheetAnimationSet.currentAnimationName = this.currentAnimationName;
        }
        this.handleMovement();
        if (this.holdingMouse) {
            this.speedX = 0;
            this.speedY = 0;
            this.transform.position = Input.getWorldspaceMousePosition();
        }
        else if (this.speedX == 0) {
            this.setRandomDirection();
        }
        this.transform.rotation += this.dr;
    }
    mousedown(coords, gameObjects) {
        for (let obj of gameObjects) {
            if (obj == this) {
                this.holdingMouse = true;
            }
        }
    }
    mouseup(coords, gameObjects) {
        this.holdingMouse = false;
    }
    onCollisionEnter(other) {
        // greens destroy blues
        if (other.constructor == ZeldaSoldierBlue) {
            GameManager.destroy(other);
            return;
        }
        // greens bounce off of other greens
        let overlapX = Math.abs(this.transform.position.x - other.transform.position.x + other.transform.size.x);
        let overlapY = Math.abs(this.transform.position.y - other.transform.position.y + other.transform.size.y);
        if (overlapX > overlapY) {
            this.speedY *= -1;
        }
        else {
            this.speedX *= -1;
        }
    }
}
//# sourceMappingURL=ZeldaSoldierGreen.js.map