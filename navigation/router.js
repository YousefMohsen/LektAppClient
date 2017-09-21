import React from 'react';
import {
  AppRegistry,
  View,
StyleSheet,
Image } from 'react-native';
import { StackNavigator } from 'react-navigation';
import {observer} from 'mobx-react';

import MessageStore from '../data/MessageStore';
//let msgList = [{"title":"Lektier til imorgen","msg":"Læs . s. 10 - 277 i Java Software Solutions Eighth edition","sender":"Leo Messi","date":"2017-10-02T12:02:00.000Z", "iconUrl":"https://www.fifaindex.com/static/FIFA14/images/players/128/158023.png"},{"title":"Lektier til på tirsdag","msg":"Læs bogen Sapiens - en kort historie om menneskeheden ","sender":"Thiago","date":"2017-10-13T12:02:00.000Z" ,"iconUrl":"https://www.fifaindex.com/static/FIFA14/images/players/128/189509.png"},{"title":"Aflyst time","msg":"Barcelona spiller imorgen og timen er defor selvfølgelig aflyst","sender":"Xavi","date":"2017-10-02T14:02:00.000Z", "iconUrl":"https://www.fifaindex.com/static/FIFA14/images/players/128/10535.png"},{"title":"Vigtigt!","msg":"Forza Lundtofte Boldklub","sender":"Claus Abildgaard","date":"2017-10-02T12:02:00.000Z", "iconUrl":""}];

//read msg
import { Container, Header, Content, Card, CardItem,Button, Thumbnail, Text, Icon, Left,Right, Body,List,ListItem  } from 'native-base';
//read msg end
@observer
class InboxScreen extends React.Component {
  constructor(){
super();
//this.props.msgList = MessageStore.msgList;
    /* MessageStore.request();
    
    this.props.msgList = MessageStore.msgList;
    alert(this.props.msgList.length);
    */
    this.mapInbox = this.mapInbox.bind(this)

  }


   mapInbox (alist){
    const { navigate } = this.props.navigation;
    
return alist.map((msg)=>

    <ListItem avatar onPress={() => navigate('Message', msg)}>
      <Left>

        <Thumbnail source={{ uri: msg.iconUrl}} />
      </Left>
      <Body>
      <Text note>{msg.sender}</Text>
      
        <Text>{msg.title}</Text>
        <Text note>{msg.msg.substring(0, 30)}. .</Text>
      </Body>
      <Right>
        <Text note>{msg.date.substring(8,10)}/{msg.date.substring(5,7)}</Text>
      </Right>
    </ListItem>


/*
<Button
transparent textStyle={{color: '#87838B'}}
onPress={() => navigate('Message', msg)}><Text>{msg.title}</Text></Button>);
   */)
  }
  render() {
let mappedList = this.mapInbox(MessageStore.msgList);
   

return (
  <Container>
  <Content>
  
  <Button onPress={MessageStore.changeList}><Text>Update</Text></Button>
    <List>{mappedList}</List>
    </Content>
    </Container>)
   
  }
}

class ReadMessageScreen extends React.Component {

    render() {
      const {title, msg, sender, date, iconUrl} = this.props.navigation.state.params;
      
      return (
        <Container>

        <Content>
          <Card>
            <CardItem header>
              <Text>{title}</Text>
            </CardItem>
            <CardItem>
              <Body>
                <Text>
            {msg}

                </Text>
              </Body>
            </CardItem>
            <CardItem footer>
              <Text>Fra: {sender}</Text>
              <Text note>  {date.substring(11,16)}</Text> 
              <Text note>  {date.substring(8,10)}/{date.substring(5,7)}</Text> 
       
              
            </CardItem>
         </Card>
        </Content>
      </Container>
      );
    }
  }


  export default  StackNav = StackNavigator({
    Inbox: { screen: InboxScreen,
       navigationOptions: {
        title: 'Beskeder'
      } },
    Message: { screen: ReadMessageScreen,
      navigationOptions: ({navigation}) => ({
        title: `${navigation.state.params.title}`,
      }) },
  });
