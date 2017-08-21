import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import Actions from "../actions/_rootActions";
import AppRoute from "../components/AppRoutes";

class Weather extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.actions.loadCityList();
    };

    render() {
        return (
            <AppRoute storeState={this.props.storeState} actions={this.props.actions} />
        )
    }
};

export default connect(state => ({
    storeState: state
}), dispatch => ({
    actions: bindActionCreators(Actions, dispatch)
}))(Weather);
