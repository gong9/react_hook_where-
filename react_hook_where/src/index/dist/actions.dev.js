"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setFrom = setFrom;
exports.setTo = setTo;
exports.hideCitySelector = hideCitySelector;
exports.exchangeFromTo = exchangeFromTo;
exports.showCitySelector = showCitySelector;
exports.ACTION_SET_CURRENT_SELECTING_LEFT_CITY = exports.ACTION_SET_IS_CITY_SELECTOR_VISIBLE = exports.ACTION_SET_TO = exports.ACTION_SET_FROM = void 0;
var ACTION_SET_FROM = "SET_FROM";
exports.ACTION_SET_FROM = ACTION_SET_FROM;
var ACTION_SET_TO = "SET_TO";
exports.ACTION_SET_TO = ACTION_SET_TO;
var ACTION_SET_IS_CITY_SELECTOR_VISIBLE = "ACTION_SET_IS_CITY_SELECTOR_VISIBLE";
exports.ACTION_SET_IS_CITY_SELECTOR_VISIBLE = ACTION_SET_IS_CITY_SELECTOR_VISIBLE;
var ACTION_SET_CURRENT_SELECTING_LEFT_CITY = "ACTION_SET_CURRENT_SELECTING_LEFT_CITY";
exports.ACTION_SET_CURRENT_SELECTING_LEFT_CITY = ACTION_SET_CURRENT_SELECTING_LEFT_CITY;

function setFrom(from) {
  return {
    type: ACTION_SET_FROM,
    payload: from
  };
}

function setTo(to) {
  return {
    type: ACTION_SET_TO,
    payload: to
  };
}

function hideCitySelector() {
  return {
    type: "ACTION_SET_IS_CITY_SELECTOR_VISIBLE",
    payload: false
  };
}

function exchangeFromTo() {
  return function (dispatch, getState) {
    var _getState = getState(),
        from = _getState.from,
        to = _getState.to;

    dispatch(setFrom(to));
    dispatch(setTo(from));
  };
}

function showCitySelector(currentSelectingLeftCity) {
  return function (dispatch) {
    dispatch({
      type: ACTION_SET_IS_CITY_SELECTOR_VISIBLE,
      payload: true
    }); //

    dispatch({
      type: ACTION_SET_CURRENT_SELECTING_LEFT_CITY,
      payload: currentSelectingLeftCity
    });
  };
}