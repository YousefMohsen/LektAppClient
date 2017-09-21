 import React, { Component } from 'react';
import { Container, Header, Content, Button, List, ListItem, Text } from 'native-base';
import { StyleSheet, View} from 'react-native';
import ReadMessageScreen from './ReadMessageScreen';


var lektApi = "http://yousefmohsen.dk:3000";
export default class InboxScreen extends Component {
    constructor(props) {
        super(props);


      }

  render() {

    return (
      <View>
      <Container>
        <Header />
        <Content>
        <Button bordered onPress={returnList} >
        <Text>Opdatere</Text>
      </Button>

      <List>
      <ListItem button={true} >
        <Text>Simon Mignolet</Text>
        <ReadMessageComp/>
      </ListItem>
      <ListItem>
        <Text>Nathaniel Clyne</Text>
      </ListItem>
      <ListItem>
        <Text>Dejan Lovren</Text>
      </ListItem>
    </List>

        </Content>
      </Container>
      </View>
    );
  }
}
function returnList(aList){
    return

      };

function request(){
    fetch(lektApi)
    .then(function(response){
      return response.text()
    }).then(function(text){
      alert(text);
    });
  }
