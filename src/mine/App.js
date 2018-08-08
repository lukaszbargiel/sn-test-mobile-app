import React, { Component } from "react";
import { Container, Header, Content, Accordion } from "native-base";
import LoginForm from "./LoginForm";
import {AppLoading, Font} from "expo";
import {StackNavigator} from 'react-navigation'
import EventList from "./EventList";

const dataArray = [
  { title: "First Rule of Mobile App", content: "Is to love Dorotkas" },
  { title: "And the 2nd one is", content: "To love her more" },
  { title: "And most important", content: "Not important" }
];

const AppNavigator = StackNavigator(
  {
    login: { 
      screen: LoginForm,
      navigationOptions: () => ({
        title: 'Login'
      })
     },
     eventList: { 
      screen: EventList,
      navigationOptions: () => ({
        title: 'EventList'
      })
     },
  }
);

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      isReady: false,
    };
  }
  render() {
    if (!this.state.isReady) {
      return <AppLoading />;
    }    
    else{
    return (
      <AppNavigator />      
    );
  }
  }

  async componentWillMount() {
    await Font.loadAsync({
      'Roboto': require('native-base/Fonts/Roboto.ttf'),
      'Roboto_medium': require('native-base/Fonts/Roboto_medium.ttf'),
      'Ionicons': require('@expo/vector-icons/fonts/Ionicons.ttf'),
      Roboto: require("native-base/Fonts/Roboto.ttf"),
      Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
      Ionicons: require("@expo/vector-icons/fonts/Ionicons.ttf")
    });
    this.setState({ isReady: true });
  }
}

