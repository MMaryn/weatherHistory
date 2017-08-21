import React, { Component } from "react";
import { combineReducers, createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";

import reducers from "../reducers/_rootReducer";
import Weather from "./weather";

const reducer = combineReducers(reducers);
const store = createStore(reducer, applyMiddleware(thunk))

export default class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <Weather />
            </Provider>
        );
    }
};
