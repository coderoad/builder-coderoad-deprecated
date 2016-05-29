"use strict";
var CompositeDisposable = require('atom').CompositeDisposable;
var store_1 = require('./store');
var root_1 = require('./components/root');
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
    root_1.default.unmount();
    store_1.default.subscribe(function () { return null; });
    subscriptions.dispose();
}
exports.onDeactivate = onDeactivate;
