import {
    ACTION_SET_FROM,
    ACTION_SET_TO,
    ACTION_SET_CURRENT_SELECTING_LEFT_CITY,
    ACTION_SET_IS_CITY_SELECTOR_VISIBLE
} from './actions';
export default {
    from(state = '北京', action) {
        const {
            type,
            payload
        } = action;
        switch (type) {
            case ACTION_SET_FROM:
                return payload
                break;

            default:

        }
        return state;
    },
    to(state = '上海', action) {
        const {
            type,
            payload
        } = action;
        switch (type) {
            case ACTION_SET_TO:
                return payload
                break;

            default:

        }
        return state
    },
    isCitySelectorVisible(state = false, action) {
        const {
            type,
            payload
        } = action;
        switch (type) {
            case ACTION_SET_IS_CITY_SELECTOR_VISIBLE:
                return payload
                break;

            default:
        }
        return state
    },
    currentSelectingLeftCity(state = false, action) {
        const {
            type,
            payload
        } = action;
        switch (type) {
            case ACTION_SET_CURRENT_SELECTING_LEFT_CITY:
                return payload;
                break;
            default:
        }

        return state;
    },
}