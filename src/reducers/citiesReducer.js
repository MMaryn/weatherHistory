import * as actionTypes from "../constants/reducerConstansts";
const initState = {
    citiesList: [],
    currentCityDetails: null,
    cityDetailsList: {}
};
export default (state = initState, action) => {
    switch (action.type) {
        case actionTypes.LOAD_INIT_DATA: {
            return Object.assign({}, state, {
                citiesList: action.data
            });
        };
        case actionTypes.UPDATE_CURRENT_CITY_DETAILS: {
            return Object.assign({}, state, {
                currentCityDetails: action.data
            })
        };
        case actionTypes.LOAD_CITY_DETAILS: {
            const cityDetailsList = Object.assign({}, state.cityDetailsList);
            cityDetailsList[action.data.cityName] = {
                currentCityDetails: action.data.cityDetails
            };
            return Object.assign({}, state, {
                cityDetailsList
            });
        }
        default:
            return state;
    }
};