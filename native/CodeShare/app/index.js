// app/index.js

//import React, { AppRegistry, Component, View, Text, StyleSheet,ListView, Platform } from 'react-native';
import Tabs from 'react-native-tabs';
import Button from './components/button';

var React = require('react-native');
var {
  Component,
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  TextInput,
  ListView,
  Platform
} = React;

var Firebase = require('firebase');
var ReactFireMixin = require('reactfire');

export default class CodeShare extends Component {

  mixins(ReactFireMixin) {}

  constructor(props) {
    super(props);

    this.awareUsersNowRef = new Firebase("https://project-2569167554904200855.firebaseio.com/awareUsersNow");

    this.state = {
      page: 'Touch to see how many people are Aware!'
    };
  }

  componentWillMount() {
    //var awareUsersNowRef = new Firebase("https://project-2569167554904200855.firebaseio.com/awareUsersNow");

    //this.bindAsObject(awareUsersNowRef, "awareUsersNowCount");
    this.awareUsersNowRef.on('value', function(snapshot) {
      var count = snapshot.val();

      this.setState({ page:  count + ' people are Aware with you!'});
    }.bind(this));

    /*this.setState({
      page: 'mounted the horse' + this.awareUsersNowCount.value
    })*/
  }

  listenForAwareUsers(awareUsersNowRef) {
      /*awareUsersNowRef.on('value', (snap) => {
        // get children as an array
        var users = snap;

        this.setState({
          dataSource: this.state.dataSource.cloneWithRows(items)
        });
      });*/
    }

  /*_renderItem(item) {
    return (
      <ListItem item="{item}" onpress="{()" ==""> {}} />
    );
  }*/

  /*render() {
    return (
      <View style="{styles.container}">

        <StatusBar title="Grocery List">

        <ListView datasource="{this.state.dataSource}" renderrow="{this._renderItem.bind(this)}" style="{styles.listview}/">

        <ActionButton title="Add" onpress="{()" ==""> {}} />

      </View>
    );
  }*/

  render() {
      const { page } = this.state;
      const tabbarStyles = [styles.tabbar];
      if (Platform.OS === 'android') tabbarStyles.push(styles.androidTabbar);

      return (
        <View style={styles.container}>

          <Tabs
            selected={page}
            style={tabbarStyles}
            selectedStyle={{color:'red'}} onSelect={el=>this.setState({page:el.props.name})}>

            <Text
              dataSource={page}
              name="first">First
            </Text>

            <Text name="second">Second</Text>
            <Text name="third">Third</Text>
          </Tabs>

          <Text>CodeSharing App</Text>
          <Text>{page}</Text>
          <Button text="Click Me!" />
        </View>
      )
    }
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
    },
    tabbar: {
      backgroundColor:'white',
      height: 64,
      borderTopColor: 'red',
      borderTopWidth: 2
    },
    androidTabbar: {
    top: 0,
    borderBottomColor: 'red',
    borderBottomWidth: 2,
    borderTopColor: 0
  }
  });
