import * as actionTypes from "../constants/reducerConstansts";
import { Scenes } from "../constants/constants";
const goToScene = scene => ({ type: actionTypes.UPDATE_SCENE, data: scene });

export const gotToCityDetails = () => dispatch => {
    dispatch(goToScene(Scenes.CityDetails));
};
