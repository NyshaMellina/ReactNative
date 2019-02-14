import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,Image,Button,TouchableOpacity,KeyboardAvoidingView,TextInput} from 'react-native';
import {createSwitchNavigator,createAppContainer,createDrawerNavigator,createStackNavigator,SafeAreaView} from 'react-navigation';
const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});
import Bin from './BinCordinates'
import Reject from './RejectMain'
import HandleBack from '../back'
type Props = {};
//  class Page extends Component<Props> {
//   render(){
//     return(
//        <App />
//     );
// }

// }
export default class TestPage extends Component<Props> {
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
              <View style={styles.backgroundContainer}>
                  <Image source={require('../images/maintainenecebackgroundImage.png')} style={styles.background} />
              </View>
              <View style={styles.mainView}>
                  <View style={styles.imageCenter}>
                      <Image source={require('../images/ticketId.png')} style={{ height: 45, width: 55 }} />
                  </View>
                  <Text style={styles.textContent}>Ticket ID</Text>
                  <View style={styles.imageCenter}>
                      <Image source={require('../images/typeofRequest.png')} style={{ height: 45, width: 55 }} />
                  </View>
                  <Text style={styles.textContent}>Type Of Reuqest</Text>
                  <View style={styles.imageCenter}>
                      <Image source={require('../images/satusMain.png')} style={{ height: 45, width: 55 }} />
                  </View>
                  <Text style={styles.textContent}>Status</Text>
                  <View style={styles.imageCenter}>
                      <Image source={require('../images/binimage.png')} style={{ height: 45, width: 55 }} />
                  </View>
                  <Text style={styles.textContent}>Bin ID</Text>

              </View>


              <View style={styles.underView}>
                  <TouchableOpacity style={styles.ButtonView} onPress={() => this.props.navigation.push('Bin')}>
                      <Text style={styles.textView1}>Accept</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.ButtonView} onPress={() => this.props.navigation.push('Reject')}>
                      <Text style={styles.textView1}>Reject</Text>
                  </TouchableOpacity>

              </View>

          </View>
          </HandleBack>
      );
  }
  
  }
//   const Switch = createSwitchNavigator({
//       TestPage:{screen:TestPage},
//       Bin:{screen:Bin},
//       Reject:{screen:Reject}

//   })
//   const App = createAppContainer(Switch)
  const styles = StyleSheet.create({
      container:{
          flex:1,
          backgroundColor:'white',
          justifyContent:'space-around'
      },
      backgroundContainer:{
        position:'absolute',
        top:0,
        bottom:0,
        left:0,
        right:0,
       },
       background:{
           flex:1,
           justifyContent:'center',
           alignItems:'center',
           width:null,
           height:null,
           backgroundColor:'rgba(0,0,0,0)',
           resizeMode:'cover',
       },
      mainView:{
          flex:1,
          flexDirection:'column',
          backgroundColor:'rgba(0,0,0,0)',
          justifyContent:'space-around',
          margin:10

      },
      textContent:{
        height:35,
        //width:'100%',
        //marginBottom:10,
        color:'black',
        backgroundColor:'rgba(255, 255, 255, 0.1)',
        textAlign:'center',
        textAlignVertical:'center',
        borderRadius:5,
        fontWeight:'bold'
    },
    ButtonView:{
        height:50,
        width:130,
        //marginLeft:100,
        //marginRight:100,
        backgroundColor:'rgba(255, 255, 255, 0.1)',
        textAlign:'center',
        textAlignVertical:'center',
        borderWidth:2,
        borderColor:'white',
        borderRadius:5,
        fontWeight:'bold',
        fontSize:16

    },
    textView1:{
        height:40,
        fontWeight:'bold',
        color:'black',
        textAlign:'center',
        width:'100%',
        backgroundColor:'rgba(255, 255, 255, 0.1)',
        textAlignVertical:'center',
        fontSize:16
    },
    underView:{
        height:60,
        flexDirection:'row',
        margin:10,
        backgroundColor:'rgba(0,0,0,0)',
        justifyContent:'space-around'
    },
    imageCenter:{
        height:50,
        margin:10,
        justifyContent:'center',
        alignItems:'center'
    }
  })