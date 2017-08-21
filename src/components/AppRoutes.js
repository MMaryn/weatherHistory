import React, { Component } from "react";
import {
    View,
    Text,
    TextInput,
} from "react-native";

import Home from "./Home";
import CityDetails from "./CityDetails";
import Bar from "./Bar";

import { Scenes } from "../constants/constants";

export default class AppRoute extends Component {
    getCurrentScene() {
        switch (this.props.storeState.scenes.scene) {
            case Scenes.Home: {
                return <Home
                    term={this.props.storeState.search.term}
                    cities={this.props.storeState.search.cities}
                    updateSearch={term => this.props.actions.updateSearch(term)}
                    showCityDetails={cityname => this.props.actions.showCityDetails(cityname)}
                />
            }
            case Scenes.CityDetails: {
                return <Bar />
            }
            default: return;
        }
    };

    render() {
        var currentScene = this.getCurrentScene();
        return (
            <View style={{ flex: 1 }}>
                {currentScene}
            </View>
        )
    }
};