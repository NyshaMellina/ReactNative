import { createStackNavigator,createAppContainer } from 'react-navigation'
import Home from '../CurrentServiced'
import Setting from '../ReassignRequest'
import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,Image,Button,TouchableOpacity,KeyboardAvoidingView,TextInput} from 'react-native';


type Props = {};
export default class StackNav extends Component<Props> {
  render(){
    return(
        <MyStack />
    );
}

}
StackHome = createStackNavigator({

    Screen1:{
        screen:Home,
        navigationOptions: () => ({
            title:'Screen1',
            headerTintColor:'white',
            headerStyle:{
                backgroundColor:'red'
            }
        })
    },
    Screen2:{
        screen:Setting
    }
});

const MyStack = createAppContainer(StackHome)