import {
    func
} from "prop-types"

export const ACTION_SET_FROM = "SET_FROM"
export const ACTION_SET_TO = "SET_TO"
export const ACTION_SET_IS_CITY_SELECTOR_VISIBLE = "ACTION_SET_IS_CITY_SELECTOR_VISIBLE"
export const ACTION_SET_CURRENT_SELECTING_LEFT_CITY = "ACTION_SET_CURRENT_SELECTING_LEFT_CITY"
export const ACTION_ISLOADCITYSELETOR = "ACTION_ISLOADCITYSELETOR"
export const SETCITYDATA = "SETCITYDATA"

export function setFrom(from) {
    return {
        type: ACTION_SET_FROM,
        payload: from
    }
}
export function setTo(to) {
    return {
        type: ACTION_SET_TO,
        payload: to
    }
}

export function hideCitySelector() {
    return {
        type: "ACTION_SET_IS_CITY_SELECTOR_VISIBLE",
        payload: false
    }
}
export function exchangeFromTo() {
    return (dispatch, getState) => {
        const {
            from,
            to
        } = getState()
        dispatch(setFrom(to))
        dispatch(setTo(from))
    }
}

export function showCitySelector(currentSelectingLeftCity) {
    return (dispatch) => {
        dispatch({
                type: ACTION_SET_IS_CITY_SELECTOR_VISIBLE,
                payload: true
            })
            //
        dispatch({
            type: ACTION_SET_CURRENT_SELECTING_LEFT_CITY,
            payload: currentSelectingLeftCity,
        });
    }
}

export function setSeletorCity(city) {
    return (dispatch, getState) => {
        const {
            currentSelectingLeftCity
        } = getState()

        if (currentSelectingLeftCity) {
            // 回显到左边
            dispatch(setFrom(city))
        } else {
            dispatch(setTo(city))
        }
    }
}
export function setIsLoadCitySeletor(bool) {
    return {
        type: ACTION_ISLOADCITYSELETOR,
        payload: bool
    }
}
export function setCityData(data) {
    return {
        type: SETCITYDATA,
        payload: data
    }
}