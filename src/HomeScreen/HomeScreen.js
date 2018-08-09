import React from "react";
import {Constants} from 'expo';
import {Image as NImage, Dimensions} from 'react-native';
import {
  Form,
  Item as FormItem,
  Button,
  Text,
  Container,
  Card,
  CardItem,
  Content,
  Header,
  Icon,
Input } from "native-base";

export default class HomeScreen extends React.Component {
  hangleLoginEvent = () => {
    this.props.navigation.navigate('RoomsList')
  }

  render() {
    var dimensions = Dimensions.get('window');
    var imageHeight = Math.round(dimensions.width * 9 / 16);
    var imageWidth = dimensions.width;
    return (
      <Container style={{ paddingTop: Constants.statusBarHeight }}>
      <Header />
        <Content padder>   
        <Card>
            <CardItem cardBody>
                <NImage source={require('../../assets/logo.png')} style={{ height: imageHeight, width: imageWidth }} /> 
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
