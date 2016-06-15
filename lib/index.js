"use strict";
var SidePanel_1 = require('./components/SidePanel');
var render_1 = require('./components/render');
var TopPanel_1 = require('./components/TopPanel');
var TopRoot_1 = require('./components/TopPanel/TopRoot');
var core_coderoad_1 = require('core-coderoad');
var subscriptions_1 = require('./subscriptions');
var store_1 = require('./store');
var setup_1 = require('./modules/setup');
var Main = (function () {
    function Main() {
        core_coderoad_1.loadPolyfills();
        store_1.default.dispatch(setup_1.setupVerify());
        this.side = SidePanel_1.sideElement.init();
        this.top = TopPanel_1.topElement.init();
    }
    Main.prototype.activate = function () {
        atom.workspace.addRightPanel({
            item: this.side,
            priority: 0,
        });
        atom.workspace.addTopPanel({
            item: this.top,
            priority: 1100,
        });
        subscriptions_1.onActivate();
        render_1.default(this.side);
        TopRoot_1.default(this.top);
    };
    Main.prototype.deactivate = function () {
        subscriptions_1.onDeactivate();
    };
    return Main;
}());
;
module.exports = new Main();
