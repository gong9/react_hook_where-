"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setFrom = setFrom;
exports.setTo = setTo;
exports.hideCitySelector = hideCitySelector;
exports.exchangeFromTo = exchangeFromTo;
exports.showCitySelector = showCitySelector;
exports.setSeletorCity = setSeletorCity;
exports.setIsLoadCitySeletor = setIsLoadCitySeletor;
exports.setCityData = setCityData;
exports.SETCITYDATA = exports.ACTION_ISLOADCITYSELETOR = exports.ACTION_SET_CURRENT_SELECTING_LEFT_CITY = exports.ACTION_SET_IS_CITY_SELECTOR_VISIBLE = exports.ACTION_SET_TO = exports.ACTION_SET_FROM = void 0;

var _propTypes = require("prop-types");

var ACTION_SET_FROM = "SET_FROM";
exports.ACTION_SET_FROM = ACTION_SET_FROM;
var ACTION_SET_TO = "SET_TO";
exports.ACTION_SET_TO = ACTION_SET_TO;
var ACTION_SET_IS_CITY_SELECTOR_VISIBLE = "ACTION_SET_IS_CITY_SELECTOR_VISIBLE";
exports.ACTION_SET_IS_CITY_SELECTOR_VISIBLE = ACTION_SET_IS_CITY_SELECTOR_VISIBLE;
var ACTION_SET_CURRENT_SELECTING_LEFT_CITY = "ACTION_SET_CURRENT_SELECTING_LEFT_CITY";
exports.ACTION_SET_CURRENT_SELECTING_LEFT_CITY = ACTION_SET_CURRENT_SELECTING_LEFT_CITY;
var ACTION_ISLOADCITYSELETOR = "ACTION_ISLOADCITYSELETOR";
exports.ACTION_ISLOADCITYSELETOR = ACTION_ISLOADCITYSELETOR;
var SETCITYDATA = "SETCITYDATA";
exports.SETCITYDATA = SETCITYDATA;

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

function setSeletorCity(city) {
  return function (dispatch, getState) {
    var _getState2 = getState(),
        currentSelectingLeftCity = _getState2.currentSelectingLeftCity;

    if (currentSelectingLeftCity) {
      // 回显到左边
      dispatch(setFrom(city));
    } else {
      dispatch(setTo(city));
    }
  };
}

function setIsLoadCitySeletor(bool) {
  return {
    type: ACTION_ISLOADCITYSELETOR,
    payload: bool
  };
}

function setCityData(data) {
  return {
    type: SETCITYDATA,
    payload: data
  };
}