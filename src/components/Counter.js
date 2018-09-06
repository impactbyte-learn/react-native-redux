import React, { Component } from "react";
import { connect } from "react-redux";
import { View, Text, Button } from "react-native";
import actions from "../actions";

class Counter extends Component {
  render() {
    console.log(this.props);
    return (
      <View>
        <Text>Counter: {this.props.counter}</Text>
        <Button onPress={this.props.increaseCounter} title="INCREASE" />
        <Button onPress={this.props.decreaseCounter} title="DECREASE" />
      </View>
    );
  }
}

export default connect(
  ({ counter }) => ({ counter }),
  actions
)(Counter);
