import React from 'react';
import { StyleSheet, Text, View, Button} from 'react-native';

import StackNav from './navigation/router'
import { StackNavigator } from 'react-navigation';


export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>

<StackNav/>
      </View>
    );
  }
}




const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',

  },
});
