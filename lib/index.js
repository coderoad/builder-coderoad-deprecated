"use strict";
var ReactDOM = require('react-dom');
var injectTapEventPlugin = require('react-tap-event-plugin');
var SidePanel_1 = require('./components/SidePanel');
var TopPanel_1 = require('./components/TopPanel');
var setup_1 = require('./modules/setup');
var polyfills_1 = require('./polyfills');
var store_1 = require('./store');
var subscriptions_1 = require('./subscriptions');
process.env.NODE_ENV = 'production';
var Main = (function () {
    function Main() {
        injectTapEventPlugin();
        polyfills_1.default();
        store_1.default.dispatch(setup_1.setupVerify());
        this.side = SidePanel_1.sideElement.init();
        this.top = TopPanel_1.topElement.init();
        this.subscriptions = new subscriptions_1.default();
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
        this.subscriptions.onActivate(store_1.default);
        ReactDOM.render(SidePanel_1.SideRoot(store_1.default), this.side);
        ReactDOM.render(TopPanel_1.TopRoot(store_1.default), this.top);
    };
    Main.prototype.deactivate = function () {
        this.subscriptions.onDeactivate(store_1.default);
    };
    return Main;
}());
;
var app = new Main();
module.exports = app;
