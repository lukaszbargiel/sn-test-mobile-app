import React, { Component } from 'react';
import {AppLoading, Font} from "expo";
import {Constants} from 'expo';
import {Image as NImage, Dimensions} from 'react-native';
import {
    Icon,
  Container,
  Card,
  Button,
  Text,
  CardItem,
  Form,
  Item as FormItem,
  Input
} from 'native-base';

export default class LoginForm extends Component {
    constructor() {
        super();
        this.state = {
          isReady: false,
        };
      }
  hangleLoginEvent = () => {
    this.props.navigation.navigate('eventList')
  }
  render() {
    var dimensions = Dimensions.get('window');
    var imageHeight = Math.round(dimensions.width * 9 / 16);
    var imageWidth = dimensions.width;
    if (!this.state.isReady) {
        return <AppLoading />;
      } 
      else{
    return (        
      <Container style={{ paddingTop: Constants.statusBarHeight }}>
      <Header />
        <Content padder>   
        <Card>
            <CardItem cardBody>
                <NImage source={require('./assets/logo.png')} style={{ height: imageHeight, width: imageWidth }} /> 
            </CardItem>
        </Card>
              
        <Form>
          <FormItem>
            <Icon active type="FontAwesome" name='user' />
            <Input placeholder='Username'/>
          </FormItem>
          <FormItem last>
            <Icon active type="FontAwesome" name='unlock' />
            <Input secureTextEntry={true} placeholder='Password'/>
          </FormItem>

          <Button full primary style={{ paddingBottom: 4 }} onPress={this.hangleLoginEvent}>
            <Text> Login </Text>
          </Button>          
        </Form>
        </Content>
      </Container>
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