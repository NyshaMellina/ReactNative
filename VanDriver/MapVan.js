/**
 * @flow
 */

import React,{Component} from 'react';
import { Platform, ScrollView, StatusBar,Button,StyleSheet,View,TouchableOpacity,Image,Text } from 'react-native';
import MapView,{PROVIDER_GOOGLE} from 'react-native-maps';
import { Toast, Icon } from 'native-base';
import {createSwitchNavigator,createAppContainer,createDrawerNavigator,createStackNavigator,SafeAreaView} from 'react-navigation';
//import NewList from './NewDriver'
//import {Icon,Button,Container,Header,Content,Left} from 'native-base'
import Vehicle from './VehicleRegPage'
import Reject from './Reject'
import HandleBack from  '../back'



type Props = {};
// export default class Map extends Component<Props> {
//   render(){
//     return(
//         <AppContainer />
//     );
// }

// }

export default class Header extends Component{
//   static navigationOptions = ({ navigation }) => {
//     // navOptions = navigation;
//     // const { params = {} } = navigation.state;
//     return{
//         headerLeft:
//             <TouchableOpacity 
//             style={{paddingLeft:10}} onPress={() => navigation.openDrawer()}>
//                 <Icon
//                     name='menu'
//                     size={30}
                    
//                 //color='white'
//                 />
//             </TouchableOpacity> ,
//         headerRight:
//         <TouchableOpacity style={{paddingRight:10}}>
//          <Icon
//                     name='settings'
//                     size={30}
                    
//                 //color='white'
//                 />
        
//          </TouchableOpacity> ,
//          title:'List'
            
        
//     }
// }
state = {
  editing:false,
};
onBack = () => {
  if (this.state.editing) {
    Alert.alert(
      "You're still editing!",
      "Are you sure you want to go home with your edits not saved?",
      [
        { text: "Keep Editing", onPress: () => {}, style: "cancel" },
        { text: "Go Home", onPress: () => this.props.navigation.goBack() },
      ],
      { cancelable: false },
    );
    return true;
  }

return false;
}

render(){
  const { editing } = this.state;
    //navOptions = navigation;
    //const { params = {} } = this.navOptions.state
    return(
      <HandleBack onBack={this.onBack}>  
      <View style={styles.container}>
       <View style={styles.underView}>
           <MapView style={styles.map}
          provider = {PROVIDER_GOOGLE}
          style = {styles.map}
          region={{
             latitude: 37.78825,
             longitude: -122.4324,
             latitudeDelta: 0.015,
             longitudeDelta: 0.0121,

          }}
          >

          
        </MapView>
        </View>
        <View style={styles.mapViews}>
         <TouchableOpacity style = {styles.mapButton} onPress={() => this.props.navigation.push('VehicleReg')}>
           <Text style={styles.textStyle}>ACCEPT</Text>
         </TouchableOpacity>

         <TouchableOpacity style = {styles.mapButton1}  onPress={() => this.props.navigation.push('Reject')}>
           <Text style={styles.textStyle}>REJECT</Text>
         </TouchableOpacity>
            </View>
        </View>
        </HandleBack>
         
       
    );
  }
}

// const Appcontent = createSwitchNavigator({
// Header:{screen:Header},
// Vehicle:{screen:Vehicle},
// Reject:{screen:Reject}
// })
// const AppContainer = createAppContainer(Appcontent)

const styles = StyleSheet.create({
  container:{
    flex: 1,
   
    backgroundColor: '#F5FCFF',
    flexDirection:'column'
  },
  underView:{
    flex:0.9,
    backgroundColor:'rgba(0,0,0,0)'

  },
  map:{
    
    ...StyleSheet.absoluteFillObject,
    
    
  },
  mapViews:{
    flex:0.1,
    height:50,
    margin:8,
    justifyContent:'space-between',
    //alignItems:'center',
    backgroundColor:'rgba(0,0,0,0)',
    flexDirection:'row'
    
  },
  mapButton:{
    height:50,
    width:'50%',
    backgroundColor:'#3f51b5',
    marginBottom:5,
    alignItems:'center',
    //marginRight:5
  },
  mapButton1:{
    height:50,
    width:'50%',
    backgroundColor:'#3f51b5',
    marginBottom:5,
    marginLeft:5,
    //marginRight:15,
    alignItems:'center',
    //paddingLeft:5

    //justifyContent:'center',
    
  },
  textStyle:{
    //paddingRight:5,
    height:45,
    //width:'100%',
    color:'white',
    fontWeight:'bold',
    //backgroundColor:'#3f51b5',
    textAlign:'center',
    justifyContent:'center',
    alignItems:'center',
    fontSize:16,
    textAlignVertical:'center'
    // alignItems:'center',
    // fontSize:18 ,
    // color:'white',
    // fontWeight:'bold',
    // textAlign:'center',
    // alignItems:'center',
    // textAlignVertical:'center',
    

  }
})