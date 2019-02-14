/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,Image,Button,TouchableOpacity,KeyboardAvoidingView,TextInput,Dimensions,SafeAreaView,ScrollView} from 'react-native';
import { createDrawerNavigator,createStackNavigator,createAppContainer,DrawerItems,createBottomTabNavigator } from "react-navigation";
import HomeScreen from './CurrentServiced'

import SettingScreen from './ReassignRequest';

import Lists from './NewPickUp';
import Headers from './Map';
import { Container, Body,Content,Icon,Header } from 'native-base';
import DrawerImage from './DrawerImage'

//import Camera from 'react-native-camera'
import ImagePicker from 'react-native-image-picker'

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});
const options = {
  title:"myApp",
  takePhotoButtonTitle:'Take photo with your camera',
  choosePhotoFromLibraryButtonTitle:'choose Photo from Library',

}


class Drawer extends Component {
  constructor(props){
    super(props);
    this.state={
      avatarSource: require('../images/logo.png')
    }
    

  }

  myFun = () => {
    ImagePicker.showImagePicker(options, (response) => {
     
      console.log('Response' + response)
      if (response.didCancel) {
        console.log("User cnacel Image Picker")
      }
      else if (response.error) {
        console.log("ImagePickererror" + error)
      }
      else {
        let source = { uri: response.uri };
        //source = {uri:require('../images/logo.png')}
        alert(source)
        this.setState({
          avatarSource: source
        })
      }
    });

  }
  componentDidUpdate(){
    this.myFun
  }


  render(){
    return(
      
      <AppCon />
    );
}

}
myFun = () =>{
  ImagePicker.showImagePicker(options,(response) => {
    alert("ggggg"+response.uri)
      console.log('Response'+response)
      if(response.didCancel){
        console.log("User cnacel Image Picker")
      }
      else if(response.error){
        console.log("ImagePickererror" +error)
      }
      else {
        let source = { uri:response.uri};
     
        this.State({
          avatarSource:source
        })
      }
  });

}


const CustomDrawerContentComponent = (props) => (
  

  <SafeAreaView style={{flex:1}}>
    <View style={{height:150,backgroundColor:'white',alignItems:'center',justifyContent:'center'}}>
    

    
           
        <TouchableOpacity style = {{height:150,width:150,borderRadius:60}} onPress={new Drawer().myFun}>
        <Image source={new Drawer().state.avatarSource}  style = {{height:150,width:150,borderRadius:60}} >
        </Image>
        </TouchableOpacity>





    </View>
    <ScrollView>

      <DrawerItems{...props}/>
    </ScrollView>


  </SafeAreaView>
 
)

const MyApp = createDrawerNavigator({
    List: {
      screen: Lists,
    },
    Map: {
      screen: Headers,
    },
    
  },
    {
      contentComponent:CustomDrawerContentComponent,
      contentOptions:{
        activeTintColor:'orange'
      }
    }
  );

  var MainScreenNavigator = createBottomTabNavigator({
    Tab1:{screen:Lists},
    Tab2:{screen:Headers}
},
{
tabBarPosition:'top',
swipeEnabled:true,
tabBarOptions:{
  activeBackgroundColor:'darkgreen',
  activeTintColor:'#fff',
  inactiveBackgroundColor:'orange',
  labelStyle:{
    fontSize:16,
    padding:0
  }
}

}
);
MainScreenNavigator.navigationOptions = {
  title:"Tab Example"
};
  
const AppCon = createAppContainer(MainScreenNavigator,MyApp)

export default Drawer;

const styles = StyleSheet.create({
  drawerImage:{
    height:50,
    width:50,
    borderRadius:75
  },
  views:{
    flex:1,
    justifyContent:'flex-end',
    alignItems:'center'
  },
  capture:{
    flex:0,
    backgroundColor:'steelblue',
    borderRadius:10,
    color:'red',
    padding:15,
    margin:45
  }
})