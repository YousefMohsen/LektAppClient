import React from 'react';
import {
  AppRegistry,
  View,
StyleSheet,
Image } from 'react-native';
import { StackNavigator } from 'react-navigation';

let msgList = [{"title":"Lektier til imorgen","msg":"Til imorgen skal i spise 4 flødeboller fra netto samt 1/2 liter mælk","sender":"Leo Messi","date":"2017-10-02T12:02:00.000Z"},{"title":"Lektier til på tirsdag","msg":"Læs bogen Sapien - en kort historie om menneskeheden ","sender":"Thiago","date":"2017-10-13T12:02:00.000Z"},{"title":"Aflyst time","msg":"Barcelona spiller imorgen og timen er defor selvfølgelig aflyst","sender":"Xavi","date":"2017-10-02T14:02:00.000Z"}];

//read msg
import { Container, Header, Content, Card, CardItem,Button, Thumbnail, Text, Icon, Left, Body } from 'native-base';
//read msg end
class InboxScreen extends React.Component {

  constructor(){
    super();
    this.mapInbox = this.mapInbox.bind(this)
    

  }


   mapInbox (alist){
    const { navigate } = this.props.navigation;
    
return alist.map((msg)=> 
<Button
transparent textStyle={{color: '#87838B'}}
onPress={() => navigate('Message', msg)}><Text>{msg.title}</Text></Button>);

  }
  render() {
let mappedList = this.mapInbox(msgList);
   

return <View>
   
   
    {mappedList}
    </View>
  }
}

class ReadMessageScreen extends React.Component {

    render() {
      const {title, msg, sender, date } = this.props.navigation.state.params;
      
      return (
        <View>
<Container>
<Header />
<Content>
  <Card style={{flex: 0}}>
    <CardItem>
      <Left>
        <Thumbnail source={{uri: 'Image URL'}} />
        <Body>
          <Text>NativeBase</Text>
          <Text note>April 15, 2016</Text>
        </Body>
      </Left>
    </CardItem>
    <CardItem>
      <Body>
        <Image source={{uri: 'Image URL'}} style={{height: 200, width: 200, flex: 1}}/>
        <Text>
          //Your text here
        </Text>
      </Body>
    </CardItem>
    <CardItem>
      <Left>
        <Button transparent textStyle={{color: '#87838B'}}>
          <Icon name="logo-github" />
          <Text>1,926 stars</Text>
        </Button>
      </Left>
    </CardItem>
  </Card>
</Content>
</Container>
        </View>
      );
    }
  }


  export default  StackNav = StackNavigator({
    Inbox: { screen: InboxScreen,
       navigationOptions: {
        title: 'Home'
      } },
    Message: { screen: ReadMessageScreen,
      navigationOptions: ({navigation}) => ({
        title: `${navigation.state.params.title}`,
      }) },
  });
/*
export const StackNav = StackNavigator({
  inbox: { screen: InboxScreen, 
 navigationOptions: {
      title: 'Home'
    }
},
  Message: {screen: ReadMessageScreen,
    navigationOptions: {
      title: 'Message'
    }
  
  },


});*/


