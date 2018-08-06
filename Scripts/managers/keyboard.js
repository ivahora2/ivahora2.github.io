//Author’s name--- Ishratben Vahora
//Student Number-- 300986257
//Last Modified by Ishratben Vahora
//Date last Modified -- 2018-07-30
var managers;
(function (managers) {
    var Keyboard = /** @class */ (function () {
        function Keyboard() {
            this.fire = false;
            this.enabled = true;
            document.addEventListener('keydown', this.onKeyDown.bind(this), false);
            document.addEventListener('keyup', this.onKeyUp.bind(this), false);
        }
        Keyboard.prototype.onKeyDown = function (event) {
            if (event.keyCode == 32) {
                this.fire = true;
            }
        };
        Keyboard.prototype.onKeyUp = function (event) {
            if (event.keyCode == 32) {
                this.fire = false;
            }
        };
        return Keyboard;
    }());
    managers.Keyboard = Keyboard;
})(managers || (managers = {}));
//# sourceMappingURL=keyboard.js.map