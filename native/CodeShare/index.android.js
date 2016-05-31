import React, { AppRegistry } from 'react-native';
import CodeShare from './app';

AppRegistry.registerComponent('CodeShare', () => CodeShare);


/*'use strict';

var React = require('react-native');
var Firebase = require('firebase');
var ReactFireMixin = require('reactfire');
var {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableHighlight,
} = React;

var CodeShare = React.createClass({
  mixins: [ReactFireMixin],
  getInitialState: function() {
    return {
      items: []
    };
  },
  componentWillMount: function() {
    this.ref = new Firebase('https://nanochat.firebaseio.com/chat');
    this.bindAsArray(this.ref, 'items');
  },
  _onPressButton: function() {
    this.ref.push({ name: 'puf', message: this.state.text });
  },
  render: function() {
    var createItem = function(item, index) {
      return <Text>{item.name}: {item.message}</Text>
    };
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>
        {this.state.items.map(createItem)}
        <View style={styles.horizontal}>
          <TextInput onChangeText={(text) =>
              this.setState({ text: text})} value={this.state.text} />
          <TouchableHighlight onPress={this._onPressButton}>
            <Text>Send</Text>
          </TouchableHighlight>
        </View>
      </View>
    );
  }
});

var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('CodeShare', () => CodeShare);
*/
