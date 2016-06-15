"use strict";
var ReactDOM = require('react-dom');
var injectTapEventPlugin = require('react-tap-event-plugin');
var SidePanel_1 = require('./components/SidePanel');
var TopPanel_1 = require('./components/TopPanel');
var core_coderoad_1 = require('core-coderoad');
var subscriptions_1 = require('./subscriptions');
var store_1 = require('./store');
var setup_1 = require('./modules/setup');
var Main = (function () {
    function Main() {
        injectTapEventPlugin();
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
        subscriptions_1.onActivate(store_1.default);
        ReactDOM.render(SidePanel_1.SideRoot(store_1.default), this.side);
        ReactDOM.render(TopPanel_1.TopRoot(store_1.default), this.top);
    };
    Main.prototype.deactivate = function () {
        subscriptions_1.onDeactivate(store_1.default);
    };
    return Main;
}());
;
module.exports = new Main();
