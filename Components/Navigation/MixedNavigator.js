import { createStackNavigator,createAppContainer,createBottomTabNavigator,createDrawerNavigator } from 'react-navigation'
import CurrentServiced from '../CurrentServiced'
import ReassignRequest from '../ReassignRequest'
import History from '../HisoryRequest'
import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,Image,Button,TouchableOpacity,KeyboardAvoidingView,TextInput} from 'react-native';
import IconFontAwesome from 'react-native-vector-icons/dist/FontAwesome';
import IconMaterialIcons  from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons'
import { Drawer } from 'native-base';
import ProfileScreen from '../ProfileScreen'
import NewPickUp from '../NewPickUp'
import Map from '../Map'
import NewListView from '../NewDriver'
import {Icon} from 'native-base'




export default class MixedNavigator extends Component<Props>{
    render(){
        return(
            <Mixed />
        )
    }
}
const HomeStack = createStackNavigator({
    Screen1:{
        screen:NewPickUp,
       
    //     navigationOptions:({navigation}) =>{
    //         const {navigate} = navigation
    //         return{
    //             headerLeft:
    //                 <TouchableOpacity 
    //                 style={{paddingLeft:10}} onPress={() =>navigation.openDrawer()}>
    //                     <Icon
    //                         name='menu'
    //                         size={30}
                            
    //                     //color='white'
    //                     />
    //                 </TouchableOpacity> ,
    //             headerRight:
    //             <TouchableOpacity style={{paddingRight:10}}>
    //              <Icon
    //                         name='settings'
    //                         size={30}
                            
    //                     //color='white'
    //                     />
                
    //              </TouchableOpacity> ,
    //              title:'New PickUp Request',
                    
    //     }
    // }
        //screen:NewListView,
        // navigationOptions: () => ({
        //     title: 'Homess',
        //     headerTintColor: 'white',
        //     headerStyle:{
        //       backgroundColor: '#4f3403',
        //       elevation: 0,
        //       showdowOpacity: 0
        //     },
        //     tabBarIcon: ({ tintColor }) => {
        //       return (
        //         <IconFontAwesome 
        //           name='home'
        //           size={26}
        //           color={tintColor}
        //         />
        //       );
        //     }
        //   })
    }

},
    {
        defaultNavigationOptions: {
            header: null
        }
})
const HeaderStack = createStackNavigator({
    Screen2:{
        screen:CurrentServiced,
        navigationOptions:({navigation}) =>{
            const {navigate} = navigation
            return{
                headerLeft:
                    <TouchableOpacity 
                    style={{paddingLeft:10}} onPress={() =>navigation.openDrawer()}>
                        <Icon
                            name='menu'
                            size={30}
                            
                        //color='white'
                        />
                    </TouchableOpacity> ,
                headerRight:
                <TouchableOpacity style={{paddingRight:10}}>
                 <Icon
                            name='settings'
                            size={30}
                            
                        //color='white'
                        />
                
                 </TouchableOpacity> ,
                 title:'Current Request',
                    
        }
    }
    }
})
const SettingStack = createStackNavigator({
    Screen3:{
        screen:ReassignRequest,
        navigationOptions:({navigation}) =>{
            const {navigate} = navigation
            return{
                headerLeft:
                    <TouchableOpacity 
                    style={{paddingLeft:10}} onPress={() =>navigation.openDrawer()}>
                        <Icon
                            name='menu'
                            size={30}
                            
                        //color='white'
                        />
                    </TouchableOpacity> ,
                headerRight:
                <TouchableOpacity style={{paddingRight:10}}>
                 <Icon
                            name='settings'
                            size={30}
                            
                        //color='white'
                        />
                
                 </TouchableOpacity> ,
                 title:'Reassign Request',
                    
        }
    }
    }

})
const HistoryStack = createStackNavigator({

    Screen4:{
        screen:History,
        navigationOptions:({navigation}) =>{
            const {navigate} = navigation
            return{
                headerLeft:
                    <TouchableOpacity 
                    style={{paddingLeft:10}} onPress={() =>navigation.openDrawer()}>
                        <Icon
                            name='menu'
                            size={30}
                            
                        //color='white'
                        />
                    </TouchableOpacity> ,
                headerRight:
                <TouchableOpacity style={{paddingRight:10}}>
                 <Icon
                            name='settings'
                            size={30}
                            
                        //color='white'
                        />
                
                 </TouchableOpacity> ,
                 title:'History',
                    
        }
    }
    
        
    },

})

const StackHome = createBottomTabNavigator({
    NewRequest:{
        screen:HomeStack,
        navigationOptions: () => ({
           
            tabBarIcon:({tintcolor}) => {
                return (
                    <Image source={require('./icon/Test.png')}  />
                    
            );
            }
        })
    },
    CurrentRequest:{
        screen:HeaderStack,
        navigationOptions: () => ({
            tabBarIcon:({tintcolor}) => {
                return (
                    <Image source={require('./icon/current_Serviced.png')}  />
                    
            );
            }
         
        })
    },
    Reassign:{
        screen:SettingStack,
        navigationOptions: () => ({
            tabBarIcon:({tintcolor}) => {
                return (
                  
                    <Image source={require('./icon/reassign.png')}  />
                    
            );
            }
         
        })
    },
    History:{
        screen:HistoryStack,
        navigationOptions: () => ({
            tabBarIcon:({tintcolor}) => {
                return (
                    <Image source={require('./icon/history.png')}  />
                    
            );
            }
         
        })
    }

    
  
    
},
{
    tabBarOptions:{
        showIcon:true,
        style:{
            backgroundColor:'#4d4d4d'
        }
    }
}

);

const DrawerTab = createDrawerNavigator({
    Draw:StackHome
},
{
    contentComponent:props => <ProfileScreen {...props} />
}
)

const Mixed = createAppContainer(DrawerTab)
