"use strict";
var atom_1 = require('atom');
var actions_1 = require('./actions');
var SidePanel_1 = require('./components/SidePanel');
var TopPanel_1 = require('./components/TopPanel');
var Subscriptions = (function () {
    function Subscriptions() {
        this.subscriptions = new atom_1.CompositeDisposable;
    }
    Subscriptions.prototype.onActivate = function (store) {
        var _this = this;
        this.store = store;
        this.subscriptions.add(atom.commands.add('atom-workspace', {
            'cb-viewer:toggle': function () { return store.dispatch(actions_1.windowToggle()); }
        }));
        atom.workspace.observeTextEditors(function (editor) {
            _this.subscriptions.add(editor.onDidSave(function () {
                if (store.getState().windowToggle) {
                    store.dispatch(actions_1.tutorialBuild());
                    store.dispatch(actions_1.tutorialLoad());
                }
            }));
        });
        return this.subscriptions;
    };
    Subscriptions.prototype.onDeactivate = function (store) {
        SidePanel_1.sideElement.unmount();
        TopPanel_1.topElement.unmount();
        store.subscribe(function () { return null; });
        this.subscriptions.dispose();
    };
    Subscriptions.prototype.addSubscription = function (fn) {
        var store = this.store;
        this.subscriptions.add(fn);
    };
    return Subscriptions;
}());
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Subscriptions;
