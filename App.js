import React from 'react';
import { StyleSheet, Text, View, Button} from 'react-native';

var lektApi = "http://138.68.93.230:3000";

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Button title="tryk her" onPress={request}/>
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
    alignItems: 'center',
    justifyContent: 'center',
  },
});
