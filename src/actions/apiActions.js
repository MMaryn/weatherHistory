import * as actionTypes from "../constants/reducerConstansts";
import { citiesListUrl } from "../constants/apiConstants";
import { convertCityName } from "../core/converte";

const loadCityListSync = cities => ({
    type: actionTypes.LOAD_INIT_DATA,
    data: cities
});

export const loadCityList = () => dispatch => {
    fetch(citiesListUrl)
        .then(responseJson => responseJson.json())
        .then(res => {
            var citiesList = convertCityName(res);
            dispatch(loadCityListSync(citiesList));
        })
        .catch(error => console.error(error));
};

export const loadCityDetailsSync = (cityName, cityDetails) => ({
    type: actionTypes.LOAD_CITY_DETAILS,
    data: {
        cityName,
        cityDetails
    }
});