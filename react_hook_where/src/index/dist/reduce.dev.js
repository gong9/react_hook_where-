"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _actions = require("./actions");

var _default = {
  from: function from() {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '北京';
    var action = arguments.length > 1 ? arguments[1] : undefined;
    var type = action.type,
        payload = action.payload;

    switch (type) {
      case _actions.ACTION_SET_FROM:
        return payload;
        break;

      default:
    }

    return state;
  },
  to: function to() {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '上海';
    var action = arguments.length > 1 ? arguments[1] : undefined;
    var type = action.type,
        payload = action.payload;

    switch (type) {
      case _actions.ACTION_SET_TO:
        return payload;
        break;

      default:
    }

    return state;
  },
  isCitySelectorVisible: function isCitySelectorVisible() {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
    var action = arguments.length > 1 ? arguments[1] : undefined;
    var type = action.type,
        payload = action.payload;

    switch (type) {
      case _actions.ACTION_SET_IS_CITY_SELECTOR_VISIBLE:
        return payload;
        break;

      default:
    }

    return state;
  },
  currentSelectingLeftCity: function currentSelectingLeftCity() {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
    var action = arguments.length > 1 ? arguments[1] : undefined;
    var type = action.type,
        payload = action.payload;

    switch (type) {
      case _actions.ACTION_SET_CURRENT_SELECTING_LEFT_CITY:
        return payload;

      default:
    }

    return state;
  }
};
exports["default"] = _default;