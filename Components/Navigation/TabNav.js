import { createStackNavigator,createAppContainer,createBottomTabNavigator } from 'react-navigation'
import Home from '../CurrentServiced'
import Setting from '../ReassignRequest'
import History from '../HisoryRequest'
import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,Image,Button,TouchableOpacity,KeyboardAvoidingView,TextInput} from 'react-native';
import IconFontAwesome from 'react-native-vector-icons/dist/FontAwesome';
import IconMaterialIcons  from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons'
type Props = {};
export default class StackNav extends Component<Props> {
  render(){
    return(
        <MyStack />
    );
}

}
StackHome = createBottomTabNavigator({

    Screen1:{
        screen:Home,
        navigationOptions: () => ({
            tabBarIcon:({tintcolor}) => {
                return (
                    <IconFontAwesome 
                        name='home'
                        size={26}
                        color={tintcolor}
                        />
            );
            }
         

            // title:'Screen1',
            // headerTintColor:'white',
            // headerStyle:{
            //     backgroundColor:'red'
            // }
        })
    },
    Screen2:{
        screen:Setting,
       
        navigationOptions: () => ({
            tabBarIcon:({tintcolor}) => {
                return (
                    <IconMaterialIcons 
                        name='favorite-border'
                        size={26}
                        color={tintcolor}
                        />
            );
            }
         
        })
    },
    Screen3:{
        screen:History,
    
        navigationOptions: () => ({
            tabBarIcon:({tintcolor}) => {
                return (
                    <Ionicons 
                        name='ios-contacts-outline'
                        size={26}
                        color={tintcolor}
                        />
            );
            }
         
        })
    },
    
},
{
    tabBarOptions:{
        showIcon:true
    }
}

);

const MyStack = createAppContainer(StackHome)