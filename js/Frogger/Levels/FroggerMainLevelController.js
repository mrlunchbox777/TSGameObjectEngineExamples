class FroggerMainLevelController extends GameObject {
    constructor() {
        super({ layer: 0 });
        this.player = null;
        this.river = null;
        this.logs = [];
        this.test = null;
        this.river = new FroggerRiver();
        this.player = new FroggerPlayer();
        let initialPosition = this.river.transform.position.clone();
        initialPosition.y += this.river.transform.size.y / 2;
        initialPosition.y -= this.player.transform.size.y / 2;
        this.player.setInitialPosition(initialPosition);
        this.player.goToInitialPosition();
        Debug.trackGameObject(this.player);
        Debug.trackGameObject(this.river);
        this.buildLogs();
        GameManager.camera.follow(this.player);
    }
    // override
    update() {
        if (Input.keys(Keys.Key1) && GameManager.unitSize > 5) {
            GameManager.currentLevel.unitSize -= 0.5;
        }
        if (Input.keys(Keys.Key2) && GameManager.unitSize < 500) {
            GameManager.currentLevel.unitSize += 0.5;
        }
    }
    buildLogs() {
        for (let i = 0; i < 3; i++) {
            let log = new FroggerLogSmall(i.toString());
            log.transform.position = new Vector2(this.player.transform.position.x, this.river.transform.position.y - 0.5 + i * 2);
            this.logs.push(log);
            Debug.trackGameObject(log);
        }
    }
}
//# sourceMappingURL=FroggerMainLevelController.js.map