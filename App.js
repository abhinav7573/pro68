import React from "react";
import { View, Text, StyleSheet } from "react-native";
import FbScreen from "./screens/fb";
import InScreen from "./screens/in";
import { createAppContainer, createSwitchNavigator } from "react-navigation";
import { createBottomTabNavigator } from "react-navigation-tabs";

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}

const TabNavigator = createBottomTabNavigator({
  FbScreen: { screen: FbScreen },
  InScreen: { screen: InScreen },
});

const AppContainer = createAppContainer(TabNavigator);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "red",
    alignItems: "center",
    justifyContent: "center",
  },
});
