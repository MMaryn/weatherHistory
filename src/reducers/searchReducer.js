import * as actionTypes from "../constants/reducerConstansts";
const initState = {
    term: "",
    cities: []
};

export default (state = initState, action) => {
    switch (action.type) {
        case actionTypes.UPDATE_SEARCH: {
            return Object.assign({}, state, {
                term: action.data.term,
                cities: action.data.cities
            })
        }
        default:
            return state;
    }
}; 