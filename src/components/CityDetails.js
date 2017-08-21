import React, { Component } from "react";
import {
    StyleSheet,
    View,
    Text,
    ScrollView,
    TextInput,
    TouchableHighlight
} from "react-native";


const styles = StyleSheet.create({
    simpleContainer: {
        flex: 1,
        backgroundColor: "#101010"
    },
    card: {
        flex: 1,
        backgroundColor: "#101010"
    }
});

export default class CityDetails extends Component {
    render() {
        console.log(this.props);
        return (
            <ScrollView style={{ flex: 1 }}>
                <Text>CityDetails</Text>
            </ScrollView>
        );
    }
};
