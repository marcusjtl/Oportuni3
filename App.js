import React, {Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';

import aws_exports from './aws-exports';
import { withAuthenticator } from 'aws-amplify-react-native';
import Amplify from 'aws-amplify';

Amplify.configure(aws_exports);


class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
      </View>
    );
  }
}

export default withAuthenticator(App);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
