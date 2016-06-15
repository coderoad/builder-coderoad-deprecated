"use strict";
var atom_1 = require('atom');
var actions_1 = require('./actions');
var SidePanel_1 = require('./components/SidePanel');
var TopPanel_1 = require('./components/TopPanel');
var subscriptions = null;
function onActivate(store) {
    subscriptions = new atom_1.CompositeDisposable;
    subscriptions.add(atom.commands.add('atom-workspace', {
        'cb-viewer:toggle': function () { return store.dispatch(actions_1.windowToggle()); }
    }));
    atom.workspace.observeTextEditors(function (editor) {
        subscriptions.add(editor.onDidSave(function () {
            if (store.getState().window) {
                store.dispatch(actions_1.tutorialBuild());
                store.dispatch(actions_1.tutorialLoad());
            }
        }));
    });
    return subscriptions;
}
exports.onActivate = onActivate;
function onDeactivate(store) {
    SidePanel_1.sideElement.unmount();
    TopPanel_1.topElement.unmount();
    store.subscribe(function () { return null; });
    subscriptions.dispose();
}
exports.onDeactivate = onDeactivate;
