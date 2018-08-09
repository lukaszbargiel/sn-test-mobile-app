import React, { Component } from 'react';
import {View,FlatList, ListItem, Text} from 'react-native'
import { Title, Left, Right, Body, Container, Header, Content, Icon, Item, Input, Button, Form, Picker } from 'native-base';
export default class RoomsList extends Component {
    constructor(props) {
        super(props);
        this.state = {
          selected: "key1"
        };
      }

      
    onValueChange(value) {
        this.setState({
          selected: value
        });
      }
  render() {
    var rooms = [
        {
            no: 201,
            type: 'Beedroom' 
        },
        {
            no: 202,
            type: 'Beedroom' 
        },
        {
            no: 203,
            type: 'Beedroom' 
        },
        {
            no: 204,
            type: 'Beedroom' 
        },
        {
            no: 205,
            type: 'Beedroom' 
        },
        {
            no: 206,
            type: 'Beedroom' 
        }
    ]
    
    return (
      <Container>
                 <Header>
          <Left>
            <Button transparent onPress={() => this.props.navigation.goBack()}>
              <Icon name="arrow-back" />
            </Button>
          </Left>
          <Body>
            <Title>Rooms Selection</Title>

          </Body>
          <Right>
            <Button transparent>
              <Icon name="search" />
            </Button>
            <Button transparent>
              <Icon name="heart" />
            </Button>
            <Button transparent>
              <Icon name="more" />
            </Button>
          </Right>
        </Header>

        <Content>
        <Picker
              mode="dropdown"
              iosHeader="Select your SIM"
              iosIcon={<Icon name="ios-arrow-down-outline" />}
              selectedValue={this.state.selected}
              onValueChange={this.onValueChange.bind(this)}
            >
              <Picker.Item label="Section 1" value="key0" />
              <Picker.Item label="Section 2" value="key1" />
              <Picker.Item label="Section 3" value="key2" />
            </Picker>
            <Item>
            <Icon name="ios-search" />
            <Input placeholder="Search" />
          </Item>

        <FlatList data={rooms}
        renderItem={({room}) => (
              <View style={{flex: 1, flexDirection: 'row'}}>
                <View style={{flex: 5, flexDirection: 'column'}}>
                <Text></Text>
                </View>

                <View style={{flex: 1}}>
                </View>

                <View style={{flex: 5, flexDirection: 'column'}}>
                    <Text> Do IT</Text>
                </View>
                </View>
        )
        }>
      </FlatList>
        </Content>
      </Container>
    );
  }
}