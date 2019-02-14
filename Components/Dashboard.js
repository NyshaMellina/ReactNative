/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,Image,Button,ScrollView,FlatList,ActivityIndicator,TouchableOpacity,ToastAndroid} from 'react-native';
import { Toast } from 'native-base';
import Lists from './NewPickUp';
import Header from './Map';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { TabNavigator,createBottomTabNavigator, } from 'react-navigation';
import HomeScreen from './CurrentServiced'
import SettingScreen from './ReassignRequest'
import StackNav from './Navigation/StackNav'
import Drawers from './Navigation/DrawerNav'
import TabNav from './Navigation/TabNav'
import MixedNav from './Navigation/MixedNavigator'




type Props = {};
export default class Dashboard extends Component{
  render(){
    return(
        <MixedNav />
    );
}

}

// var MainScreenNavigator = createBottomTabNavigator({
//     Tab1:{screen:HomeScreen},
//     Tab2:{screen:SettingScreen}
// },
// {
// tabBarPosition:'top',
// swipeEnabled:true,
// tabBarOptions:{
//   activeBackgroundColor:'darkgreen',
//   activeTintColor:'#fff',
//   inactiveBackgroundColor:'orange',
//   labelStyle:{
//     fontSize:16,
//     padding:0
//   }
// }

// }
// );

// MainScreenNavigator.navigationOptions = {
//   title:"Tab Example"
// };

// export default MainScreenNavigator;



// const styles = StyleSheet.create({
//  container:{
//   flex:1,
 
//   backgroundColor:'#F5FCFF',
//  },
 

// });



