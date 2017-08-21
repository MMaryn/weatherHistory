import * as actionTypes from "../constants/reducerConstansts.js";

const updateSearchSyc = (term, cities) => ({ type: actionTypes.UPDATE_SEARCH, data: { term, cities } });
export const updateSearch = term => (dispatch, getState) => {
    let state = getState();
    let filteredCities = [];

    if (term) {
        filteredCities = state.cities.citiesList.filter(city => {
            return city.name.indexOf(term) >= 0;
        });
    }
    dispatch(updateSearchSyc(term, filteredCities));
};
