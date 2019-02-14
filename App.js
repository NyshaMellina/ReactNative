import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,Image,Button,TouchableOpacity,KeyboardAvoidingView,TextInput} from 'react-native';
import Login from './Components/Login.js'
import AppLocalNotify from './Components/AppLocalNotify'

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {
  
  render(){
    return(
        <Login />
       // <AppLocalNotify />
    );
}

}




// import React from "react";
// import { StyleSheet, Text, View } from "react-native";

// import { createStackNavigator,createAppContainer } from "react-navigation";

// import HomeScreen from './home';
// import ProfileScreen from './profile';

// const Navigation = createStackNavigator({
//   Home: HomeScreen,
//   Profile: ProfileScreen,
// });
// const Nav = createAppContainer(Navigation)
// export default class App extends React.Component {
//   render() {
//     return <Nav />;
//   }
// }
