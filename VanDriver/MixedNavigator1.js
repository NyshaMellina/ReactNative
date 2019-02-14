import { createStackNavigator,createAppContainer,createBottomTabNavigator,createDrawerNavigator } from 'react-navigation'
import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,Image,Button,TouchableOpacity,KeyboardAvoidingView,TextInput} from 'react-native';
import IconFontAwesome from 'react-native-vector-icons/dist/FontAwesome';
import IconMaterialIcons  from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons'
import { Drawer } from 'native-base';
import ProfileScreen from './ProfileScreenVan'
import NewPickUp from './NewAssignRequest'
import HistoryRequest from './HisoryRequestVan'
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
    //              title:'New Assign Request',
                    
    //     }
    // }
      
    }

},{
    defaultNavigationOptions:{
        header:null
    }
})
const HeaderStack = createStackNavigator({
    Screen2:{
        screen:HistoryRequest,
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
    }
})



const StackHome = createBottomTabNavigator({
    NewRequest:{
        screen:HomeStack,
        navigationOptions: () => ({
           
            tabBarIcon:({tintcolor}) => {
                return (
                    <Image source={require('../Components/Navigation/icon/Test.png')}  />
                    
            );
            }
        })
    },
    History:{
        screen:HeaderStack,
        navigationOptions: () => ({
            tabBarIcon:({tintcolor}) => {
                return (
                    <Image source={require('../Components/Navigation/icon/current_Serviced.png')}  />
                    
            );
            }
         
        })
    },
   
    
  
    
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
