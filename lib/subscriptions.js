"use strict";
var CompositeDisposable = require('atom').CompositeDisposable;
var store_1 = require('./store');
var Root_1 = require('./components/Root');
var Top_1 = require('./components/TopPanel/Top');
var subscriptions = null;
function onActivate() {
    subscriptions = new CompositeDisposable;
    subscriptions.add(atom.commands.add('atom-workspace', {
        'cb-viewer:toggle': function () { return store_1.default.dispatch({ type: 'WINDOW_TOGGLE' }); }
    }));
    return subscriptions;
}
exports.onActivate = onActivate;
function onDeactivate() {
    Root_1.default.unmount();
    Top_1.default.unmount();
    store_1.default.subscribe(function () { return null; });
    subscriptions.dispose();
}
exports.onDeactivate = onDeactivate;
