"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _redux = require("redux");

var _reduce = _interopRequireDefault(require("./reduce"));

var _reduxThunk = _interopRequireDefault(require("redux-thunk"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default = (0, _redux.createStore)((0, _redux.combineReducers)(_reduce["default"]), {
  from: '北京',
  to: '上海',
  isCitySelectorVisible: false,
  currentSelectingLeftCity: false //由它决定数据是回显到左边还是右边

}, (0, _redux.applyMiddleware)(_reduxThunk["default"]));

exports["default"] = _default;