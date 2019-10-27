"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var dist_1 = require("game-object-engine/dist");
var OverworldBackground = /** @class */ (function (_super) {
    __extends(OverworldBackground, _super);
    function OverworldBackground(boundarySize) {
        var _this = _super.call(this, {
            layer: 0,
            imageSrc: "Images/Overworld.png",
        }) || this;
        _this.transform.size = boundarySize.clone();
        _this.transform.position = boundarySize.scale(0.5);
        return _this;
    }
    return OverworldBackground;
}(dist_1.GameObject));
exports.OverworldBackground = OverworldBackground;
//# sourceMappingURL=OverworldBackground.js.map