import * as actionTypes from "../constants/reducerConstansts";
import { Scenes } from "../constants/constants";

const initState = {
    scene: Scenes.Home
};

export default (state = initState, action) => {
    switch (action.type) {
        case actionTypes.UPDATE_SCENE: {
            return Object.assign({}, state, {
                scene: action.data
            });
        }
        default: {
            return state;
        }
    }
};