import React, { Component } from "react";
import {
    View,
    Text,
    ScrollView,
    TextInput,
    TouchableHighlight
} from "react-native";

export default class Home extends Component {
    render() {
        var cities = this.props.cities.map(city => {
            return (
                <TouchableHighlight
                    key={city.name}
                    onPress={() => this.props.showCityDetails(city.name)}
                >
                    <Text>{city.name}</Text>
                </TouchableHighlight>
            );
        });

        return (
            <ScrollView style={{ flex: 1 }}>
                <TextInput
                    value={this.props.term}
                    onChangeText={text => this.props.updateSearch(text)}
                />
                {cities}
            </ScrollView>
        );
    }
};
