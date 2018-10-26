/**
* Sample React Native App
* https://github.com/facebook/react-native
*
* @format
* @flow
*/

import React, {Component, PureComponent} from 'react';
import {Actions, Scene, Router} from 'react-native-router-flux';
import {Platform, StyleSheet, Text, View, TextInput} from 'react-native';
import {generatedUUID} from './src/utils'

// const scenes = Actions.create(
//   <Scene key="root">
//     <Scene key="login" component={Login} title="Login"/>
//     <Scene key="register" component={Register} title="Register"/>
//     <Scene key="home" component={Home}/>
//   </Scene>
// );




export default class App extends PureComponent {
  
  
  render() {
    return (
      <View style={styles.container}>
      <TextInput
      style={{backgroundColor:'white', marginTop: 16, marginStart: 8, marginLeft: 8, height: 40, borderRadius: 20, color: 'black'}}
      placeholder="Email"
      placeholderTextColor="rgba(255,255,255)"
      returnKeyType="next"
      autoCapitalize="none"
      underlineColorAndroid="transparent"
      onChangeText={text => this.generatedValue(text)}
      selectTextOnFocus={!isAuthenticating}
      selectionColor="rgba(255,255,255)"
      />
      </View>
      );
    }
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#F5FCFF',
    },
    
  });
  