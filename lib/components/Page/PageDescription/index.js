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
var index_1 = require('../../index');
var Card_1 = require('material-ui/Card');
var actions_1 = require('../../../actions');
var selectors_1 = require('core-coderoad/lib/selectors');
var styles = {
    card: {
        margin: '5px',
    },
};
var PageDescription = (function (_super) {
    __extends(PageDescription, _super);
    function PageDescription() {
        _super.apply(this, arguments);
    }
    PageDescription.prototype.render = function () {
        var _this = this;
        var _a = this.props, page = _a.page, markdownOpen = _a.markdownOpen;
        var title = page.title, description = page.description;
        var contentArray = description.split('\n\n');
        return (React.createElement(Card_1.Card, {style: styles.card, initiallyExpanded: true}, title
            ? React.createElement(Card_1.CardHeader, {title: title, actAsExpander: true, showExpandableButton: true}) : null, React.createElement(Card_1.CardText, {expandable: true}, contentArray.map(function (c, index) { return (React.createElement(index_1.Markdown, {key: index, onClick: markdownOpen.bind(_this, c)}, c)); }))));
    };
    PageDescription = __decorate([
        react_redux_1.connect(function (state) { return ({
            page: selectors_1.pageSelector(state),
        }); }, function (dispatch) { return ({
            markdownOpen: function (content) {
                dispatch(actions_1.editorMarkdownOpen(null, content));
            },
        }); }), 
        __metadata('design:paramtypes', [])
    ], PageDescription);
    return PageDescription;
}(React.Component));
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = PageDescription;
