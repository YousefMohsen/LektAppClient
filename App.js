import React from 'react';
import { StyleSheet, Text, View, Button} from 'react-native';
import InboxComp from './inboxPage/InboxComp';
import { StackNavigator } from 'react-navigation';
import SimpleApp from './NavigationTestHomeS'

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>

<SimpleApp/>
      </View>
    );
  }
}


function request(){
  fetch(lektApi)
  .then(function(response){
    return response.text()
  }).then(function(text){
    alert(text);
  });
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  
  },
});
