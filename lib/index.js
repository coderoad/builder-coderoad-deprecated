"use strict";
var element_1 = require('./components/SidePanel/element');
var render_1 = require('./components/render');
var Top_1 = require('./components/TopPanel/Top');
var render_2 = require('./components/TopPanel/render');
var polyfills_1 = require('core-coderoad/lib/polyfills');
var subscriptions_1 = require('./subscriptions');
var store_1 = require('./store');
var setup_1 = require('./modules/setup');
var Main = (function () {
    function Main() {
        polyfills_1.default();
        store_1.default.dispatch(setup_1.setupVerify());
        this.root = element_1.default.init();
        this.top = Top_1.default.init();
    }
    Main.prototype.activate = function () {
        atom.workspace.addRightPanel({
            item: this.root,
            priority: 0,
        });
        atom.workspace.addTopPanel({
            item: this.top,
            priority: 1100,
        });
        subscriptions_1.onActivate();
        render_1.default(this.root);
        render_2.default(this.top);
    };
    Main.prototype.deactivate = function () {
        subscriptions_1.onDeactivate();
    };
    return Main;
}());
;
module.exports = new Main();
