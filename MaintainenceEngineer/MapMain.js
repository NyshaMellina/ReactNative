/**
 * @flow
 */

import React,{Component} from 'react';
import { Platform, ScrollView, StatusBar,Button,StyleSheet,View,TouchableOpacity,Image,Text } from 'react-native';
import MapView,{PROVIDER_GOOGLE} from 'react-native-maps';
import { Toast, Icon } from 'native-base';
import {createSwitchNavigator,createAppContainer,createDrawerNavigator,createStackNavigator,SafeAreaView} from 'react-navigation';
import feedback from './feedBackFormMain'
import HandleBack from '../back'
//import {Icon,Button,Container,Header,Content,Left} from 'native-base'



type Props = {};
//  class Map extends Component<Props> {
//   render(){
//     return(
//         <AppContainer />
//     );
// }

// }

export default class Header extends Component{

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
         <TouchableOpacity style = {styles.mapButton} onPress={() => this.props.navigation.push('Feedback')}>
           <Text style={styles.textMain}>TICKET COMPLETE</Text>
         </TouchableOpacity>
            </View>
        </View>
        </HandleBack>
         
       
    );
  }
}

// const Appcontent = createSwitchNavigator({
// Header:{screen:Header},
// feedback:{screen:feedback}
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
    margin:10,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'rgba(0,0,0,0)',
    
  },
  mapButton:{
    height:50,
    width:'100%',
    color:'white',
    fontWeight:'bold',
    backgroundColor:'#3f51b5',
    textAlign:'center',
    justifyContent:'center',
    alignItems:'center',
    fontSize:18 ,
    textAlignVertical:'center'
  },
  textMain:{
    fontSize:16,
    fontWeight:'bold',
    color:'white'
  }
})