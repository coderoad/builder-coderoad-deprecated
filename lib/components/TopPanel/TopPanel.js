"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var React = require('react');
var react_redux_1 = require('react-redux');
var Tabs_1 = require('material-ui/Tabs');
var actions_1 = require('../../actions');
var styles = {
    all: {
        marginRight: '400px',
        height: '33px',
        top: '-15px',
        position: 'relative',
    },
    tabs: {
        height: '33px',
        backgroundColor: 'black',
    },
    tab: {
        fontSize: '12px',
    },
    add: {
        color: 'rgb(0, 188, 212)',
    },
};
var TopPanel = (function (_super) {
    __extends(TopPanel, _super);
    function TopPanel() {
        _super.apply(this, arguments);
    }
    TopPanel.prototype.render = function () {
        var _this = this;
        var _a = this.props, tutorial = _a.tutorial, pagePosition = _a.pagePosition, pageSet = _a.pageSet, pageAdd = _a.pageAdd;
        if (!tutorial || !tutorial.pages) {
            return null;
        }
        return (React.createElement(Tabs_1.Tabs, {tabItemContainerStyle: styles.tabs, style: styles.all}, tutorial.pages.map(function (page, index) {
            return (React.createElement(Tabs_1.Tab, {style: styles.tab, key: index.toString(), label: page.title.substring(0, 10), onClick: pageSet.bind(_this, index)}));
        }), React.createElement(Tabs_1.Tab, {style: Object.assign({}, styles.tab, styles.add), label: '+', onActive: pageAdd})));
    };
    TopPanel = __decorate([
        react_redux_1.connect(null, function (dispatch) {
            return {
                pageSet: function (index) {
                    dispatch(actions_1.pageSet(index));
                    dispatch(actions_1.editorOpenPage(index));
                },
                pageAdd: function () { return dispatch(actions_1.tutorialPageAdd()); }
            };
        }), 
        __metadata('design:paramtypes', [])
    ], TopPanel);
    return TopPanel;
}(React.Component));
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = TopPanel;
