import {AppLoading, Font} from "expo";
import React, { Component } from "react";
import { StyleProvider } from "native-base";
import getTheme from "../theme/components";
import variables from "../theme/variables/commonColor";
import HomeScreen from "../HomeScreen/index.js";
export default class Setup extends Component {
  constructor() {
    super();
    this.state = {
      isReady: false
    };
  }
  componentWillMount() {
    this.loadFonts();
  }
  async loadFonts() {
    await Font.loadAsync({
      Roboto: require("native-base/Fonts/Roboto.ttf"),
      Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
      Ionicons: require("@expo/vector-icons/fonts/Ionicons.ttf")
    });
    this.setState({ isReady: true });
  }
  render() {
    if (!this.state.isReady) {
      return <AppLoading />;
    }
    return (
      <StyleProvider style={getTheme(variables)}>
        <HomeScreen />
      </StyleProvider>
    );
  }
}