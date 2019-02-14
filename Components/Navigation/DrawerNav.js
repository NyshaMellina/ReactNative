import { createDrawerNavigator,createAppContainer,createStackNavigator } from 'react-navigation'
import Home from '../CurrentServiced'
import Setting from '../ReassignRequest'
import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,Image,Button,TouchableOpacity,KeyboardAvoidingView,TextInput} from 'react-native';



type Props = {};
export default class DrawerNav extends Component<Props> {
  render(){
    return(
        <MyDrawer />
    );
}

}

const StackHome = createStackNavigator({

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
    
});
const StackSetting = createStackNavigator({

    Screen1:{
        screen:Setting,
        navigationOptions: () => ({
            title:'Screen2',
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


Drawers = createDrawerNavigator({
    Screen1:{
        screen:StackHome,
        
    },
    Screen2:{
        screen:StackSetting
    }
});
const MyDrawer = createAppContainer(Drawers)
