"use strict";
var CompositeDisposable = require('atom').CompositeDisposable;
var store_1 = require('./store');
var actions_1 = require('./actions');
var Root_1 = require('./components/Root');
var Top_1 = require('./components/TopPanel/Top');
var subscriptions = null;
function onActivate() {
    subscriptions = new CompositeDisposable;
    subscriptions.add(atom.commands.add('atom-workspace', {
        'cb-viewer:toggle': function () { return store_1.default.dispatch(actions_1.windowToggle()); }
    }));
    atom.workspace.observeTextEditors(function (editor) {
        subscriptions.add(editor.onDidSave(function () {
            if (store_1.default.getState().window) {
                store_1.default.dispatch(actions_1.tutorialBuild());
                store_1.default.dispatch(actions_1.tutorialLoad());
            }
        }));
    });
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
