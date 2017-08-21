import actionTypes from "../constants/reducerConstansts";
import * as ApiActions from "./apiActions";
import { convertCityDetailsResponse } from "../core/converte";
import * as ScenesActions from "./scenesActions";

const updateCurrentCityDetails = cityDetails => ({ type: actionTypes.UPDATE_CURRENT_CITY_DETAILS, data: cityDetails });

export const showCityDetails = cityName => (dispatch, getState) => {
    let state = getState();
    if (!state.cities.citieDetailList || !state.cities.cityDetailsList[cityName]) {
        let city = state.cities.citiesList.find(city => city.name === cityName);
        fetch(city.url)
            .then((response) => {
                return response.text()
            })
            .then((responseJson) => {

                let cityDetails = convertCityDetailsResponse(responseJson);
                dispatch(ApiActions.loadCityDetailsSync(cityName, cityDetails));

                dispatch(ScenesActions.gotToCityDetails());
            })
            .catch((error) => {
                console.error(error);
            });
    };
};
